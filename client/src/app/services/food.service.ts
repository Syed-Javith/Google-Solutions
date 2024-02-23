import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../types/food.types';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http : HttpClient) { }

  getFoods() : Observable<Food[]> {
    return this.http.get<Food[]>('http://localhost:8000/food');
  }
  getFood(id : String) : Observable<Food> {
    return this.http.get<Food>('http://localhost:8000/food/'+id);
  }
}
