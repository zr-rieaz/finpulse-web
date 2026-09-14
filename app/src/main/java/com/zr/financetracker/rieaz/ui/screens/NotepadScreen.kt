package com.zr.financetracker.rieaz.ui.screens

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.zr.financetracker.rieaz.data.Note
import com.zr.financetracker.rieaz.data.UserProfile
import com.zr.financetracker.rieaz.ui.FinViewModel
import com.zr.financetracker.rieaz.ui.Locales

fun getNoteCategoryColor(category: String): Color {
    return when (category.lowercase().trim()) {
        "finance" -> Color(0xFF3B82F6)   // Royal Blue
        "budget" -> Color(0xFF10B981)    // Emerald Green
        "shopping" -> Color(0xFFF59E0B)  // Warm Amber
        "personal" -> Color(0xFF8B5CF6)  // Elegant Violet
        "notes" -> Color(0xFF06B6D4)     // Bright Cyan
        else -> Color(0xFF6366F1)        // Indigo
    }
}

@Composable
fun NotepadScreen(
    viewModel: FinViewModel,
    profile: UserProfile,
    modifier: Modifier = Modifier
) {
    val lang = profile.language
    val notesList by viewModel.filteredNotes.collectAsState()
    val allNotes by viewModel.allNotes.collectAsState()
    val searchQuery by viewModel.notesSearchQuery.collectAsState()
    val selectedCategory by viewModel.notesCategoryFilter.collectAsState()

    var showAddEditDialog by remember { mutableStateOf(false) }
    var editingNote by remember { mutableStateOf<Note?>(null) }
    var noteToDelete by remember { mutableStateOf<Note?>(null) }

    val categories = listOf("All", "Finance", "Budget", "Shopping", "Personal", "Notes")

    // Delete Confirmation Dialog
    if (noteToDelete != null) {
        AlertDialog(
            onDismissRequest = { noteToDelete = null },
            title = { Text(Locales.getString("deleteNoteTitle", lang), fontWeight = FontWeight.Bold) },
            text = { Text(Locales.getString("deleteNoteConfirm", lang)) },
            confirmButton = {
                TextButton(
                    onClick = {
                        noteToDelete?.let { viewModel.deleteNote(it.id) }
                        noteToDelete = null
                    },
                    colors = ButtonDefaults.textButtonColors(contentColor = MaterialTheme.colorScheme.error)
                ) {
                    Text(Locales.getString("ok", lang), fontWeight = FontWeight.Bold)
                }
            },
            dismissButton = {
                TextButton(onClick = { noteToDelete = null }) {
                    Text(Locales.getString("cancel", lang), fontWeight = FontWeight.Bold)
                }
            }
        )
    }

    // Add / Edit Note Dialog
    if (showAddEditDialog) {
        AddEditNoteDialog(
            lang = lang,
            initialNote = editingNote,
            onDismiss = {
                showAddEditDialog = false
                editingNote = null
            },
            onSave = { note ->
                viewModel.saveNote(note)
                showAddEditDialog = false
                editingNote = null
            }
        )
    }

    LazyColumn(
        modifier = modifier
            .fillMaxSize()
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(14.dp)
    ) {
        // Header Section with Title & Add Button
        item {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Column {
                    Text(
                        text = Locales.getString("notepadTitle", lang),
                        fontWeight = FontWeight.Bold,
                        style = MaterialTheme.typography.titleMedium,
                        color = MaterialTheme.colorScheme.primary
                    )
                    Text(
                        text = if (lang == "bn") "মোট ${allNotes.size} টি সংরক্ষিত নোট" else "${allNotes.size} notes saved",
                        fontSize = 11.sp,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                }

                Button(
                    onClick = {
                        editingNote = null
                        showAddEditDialog = true
                    },
                    shape = RoundedCornerShape(12.dp),
                    colors = ButtonDefaults.buttonColors(containerColor = MaterialTheme.colorScheme.primary),
                    contentPadding = PaddingValues(horizontal = 14.dp, vertical = 8.dp),
                    modifier = Modifier.testTag("add_note_button")
                ) {
                    Icon(Icons.Default.Add, null, modifier = Modifier.size(16.dp))
                    Spacer(modifier = Modifier.width(4.dp))
                    Text(
                        text = Locales.getString("addNote", lang),
                        fontSize = 12.sp,
                        fontWeight = FontWeight.Bold
                    )
                }
            }
        }

        // Fast Search Bar
        item {
            OutlinedTextField(
                value = searchQuery,
                onValueChange = { viewModel.setNotesSearchQuery(it) },
                modifier = Modifier
                    .fillMaxWidth()
                    .testTag("notes_search_input"),
                placeholder = { Text(Locales.getString("searchNotes", lang), fontSize = 12.sp) },
                leadingIcon = { Icon(Icons.Default.Search, null, modifier = Modifier.size(18.dp)) },
                trailingIcon = {
                    if (searchQuery.isNotEmpty()) {
                        IconButton(onClick = { viewModel.setNotesSearchQuery("") }) {
                            Icon(Icons.Default.Clear, null, modifier = Modifier.size(16.dp))
                        }
                    }
                },
                shape = RoundedCornerShape(12.dp),
                singleLine = true,
                colors = OutlinedTextFieldDefaults.colors(
                    focusedTextColor = MaterialTheme.colorScheme.onSurface,
                    unfocusedTextColor = MaterialTheme.colorScheme.onSurface,
                    focusedContainerColor = MaterialTheme.colorScheme.surface,
                    unfocusedContainerColor = MaterialTheme.colorScheme.surface,
                    cursorColor = Color(0xFF4F46E5),
                    focusedBorderColor = Color(0xFF4F46E5),
                    unfocusedBorderColor = MaterialTheme.colorScheme.outline
                )
            )
        }

        // Category Filter Chips
        item {
            LazyRow(
                horizontalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                items(categories) { cat ->
                    val isSelected = selectedCategory.equals(cat, ignoreCase = true)
                    FilterChip(
                        selected = isSelected,
                        onClick = { viewModel.setNotesCategoryFilter(cat) },
                        label = {
                            Text(
                                text = if (cat == "All") Locales.getString("all", lang) else cat,
                                fontSize = 11.sp,
                                fontWeight = if (isSelected) FontWeight.Bold else FontWeight.Normal
                            )
                        },
                        colors = FilterChipDefaults.filterChipColors(
                            selectedContainerColor = if (cat == "All") MaterialTheme.colorScheme.primary else getNoteCategoryColor(cat),
                            selectedLabelColor = Color.White
                        ),
                        shape = RoundedCornerShape(20.dp),
                        modifier = Modifier.testTag("note_filter_$cat")
                    )
                }
            }
        }

        // Notes List or Empty State
        if (notesList.isEmpty()) {
            item {
                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(vertical = 48.dp),
                    contentAlignment = Alignment.Center
                ) {
                    Column(horizontalAlignment = Alignment.CenterHorizontally) {
                        Icon(
                            imageVector = Icons.Default.EditNote,
                            contentDescription = null,
                            modifier = Modifier.size(56.dp),
                            tint = MaterialTheme.colorScheme.onSurfaceVariant.copy(alpha = 0.4f)
                        )
                        Spacer(modifier = Modifier.height(10.dp))
                        Text(
                            text = Locales.getString("noNotesFound", lang),
                            fontSize = 13.sp,
                            color = MaterialTheme.colorScheme.onSurfaceVariant,
                            textAlign = TextAlign.Center
                        )
                    }
                }
            }
        } else {
            items(notesList, key = { it.id }) { note ->
                NoteCard(
                    note = note,
                    onEdit = {
                        editingNote = note
                        showAddEditDialog = true
                    },
                    onDelete = {
                        noteToDelete = note
                    }
                )
            }
        }

        item {
            Spacer(modifier = Modifier.height(60.dp))
        }
    }
}

