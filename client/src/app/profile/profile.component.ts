import { Component } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import { User } from '../types/food.types';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor(private cookies 
    : CookieService) {
      const data = this.cookies.get("user");
      if(data)
      {
        this.profile = JSON.parse(data);
      }
    }
     profile: User|null= null;


}
