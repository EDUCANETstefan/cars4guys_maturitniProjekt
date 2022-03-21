import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPriceData} from "./IPriceData";
import {IOdometerData} from "./IOdometerData";
import {IDecoceItem} from "./IDecoceItem";
import * as sha1 from 'simple-sha1';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  isSignedIn = false
  items: Array<IDecoceItem> = []


  data = {
    "decode": [
      {
        "label": "Make",
        "value": "Audi"
      },
      {
        "label": "Manufacturer",
        "value": "Audi AG"
      },
      {
        "label": "Plant Country",
        "value": "GERMANY"
      },
      {
        "label": "Product Type",
        "value": "Passenger Car"
      },
      {
        "label": "Manufacturer Address",
        "value": "Felix Wankel Strasse, 74148 Neckarsulm, Germany"
      },
      {
        "label": "Check Digit",
        "value": 2
      },
      {
        "label": "Valid Check Digit",
        "value": 2
      },
      {
        "label": "Check Digit Validity",
        "value": "valid"
      },
      {
        "label": "Sequential Number",
        "value": 330924
      },
      {
        "label": "Body",
        "value": "Sedan/Saloon"
      },
      {
        "label": "Engine Cylinders",
        "value": 6
      },
      {
        "label": "Engine Displacement (ccm)",
        "value": 2967
      },
      {
        "label": "Number of Doors",
        "value": 4
      },
      {
        "label": "Engine Model",
        "value": "Audi"
      },
      {
        "label": "Engine Power (kW)",
        "value": 224
      },
      {
        "label": "Fuel Type - Primary",
        "value": "Gasoline"
      },
      {
        "label": "Model",
        "value": "A6"
      },
      {
        "label": "Model Year",
        "value": 2011
      },
      {
        "label": "Plant City",
        "value": "NECKARSULM"
      },
      {
        "label": "Series",
        "value": "Prestige Quattro"
      },
      {
        "label": "Transmission",
        "value": "Automatic"
      },
      {
        "label": "Engine (full)",
        "value": "3.0 TFSI BV6 (300 Hp) quattro S tronic"
      },
      {
        "label": "Number of Seats",
        "value": 5
      },
      {
        "label": "Engine Cylinders Position",
        "value": "V engine"
      },
      {
        "label": "Drive",
        "value": "4x4 - Four-wheel drive"
      },
      {
        "label": "Length (mm)",
        "value": 4915
      },
      {
        "label": "Height (mm)",
        "value": 1468
      },
      {
        "label": "Width (mm)",
        "value": 1874
      },
      {
        "label": "Fuel System",
        "value": "Direct injection"
      },
      {
        "label": "Engine Torque",
        "value": 440
      },
      {
        "label": "Wheelbase (mm)",
        "value": 2912
      },
      {
        "label": "Engine Position",
        "value": "Front, longitudinal"
      },
      {
        "label": "Fuel Capacity",
        "value": 75
      },
      {
        "label": "Front Breaks",
        "value": "Ventilated discs"
      },
      {
        "label": "Rear Breaks",
        "value": "Disc"
      },
      {
        "label": "Valves per Cylinder",
        "value": 4
      },
      {
        "label": "Track Front (mm)",
        "value": 1627
      },
      {
        "label": "Track Rear (mm)",
        "value": 1618
      },
      {
        "label": "Max Speed (km/h)",
        "value": 250
      },
      {
        "label": "ABS",
        "value": 1
      },
      {
        "label": "Wheel Size",
        "value": "225/55 R17 97W"
      },
      {
        "label": "Acceleration 0-100 km/h",
        "value": 5.5
      },
      {
        "label": "Engine Compression Ratio",
        "value": 10.3
      },
      {
        "label": "Steering Type",
        "value": "Steering rack"
      },
      {
        "label": "Engine Stroke",
        "value": 89
      },
      {
        "label": "Engine Cylinder Bore",
        "value": 84.5
      },
      {
        "label": "Minimum volume of Luggage (trunk)",
        "value": 530
      },
      {
        "label": "Max Weight (kg)",
        "value": 2350
      },
      {
        "label": "Production Stopped",
        "value": 2014
      },
      {
        "label": "Production Started",
        "value": 2011
      },
      {
        "label": "Front Suspension",
        "value": "Multi-link suspension"
      },
      {
        "label": "Rear Suspension",
        "value": "Independent on trapezoidal lever"
      },
      {
        "label": "Fuel Consumption l/100km (Urban)",
        "value": 10.8
      },
      {
        "label": "Fuel Consumption l/100km (Extra Urban)",
        "value": 6.6
      },
      {
        "label": "Fuel Consumption l/100km (Combined)",
        "value": 8.2
      },
      {
        "label": "Number of Gears",
        "value": 7
      },
      {
        "label": "Valve Train",
        "value": "DOHC"
      },
      {
        "label": "Power Steering",
        "value": "Electric Steering"
      },
      {
        "label": "Maximum volume of Luggage (trunk)",
        "value": 995
      },
      {
        "label": "Wheel Rims Size",
        "value": "8J X R17"
      },
      {
        "label": "Engine Turbine",
        "value": "Turbo / Intercooler (Turbocharging / Intercooler)"
      },
      {
        "label": "Minimum turning circle (turning diameter)",
        "value": 11.9
      },
      {
        "label": "Emission Standard",
        "value": "Euro 5"
      },
      {
        "label": "CO2 Emission",
        "value": 190
      },
      {
        "label": "Drag Coefficient",
        "value": 0.28
      },
      {
        "label": "Permitted trailer load without brakes (kg)",
        "value": 750
      },
      {
        "label": "Width including mirrors (mm)",
        "value": 2086
      },
      {
        "label": "Max roof load (kg)",
        "value": 100
      },
      {
        "label": "Permitted towbar download (kg)",
        "value": 85
      },
      {
        "label": "Rear Overhang (mm)",
        "value": 1091
      },
      {
        "label": "Front Overhang (mm)",
        "value": 912
      },
      {
        "label": "Permitted trailer load with brakes 8% (kg)",
        "value": 2100
      },
      {
        "label": "Engine Oil Capacity (l)",
        "value": 6.8
      },
      {
        "label": "Engine Coolant (l)",
        "value": 12
      },
      {
        "label": "Engine Max Speed (rpm)",
        "value": 6500
      },
      {
        "label": "Wheelbase Array (mm)",
        "value": [
          2912
        ]
      },
      {
        "label": "Wheel Size Array",
        "value": [
          "225/55 R17 97W",
          "225/55 R17 98Y"
        ]
      },
      {
        "label": "Wheel Rims Size Array",
        "value": [
          "8J X R17"
        ]
      },
      {
        "label": "Price",
        "value": [
          {
            "date": "2016-10-19",
            "price": 16950,
            "currency": "EUR"
          },
          {
            "date": "2017-04-18",
            "price": 16250,
            "currency": "EUR"
          },
          {
            "date": "2018-12-04",
            "price": 12250,
            "currency": "EUR"
          },
          {
            "date": "2019-02-24",
            "price": 11500,
            "currency": "EUR"
          }
        ]
      },
      {
        "label": "Odometer (km)",
        "value": [
          {
            "date": "2016-10-19",
            "odometer": 169590
          },
          {
            "date": "2017-04-18",
            "odometer": 177890
          },
          {
            "date": "2018-12-04",
            "odometer": 199658
          },
          {
            "date": "2019-02-24",
            "odometer": 219859
          }
        ]
      }
    ]
  };


  ngOnInit(): void {
    this.isSignedIn = localStorage.getItem('user') !== null;
  }

  priceHistory: Array<IPriceData> = []
  odometerHistory: Array<IOdometerData> = []
  odeslanReq: boolean = false

  sendRequest(vincode: string) {


    const apiPrefix = "https://api.vindecoder.eu/3.1";
    const apikey = "ecf17af9bfff";   // Your API key
    const secretkey = "60655b63c3";  // Your secret key
    const id = "decode";
    const vin = (vincode).toUpperCase();



    const hash = sha1.sync(vin + "|" + id + "|" + apikey + "|" + secretkey)
    const controlsum = hash.substring(0,10);
    // controlsum = (shasum.digest(vin + "|" + id + "|" + apikey + "|" + secretkey)).substring(0, 10);
    //const controlsum = (shasum.digest(vin + "|" + id + "|" + apikey + "|" + secretkey)).substring(0, 10);

    console.log(vin + "|" + id + "|" + apikey + "|" + secretkey)
    console.log(controlsum)
    //const data = file_get_contents("{$apiPrefix}/{$apikey}/{$controlsum}/decode/{$vin}.json", false);
    //const result = json_decode($data);

    if (this.isSignedIn) {
      this.odeslanReq = true
      for (let i = 0; i < this.data.decode.length; i++) {

        if (this.data.decode[i].label === "Wheelbase Array (mm)" || this.data.decode[i].label === "Wheel Size Array" || this.data.decode[i].label === "Wheel Rims Size Array") {
          this.items.push({
            label: this.data.decode[i].label,
            value: (this.data.decode[i].value as any[]).join(", ")
          })
        } else if (this.data.decode[i].label === "Price") {
          this.priceHistory = (this.data.decode[i].value as IPriceData[])
        } else if (this.data.decode[i].label === "Odometer (km)") {
          this.odometerHistory = (this.data.decode[i].value as IOdometerData[])
        } else this.items.push(this.data.decode[i] as IDecoceItem)
      }
    } else alert("Musíš být přihlášen!")
  }

}
