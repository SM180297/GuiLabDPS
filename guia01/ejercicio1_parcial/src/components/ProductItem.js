import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import{Dropdown,DropdownItem,DropdownMenu,DropdownToggle}from 'reactstrap'
var valor=0;
global.name=0;
const ProductItem = ({ addToCart }) => {

  const[dropdown,setDropdown]= useState(false);

  const abriCerrarDropdown=()=>{
    setDropdown(!dropdown);
  }
var hh=[global.name];

const accio=()=>{
    addToCart(1)
    hh=parseInt(global.name);
    global.name= (hh+20);
}
const accio2=()=>{
  addToCart(2)
  hh=parseInt(global.name);
  global.name= (hh+30);
}
const accio3=()=>{
  addToCart(3)
  hh=parseInt(global.name);
  global.name= (hh+50);
}
const accio4=()=>{
  addToCart(4)
  hh=parseInt(global.name);
  global.name= (hh+5);
}
const accio5=()=>{
  addToCart(5)
  hh=parseInt(global.name);
  global.name= (hh+8);
}
const accio6=()=>{
  addToCart(6)
  hh=parseInt(global.name);
  global.name= (hh+90);
}
const accio7=()=>{
  addToCart(7)
  hh=parseInt(global.name);
  global.name= (hh+2);
}
const accio8=()=>{
  addToCart(8)
  hh=parseInt(global.name);
  global.name= (hh+10);
}
const accio9=()=>{
  addToCart(9)
  hh=parseInt(global.name);
  global.name= (hh+40);
}
const accio10=()=>{
  addToCart(10)
  hh=parseInt(global.name);
  global.name= (hh+0.5);
}

  return (
    <>
    
      <Dropdown isOpen={dropdown} toggle={abriCerrarDropdown} direction="down" size="lg">
    <DropdownToggle caret >
     Selecciona el producto
    </DropdownToggle>
    <DropdownMenu>
    <DropdownItem header>Los mejores productos solo aca </DropdownItem>
    <DropdownItem divider/>
      <DropdownItem onClick={() => accio() } >
      <p>Camisa con un valor de $20.00</p>
    </DropdownItem>
    <DropdownItem onClick={() => accio2()} >
      <p>Pantalones con un valor de $30.00</p>
    </DropdownItem>
    <DropdownItem onClick={() => accio3()} >
      <p>Zapatos con un valor de $50.00</p>
    </DropdownItem>
    <DropdownItem onClick={() => accio4()} >
      <p>Calcetines con un valor de $5.00</p>
    </DropdownItem>
    <DropdownItem onClick={() => accio5()} >
      <p>Gorra con un valor de $8.00</p>
    </DropdownItem>
    <DropdownItem onClick={() => accio6()} >
      <p>Lentes con un valor de $90.00</p>
    </DropdownItem>
    <DropdownItem onClick={() => accio7()} >
      <p>Peines con un valor de $2.00</p>
    </DropdownItem>
    <DropdownItem onClick={() => accio8()} >
      <p>Centro negro con un valor de $10.00</p>
    </DropdownItem>
    <DropdownItem onClick={() => accio9()} >
      <p>tenis deportivo con un valor de $40.00</p>
    </DropdownItem>
    <DropdownItem onClick={() => accio10()} >
      <p>Colas para cabello con un valor de $0.50</p>
    </DropdownItem>
    </DropdownMenu>
  </Dropdown> 
  
    </>
  );
};

export default ProductItem;
