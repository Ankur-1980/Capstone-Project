import { Component, OnInit } from '@angular/core';
import { DrinkPostService } from 'src/app/services/drink-post.service';
import { MOCK_POSTS } from 'src/app/MOCK_DATA/mock-posts';
import { UsersService } from 'src/app/services/users.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  posts;
  mockPosts = MOCK_POSTS;

  constructor(private drinkPosts: DrinkPostService, public auth: AuthService) {}

  ngOnInit(): void {
    // this.drinkPosts.getDrinks().subscribe((data) => {
    //   // console.log(data);
    //   this.posts = data;
    //   console.log(this.posts);
    // });
  }

  logOut() {
    this.auth.logOut();
  }

  deletePost(postId) {}
}
