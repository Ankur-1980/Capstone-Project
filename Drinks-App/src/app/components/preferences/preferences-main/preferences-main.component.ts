import { Component, OnInit } from '@angular/core';
import { PreferencesService } from 'src/app/services/preferences.service';

@Component({
  selector: 'preferences-main',
  templateUrl: './preferences-main.component.html',
  styleUrls: ['./preferences-main.component.css'],
})
export class PreferencesMainComponent implements OnInit {
  constructor(private preferService: PreferencesService) {}

  ngOnInit(): void {
    this.preferService.getItems().subscribe((data) => {
      console.log(data);
    });
  }
}
