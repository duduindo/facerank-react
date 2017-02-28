import React from 'react';
import { Drawer as DrawerMdl, Navigation as NavigationMdl } from 'react-mdl';
import { Link } from 'react-router';



const Drawer = () =>
  <DrawerMdl>
    <NavigationMdl>
      <Link to="/">Home</Link>
      <Link to="/search-people">Buscar Pessoas</Link>
      <Link to="/search-local">Buscar Locais</Link>
      <Link to="/ranking">Ranking</Link>
      <Link to="/preferences">Preferências</Link>
      <Link to="/settings">Configurações</Link>
      <Link to="/about">Sobre</Link>
    </NavigationMdl>
  </DrawerMdl>;


export default Drawer;
