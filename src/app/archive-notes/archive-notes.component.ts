import { Component, OnInit } from '@angular/core';
import { NoteService } from '../core/service/note/note.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Note } from '../core/model/note/note';

@Component({
  selector: 'app-archive-notes',
  templateUrl: './archive-notes.component.html',
  styleUrls: ['./archive-notes.component.css']
})
export class ArchiveNotesComponent implements OnInit {

  public mytoken = localStorage.getItem('token');
  public notes: Note[] = [];

  constructor(private noteService: NoteService, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getNotes();

  }

  getNotes() {
    console.log('token', this.mytoken);
    this.noteService.retrieveNotes(this.mytoken).subscribe(newNote => {
      this.notes = newNote;
    }
    );
  }


  openDialog(note): void {
    const dialogRef = this.dialog.open(ArchiveNotesComponent, {
      width: '550px',
      data: note
    });
    dialogRef.afterClosed().subscribe(_result => {
      this.noteService.updateNote(note).subscribe(_response => {
        this.snackBar.open('Note updated successfully', 'OK', {
          duration: 3000,
        });
      });
      console.log('The dialog was closed');
    });
  }

  deleteNote(note) {
    console.log(note.noteId);
    this.noteService.deleteNote(note.noteId).subscribe(_response => {
      this.snackBar.open('deleted Note', 'OK', { duration: 2000 });
    }), _error => {
      this.snackBar.open('error', 'error to retrieve notes', { duration: 2000 });
    };
  }

  unArchive(note)
  {
    var newNote = {
      ...note,
      'archive': false,
      
    };
    console.log(newNote);
    this.noteService.updateNote(newNote).subscribe(_response => {
      this.snackBar.open(' unArchive ', 'OK', {
        duration: 3000,
      });
      this.getNotes();
    },
      (error) => {
        console.log('Error while unarchiving note::->', error);
      });
  }
  

}
