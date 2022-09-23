import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'gce-coding-excercise';
  math = Math;

  constructor() {

    // Check to see if selects and input are stored in sessionStorage and
    // if its not then fill with current date
    if (this.selectedMonth === null) {
      this.selectedMonth = String(this.currentMonthNumber);
    } else {
      this.selectedMonth = sessionStorage.getItem('selectedMonth');
    }

    if (this.selectedDay === null) {
      this.selectedDay = String(this.currentDay);
    } else {
      this.selectedDay = sessionStorage.getItem('selectedDay');
    }

    if (this.yearInput === null) {
      this.yearInput = String(this.currentYear);
    } else {
      this.yearInput = sessionStorage.getItem('yearInput');
    }

    if (sessionStorage.getItem("selectedMonth") === null && sessionStorage.getItem("selectedDay") === null && sessionStorage.getItem("yearInput") === null) {
      this.dateDifference = (this.currentDate.getTime() - this.currentDate.getTime()) / (1000 * 3600 * 24)
      console.log("This is NaN")
    } else {
      console.log("This is not null")
      console.log(this.dateDifference)
      console.log(this.date1)
    }

    console.log(this.selectedDay)

  }

  //Current date split into seperate month, day, and year
  currentDate = new Date();
  currentMonthName = this.currentDate.toLocaleString('en-us', {
    month: 'long',
  });
  currentMonthNumber = this.currentDate.getMonth() + 1;
  currentDay = this.currentDate.getDate();
  currentYear = this.currentDate.getFullYear();

  // Selected Inputs
  selectedMonth = sessionStorage.getItem('selectedMonth');

  selectedDay = sessionStorage.getItem('selectedDay');

  yearInput = sessionStorage.getItem('yearInput');

  //Combined all selected inputs into one date
  selectedDate = this.selectedMonth + '/' + this.selectedDay + '/' + this.yearInput;

  newSelectedDate: string = this.selectedDate;
  date1: Date = new Date(this.selectedDate);
  dateDifference: number = (this.date1.getTime() - this.currentDate.getTime()) / (1000 * 3600 * 24) + 1;

  updateDate() {
    this.newSelectedDate = this.selectedMonth + '/' + this.selectedDay + '/' + this.yearInput;
    console.log(this.newSelectedDate);

    this.date1 = new Date(this.newSelectedDate);

    //Get the difference between two dates
    this.dateDifference = (this.date1.getTime() - this.currentDate.getTime()) / (1000 * 3600 * 24) + 1;
    sessionStorage.setItem('selectedMonth', String(this.selectedMonth));
    sessionStorage.setItem('selectedDay', String(this.selectedDay));
    sessionStorage.setItem('yearInput', String(this.yearInput));
  }
}
