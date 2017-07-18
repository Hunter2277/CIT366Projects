import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import { Document } from '../document.model';
import { DocumentsService } from '../documents.service';


@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})


export class DocumentListComponent implements OnInit {
  private subscription: Subscription;

  documents: Document[]= [];

  constructor(private documentsService: DocumentsService) {
    this.documents = this.documentsService.getDocuments();
  }

  ngOnInit() {
    this.documents = this.documentsService.getDocuments();
    this.subscription = this.documentsService.documentListChangedEvent
      .subscribe(
        (documentsList: Document []) => {
          this.documents = documentsList;
        }
      )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }




}
