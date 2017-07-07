import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Document } from '../document.model';
import { DocumentsService } from '../documents.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})


export class DocumentListComponent implements OnInit {


  documents: Document[]= [];

  constructor(private documentsService: DocumentsService) {
    this.documents = this.documentsService.getDocuments();
  }

  ngOnInit() {
    this.documents = this.documentsService.getDocuments();
    this.documentsService.documentChangedEvent
      .subscribe(
        (documents: Document []) => {
          this.documents = documents;
        }
      )
  }




}
