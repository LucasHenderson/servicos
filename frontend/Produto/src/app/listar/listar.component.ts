import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../model/Produto';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  listaProduto!: Produto[];

  constructor(private router: Router, private service: ProdutoService) { }

  ngOnInit(): void {
    this.listaProduto = this.service.listar();
  }

  modificar(produto: Produto){
    this.service.setInformacoes(produto);
    this.router.navigate(['/modificar']);
  }

  deletar(id: number) {
    this.service.deletar(id).subscribe(() => {
    });
  }

}
