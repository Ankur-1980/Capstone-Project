import { Component, OnInit } from '@angular/core';
import { PreferencesService } from 'src/app/services/preferences.service';

@Component({
  selector: 'preferences-main',
  templateUrl: './preferences-main.component.html',
  styleUrls: ['./preferences-main.component.css'],
})
export class PreferencesMainComponent implements OnInit {
  constructor(private preferencesService: PreferencesService) {}
  homeBar;

  ngOnInit(): void {
    this.preferencesService.getHomeBar().subscribe((data) => {
      // console.log(data);
      this.homeBar = [data];
      console.log(this.homeBar);
    });
  }

  prefInput(value) {
    this.preferencesService.addHomeBar(value);
  }
}
