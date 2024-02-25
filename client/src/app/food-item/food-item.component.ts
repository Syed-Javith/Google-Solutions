import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food.service';
import { Food, User } from '../types/food.types';
import { HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule, NgModel } from '@angular/forms';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-food-item',
  standalone: true,
  imports: [NgIf, FormsModule],
  providers: [FoodService, RequestService],
  templateUrl: './food-item.component.html',
  styleUrl: './food-item.component.css'
})
export class FoodItemComponent {

  food: Food | null = null
  currentUser: User | null = null;

  id = '0';
  isLoading = false
  fetchError = false
  constructor(private router: ActivatedRoute, private navigate: Router, private foodService: FoodService, private cookieService: CookieService, private requestService: RequestService) {
    this.id = this.router.snapshot.paramMap.get('id') || '0'
    this.isLoading = true
    const cookie = this.cookieService.get('user')
    if (cookie) this.currentUser = JSON.parse(cookie)
    else this.navigate.navigate(['/'])
    this.foodService.getFood(this.id).subscribe((res: Food) => {
      this.food = res
      this.isLoading = false
    },
      (err) => {
        console.log(err);
        if (!err.ok) this.fetchError = true
        this.isLoading = false
      })
  }

  confirmDeleivery(tokenInput: NgModel) {
    const token = tokenInput.value
    let requestId;
    this.router.queryParams.subscribe(params => {
      requestId = params['requestId'];
      console.log('ID:', requestId);
    });
    this.requestService.VolunteerEnterToken({ token, requestId, foodId: this.food?._id }).subscribe((res) => {
      console.log(res);

    },
      (err) => {
        console.log(err);
      })
  }

  requestFood() {
    const data = { foodId: this.food?._id, userId: this.currentUser?._id, foods: this.food?.foods }
    this.requestService.makeRequestForFood(data).subscribe((res) => {
      console.log(res);

    },
    (err) => {
        console.log(err);
    }
    )
  }

  takeFoodOrderAsVolunteer(){
    const  id = this.food?._id 
    console.log(id);
    this.foodService.getFoodByVolunteer(id).subscribe(
      (res) => {
        if(res.ok) console.log("taken order");
        console.log(res);
        
        this.navigate.navigate(['/foods'])
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
