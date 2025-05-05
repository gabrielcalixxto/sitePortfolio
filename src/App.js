import './normalize.css';
import './App.css';

const whatsappLink = "https://wa.me/5532999681739?text=Ol%C3%A1,%20tudo%20bem?%20Vi%20seu%20site%20e%20gostaria%20de%20uma%20conversa.";

function App() {
  return (
    <div className="landing-page">
      {/* navbar 1*/}
      <header className="navbar">
        <div className="logo">
          <a href="#home">
            <img src="/logo.png" alt="Logo do site" />
          </a>
        </div>
        <nav>
          <ul className='ul-navbar'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about-me">Sobre mim</a></li>
            <li><a href="#formation">Formação</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contacts">Contatos</a></li>
          </ul>
        </nav>
      </header>
      {/* Fixed Logo */}
      <aside className="whatsapp-box">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <div className="whatsapp-text">
            <p>Entre em contato comigo</p>
          </div >
        </a>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/124/124034.png" alt="Ícone Whatsapp com seu link" />
        </a>
      </aside>
      {/* Section Home */}
      <section id="home" className="home">
        <article className="home-article">
          <h1>Gabriel Calixto</h1>
          <span className="home-subtitle">Desenvolvedor Full Stack | Foco em soluções e eficiência</span>
          <p>A tecnologia serve como ponte para impulsionar a liberdade, a eficiência e a evolução das empresas</p>
          <div className="home-links">
            <p>Links: </p>
            <ul>
              <li>
                <a href="https://github.com/gabrielcalixxto" target="_blank" rel="noopener noreferrer">
                  <p>Github</p>
                  <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Ícone do GitHub" />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/gabrielcalixxto" target="_blank" rel="noopener noreferrer">
                  <p>Linkedin</p>
                  <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="Ícone do LinkedIn" />
                </a>
              </li>
              <li>
                <a href="/CV - Gabriel Calixto.pdf" target="_blank" rel="noopener noreferrer">
                  <p>Currículo</p>
                  <img src="https://cdn-icons-png.flaticon.com/512/337/337946.png" alt="Ícone do Currículo" />
                </a>
              </li>
            </ul>
          </div>
          <span className="title-projects">Projetos Principais</span>
          <div className="project-exibition">Box dos projetos</div>
        </article>
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
      <section id="formation" className="formation">
        <h2>Formação</h2>
        <p>Formação em Análise e Desenvolvimento de Sistemas - Unopar</p>
      </section >
      {/* Seção Projetos */}
      <section id="projects" className="projects">
        <h2>Projetos</h2>
        <p>Projetos que desenvolvi e estou desenvolvendo</p>
        <div className="project-box">Box dos projetos</div>
      </section >
      {/* Seção Contato */}
      <section id="contacts" className="contacts">
        <h2>Contato</h2>
        <p>Entre em contato comigo através do meu e-mail:</p>
      </section >
    </div >
  );
}

export default App;
