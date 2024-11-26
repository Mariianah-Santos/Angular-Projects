import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../../interface/Pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  // Objeto de formulario
  formGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    city: new FormControl('', [Validators.required, Validators.minLength(3)])
  });


  // variavel de visibilidade de botoes 
  btnSignup: boolean = true;

  // vetor 
  pessoa: Pessoa[] = [];

  // variavel de indice para selecionar o usuario
  indice: number = - 1;

  // Função de cadastro
  signup() {
    // cadastro
    this.pessoa.push(this.formGroup.value as Pessoa);

    // limpeza dos inputs
    this.formGroup.reset();

  }

  // função de selecionar um usuario
  select(indice: number) {
    
    // atribuir o indice a pessoa
    this.indice = indice;

    // atribuir os dados da pessoa no formulario
    this.formGroup.setValue({
      name: this.pessoa[indice].name,
      age: this.pessoa[indice].age,
      city: this.pessoa[indice].city
    });

    // visibilidade de botoes 
    this.btnSignup = false;
  }


  // Função alterar dados da pessoa
  togglePeople() {

    // alterar pessoa
    this.pessoa[this.indice] = this.formGroup.value as Pessoa;

    // limpar os input
    this.formGroup.reset();

    // visibilidade de botoes 
    this.btnSignup = true;
  }

  // Função delete dados de uma pessoa
  delet() {

    // Atribuir o indice da pessoa
    this.pessoa.splice(this.indice, 1);

    // Limpeza dos inputs
    this.formGroup.reset();

    // visibilidade de botoes 
    this.btnSignup = true;
  }

  // Função cancelar
  cancel() {

    // limpeza dos input
    this.formGroup.reset();

     // visibilidade de botoes 
     this.btnSignup = true;
    

  }

}
