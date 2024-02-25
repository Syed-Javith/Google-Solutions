import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food.service';
import { Food } from '../types/food.types';
import { HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-food-item',
  standalone: true,
  imports: [NgIf],
  providers : [FoodService],
  templateUrl: './food-item.component.html',
  styleUrl: './food-item.component.css'
})
export class FoodItemComponent {

  food: Food | null = null

  id = '0';
  isLoading = false
  fetchError = false
  constructor(private router: ActivatedRoute, private foodService: FoodService) {
    this.id = this.router.snapshot.paramMap.get('id') || '0'
    this.isLoading = true
    this.foodService.getFood(this.id).subscribe((res: Food) => {
      this.food = res
      this.isLoading = false
    },
      (err) => {
        console.log(err);
        if(!err.ok) this.fetchError = true
        this.isLoading = false
      })
  }


}
