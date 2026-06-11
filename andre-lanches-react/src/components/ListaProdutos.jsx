function ListaProdutos() {
  // Array de lanches que o JavaScript renderiza na tela de forma automática
  const produtos = [
    { id: 1, nome: "X-Salada", preco: "8,00", img: "/images/xsalada.jpg" },
    { id: 2, nome: "Cheddar", preco: "17,00", img: "/images/cheddar.jpg" },
    { id: 3, nome: "Batata Frita", preco: "7,00", img: "/images/batata.jpg" },
    { id: 4, nome: "X-Burguer", preco: "1,50", img: "/images/cheese.jpg" },
    { id: 5, nome: "Big Tower", preco: "20,50", img: "/images/bigtower.jpg" },
    { id: 6, nome: "X-Frango", preco: "12,90", img: "/images/fragonrequeijao.jpg" },
    { id: 7, nome: "Nuggets (c/ 8)", preco: "6,50", img: "/images/nuggets.jpg" },
    { id: 8, nome: "Refri (Lata)", preco: "4,50", img: "/images/refri.jpg" },
    { id: 9, nome: "Sucos (Vários Sabores)", preco: "8,50", img: "/images/sucos.jpg" }
  ];

  return (
    <div id="maisVendidos">
      <h1 id="tituloConteudo">Nossos Lanches</h1>
      <div id="areaProdutos">
        <div className="gridProdutos">
          {produtos.map((produto) => (
            <div key={produto.id} className="cardProduto">
              <p className="tituloProduto">{produto.nome}</p>
              <img src={produto.img} alt={produto.nome} />
              <p className="precoProduto">R$: {produto.preco}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListaProdutos;