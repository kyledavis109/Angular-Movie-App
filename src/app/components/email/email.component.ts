import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  nodeMailerForm!: FormGroup;
  showEmailForm: boolean = true;
  public subscription!: Subscription;

  constructor(private send: ApiService, private fb: FormBuilder) { }

  infoForm = this.fb.group({
    emailAddress: ['', [
      Validators.required,
      Validators.email
    ]],
    emailSubject: ['', [
      Validators.required,
      Validators.minLength(1)
    ]],
    emailMessage: ['', [
      Validators.required,
      Validators.minLength(1)
    ]]
  });

  get emailAddress() { return this.infoForm.get('emailAddress') as FormControl; }
  get emailSubject() { return this.infoForm.get('emailSubject') as FormControl; }
  get emailMessage() { return this.infoForm.get('emailMessage') as FormControl;}

  sendMail() {
    console.log(this.infoForm.value);
    this.subscription = this.send.sendEmail(this.infoForm.value)
      .subscribe({
        next(data: any) {
          let msg = data['message'];
          alert(msg);
          console.log(data, "success");
        },
        error(error) {
          console.error(error, 'error');
        }
      });
  }

  ngOnInit(): void {
  }

}
