import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-power-calculator',
  templateUrl: './power-calculator.component.html',
  styleUrls: ['./power-calculator.component.scss']
})
export class PowerCalculatorComponent implements OnInit {

  form!: FormGroup

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      radio: ['radio1', Validators.required],
      currenStrength: ['', Validators.required],
      resistance: ['', Validators.required],
      voltage: ['', Validators.required]
    })
  }

  get calcByCurrentAndResistance() {
    let result = 0
    if (this.form.valid) {
      result = Math.pow(this.form.value.currenStrength, 2) * this.form.value.resistance
    }
    return result.toFixed(2)
  }

  get calcByVoltageAndResistance() {
    let result = 0
    if (this.form.valid) {
      result = Math.pow(this.form.value.voltage, 2) / this.form.value.resistance
    }
    return result.toFixed(2)
  }
}
