import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente02',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule, FormsModule ],
  templateUrl: './componente02.component.html',
  styleUrl: './componente02.component.css'
})
export class Componente02Component {

  // Codição criada para a exibição de uma mensagem (o false significa que o texto esta desativado)
  textDisable: boolean = false;


  // Codição criada para a exibição de uma mensagem com double click (o false significa que o texto esta desativado)
  showTextdbClick: boolean = false;


   // Codição criada para a exibir uma mensagem e fazer a edição dela (o false significa que o texto esta desativado)
  isEditing: boolean = false;
  text: string = "Clique duas vezes para editar";

   // Codição criada para a exibição de uma mensagem (o false significa que o texto esta desativado) 
  emailError: boolean = false;

  // variavel criada para contabilizar as teclas que estão sendo pressionadas
  charCount: number = 0;

  submitError: boolean = false;

  // Função para exibir uma mensagem
  mensagem() {
    alert("Hello World");
  }

  // função criada para exibir uma mensagem ou texto quando o botao for clicado
  showText(): void {
    this.textDisable = !this.textDisable;
  }

  // Função criada para disparar algo quando aperta duas vezes no botão
  dbClick(): void {
    this.showTextdbClick = !this.showTextdbClick; // usando esse método quando for clicao duas vezes ele tambem irá esconder o texto.
    // this.showTextdbClick = true; Desse jeito também __setFunctionName, mas quando for para esconde, ele não irá funcionar clicando duas vezes.
  }

  // Editando uma mensagem já predefinia, para que o usuario faça sua alteração
  editClick(): void {
    this.isEditing = !this.isEditing;
  }

  // Função criada para mostra alguma alteração no input
  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement; 
    console.log('Input changed:', inputElement.value);
  }

  // Função criada para valida erros de digitações de email
  emailValid(event: Event): void {
    const inputElement = event.target as HTMLInputElement; 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    this.emailError = !emailPattern.test(inputElement.value);
  }

  // Função criada para saber as teclas que p usuarios esta apertando
  keydown(event: KeyboardEvent): void {
    console.log("Tecla pressionada", event.key);
  }

  // função criada so para receber apenas numeros
  number(event: KeyboardEvent): void {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '9', '9', 'Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'];
    if (!numbers.includes(event.key)) {
      event.preventDefault();
    }
  }

  // função criada para saber quais tecla esta pressionando
  keypress(event: KeyboardEvent): void {
    console.log("tecla pressionada", event.key);
  }

  // função criada para conta o numeros de teclas apertadas
  countCharacters(event: KeyboardEvent): void { 
    this.charCount++; 
  }

  // função para saber quais teclas voce apertou e soltou
  onKeyUp(event: KeyboardEvent): void { 
    console.log('Tecla liberada:', event.key); 
  }

  onSubmit(event: Event): void { 
    event.preventDefault(); // Previne o comportamento padrão de envio do formulário 
    // const form = event.target as HTMLFormElement; 
    // const formData = new FormData(form); 
    // const username = formData.get('username'); 
    // const email = formData.get('email'); 
    // console.log('Nome de Usuário:', username); 
    // console.log('Email:', email); 

    const form = event.target as HTMLFormElement; 
    const formData = new FormData(form); 
    const username = formData.get('username')?.toString().trim(); 
    const email = formData.get('email')?.toString().trim();

    if (!username || !email) { 
      this.submitError = true; 
    } else {
      this.submitError = false; 
      console.log('Nome de Usuário:', username);
      console.log('Email:', email);
    }
    
  }
}

