import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { NoteService, Note } from '../note.service';
import { Observable } from 'rxjs';
import {EMPTY, of} from 'rxjs';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {
  note: Note | undefined;

  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = +params.get('id')!;
        const note = this.noteService.getNoteById(id);
        return note ? of(note) : EMPTY;
      })
    )
      .subscribe((note: any) => {
        this.note = note;
      });
  }
}
