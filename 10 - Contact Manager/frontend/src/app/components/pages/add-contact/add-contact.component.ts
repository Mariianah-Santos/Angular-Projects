import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AgendaServiceService } from '../../../service/agenda-service.service';
import { Agenda } from '../../../../Agenda';


@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [[RouterModule, ReactiveFormsModule, CommonModule]],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css',

})
export class AddContactComponent {

  // Objeto criado para trata os dados que serão enviados/recebidos da API
  formGroup = new FormGroup({
    name: new FormControl ('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telephone: new FormControl('', [Validators.required, Validators.minLength(11)])
  });

  agenda: Agenda = {
    name: '',
    email: '',
    telephone: ''
  }


  constructor(private router: Router, private agendaService: AgendaServiceService) {

  }

  // função criada para cancela a ação e volta para home
  cancel() {
    this.router.navigate(['/']);
  }

  // função criada para que apenas numeros sejam digitados no input telefone
  validateNumber(event: Event) { 
    const inputElement = event.target as HTMLInputElement; 
    inputElement.value = inputElement.value.replace(/\D/g, ''); 
  }

  createList() { 
    
    // Populando o objeto agenda com os dados do formulário 
    this.agenda.name = this.formGroup.get('name').value || ''; 
    this.agenda.email = this.formGroup.get('email').value || ''; 
    this.agenda.telephone = this.formGroup.get('telephone').value || ''; 

    // Enviando os dados para a API 
    this.agendaService.create(this.agenda).subscribe(() => { 
      this.router.navigate(['/']); 
    }); 
  }


}


