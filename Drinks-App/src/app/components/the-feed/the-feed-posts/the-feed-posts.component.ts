import { Component, OnInit } from '@angular/core';
import { MOCK_FEED } from 'src/app/MOCK_DATA/mock-feed';

@Component({
  selector: 'the-feed-posts',
  templateUrl: './the-feed-posts.component.html',
  styleUrls: ['./the-feed-posts.component.css'],
})
export class TheFeedPostsComponent implements OnInit {
  theFeed = MOCK_FEED;
  hide = true;

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.hide = !this.hide;
  }
}
