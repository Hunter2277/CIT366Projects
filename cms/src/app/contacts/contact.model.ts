export class Contact {
  public contactId: string;
  public name: string;
  public email: string;
  public phone: number;
  public imgUrl: string;
  public group: any;

constructor(contactID: string, name: string, email: string,
phone: number, imgUrl: string, group: any) {

  this.contactId = contactID;
  this.name = name;
  this.email = email;
  this.phone = phone;
  this.imgUrl = imgUrl;
  this.group = group;

 }
}


