import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Station } from 'src/app/models/station';
import { Users } from 'src/app/models/users';
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
  respList!: Users[];

  constructor(
    private firestationService: FirestationService,
    private stationService : StationService
    ) { }

  ngOnInit(): void {
    this.findAllStation();
    
  }
  
  findAllStation() {
    this.stationService.findAll().subscribe((data: Station[]) => {
      this.listStation = data;
    })
  }
  
  findPersonsByStationName(e: any) {
    const params = this.getRequestParams(e.target.value);
    this.firestationService.findPersonsByStationName(params).subscribe(
      (data) => {
        //console.log(data);
        this.respList = data;
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
