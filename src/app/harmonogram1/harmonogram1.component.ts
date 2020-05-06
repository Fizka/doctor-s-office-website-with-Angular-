import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WizytaService} from '../wizyta.service';
import {Wizyta} from '../wizyta';

@Component({
  selector: 'app-harmonogram1',
  templateUrl: './harmonogram1.component.html',
  styleUrls: ['./harmonogram1.component.css']
})
export class Harmonogram1Component implements OnInit {

  id: number;
  wizyta: Wizyta;

  constructor(private route: ActivatedRoute, private router: Router, private wizytyService: WizytaService) { }

  ngOnInit() {
    this.wizyta = new Wizyta();
    this.id = this.route.snapshot.params['id'];
  }

  list() {
    this.route.navigate(['wizyty']);
  }

}
