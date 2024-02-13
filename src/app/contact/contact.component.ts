import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  form: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.email],
    city: ['', Validators.required],
    postalCode: ['', Validators.required],
    address: ['', Validators.required],
    agree: [false, Validators.requiredTrue],
    message: ''
  })

  constructor(private formBuilder: FormBuilder) {}

  send() {
    console.log(this.form.value)
    emailjs
      .send(environment.emailjs.serviceID, environment.emailjs.templateID, this.form.value, {
        publicKey: environment.emailjs.publicKey,
      })
      .then(
        (response) => {
          alert('SUCCESS!');
        },
        (err) => {
          alert('FAILED...');
        },
      );
  }

}
