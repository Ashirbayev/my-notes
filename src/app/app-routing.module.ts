import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NoteViewComponent } from './note-view/note-view.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import {AddNoteComponent} from './add-note/add-note.component';

const routes: Routes = [
  { path: '', component: NoteViewComponent },
  { path: 'note-detail/:id', component: NoteDetailComponent },
  { path: 'add-note', component: AddNoteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
