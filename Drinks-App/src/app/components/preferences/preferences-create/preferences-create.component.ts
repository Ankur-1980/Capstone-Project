import { Component, OnInit } from '@angular/core';
import { PreferencesService } from '../preferences.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CATEGORIES } from '../categories';

@Component({
  selector: 'preferences-create',
  templateUrl: './preferences-create.component.html',
  styleUrls: ['./preferences-create.component.css'],
})
export class PreferencesCreateComponent implements OnInit {
  categories = CATEGORIES;
  itemForm: FormGroup;

  constructor(
    private preferService: PreferencesService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      info: [''],
      category: [''],
    });
  }

  onSubmit() {
    // console.log(this.itemForm.value);
    this.preferService.addItems(this.itemForm.value);
    this.itemForm.reset();
  }
}
