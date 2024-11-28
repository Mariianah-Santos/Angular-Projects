import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../../interface/Pessoa';
import { ListPeopleService } from '../../services/list-people.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing-page-service',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './landing-page-service.component.html',
  styleUrl: './landing-page-service.component.css'
})
export class LandingPageServiceComponent implements OnInit {


   // Objeto de formulario
  formGroup = new FormGroup ({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    city: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

   // variavel de visibilidade de botoes 
   btnSignup: boolean = true;

   // vetor 
   pessoa: Pessoa[] = [];

   id: string;

   list: Pessoa = {
    name: "",
    age: null,
    city: ""
   }

  constructor (private listService: ListPeopleService, private httpClient: HttpClient) {

  }
  ngOnInit(): void {
    this.listService.getPeople().subscribe(
      (data) => {
        this.pessoa = data; // Inicializa a tabela com os dados existentes
      },
      (error) => {
        console.error("Erro ao buscar pessoas:", error);
      }
    );
  }

 
  createSignup() {

    // vinculando o objeto do formGroup 
    this.list = { 
      name: this.formGroup.value.name || "", 
      age: this.formGroup.value.age || null,
      city: this.formGroup.value.city || ""
    };
    this.listService.createPerson(this.list).subscribe(
      (response) => {
  
        // Adicionar a pessoa criada diretamente ao vetor
        this.pessoa.push(response);
  
        // Resetar o formulário
        this.formGroup.reset();
      } 
    );
  }

  edit() {

     // vinculando o objeto do formGroup 
     if (this.formGroup.valid) {
       this.list = { 
        id: this.formGroup.value.id as string,
        name: this.formGroup.value.name as string, 
        age: this.formGroup.value.age as number,
        city: this.formGroup.value.city as string
      };
  
      this.listService.edit(this.list).subscribe({
        next: response => {
           // Atualiza a lista local, substituindo o item editado
        const index = this.pessoa.findIndex((p) => p.id === response.id);
        if (index !== -1) {
          // Substitui a pessoa editada na lista local
          this.pessoa[index] = response;
        }
        }
        }
      );
      
    }

    this.formGroup.reset();

    this.btnSignup = true;
  }
  
  // função para deleta
  deletPerson(id: string): void {
    this.listService.delet(id).subscribe({
      next: () => {
        this.pessoa = this.pessoa.filter(i => i.id !== id);
      }
    });
    this.formGroup.reset();
    this.btnSignup = true;
  }
  

  // função de cancelar alteração
  cancel() {
    this.formGroup.reset();
    this.btnSignup = true;
  }
  
  select(id: string) {
    // Localiza a pessoa pelo ID no array de pessoas
    const selectedPerson = this.pessoa.find((p) => p.id === id);
  
    // função que atualiza os valores do formulário com os dados da pessoa selecionada
    if (selectedPerson) {
      this.formGroup.setValue({
        id: selectedPerson.id,
        name: selectedPerson.name,
        age: selectedPerson.age,
        city: selectedPerson.city,
      });
  
      // Atribui o ID da pessoa à variável para futuras operações (editar/excluir)
      this.id = selectedPerson.id;
  
      // Atualiza a visibilidade dos botões
      this.btnSignup = false;
    } 
  }

}