@Composable
fun NoteCard(
    note: Note,
    onEdit: () -> Unit,
    onDelete: () -> Unit
) {
    val catColor = getNoteCategoryColor(note.category)

    Card(
        shape = RoundedCornerShape(14.dp),
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
        border = BorderStroke(1.dp, MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.8f)),
        modifier = Modifier
            .fillMaxWidth()
            .testTag("note_card_${note.id}")
    ) {
        Column(modifier = Modifier.padding(14.dp)) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                // Category Tag Chip
                Box(
                    modifier = Modifier
                        .background(catColor.copy(alpha = 0.15f), RoundedCornerShape(8.dp))
                        .padding(horizontal = 8.dp, vertical = 3.dp)
                ) {
                    Text(
                        text = note.category,
                        fontSize = 11.sp,
                        fontWeight = FontWeight.Bold,
                        color = catColor
                    )
                }

                Row(verticalAlignment = Alignment.CenterVertically) {
                    Text(
                        text = note.date,
                        fontSize = 10.sp,
                        color = MaterialTheme.colorScheme.onSurfaceVariant.copy(alpha = 0.7f)
                    )
                    Spacer(modifier = Modifier.width(4.dp))
                    IconButton(
                        onClick = onEdit,
                        modifier = Modifier
                            .size(28.dp)
                            .testTag("edit_note_btn_${note.id}")
                    ) {
                        Icon(
                            imageVector = Icons.Default.Edit,
                            contentDescription = "Edit Note",
                            tint = MaterialTheme.colorScheme.primary,
                            modifier = Modifier.size(15.dp)
                        )
                    }
                    IconButton(
                        onClick = onDelete,
                        modifier = Modifier
                            .size(28.dp)
                            .testTag("delete_note_btn_${note.id}")
                    ) {
                        Icon(
                            imageVector = Icons.Default.Delete,
                            contentDescription = "Delete Note",
                            tint = MaterialTheme.colorScheme.error,
                            modifier = Modifier.size(15.dp)
                        )
                    }
                }
            }

            Spacer(modifier = Modifier.height(8.dp))

            Text(
                text = note.title,
                fontSize = 14.sp,
                fontWeight = FontWeight.Bold,
                color = MaterialTheme.colorScheme.onSurface
            )

            if (note.content.isNotBlank()) {
                Spacer(modifier = Modifier.height(4.dp))
                Text(
                    text = note.content,
                    fontSize = 12.sp,
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                    lineHeight = 18.sp
                )
            }
        }
    }
}

