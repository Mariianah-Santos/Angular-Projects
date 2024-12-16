import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { AgendaServiceService } from '../../../service/agenda-service.service';
import { Agenda } from '../../../../Agenda';

@Component({
  selector: 'app-edit-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css'
})
export class EditContactComponent implements OnInit {

  // Objeto criado para trata os dados que serão enviados/recebidos da API
    formGroup = new FormGroup({
      name: new FormControl ('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      telephone: new FormControl('', [Validators.required, Validators.minLength(11)])
    });

    agenda: Agenda;

  constructor(private router: Router, private agendaService: AgendaServiceService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    
    // Suponha que você receba o ID do contato via rota (por exemplo, /edit/1)
    const contactId = this.route.snapshot.paramMap.get('id');
  
    // Use o serviço para buscar os dados do contato pelo ID
    this.agendaService.getContactById(contactId).subscribe((contact: Agenda) => {
      this.agenda = contact; // Armazena os dados do contato no objeto agenda
  
      // Preenche os campos do formulário com os dados do contato
      this.formGroup.patchValue({
        name: this.agenda.name,
        email: this.agenda.email,
        telephone: this.agenda.telephone
      });
    });
  }

  editList() { 
    if (this.formGroup.valid) { 
      this.agenda = { 
        ...this.agenda, 
        name: this.formGroup.get('name').value, 
        email: this.formGroup.get('email').value, 
        telephone: this.formGroup.get('telephone').value 
      }; 
      this.agendaService.edit(this.agenda).subscribe(() => { 
      this.router.navigate(['/']); 
      })
    }
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
}
