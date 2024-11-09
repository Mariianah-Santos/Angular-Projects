// import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

interface SignupForm {
  name: FormControl,
  email: FormControl,
  password: FormControl,
  passwordConfirm: FormControl
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  title: string = "Signup";
  signupForm: FormGroup<SignupForm>;

  constructor(private authService: AuthService, private toartsService: ToastrService, private router: Router) {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  register() {
    if (this.signupForm.valid) { 
      if (this.signupForm.value.password !== this.signupForm.value.passwordConfirm) { 
        this.toartsService.error("As senhas não coincidem"); 
        return; 
      } 
      this.authService.register( 
        this.signupForm.value.name!, 
        this.signupForm.value.email!, 
        this.signupForm.value.password!, 
        this.signupForm.value.passwordConfirm!
      ).subscribe({ 
        next: () => { 
          this.toartsService.success("Conta Criada com Sucesso"); 
          this.router.navigate(['/']); // Navegar após sucesso 
          }, 
          error: () => this.toartsService.error("Erro inesperado")}); 
        } else { 
          this.toartsService.error("Por favor, preencha todos os campos corretamente"); 
        }
    }
  }
      


  //  this.authService.register(this.signupForm.value.name!, this.signupForm.value.email!, 
  //   this.signupForm.value.password!, this.signupForm.value.passwordConfirm!).subscribe({
  //     next: () => this.toartsService.success("Conta Criada com Sucesso"),
  //     error: () => this.toartsService.error("Erro inesperavel")
  //   });
  //   this.router.navigate(['/']);
  // }


