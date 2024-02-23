import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-food-item',
  standalone: true,
  imports: [],
  templateUrl: './food-item.component.html',
  styleUrl: './food-item.component.css'
})
export class FoodItemComponent {
   
  id = '0';
   constructor(private router : ActivatedRoute){
    console.log();
    this.id = this.router.snapshot.paramMap.get('id') || '0'
   }
   

}
