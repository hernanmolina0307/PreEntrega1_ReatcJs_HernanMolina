import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div className="NavBar">
      <h3>Saumerio Molina</h3>
      <div>
        <button className="btn">Ecommerce</button>
        <button className="btn">Galeria</button>
        <button className="btn">Para Aprender</button>
        <button className="btn">Contacto</button>
      </div>
      <CartWidget />
    </div>
  );
}
export default NavBar;