import { Component, OnInit } from '@angular/core';

import { MomentService } from '../../../services/moment.service'; 
import { Moment } from '../../../Moment';
import { environment } from '../../../../environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  allMoments: Moment[] = []; 
  moments: Moment[] = [];
  baseApiUrl = environment.baseApiUrl;

  faSearch = faSearch;
  searchTerm: string = "";

  constructor (private momentService: MomentService) {

  }

  ngOnInit(): void {
      this.momentService.getMoment().subscribe((items) => {
        const data = items.data;
        data.map((items) => {
          items.created_at = new Date(items.created_at!).toLocaleDateString('pt-br');
        });

        this.allMoments = data;
        this.moments = data;
      });
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.moments = this.allMoments.filter((moment) => {
      return moment.title.toLowerCase().includes(value);
    });
  }


}
