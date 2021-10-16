import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CountryService } from './services/country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'flag';
  countryForm: FormGroup;
  myCountry: string;
  myFlag: any = [];

  countryList = [
    { "countryname": "Maldives" },
    { "countryname": "Bangladesh" },
    { "countryname": "Bhutan" },
    { "countryname": "Sri Lanka" },
    { "countryname": "Pakistan" },
    { "countryname": "Afghanistan" },
    { "countryname": "India" },
    { "countryname": "Nepal" }
  ];

  constructor(private _service: CountryService){}

  ngOnInit(){
    this.countryForm = new FormGroup({
      country: new FormControl(null)
    });
  }

  changeCountry() {
    //console.log(this.countryForm.get('country').value);
    this.myCountry = this.countryForm.get('country').value;

    this._service.GetFlag(this.countryForm.get('country').value)
      .subscribe((sub) => {
          this.myFlag = sub;
      });
  }
}
