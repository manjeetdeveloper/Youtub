import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private alertCtrl: AlertController) {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      age: ['', [Validators.required, Validators.min(18)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    });
  }

  get name() {
    return this.registrationForm.get('name');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get age() {
    return this.registrationForm.get('age');
  }

  get phone() {
    return this.registrationForm.get('phone');
  }

  async onRegister() {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;

      // Create an alert to display the success message
      const alert = await this.alertCtrl.create({
        header: 'Registered Successfully',
        message: 'Your registration has been completed successfully!',
        buttons: ['OK'],
      });

      // Show the alert
      await alert.present();

      // Reset the form after submission
      this.registrationForm.reset();
    }
  }
}
