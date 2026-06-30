import { useEffect } from 'react';
import './index.css';

function App() {
  useEffect(() => {
    const elementosFade = document.querySelectorAll(".scroll-fade");
    const configuracion = { threshold: 0.05, rootMargin: "0px 0px -20px 0px" };
    const observador = new IntersectionObserver((entradas, observer) => {
      entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("appear");
          observer.unobserve(entrada.target);
        }
      });
    }, configuracion);
    elementosFade.forEach(elemento => observador.observe(elemento));
  }, []);

  return (
    <>
      <header className="main-header">
        <div className="top-bar">
          <a href="https://www.finanzaschiapas.gob.mx" className="url-sitio">www.finanzaschiapas.gob.mx</a>
        </div>
        <div className="banner-container">
          <div className="logo-container">
            <div className="escudo-chiapas"><img src="/img/escudo-de-armas-chiapas.png" alt="Escudo" /></div>
            <div className="logo-humanismo"><img src="/img/logo-secretaria-de-finanzas.png" alt="Humanismo" /></div>
          </div>
          <div className="header-titles">
            <h2>PÁNELES DE CONTROL</h2>
            <p className="page-subtitle">DE SITIOS DE TRABAJO Y MONITORES</p>
          </div>
        </div>
        <div className="franja-roja-tramada"></div>
      </header>

      <main className="container">
        <section className="dashboard-section">
          <h2 className="section-title">SUBSISTEMAS DE PLANEACIÓN</h2>
          <div className="paneles-row horizontal-row">

            <article className="card-png-only scroll-fade">
              <a href="URL_SIESE" target="blank" rel="noopener noreferrer">
                <img src="/img/siese-banner.png" alt="SIESE" />
              </a>   
            </article>

            
            <article className="card-png-only scroll-fade">
              <a href="https://www.ceieg.chiapas.gob.mx/" target="_blank" rel="noopener noreferrer"> 
               <img src="/img/ceieg-banner.png" alt="CEIEG" />
              </a>                   
            </article>
          </div>
        </section>

        <section className="dashboard-section">
  <h2 className="section-title">SITIOS DE TRABAJO DE LOS ORGANISMOS PÚBLICOS</h2>
  <div className="paneles-row dynamic-flex">
    
    <article className="card scroll-fade">
              <a href="https://siahe.finanzaschiapas.gob.mx/SIPLAN2025/Cuenta/Login?ReturnUrl=%2fSIPLAN2025" target="_blank" rel="noopener noreferrer">
        <div className="card-icon"><img src="/img/siplan.png" alt="SIPLAN" /></div>
        <div className="card-content"><h3>SIPLAN</h3><p>Sistema Integral de Planeación</p></div>
      </a>
    </article>

    <article className="card scroll-fade">
              <a href="https://sigha.finanzaschiapas.gob.mx/SIGHA/2026/Presupuesto/Principal/login" target="_blank" rel="noopener noreferrer">
        <div className="card-icon"><img src="/img/sigha.png" alt="SIGHA" /></div>
        <div className="card-content"><h3>SIGHA</h3><p>Sistema Integral de Gestión Hacendaria y Administrativa</p></div>
      </a>
    </article>

    <article className="card scroll-fade">
      <a href="URL_SISAI" target="_blank" rel="noopener noreferrer">
        <div className="card-icon"><img src="/img/sisai.png" alt="SISAI" /></div>
        <div className="card-content"><h3>SISAI</h3><p>Sistema de Seguimiento de Acciones de Inversión</p></div>
      </a>
    </article>

    <article className="card scroll-fade">
              <a href="https://sitec.planeacion.chiapas.gob.mx/" target="_blank" rel="noopener noreferrer">
        <div className="card-icon"><img src="/img/sitec.png" alt="SITEC" /></div>
        <div className="card-content"><h3>SITEC</h3><p>Sistema Integral del Tablero Estratégico de Control</p></div>
      </a>
    </article>

  </div>
</section>

<section className="dashboard-section">
  <h2 className="section-title">MONITORES</h2>
  <div className="paneles-row monitores-flex">
    
    <article className="card scroll-fade">
              <a href="https://www.monitor.planeacion.chiapas.gob.mx/" target="_blank" rel="noopener noreferrer">
        <div className="card-icon"><img src="/img/monitor-de-gasto-publico-estatal.png" alt="Gasto Público" /></div>
        <div className="card-content"><h3>MONITOR DE GASTO PÚBLICO ESTATAL</h3></div>
      </a>
    </article>

    <article className="card scroll-fade">
              <a href="https://www.visores.planeacion.chiapas.gob.mx/" target="_blank" rel="noopener noreferrer">
        <div className="card-icon"><img src="/img/evaluacion-a-la-inversion-publica-estatal.png" alt="Evaluación" /></div>
        <div className="card-content"><h3>EVALUACIÓN DE LA INVERSIÓN PÚBLICA ESTATAL</h3></div>
      </a>
    </article>

    <article className="card scroll-fade">
              <a href="https://bancodeproyectos.chiapas.gob.mx/" target="_blank" rel="noopener noreferrer">
        <div className="card-icon"><img src="/img/banco-de-proyectos-de-la-inversion-publica.png" alt="Banco Proyectos" /></div>
        <div className="card-content"><h3>BANCO DE PROYECTOS DE LA INVERSIÓN PÚBLICA</h3></div>
      </a>
    </article>

    <article className="card scroll-fade">
              <a href="https://agenda2030.chiapas.gob.mx/" target="_blank" rel="noopener noreferrer">
        <div className="card-icon"><img src="/img/agenda-2030-para-el-desarrollo-sustentable.png" alt="Agenda 2030" /></div>
        <div className="card-content"><h3>AGENDA 2030 PARA EL DESARROLLO SUSTENTABLE</h3></div>
      </a>
    </article>

    <article className="card scroll-fade">
      <a href="URL_MONITOR_SITEC" target="_blank" rel="noopener noreferrer">
        <div className="card-icon"><img src="/img/monitor-del-sitec.png" alt="Monitor SITEC" /></div>
        <div className="card-content"><h3>MONITOR DEL SITEC</h3></div>
      </a>
    </article>

  </div>
</section>
      </main>

      <footer className="main-footer">
        <h3 className="footer-title-main">Secretaría de Finanzas</h3>
       <div className="footer-content-row">
          <div className="footer-column">
             
            <h4>Contacto:</h4>
            <p><strong>Manuel Francisco Antonio Pariente Gavito</strong><br />Secretario de Finanzas<br /><a href="mailto:mpariente@finanzaschiapas.gob.mx">mpariente@finanzaschiapas.gob.mx</a></p>
            <br /><p><strong>José Antonio Zenteno Santiago</strong><br />Subsecretario de Planeación<br /><a href="mailto:jzenteno@finanzaschiapas.gob.mx">jzenteno@finanzaschiapas.gob.mx</a></p>
          </div>
          <div className="footer-column">
            <h4>Visítanos:</h4>
            <p>Torre Chiapas, Nivel 10<br />Tuxtla Gutiérrez, Chiapas. CP 29045<br />Tel: 961 691 4020</p>
          </div>
        </div> 
      </footer>
    </>
  );
}

export default App;