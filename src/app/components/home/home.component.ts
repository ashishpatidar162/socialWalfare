import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  donationDetails: any = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    message: '',
  };

  constructor( private http: HttpClient) {}

  ngOnInit() {
  }
  saveDonationDetails(){
    this.http.post('users/saveDonationDetails', this.donationDetails).subscribe(res => {
    });

  }
}
