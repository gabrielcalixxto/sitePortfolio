import './normalize.css';
import './App.css';


function App() {
  return (
    <div className="body">
      {/* navbar */}
      <header className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="Logo do site" />
        </div>
        <nav>
            <ul className='ul-navbar'>
              <li><a href="#home">Home</a></li>
              <li><a href="#about-me">Sobre mim</a></li>
              <li><a href="#formação">Formação</a></li>
              <li><a href="#projetos">Projetos</a></li>
              <li><a href="#contato">Contatos</a></li>
            </ul>
        </nav>
      </header>
      {/* Fixed Logo */}
      <div className="whatsapp-box">
        <a href="https://wa.me/SEU_NUMERO" target="_blank" rel="noopener noreferrer">
          <img src="whatsapp-logo.png" alt="Ícone Whatsapp com seu link" />
        </a>
      </div>
      {/* Section Home */}
      <section id="home" className="home">
        <h1>Gabriel Calixto</h1>
        <span className="sub-title">Desenvolvedor Full Stack | Foco em soluções ágeis e escaláveis</span>
        <p>A tecnologia serve como ponte para impulsionar a liberdade, a eficiência e a evolução das empresas</p>
        <ul className="title-links">
          <li>Github</li>
          <li>HackerRank</li>
          <li>Linkedin</li>
          <li>Currículo</li>
        </ul>
        <p>Links:</p>
        <span className="title-projects">Projetos Principais</span>
        <div className="project-exibition">Box dos projetos</div>
      </section>
      {/* section about - me */}
      <section id="about-me" className="about-me">
        <h2>Sobre Mim</h2>
        <p>Sou um desenvolvedor que busca agilizar processos e trazer novas soluções com a tecnologia.

          Comecei em programação pois percebi que a tecnologia com sua enorme expansão nos últimos 20 anos, as empresas teriam dificuldade de acompanharem e se adaptarem.
          A empresa que se recusar a mudar irá perder a liderança do mercado pelo grande crescimento que a tecnologia nos proporciona.

          Segundo levantamento da empresa de pesquisa TNS Research empresas que investem em tecnologia crescem aproximadamente 60% comparado as que não investem.
          Meu objetivo é trazer essa evolução para o seu negócio.</p>
        <div className="my-picture">
          <img src="minha-foto.jpg" alt="Minha foto" />
        </div>
      </section >
      {/* Seção Formação */}
      <section id="formação" className="formacao">
        <h2>Formação</h2>
        <p>Formação em Análise e Desenvolvimento de Sistemas - Unopar</p>
      </section >
      {/* Seção Projetos */}
      <section id="projetos" className="projetos">
        <h2>Projetos</h2>
        <p>Projetos que desenvolvi e estou desenvolvendo</p>
        <div className="project-box">Box dos projetos</div>
      </section >
      {/* Seção Contato */}
      <section id="contato" className="contato">
        <h2>Contato</h2>
        <p>Entre em contato comigo através do meu e-mail:</p>
      </section >
    </div>
  );
}

export default App;
