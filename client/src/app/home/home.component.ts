import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    
    constructor(){}

    showLoginForm: boolean = true;
    toggleForm() {
      this.showLoginForm = !this.showLoginForm;
    }

    onSubmit(formData : NgForm){
      console.log(formData.controls['email'].value);
      console.log(formData.controls['password'].value);
      console.log(formData.controls['role'].value);

    }
}
