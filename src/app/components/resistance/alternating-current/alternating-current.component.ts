import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-alternating-current',
  templateUrl: './alternating-current.component.html',
  styleUrls: ['./alternating-current.component.scss']
})
export class AlternatingCurrentComponent implements OnInit {

  form!: FormGroup

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      conductorLength: ['', Validators.required],
      conductorArea: ['', Validators.required],
      conductorResistivity: ['', Validators.required],
      currentFrequency: ['', Validators.required],
      capacity: ['', Validators.required],
      inductance: ['', Validators.required]
    })
  }

  get getActiveResistance() {
    let result = 0

    if (this.form.controls['conductorResistivity'].valid
      && this.form.controls['conductorLength'].valid
      && this.form.controls['conductorArea'].valid) {

      result = this.form.value.conductorResistivity
        * this.form.value.conductorLength
        / this.form.value.conductorArea
    }
    return result.toFixed(5)
  }

  get getCapacitance() {
    let result = 0
    if (this.form) {
      result = 1 / 2 * Math.PI * this.form.value.conductorResistivity
    }
    return result.toFixed(5)
  }

  get getInductiveReactance() {
    let result = 0
    if (this.form) {
      result = 2 * Math.PI * this.form.value.conductorResistivity * this.form.value.inductance
    }
    return result.toFixed(5)
  }
}
