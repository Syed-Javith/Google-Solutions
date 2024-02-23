import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food.service';
import { Food } from '../types/food.types';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-food-item',
  standalone: true,
  imports: [],
  providers : [FoodService],
  templateUrl: './food-item.component.html',
  styleUrl: './food-item.component.css'
})
export class FoodItemComponent {

  food: Food | null = null

  id = '0';
  constructor(private router: ActivatedRoute, private foodService: FoodService) {
    console.log();
    this.id = this.router.snapshot.paramMap.get('id') || '0'
    this.foodService.getFood(this.id).subscribe((res: Food) => {
      this.food = res
    },
      (err) => {
        console.log(err);

      })
  }


}
