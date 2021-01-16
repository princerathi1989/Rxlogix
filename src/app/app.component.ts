import { ContactComponent } from './contact/contact.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IContact, contacts, Contact } from './../core/contacts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  dataSource: IContact[] = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource = contacts;
  }

  add(): void {
    const addRef = this.dialog.open(ContactComponent, {
      height: '460px',
      width: '600px',
      data: new Contact()
    });
    addRef.afterClosed().subscribe(result => {
      if(result) this.dataSource.push(result);
    });
  }

  view(contact: IContact, index: number) {
    const viewRef = this.dialog.open(ContactComponent, {
      height: '460px',
      width: '600px',
      data: new Contact(contact)
    });
    viewRef.afterClosed().subscribe(result => {
      if(result) this.dataSource[index] = result;
    });
  }

  delete(index: number) {
    if (this.dataSource.length > 1) {
      this.dataSource.splice(index, 1);
    }
  }
}

