import React from 'react';
import './Home.css';
import CardPequeno from '../../components/cardpequeno/CardPequeno';

// Imagens
import imgClientes from '../../assets/home/feedcliente.png';
import imgVendas from '../../assets/home/vendas.png';

const Home = () => {
  return (
    <div className="container-principal">
      <aside className="sidebar">
        <div className="sidebar-menu-wrapper">
          <div className="menu-links">Menu/Lateral</div>
          <div className="sidebar-footer-interna">Footer Lateral</div>
        </div>
        <div className="sidebar-bottom-grid">
          <div className="footer-item-largo">Largo</div>
          <div className="footer-item-curto">Status</div>
        </div>
      </aside>

      <main className="content-area">
        <header className="header-topo">Header</header>

        {/* Usando a classe de layout que criamos */}
        <section className="layout-grid-superior">
          <CardPequeno icone={imgClientes} titulo="Clientes" interativo={true} />
          <CardPequeno icone={imgVendas} titulo="Vendas" interativo={true} />
          <CardPequeno icone={imgVendas} titulo="Estoque" interativo={true} />
          <CardPequeno icone={imgVendas} titulo="Relatórios" interativo={true} />
        </section>

        <section className="sessao-central">
          <div className="card-destaque-principal">Destaque</div>
          <div className="card-lateral-medio">Infos</div>
        </section>
      </main>
    </div>
  );
};

export default Home;