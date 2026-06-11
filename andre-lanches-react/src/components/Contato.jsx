function Contato() {
  const enviarFormulario = (e) => {
    e.preventDefault(); // Impede a página de recarregar
    alert('Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.');
  };

  return (
    <div className="pagina-interna">
      <h1>Contato</h1>
      <form className="form-contato" onSubmit={enviarFormulario}>
        <input type="text" placeholder="Seu Nome Completo" required />
        <input type="email" placeholder="Seu Melhor E-mail" required />
        <textarea placeholder="Digite aqui sua mensagem ou sugestão..." rows="5" required></textarea>
        <button type="submit">Enviar Mensagem</button>
      </form>
    </div>
  );
}

export default Contato;