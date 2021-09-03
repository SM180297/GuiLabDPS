import '../components/ProductItem';
const CartItem = ({ data, delFromCart }) => {

  let { id, name, price, quantity } = data;

  const accio=()=>{
    var hh;
    var jd;
    delFromCart(id)
    hh=parseInt(global.name);
    jd=parseInt(price)
    global.name= (hh-jd);
}
const accio2=()=>{
  var hh;
  var jd;
  var gg;
  var tot;
  delFromCart(id, true)
  hh=parseInt(global.name);
  jd=parseInt(price)
  gg=parseInt(quantity);
  tot=(jd*gg);
  global.name= (hh-tot);
}

  return (
    
    <>
    
      <div style={{ borderBottom: "thin solid gray" }}>
      <h4>{name}</h4>
      <h5>
       ${price}.00 x {quantity} = ${price * quantity}.00  
      </h5>
      <button onClick={() => accio()}>Eliminar Uno</button>
      <br />
      <button onClick={() => accio2()}>Eliminar Todos</button>
      <br />
      <br />
    </div>
   
    
  
    </>
  );
};

export default CartItem;
