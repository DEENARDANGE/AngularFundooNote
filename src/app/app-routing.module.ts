
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ArchiveNotesComponent } from './archive-notes/archive-notes.component';
import { TrashedNotesComponent } from './trashed-notes/trashed-notes.component';
import { ViewNoteComponent } from './view-note/view-note.component';

const appRoutes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'home', component: HomeComponent ,
  children: [

    { path: '', redirectTo: 'notes', pathMatch: 'full' },
    { path: 'archivenote', component: ArchiveNotesComponent},
    { path: 'trashednote', component: TrashedNotesComponent},
    { path: 'notes', component: ViewNoteComponent }
  ]

},
{path: 'resetpassword/:id', component: ResetpasswordComponent},
{path: 'forgotpassword', component: ForgotpasswordComponent},
  { path: '**', redirectTo: 'login' , pathMatch: 'full'}
 ];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
    })
    export class AppRoutingModule { }

