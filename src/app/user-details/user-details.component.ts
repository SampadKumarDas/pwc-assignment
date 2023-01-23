import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})

export class UserDetailsComponent implements OnInit {

  userdata: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.get('users').subscribe(res => {
      this.userdata = res;
      console.log('data response', this.userdata);
    });
  }

}
