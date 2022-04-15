import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PowerCalculatorComponent } from './components/power/power-calculator/power-calculator.component';
import { ResistanceCalculationComponent } from './components/resistance/resistance-calculation/resistance-calculation.component';
import { VoltageCalculationComponent } from './components/voltage/voltage-calculation/voltage-calculation.component';
import { CalculationByCurrentVoltageComponent } from './components/power/calculation-by-current-voltage/calculation-by-current-voltage.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AlternatingCurrentComponent } from './components/resistance/alternating-current/alternating-current.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerCalculatorComponent,
    ResistanceCalculationComponent,
    VoltageCalculationComponent,
    CalculationByCurrentVoltageComponent,
    AlternatingCurrentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
