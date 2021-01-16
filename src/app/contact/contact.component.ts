import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IContact } from './../../core/contacts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: any;
  patterns = {
    email: /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/,
    phone: /^((\+91)?|91)?[6789][0-9]{9}$/,
    name: /^[A-Za-z \."'-]*$/
  };

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IContact
  ) { }

  ngOnInit() {
    this.createForm(this.data);
  }

  viewData(data: IContact) {
    this.contactForm = this.fb.group({
      name: [{ value: data.name, disabled: true }],
      email: [{ value: data.email, disabled: true }],
      phone: [{ value: data.phone, disabled: true }],
      address: [{ value: data.address, disabled: true }]
    });
  }

  createForm(data: IContact) {
    this.contactForm = this.fb.group({
      name: [data.name, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(100),
        Validators.pattern(this.patterns.name)]
      ],
      email: [data.email, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(200),
        Validators.pattern(this.patterns.email)
      ]],
      phone: [data.phone, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(15),
        Validators.pattern(this.patterns.phone)
      ]],
      address: [data.address, [
        Validators.required,
        Validators.maxLength(100),
        Validators.minLength(2)
      ]]
    });
  }

  submit() {
    this.dialogRef.close(this.contactForm.value);
  }
}
