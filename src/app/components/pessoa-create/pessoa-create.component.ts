import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaService } from '../../services/pessoa.service';

@Component({
  selector: 'app-pessoa-create',
  templateUrl: './pessoa-create.component.html',
  styleUrl: './pessoa-create.component.css'
})
export class PessoaCreateComponent  implements OnInit {


  pessoa = {
    nome: '',
    email: ''
  };
  

  constructor(private pessoaService: PessoaService, private router: Router) { }

  ngOnInit(): void {
  }

  redirect(){
    this.router.navigate(['/pessoas']);
  }

  createPessoa(): void {
    const data = {
      nome: this.pessoa.nome,
      email: this.pessoa.email
    };

    this.pessoaService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.redirect();
        
      },
      error => {
        console.log(error);
      }
    );
    }

    newPessoa(): void {
      this.pessoa = {
        nome: '',
        email: ''
      };
    }

  }
