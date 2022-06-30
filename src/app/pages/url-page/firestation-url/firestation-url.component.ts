import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Station } from 'src/app/models/station';
import { FirestationService } from 'src/app/services/firestation.service';
import { StationService } from 'src/app/services/station.service';

@Component({
  selector: 'app-firestation-url',
  templateUrl: './firestation-url.component.html',
  styleUrls: ['./firestation-url.component.scss']
})
export class FirestationUrlComponent implements OnInit {
  stationId!: number;
  listStation!: Station[];

  constructor(
    private firestationService: FirestationService,
    private stationService : StationService
    ) { }

  ngOnInit(): void {
    this.findAllStation();
    this.findPersonsByStationName();
  }

  findAllStation() {
    this.stationService.findAll().subscribe((data) => {
      this.listStation = [...data];
    })
  }
  
  findPersonsByStationName() {
    const params = this.getRequestParams(2);
    this.firestationService.findPersonsByStationName(params).subscribe(
      (data) => {
        //console.log(data);
      }
    )
  }

  getRequestParams(stationNumber: any): any {
    let params = {
      stationNumber : stationNumber
    };
    return params;
  }
}
