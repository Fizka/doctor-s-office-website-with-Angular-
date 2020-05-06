import { Component, OnInit } from '@angular/core';
import {Wizyta} from '../wizyta';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {WizytaService} from '../wizyta.service';

@Component({
  selector: 'app-allharmonogram',
  templateUrl: './allharmonogram.component.html',
  styleUrls: ['./allharmonogram.component.css']
})

export class AllharmonogramComponent implements OnInit {
  wizyty: Observable<Wizyta[]>;

  constructor( private  router: Router, private wizytaService: WizytaService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {}

  GiveUpVisit(id: number) {}

  DetalisVisit(id: number) {}

  BookVisit(id: number, pesel: string) {}

  CheckVisit(id: number, pesel: string) {}

}
