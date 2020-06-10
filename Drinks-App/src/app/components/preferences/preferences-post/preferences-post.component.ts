import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'preferences-post',
  templateUrl: './preferences-post.component.html',
  styleUrls: ['./preferences-post.component.css'],
})
export class PreferencesPostComponent implements OnInit {
  @Input() item;
  constructor() {}

  ngOnInit(): void {
    console.log('post component', this.item);
  }
}
