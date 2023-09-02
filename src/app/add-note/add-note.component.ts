import { Component, OnInit } from '@angular/core';
import {Note, NoteService} from '../note.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  newNoteTitle: string = '';
  newNoteText: string = '';
  showAddNoteForm: boolean = false; 
  currentId: number = 6; 

  constructor(private noteService: NoteService,
              private router: Router) { }

  ngOnInit(): void {
  }
  addNote(): void {
    if (this.newNoteTitle.trim() !== '' && this.newNoteText.trim() !== '') {
      const newNote: Note = {
        id: this.currentId,
        title: this.newNoteTitle,
        text: this.newNoteText
      };

      this.noteService.addNote(newNote);
      this.newNoteTitle = '';
      this.newNoteText = '';
      this.showAddNoteForm = false;

      this.currentId++;

      
      this.router.navigate(['/']);
    }
  }
  toggleAddNoteForm(): void {
    this.showAddNoteForm = !this.showAddNoteForm; 
  }

}
