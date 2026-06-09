import './Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="top-bar">
        <a href="https://www.finanzaschiapas.gob.mx" className="url-sitio">www.finanzaschiapas.gob.mx</a>
      </div>

      <div className="banner-container">
        <div className="logo-container">
          <div className="escudo-chiapas">
            <img src="/img/escudo-de-armas-chiapas.png" alt="Escudo de Chiapas" />
          </div>
          <div className="logo-humanismo">
            <img src="/img/logo-secretaria-de-finanzas.png" alt="Humanismo que Transforma" />
          </div>
        </div>

        <div className="header-titles">
          <h2>PÁNELES DE CONTROL</h2>
          <p className="page-subtitle">DE SITIOS DE TRABAJO Y MONITORES</p>
        </div>
      </div>

      <div className="franja-roja-tramada"></div>
    </header>
  );
};

export default Header;