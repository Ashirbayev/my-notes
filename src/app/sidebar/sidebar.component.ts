import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note.service';
import {ActivatedRoute} from '@angular/router'; // Импортируйте интерфейс Note

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NoteService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.notes = this.noteService.getNotes();
  }











}
