import { Component, OnInit } from '@angular/core';
import { El_azioni } from '../el_azioni';

@Component({
  selector: 'app-elenco-azioni',
  templateUrl: './elenco-azioni.component.html',
  styleUrls: ['./elenco-azioni.component.css']
})
export class ElencoAzioniComponent implements OnInit {

  el_azioni: El_azioni = {

    id: 1,
    month: 'January',
    day_to_month: 20,
    number_of_work_day: 1,
    num_ticket: 1,
    val_tot_ticket: 7,

  };

  constructor() {}

  ngOnInit() {
  }

}
