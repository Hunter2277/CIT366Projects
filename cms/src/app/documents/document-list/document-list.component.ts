import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  documents: Document[]= [
    new Document(
      '1',
      'Analysis of Fidgit Spinners',
    'Research Paper',
  'fidgit.pdf',
    null),
    new Document(
      '2',
      'North Korean Nuclear Threat',
      'Report',
      'northK.pdf',
      null),
    new Document(
      '3',
      'Why Humanity is Drowning',
      'Essay',
      'humanity.pdf',
      null),
    new Document(
      '4',
      'The life and Journey of John Hancock',
      'Bio',
      'Hancock.pdf',
      null)
    ];
  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
  constructor() { }

  ngOnInit() {
  }

}
