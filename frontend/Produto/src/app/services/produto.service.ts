import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private listaProduto!: Produto[];
  private produto!: Produto;
  private url = `http://localhost:8080/produto`;

  constructor(private http: HttpClient) { }

  cadastrar(nome: string) {
    const site = this.url + `/cadastrar`;
    const body = {
      nome: nome
    };
    return this.http.post(site, body);
  }

  listar() {
    this.http.get<Produto[]>(`http://localhost:8080/produto/listar`).subscribe(
      (data) => {this.listaProduto = data}
    )
    return this.listaProduto;
  }

  modificar(id: number, nome: string) {
    const url = `http://localhost:8080/produto/modificar`;
    const body = {
      id: id,
      nome: nome
    };
    return this.http.put(url, body);
  }

  deletar(id: number) {
    const url = `http://localhost:8080/produto/deletar/${id}`;
    return this.http.delete(url);
  }

  setInformacoes(produto: Produto) {
    this.produto = produto;
  }

  getInformacoes() {
    return this.produto;
  }
}
