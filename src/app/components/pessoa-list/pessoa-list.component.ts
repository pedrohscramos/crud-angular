import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../services/pessoa.service';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrl: './pessoa-list.component.css'
})
export class PessoaListComponent implements OnInit {

  pessoas: any;
  currentPessoa = null;
  currentIndex = -1;

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
      this.readPessoas();
  }

  readPessoas(): void {
    this.pessoaService.readAll()
      .subscribe(
        pessoas => {
          this.pessoas = pessoas;
          console.log(pessoas);
        },
        error => {
          console.log(error);
        });
  }

  setCurrentPessoa(pessoa: any, index: number): void {
    this.currentPessoa = pessoa;
    this.currentIndex = index;
  }
}
