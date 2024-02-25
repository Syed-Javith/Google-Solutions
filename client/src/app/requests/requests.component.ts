import { Component } from '@angular/core';
import { Request, User } from '../types/food.types';
import { RequestService } from '../services/request.service';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-requests',
  standalone : true,
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css'],
  providers : [UserService,RequestService],
  imports : [CommonModule,RouterModule]
})
export class RequestsComponent {
  requests: Request[] = [];

  constructor(private requestService: RequestService, private userService: UserService) {
    this.requestService.getRequests().subscribe(
      (res: Request[]) => {
        this.requests = res;
        this.populateUsers();
        console.log(this.requests);
      },
      (error) => {
        console.error('Error fetching requests:', error);
      }
    );
  }

  private populateUsers(): void {
    this.requests.forEach((req) => {
      this.userService.getUser(req.userId).subscribe(
        (user: User) => {
          req.user = user;
        },
        (error) => {
          console.error('Error fetching user:', error);
        }
      );
    });
  }

  takeRequest(foodId : String , requestId : String) {
    const data  = { foodId , requestId }
    this.requestService.VolunteerTakeRequest(data).subscribe((res)=> {
      console.log(res);
    }, (err) => {
      console.log(err);
      
    })
  }
}