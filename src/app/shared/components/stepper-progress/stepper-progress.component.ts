import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stepper-progress',
  templateUrl: './stepper-progress.component.html',
  styleUrl: './stepper-progress.component.scss'
})
export class StepperProgressComponent {

   @Input() currentStep: number = 1;
}
