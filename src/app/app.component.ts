<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Car } from '../app/domain/car';
import { CarService } from '../app/services/carservice';

import { HighchartsChartComponent } from 'highcharts-angular';
import * as Highcharts from 'highcharts';

export class PrimeCar implements Car {
    constructor(public vin?, public year?, public brand?, public color?) {}
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    providers: [CarService]
})
export class AppComponent implements OnInit {
    
    data = [{
        name: 'ItSolutionStuff.com',
        data: [500, 700, 555, 444, 777, 877, 944, 567, 666, 789, 456, 654]
     },{
        name: 'Nicesnippets.com',
        data: [677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654]
     }];

highcharts = Highcharts;
public chartOptions: any = {   
  chart: {
     type: "spline"
  },
  title: {
     text: "Monthly Site Visitor"
  },
  xAxis:{
     categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  },
  yAxis: {          
     title:{
        text:"Visitors"
     } 
  },
  series: this.data
};

    displayDialog: boolean;

    car: Car = new PrimeCar();

    selectedCar: Car;

    newCar: boolean;

    cars: Car[];

    cols: any[];

    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);

        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];

        Highcharts.chart('chart', this.chartOptions, null);
    }

    showDialogToAdd() {
        this.newCar = true;
        this.car = new PrimeCar();
        this.displayDialog = true;
    }

    save() {
        const cars = [...this.cars];
        if (this.newCar) {
            cars.push(this.car);
        } else {
            cars[this.findSelectedCarIndex()] = this.car;
        }
        this.cars = cars;
        this.car = null;
        this.displayDialog = false;
    }

    delete() {
        const index = this.findSelectedCarIndex();
        this.cars = this.cars.filter((val, i) => i !== index);
        this.car = null;
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newCar = false;
        this.car = {...event.data};
        this.displayDialog = true;
    }

    findSelectedCarIndex(): number {
        return this.cars.indexOf(this.selectedCar);
    }

}
=======
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'PrimeNG-ChartJS';
}
>>>>>>> 59432e2... initial commit
