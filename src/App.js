import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from "./components/MenuComponent";




const App = () => {
  return (
    <div>
      <Navbar dark color="primary">
        <div className='container'>
          <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
