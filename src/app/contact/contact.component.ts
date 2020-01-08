import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from  '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  rForm: FormGroup;
  email: string;
  password: string;

  constructor(private fb: FormBuilder) { 
    this.rForm = fb.group({
      email: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required, Validators.pattern('[A-Z+a-z+\d+]+')])]
    })
  }


  ngOnInit() {
  }

}
