import {Component, OnInit} from '@angular/core';
import {DocumentsService} from "../documents.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import { Document } from '../document.model';
import {WindRefService} from "../../wind-ref.service";

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent implements OnInit {
  document: Document;
  nativeWindow: any;
  id:string;


  constructor(private documentsService: DocumentsService,
    private windowRefService: WindRefService,
              private router: Router,
  private route: ActivatedRoute) {
    this.nativeWindow = windowRefService.getNativeWindow();
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.document = this.documentsService.getDocument(this.id);
        }
      )
  }

  onView() {
    if (this.document.url) {
      this.nativeWindow.open(this.document.url);
    }
  }

  onDelete(){
  this.documentsService.deleteDocument(this.document)
  }

  onAddDocument() {
    this.documentsService.addDocument(this.document)
  }

 // onUpdateDocument(){
  //  this.documentsService.updateDocument(this.document)
 // }
}
