import { Component } from '@angular/core';
import { FoodService } from '../services/food.service';
import { AddFood, Food, User } from '../types/food.types';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-foods',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [FoodService],
  templateUrl: './foods.component.html',
  styleUrl: './foods.component.css'
})
export class FoodsComponent {
  addFormVisible = false;
  isPending = false;
  currentUser: User | null = null;
  toggleAddForm() {
    this.addFormVisible = !this.addFormVisible
  }
  foods: Food[] = [];
  constructor(private FoodService: FoodService, private cookieService: CookieService) {
    this.isPending = true
    const cookie = this.cookieService.get('user')
    if (cookie) this.currentUser = JSON.parse(cookie)
    this.FoodService.getFoods().subscribe(
      (res: Food[]) => {
        this.foods = res;
        console.log(this.foods);
        this.isPending = false
      }
      ,
      (err) => {
        console.log(err);
        this.isPending = false
      })
  }

  addFood(data: NgForm) {
    const addData: AddFood = { description: data.controls['description'].value, distributor: this.currentUser?.username + "", foods: data.controls['foods'].value, image: data.controls['image'].value, location: data.controls['pincode'].value }
    this.FoodService.addFood(addData).subscribe((res) => {
      console.log(res);
      this.addFormVisible=false
    },
      (err) => {
        console.log(err);

      })
  }
}
