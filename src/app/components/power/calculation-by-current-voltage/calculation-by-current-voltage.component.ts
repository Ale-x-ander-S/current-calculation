import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-calculation-by-current-voltage',
  templateUrl: './calculation-by-current-voltage.component.html',
  styleUrls: ['./calculation-by-current-voltage.component.scss']
})
export class CalculationByCurrentVoltageComponent implements OnInit {

  bottomForm!: FormGroup

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.bottomForm = this.fb.group({
      mainsType: ['', Validators.required],
      currenStrength: ['', Validators.required],
      voltage: ['', Validators.required],
      cos: ['', Validators.required]
    })
  }

  get calcByCurrentAndVoltageDirect() {
    let result = 0
    if (this.bottomForm) {
      result = this.bottomForm.value.currenStrength
        * this.bottomForm.value.voltage
    }
    return result.toFixed(2)
  }

  get calcByCurrentAndVoltageSingle() {
    let result = 0
    if (this.bottomForm.valid) {
      result = this.bottomForm.value.currenStrength
        * this.bottomForm.value.voltage
        * this.bottomForm.value.cos
    }
    return result.toFixed(2)
  }

  get calcByCurrentAndVoltageThree() {
    let result = 0
    if (this.bottomForm.valid) {
      result = 1.73 * this.bottomForm.value.currenStrength
        * this.bottomForm.value.voltage
        * this.bottomForm.value.cos
    }
    return result.toFixed(2)
  }
}
