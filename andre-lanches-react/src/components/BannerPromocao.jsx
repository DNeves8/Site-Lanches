function BannerPromocao({ titulo, itens, preco }) {
  return (
    <div id="promotionBanner">
      <h1 id="promocaoH1">{titulo}</h1>
      <h2 id="promocaoValor">{itens} = {preco}</h2>
    </div>
  );
}

export default BannerPromocao;