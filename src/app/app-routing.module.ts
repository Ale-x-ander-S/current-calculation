import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PowerCalculatorComponent} from "./components/power/power-calculator/power-calculator.component";
import {ResistanceCalculationComponent} from "./components/resistance/resistance-calculation/resistance-calculation.component";
import {VoltageCalculationComponent} from "./components/voltage/voltage-calculation/voltage-calculation.component";

const routes: Routes = [
  {path: '', redirectTo: '/power', pathMatch: 'full'},
  {path: 'power', component: PowerCalculatorComponent},
  {path: 'resistance', component: ResistanceCalculationComponent},
  {path: 'voltage', component: VoltageCalculationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
