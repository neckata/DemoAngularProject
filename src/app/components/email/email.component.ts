import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormType } from '../../shared/enums/form-types.enum';
import { EmailService } from './email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent {

  constructor(private emailService: EmailService) {
 }

  emailForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    email: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    message: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    upload: new FormControl(''),
  });

  formTypes = FormType;

  sendEmail() {
    const email = this.emailForm.value;
    this.emailService.sendEmail(email).subscribe(success => {
      if (success)
        this.emailForm.reset();
    });
  }
}
