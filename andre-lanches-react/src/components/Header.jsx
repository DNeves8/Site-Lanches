function Header({ paginaAtual, setPaginaAtual }) {
  return (
    <header id="header">
      <div id="logo">
        <img id="logoImg" src="/images/logo.png" alt="Logo André Lanches" />
        <h1 id="tituloLogo">André Lanches</h1>
      </div>
      <nav id="menu">
        <ul className="listaMenu">
          <li>
            <a 
              className={paginaAtual === 'home' ? 'menuAtual' : ''} 
              onClick={() => setPaginaAtual('home')}
            >
              Lanches
            </a>
          </li>
          <li>
            <a 
              className={paginaAtual === 'sobre' ? 'menuAtual' : ''} 
              onClick={() => setPaginaAtual('sobre')}
            >
              Sobre Nós
            </a>
          </li>
          <li>
            <a 
              className={paginaAtual === 'contato' ? 'menuAtual' : ''} 
              onClick={() => setPaginaAtual('contato')}
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;