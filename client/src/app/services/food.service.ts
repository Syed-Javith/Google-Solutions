import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddFood, Food } from '../types/food.types';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http : HttpClient) { }

  getFoods() : Observable<Food[]> {
    return this.http.get<Food[]>('https://google-solutions-backend.onrender.com/food');
  }
  getFood(id : String) : Observable<Food> {
    return this.http.get<Food>('https://google-solutions-backend.onrender.com/food/'+id);
  }
  addFood(data : AddFood) : Observable<Food> {
    return this.http.post<Food>('https://google-solutions-backend.onrender.com/food',data)
  }
  getFoodByVolunteer(data : any) : Observable<any>{
    return this.http.delete('https://google-solutions-backend.onrender.com/food/'+ data)
  }
}
