import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodsComponent } from './foods/foods.component';
import { FoodItemComponent } from './food-item/food-item.component';

export const routes: Routes = [
    {
        path : '' , component : HomeComponent
    },
    {
        path : 'foods' , component : FoodsComponent
    },
    {
        path : 'foods/:id' , component : FoodItemComponent
    }
];
