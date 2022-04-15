import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-voltage-calculation',
  templateUrl: './voltage-calculation.component.html',
  styleUrls: ['./voltage-calculation.component.scss']
})
export class VoltageCalculationComponent implements OnInit {

  form!: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      radio: ['radio1', Validators.required],
      currentStrength: ['', Validators.required],
      resistance: ['', Validators.required],
      power: ['', Validators.required]
    })
  }

  get getVoltageByCurrentAndResistance() {
    let result = 0
    if (this.form) {
      result = this.form.value.currentStrength * this.form.value.resistance
    }
    return result.toFixed(2)
  }

  get getVoltageByCurrentAndPower() {
    let result = 0
    if(this.form.controls['power'].valid && this.form.controls['currentStrength'].valid) {
      result = this.form.value.power / this.form.value.currentStrength
    }
    return result.toFixed(2)
  }

  get getVoltageByPowerAndResistance() {
    let result = 0
    if(this.form) {
      result = Math.sqrt(this.form.value.power * this.form.value.resistance)
    }
    return result.toFixed(2)
  }
}
