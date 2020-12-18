import { Component, ElementRef, ViewChild } from '@angular/core';
import Stepper from 'bs-stepper'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stepper-angular';

  private stepper: Stepper;

  // @ViewChild('myStepper', { static: true }) myStepper: Element;

  ngOnInit() {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })

    // this.initiatStepper();
  }

  // initiatStepper() {
  //   this.stepper = new Stepper(this.myStepper), {
  //     linear: false,
  //     animation: true
  //   }

  //   console.log("stepper", this.stepper);
  // }

  next() {
    this.stepper.next();
  }

  onSubmit() {
    return false;
  }


}
