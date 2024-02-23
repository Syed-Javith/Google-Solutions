import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    
    constructor(){}
    onSubmit(formData : NgForm){
      console.log(formData.controls['email'].value);
      console.log(formData.controls['password'].value);
    }
}
