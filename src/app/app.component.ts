import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Please enter comma separated numbers!";
  result: number = 0; 
  error: string = "";
  delimiter = ",";

  onInput(e: any): void{
    this.error="";
    let numbers = e.target.value;
    this.delimiter = ",";
    if(numbers.startsWith("//")) {
      this.delimiter = numbers.charAt(2);
      numbers = numbers.substring(3);
    }
    numbers = numbers.replaceAll("\\n", this.delimiter);
    try{
      this.result = this.add(numbers);
    }catch(err: any) {
      this.error = err.message;
    }
  }

  add(numbers: string) {
    const numArr = numbers.split(this.delimiter);
    let sum = 0;
    for(let num of numArr) {
      if(Number.isNaN(Number(num))) {
        throw new Error(`Input contains invalid value: ${num}`);
      }
      if(Number(num)<0) {
        throw new Error(`negative numbers not allowed ${num}`)
      }
      sum+=Number(num);
    }
    return sum;
  }
}
