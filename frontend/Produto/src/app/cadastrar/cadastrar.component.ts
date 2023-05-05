import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../services/produto.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private router: Router, private service: ProdutoService, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [""]
    })
  }

  cadastrarProduto() {
    this.service.cadastrar(this.formulario.get("nome")?.value).subscribe(() => {
      this.router.navigate(['/listar']);
    });
  }

  ver(): string {
    return this.formulario.get("nome")?.value;
  }

  limpar(): void {
    this.formulario.get("nome")?.setValue("");
  }

}
