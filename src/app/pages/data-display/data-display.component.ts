import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {
  @Input() displayOutput:any;
  @Output() showInputField=new EventEmitter();
  radioButtonValue='';

  constructor() { }

  ngOnInit(): void {
  }
  
  //send the value of radio button and checks it
  verify(){
    this.showInputField.emit(this.radioButtonValue);
  }

}
