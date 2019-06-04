import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { NoteService } from '../core/service/note/note.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.css']
})
export class UpdateNoteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data, 
    private noteService: NoteService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
  }


  closeClick(note) {
    this.noteService.updateNote(note).subscribe(response =>{
      this.snackBar.open("Note updated successfully", "OK", {
        duration: 3000,
      });
    })
    this.dialogRef.close();
  }
}

