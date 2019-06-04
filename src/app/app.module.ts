import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {AppMaterialModule} from './app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { MatCardModule,MatExpansionModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { UpdateNoteComponent } from './update-note/update-note.component';
import { ArchiveNotesComponent } from './archive-notes/archive-notes.component';
import { TrashedNotesComponent } from './trashed-notes/trashed-notes.component';
import { PinnedNoteComponent } from './pinned-note/pinned-note.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ViewNoteComponent } from './view-note/view-note.component';
import { NoteComponent } from './note/note.component';
import { MoreButtonDirective } from './more-button.directive';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    
    ForgotpasswordComponent,
    ResetpasswordComponent,
   
    UpdateNoteComponent,
    ArchiveNotesComponent,
    TrashedNotesComponent,
    PinnedNoteComponent,
    SideNavComponent,
    ViewNoteComponent,
    
    NoteComponent,
    
    MoreButtonDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatExpansionModule
  


    
  
  ],
  entryComponents: [UpdateNoteComponent,PinnedNoteComponent],

  providers: [{provide: MatDialogRef, useValue: {}},{ provide: MAT_DIALOG_DATA, useValue: [] }],
  bootstrap: [AppComponent]
})
export class AppModule { }
