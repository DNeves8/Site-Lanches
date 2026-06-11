import { useState } from 'react';
import Header from './components/Header';
import BannerPromocao from './components/BannerPromocao';
import ListaProdutos from './components/ListaProdutos';
import SobreNos from './components/SobreNos';
import Contato from './components/Contato';
import EntregaFlutuante from './components/EntregaFlutuante';

function App() {
  // Esse estado em JavaScript controla qual tela está ativa no site ('home', 'sobre' ou 'contato')
  const [paginaAtual, setPaginaAtual] = useState('home');

  return (
    <div className="app-container">
      {/* O cabeçalho recebe a página atual e a função de mudar de página */}
      <Header paginaAtual={paginaAtual} setPaginaAtual={setPaginaAtual} />
      
      {/* Conteúdo Principal do Site */}
      <main id="content">
        {/* Se a página atual for 'home', mostra o Banner e os Lanches */}
        {paginaAtual === 'home' && (
          <>
            <BannerPromocao titulo="Promoção!" itens="X-Salada + Batata" preco="9,90" />
            <ListaProdutos />
          </>
        )}

        {/* Se a página atual for 'sobre', mostra a tela Sobre Nós */}
        {paginaAtual === 'sobre' && <SobreNos />}

        {/* Se a página atual for 'contato', mostra a tela de Contato */}
        {paginaAtual === 'contato' && <Contato />}
      </main>

      {/* Bloco fixo do telefone que fica visível em todas as páginas */}
      <EntregaFlutuante />
    </div>
  );
}

export default App;