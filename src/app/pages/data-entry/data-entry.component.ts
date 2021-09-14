import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent implements OnInit {
  data=[];            //array to store the values
  usernameData='';  //Variables 
  emailData='';
  addressData='';
  stateData='';
  cityData='';
  showInputField: any;
  displayOutput:any;

  constructor() { }

  ngOnInit(): void {
  }

  //function call after details will be added and click on add detals button
  getData(){
    //if all entery fields are empty
    if(this.usernameData=='' && this.emailData=='' && this.addressData=='' && this.stateData=='' && this.cityData==''){
      alert("Please enter details.");
    }

    //if entry fields have value
    else{
    this.data.push({'Username':this.usernameData, 'Email': this.emailData, 'Address': this.addressData, 'State': this.stateData, 'City': this.cityData});
    this.usernameData='';
    this.emailData='';
    this.addressData='';
    this.stateData='';
    this.cityData='';
    }
  }

  //accept data comes from radio button from data-display component
  acceptData(event: any){
    this.showInputField=event;
  }
}
