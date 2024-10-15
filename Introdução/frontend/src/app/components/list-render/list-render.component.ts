import { Component } from '@angular/core';
import { ListService } from '../../service/list.service';
import { Animal } from '../../Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  // animals: Animal [] = [
  //   {name: "Lucky", type: "Cachorro", age: 2},
  //   {name: "Lucy", type: "Gato", age: 5},
  //   {name: "Lucian", type: "Vaca", age: 4},
  // ];
  animals: Animal [] = [];

  animalDetails = '';

  constructor (private listService: ListService) {
    this.getAnimal();
  }

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }
  
  remove(animal: Animal): void {
    this.animals = this.animals.filter((a) => animal.name !== a.name);
    this.listService.remove(animal.id).subscribe();
  //  this.animals = this.listService.remove(this.animals, animal);
  }

  getAnimal(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
