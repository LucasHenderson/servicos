package prod.api.produto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import prod.api.produto.model.DadosCadastroProduto;
import prod.api.produto.model.DadosDetalhamentoProduto;
import prod.api.produto.model.Produto;
import prod.api.produto.model.ProdutoRepository;

@RestController
@RequestMapping("produto")
@CrossOrigin("*")
public class ProdutoController {

    @Autowired
    private ProdutoRepository repository;
    
    @PostMapping("/cadastrar")
    @Transactional
    public ResponseEntity cadastrar (@RequestBody DadosCadastroProduto dados) {
        var produto = new Produto(dados);
        repository.save(produto);
        return ResponseEntity.ok(new DadosDetalhamentoProduto(produto));
    }

    @GetMapping("/listar")
    public ResponseEntity<List<DadosDetalhamentoProduto>> listar() {
        List<DadosDetalhamentoProduto> lista = repository.findAll().stream().map(DadosDetalhamentoProduto::new).toList();
        return ResponseEntity.ok(lista);
    }

    @PutMapping("/modificar")
    @Transactional
    public ResponseEntity modificar (@RequestBody DadosDetalhamentoProduto dados) {
        Produto produto = repository.getReferenceById(dados.id());
        produto.modificar(dados);
        return ResponseEntity.ok(new DadosDetalhamentoProduto(produto));
    }

    @DeleteMapping("/deletar/{id}")
    @Transactional
    public ResponseEntity deletar (@PathVariable Long id) {
        repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
