import { Component, OnInit } from '@angular/core';
import { ToDoList } from '../../ToDoList';
import { ListserviceService } from '../../services/listservice.service';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  toDoList: ToDoList [] = [];
  
  faEdit = faEdit;
  faTimes = faTimes;

  constructor(private listService: ListserviceService) {
   
  }

  ngOnInit(): void {
    this.getListService();
  }
  
  getListService(): void {
    this.listService.readList().subscribe(
      (data: ToDoList[]) => {
        this.toDoList = data;
      }
    );
  }


  clickCheckbox(event: Event, listTitle: string): void {

  
    const checkbox = document.getElementById(listTitle) as HTMLInputElement;
    if(checkbox) {
      checkbox.checked = !checkbox.checked;
    }
    event.preventDefault();  // Impede que o evento adicional seja executado
  }

}

