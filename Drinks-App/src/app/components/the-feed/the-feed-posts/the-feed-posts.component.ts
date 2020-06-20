import { Component, OnInit } from '@angular/core';
import { MOCK_FEED } from 'src/app/MOCK_DATA/mock-feed';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'the-feed-posts',
  templateUrl: './the-feed-posts.component.html',
  styleUrls: ['./the-feed-posts.component.css'],
})
export class TheFeedPostsComponent implements OnInit {
  theFeed = MOCK_FEED;
  hide = true;

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    // this.isAuth();
  }

  toggle() {
    this.hide = !this.hide;
  }
  // isAuth() {
  //   console.log(this.auth.decodedToken);
  //   // console.log(this.auth.isAuthenticated);
  //   // console.log(this.auth.userID);
  // }
}
