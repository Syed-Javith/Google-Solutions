import { Component } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Food } from '../types/food.types';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-foods',
  standalone: true,
  imports: [ CommonModule , RouterModule],
  providers : [FoodService],
  templateUrl: './foods.component.html',
  styleUrl: './foods.component.css'
})
export class FoodsComponent {
  addFormVisible = false;
  isPending = false;
  toggleAddForm() {
    this.addFormVisible = ! this.addFormVisible
  }
  foods : Food[] = [] ;
  constructor(private FoodService: FoodService) {
    this.isPending = true
    this.FoodService.getFoods().subscribe(
      (res : Food[]) => {
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
}
