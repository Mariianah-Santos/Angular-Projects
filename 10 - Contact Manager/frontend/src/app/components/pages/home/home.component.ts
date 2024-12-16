import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Agenda } from '../../../../Agenda';
import { AgendaServiceService } from '../../../service/agenda-service.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [[RouterModule, CommonModule]],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  agenda: Agenda [] = [];


  constructor (private agendaService: AgendaServiceService) {

  }

  ngOnInit(): void {
      this.getAgendaService();
  }

  getAgendaService(): void {
    this.agendaService.readList().subscribe(
      (data: Agenda[]) => {
        this.agenda = data;
      }
    );
  }
}
