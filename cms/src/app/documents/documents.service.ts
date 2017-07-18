import { Injectable, EventEmitter } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {Http, Headers, Response} from "@angular/http";

@Injectable()
export class DocumentsService {
  maxDocumentId: number;
  documentListChangedEvent = new Subject<Document[]>();
  documents: Document[] = [];
  documentsListClone: Document[] = [];
  documentSelectedEvent = new EventEmitter<Document>();
  documentChangedEvent = new EventEmitter<Document[]>();

  constructor(private http: Http) {
   this.initDocuments();

  }

  initDocuments(){
    this.http.get('https://cms-app-48599.firebaseio.com/documents.json')
    .subscribe((response: Response) => {
      let documents: Document[] = response.json();
      this.documents = documents;
      this.maxDocumentId = this.getMaxId();
      this.documentListChangedEvent.next(this.documents.slice());
    });
  }
  getDocuments(): Document[] {
    return this.documents.slice();
  }

  getDocument(id: string): Document {

    for (const document of this.documents) {
      if (document.id === id) {
        return document;
      }
    }
    return null;
  }

  storeDocuments(value: Document[]){
    JSON.stringify(this.documents);
    return this.http.put('https://cms-app-48599.firebaseio.com/documents.json', DocumentsService,
    this.getDocuments())
  }



  deleteDocument(document: Document) {
    if (!document){
      return;
    }

    const pos = this.documents.indexOf(document);
    if (pos < 0) {
      return;
    }
    this.documents.splice(pos, 1);
    this.documentsListClone = this.documents.slice();
    this.storeDocuments();
  }

  getMaxId():number {
    let maxId = 0;
    for (const document of this.documents) {
      if (+document.id > maxId) {
        maxId = +document.id;
      }
    }
    return maxId;
  }

  addDocument(newDocument: Document) {
    if (!newDocument) {
      return;
    }
    this.maxDocumentId++;
    newDocument.id = this.maxDocumentId + '';
    this.documents.push(newDocument);
    this.documentsListClone = this.documents.slice();
    this.storeDocuments();
  }

  updateDocument(originalDocument: Document,
                  newDocument: Document){
    if(!originalDocument||
     !newDocument){
      return;
    }

    const pos = this.documents.indexOf(originalDocument);
      if (pos < 0){
        return;
      }
    newDocument.id = originalDocument.id;
      document[pos] = newDocument;
    this.documentsListClone = this.documents.slice();
    this.storeDocuments();
  }


}




