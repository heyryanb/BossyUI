import {Component, Input, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {BossyFormElementConfig} from '../../config/form-element';

@Component({
  selector: 'bossy-form-element',
  templateUrl: './form-element.html',
  styleUrls: ['./form-element.css'],
})
export class BossyFormElementComponent implements OnInit {
  @Input() config: BossyFormElementConfig;
  status = 'none';
  constructor() {
  }

  ngOnInit() {
    const {name, value, formGroup} = this.config;

    if (formGroup) {
      console.log('formgroup', name);

      formGroup.addControl(name, new FormControl(value));
    }

    this.config.validators = [
      Validators.required,
    ];
  }

  output() {
  }
}
