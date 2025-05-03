import './App.css';

function App() {
  return (
    <div className="body">
      <header className="navbar">
        <div className="logo">Meu Logo</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#sobre-mim">Sobre Mim</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>
      <h1>Gabriel Calixto</h1>
      <span id="sub-title">Desenvolvedor Full Stack | Foco em soluções ágeis e escaláveis</span>
      <p>A tecnologia serve como ponte para impulsionar a liberdade, a eficiência e a evolução das empresas</p>
      <ul id="title-links"></ul>
      <li>Github</li>
      <li>HackerRank</li>
      <li>Linkedin</li>
      <li>Currículo</li>
      <p>Links:</p>
      <span id="title-projects">Projetos Principais</span>
      <div id = "project-exibition">Box dos projetos</div>
      <div className="whatsapp-box">
        <a href="https://wa.me/SEU_NUMERO" target="_blank" rel="noopener noreferrer">
          <img src="whatsapp-logo.png" alt="Ícone Whatsapp com seu link" />
        </a>
      </div>
    </div>
  );
}

export default App;