@Composable
fun AddEditNoteDialog(
    lang: String,
    initialNote: Note?,
    onDismiss: () -> Unit,
    onSave: (Note) -> Unit
) {
    val isEdit = initialNote != null
    var title by remember { mutableStateOf(initialNote?.title ?: "") }
    var content by remember { mutableStateOf(initialNote?.content ?: "") }
    val categories = listOf("Finance", "Budget", "Shopping", "Personal", "Notes")
    var selectedCat by remember { mutableStateOf(initialNote?.category ?: "Finance") }

    AlertDialog(
        onDismissRequest = onDismiss,
        title = {
            Text(
                text = Locales.getString(if (isEdit) "editNote" else "addNote", lang),
                fontWeight = FontWeight.Bold
            )
        },
        text = {
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .verticalScroll(rememberScrollState()),
                verticalArrangement = Arrangement.spacedBy(10.dp)
            ) {
                // Category Chips Selector
                Text(
                    text = Locales.getString("noteCategory", lang),
                    fontSize = 11.sp,
                    fontWeight = FontWeight.Bold,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
                LazyRow(
                    horizontalArrangement = Arrangement.spacedBy(6.dp)
                ) {
                    items(categories) { cat ->
                        val isSel = selectedCat.equals(cat, ignoreCase = true)
                        val catCol = getNoteCategoryColor(cat)
                        FilterChip(
                            selected = isSel,
                            onClick = { selectedCat = cat },
                            label = { Text(cat, fontSize = 11.sp, fontWeight = FontWeight.Bold) },
                            colors = FilterChipDefaults.filterChipColors(
                                selectedContainerColor = catCol,
                                selectedLabelColor = Color.White
                            ),
                            shape = RoundedCornerShape(16.dp)
                        )
                    }
                }

                // Title Input
                Text(
                    text = Locales.getString("noteTitle", lang),
                    fontSize = 11.sp,
                    fontWeight = FontWeight.Bold,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
                OutlinedTextField(
                    value = title,
                    onValueChange = { title = it },
                    placeholder = { Text(Locales.getString("noteTitlePlaceholder", lang), fontSize = 12.sp) },
                    modifier = Modifier.fillMaxWidth().testTag("note_title_input"),
                    shape = RoundedCornerShape(10.dp),
                    singleLine = true
                )

                // Content Input
                Text(
                    text = Locales.getString("noteContent", lang),
                    fontSize = 11.sp,
                    fontWeight = FontWeight.Bold,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
                OutlinedTextField(
                    value = content,
                    onValueChange = { content = it },
                    placeholder = { Text(Locales.getString("noteContentPlaceholder", lang), fontSize = 12.sp) },
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(140.dp)
                        .testTag("note_content_input"),
                    shape = RoundedCornerShape(10.dp),
                    maxLines = 8
                )
            }
        },
        confirmButton = {
            Button(
                onClick = {
                    if (title.isNotBlank() || content.isNotBlank()) {
                        val sdf = java.text.SimpleDateFormat("yyyy-MM-dd", java.util.Locale.US)
                        val today = sdf.format(java.util.Date())
                        val note = Note(
                            id = initialNote?.id ?: "note-${System.currentTimeMillis()}",
                            title = if (title.isBlank()) "Untitled" else title.trim(),
                            content = content.trim(),
                            category = selectedCat,
                            date = initialNote?.date ?: today,
                            timestamp = initialNote?.timestamp ?: System.currentTimeMillis()
                        )
                        onSave(note)
                    }
                },
                shape = RoundedCornerShape(8.dp)
            ) {
                Text(
                    text = Locales.getString(if (isEdit) "updateNote" else "saveNote", lang),
                    fontWeight = FontWeight.Bold
                )
            }
        },
        dismissButton = {
            TextButton(onClick = onDismiss) {
                Text(Locales.getString("cancel", lang))
            }
        }
    )
}
