import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListserviceService } from '../../services/listservice.service';
import { ToDoList } from '../../ToDoList';


@Component({
  selector: 'app-to-do-list-create',
  templateUrl: './to-do-list-create.component.html',
  styleUrl: './to-do-list-create.component.css'
})
export class ToDoListCreateComponent {


  list: ToDoList = {
    title: ""
  }

  constructor(private router: Router, private listService: ListserviceService) {

  }

  createList(): void {
    this.listService. createList(this.list).subscribe(()=> {
      this.router.navigate(['/']);
    });
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}
