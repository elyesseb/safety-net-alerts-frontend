import { Component, OnInit } from '@angular/core';
import { Firestation } from 'src/app/models/firestation';
import { FirestationService } from 'src/app/services/firestation.service';

@Component({
  selector: 'app-firestations',
  templateUrl: './firestations.component.html',
  styleUrls: ['./firestations.component.scss']
})
export class FirestationsComponent implements OnInit {
  listFirestations!: any[];

  constructor(private firestationService : FirestationService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.firestationService.findAll().subscribe(
      (data) => {
        this.listFirestations = [...data];
        console.log(data);
        
      }
    )
  }

}
