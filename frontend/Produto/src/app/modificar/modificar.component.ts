import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../model/Produto';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  formulario!: FormGroup;
  produto!: Produto;

  constructor(private router: Router, private service: ProdutoService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.produto = this.service.getInformacoes();
    this.formulario = this.formBuilder.group({
      id: [this.produto.id],
      nome: [this.produto.nome]
    })
  }

  modificarProduto() {
    this.service.modificar(this.formulario.get("id")?.value, this.formulario.get("nome")?.value).subscribe(() => {
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
