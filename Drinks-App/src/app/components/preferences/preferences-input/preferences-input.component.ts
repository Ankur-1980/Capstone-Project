import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'preferences-input',
  templateUrl: './preferences-input.component.html',
  styleUrls: ['./preferences-input.component.css'],
})
export class PreferencesInputComponent implements OnInit {
  preferenceInput: FormGroup;
  @Output() prefInput: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.preferenceInput = this.fb.group({
      textInput: [''],
    });
  }

  onSubmit() {
    console.log(this.preferenceInput.value);

    this.prefInput.emit(this.preferenceInput.value);
  }
}
