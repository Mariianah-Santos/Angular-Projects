import { Component, OnInit } from '@angular/core';
import { ToDoList } from '../../ToDoList';
import { ActivatedRoute, Router } from '@angular/router';
import { ListserviceService } from '../../services/listservice.service';

@Component({
  selector: 'app-to-do-list-edit',
  templateUrl: './to-do-list-edit.component.html',
  styleUrl: './to-do-list-edit.component.css'
})
export class ToDoListEditComponent implements OnInit {

  list: ToDoList = {
    id: '',
    title: ''
  }

  constructor(private router: Router, private listService: ListserviceService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.listService.readList().subscribe((lists: ToDoList[]) => {
          const listToEdit = lists.find(list => list.id === id);
          if (listToEdit) {
            this.list = listToEdit;
          }
        });
      }
  }

  editList(): void {
    this.listService.editList(this.list).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}
