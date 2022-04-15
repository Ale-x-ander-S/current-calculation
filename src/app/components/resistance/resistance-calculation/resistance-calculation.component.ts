import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-resistance-calculation',
  templateUrl: './resistance-calculation.component.html',
  styleUrls: ['./resistance-calculation.component.scss']
})
export class ResistanceCalculationComponent implements OnInit {

  form!: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      radio: ['radio1', Validators.required],
      mainsType: ['', Validators.required],
      currentStrength: ['', Validators.required],
      voltage: ['', Validators.required],
      power: ['', Validators.required]
    })
  }

  get getResistanceByCurrentAndVoltage() {
    let result = 0
    if (this.form.controls['voltage'].valid && this.form.controls['currentStrength'].valid) {
      result = this.form.value.voltage / this.form.value.currentStrength
    }
    return result.toFixed(2)
  }

  get getResistanceByCurrentAndPower() {
    let result = 0
    if (this.form.controls['power'].valid && this.form.controls['currentStrength'].valid) {
      result = this.form.value.power / Math.pow(this.form.value.currentStrength, 2)
    }
    return result.toFixed(2)
  }

  get getResistanceByVoltageAndPower() {
    let result = 0
    if (this.form.controls['voltage'].valid && this.form.controls['power'].valid) {
      result = Math.pow(this.form.value.voltage,2) / this.form.value.power
    }
    return result.toFixed(2)
  }
}
