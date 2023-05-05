package prod.api.produto.model;

public record DadosDetalhamentoProduto(Long id, String nome) {
    
    public DadosDetalhamentoProduto (Produto produto) {
        this(produto.getId(), produto.getNome());
    }
}
