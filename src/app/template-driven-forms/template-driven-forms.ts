import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Template Driven Form</h2>

    <form #myForm="ngForm" (ngSubmit)="saveData(myForm.value)">

      First Name:
      <input type="text" name="firstName" ngModel required />

      <br /><br />

      Last Name:
      <input type="text" name="lastName" ngModel />

      <br /><br />

      <button type="submit">Submit</button>

    </form>
  `
})
export class TemplateDrivenForms {
  saveData(data: any) {
    console.log(data);
  }
}
