import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpUtil: HttpService, private router: Router, public snackBar: MatSnackBar) { }

  retrieveNotes(token): Observable<any> {
    let httpheaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        token:token
      })
    };
    return this.httpUtil.getService(environment.note_url + 'notes', httpheaders);
  }

  createNote(note): Observable<any> {
    let token = localStorage.getItem('token');
    let httpheaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: token
      })
    };
    return this.httpUtil.postServiceForNoteCreate(environment.note_url + 'note', httpheaders, note);
  }
  updateNote(note) {
    let token = localStorage.getItem('token');
    let httpheaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: token
      })
    };
    return this.httpUtil.putServiceForNoteUpdate(environment.note_url + 'note', note, httpheaders);
  }

  deleteNote(noteId) {
    let token = localStorage.getItem('token');
    let httpheaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token: token
      })
    };
    return this.httpUtil.deleteServiceForNoteDelete(environment.note_url + 'note/' + noteId, httpheaders);
}
}
