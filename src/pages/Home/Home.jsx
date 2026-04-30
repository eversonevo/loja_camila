import React from 'react';
import './Home.css';

import CardPequeno from '../../components/cardpequeno/CardPequeno';

// Atualizado para o novo ícone
import imgClientes from '../../assets/home/feedcliente.png'; 
import imgProdutos from '../../assets/home/produtos.png'; 
import imgRelatorios from '../../assets/home/relatorios.png'; 
import imgVendas from '../../assets/home/vendas.png'; 

const Home = () => {
  return (
    <div className="container-principal">
      <aside className="sidebar">
        <nav className="sidebar-menu-wrapper">
          <div className="menu-links">
            <h3>Menu/Lateral</h3>
          </div>
          <div className="sidebar-footer-interna">
            Footer Lateral
          </div>
        </nav>

        <div className="sidebar-bottom-grid">
          <div className="footer-item-largo">Rodapé Largo</div>
          <div className="footer-item-curto">Status</div>
        </div>
      </aside>

      <main className="content-area">
        <header className="header-topo">
          <h2>Dashboard Home</h2>
        </header>

        <section className="grid-superior">
          {/* CARD 1 - Efeito de Revelação ao passar o mouse test de*/}
          
          
          {/* Card 1: Com imagem e efeito de revelação */}
  <CardPequeno icone={imgClientes} titulo="Clientes" interativo={true} />

   <CardPequeno icone={imgProdutos} titulo="Produtos" interativo={true} />

    <CardPequeno icone={imgVendas} titulo="Vendas" interativo={true} />

     <CardPequeno icone={imgRelatorios} titulo="Relatorios" interativo={true} />
          
        </section>

        <section className="sessao-central">
          <div className="card-destaque-principal">
            <h3>Destaque com Sombra</h3>
          </div>
          <div className="card-lateral-medio">
            <h4>Infos</h4>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;