import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userPic: any;

  constructor(public nav: NavbarService) {}

  ngOnInit(): void {
    this.nav.getUserPic().subscribe((response: any) => {
      const { picture } = response.pic[0];
      this.userPic = picture;
      console.log(this.userPic);
    });
  }
}
