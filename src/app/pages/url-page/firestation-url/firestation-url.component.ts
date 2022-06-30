import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FirestationService } from 'src/app/services/firestation.service';

@Component({
  selector: 'app-firestation-url',
  templateUrl: './firestation-url.component.html',
  styleUrls: ['./firestation-url.component.scss']
})
export class FirestationUrlComponent implements OnInit {
  stationId!: number;

  constructor(private firestationService: FirestationService) { }

  ngOnInit(): void {
    this.findPersonsByStationName();
  }
  
  findPersonsByStationName() {
    const params = this.getRequestParams(1);
    this.firestationService.findPersonsByStationName(params).subscribe(
      (data) => {
        console.log(data);
      }
    )
  }

  getRequestParams(stationNumber: any): any {
    let params = {
      stationNumber : 1
    };
    return params;
  }
}
