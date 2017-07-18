import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {DocumentsService} from "../documents.service";
import {isNullOrUndefined} from "util";
import {NgForm} from "@angular/forms";
import { Document } from "../document.model"

@Component({
  selector: 'app-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent implements OnInit {
  document: Document;
  originalDocument: Document;
  editMode: boolean = false;
  id: string;


  constructor(private documentsService: DocumentsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          if (isNullOrUndefined(this.id)) {
              this.editMode = false;
              return;
          }
          this.originalDocument = this.documentsService.getDocument(this.id); //pg 14
          if(isNullOrUndefined(this.originalDocument)){
            return;
          }
            this.editMode = true;
            this.document = JSON.parse(JSON.stringify(this.originalDocument));
          })
        }

        onSubmit(form: NgForm) {
          let values = form.value;

          let newDocument = new Document(String(this.documentsService.maxDocumentId++), values.name, values.description, values.url, values.children)  //pg15

          if (this.editMode = true) {
            this.documentsService.updateDocument(this.originalDocument, newDocument)
          }
          else {
            this.documentsService.addDocument(newDocument)
            this.router.navigate(['/documents'])
          }

        }
        onCancel(){
          this.router.navigate(['/documents'])
        }


}
