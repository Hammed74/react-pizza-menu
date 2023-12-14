import { pizzaData } from "../public/data";
export default function App(){
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}


function Header(){
  return (
  <header className="header">
    <h1 className="header">FAST REACT PIZZA CO</h1>
  </header>
  )
}

function Menu(){
  return (
    <main className="menu">
      <h2>Our Menu</h2>
        <ul className="menu-container">
          {pizzaData.map((pizza) => {
            return <Pizza pizzaObj={pizza} key={pizza.name}/> 
          })}
        </ul>
    </main>
  );
}

function Pizza({pizzaObj}){
  return(
   <li className="pizza-container">
     <img className= {!pizzaObj.soldOut ? "pizza" : "pizza sold-out"} src={pizzaObj.photoName} alt="photo"/>
     <div>
        {!pizzaObj.soldOut ? <h3>{pizzaObj.price}</h3> : <h3 style={{fontWeight: 'bold', color: 'red'}} >SOLD OUT</h3>}
       <h3>{pizzaObj.name}</h3>
       <p className="ingredients">{pizzaObj.ingredients}</p>
     </div>
   </li>
  )
}

function Footer(){
const hour = new Date().getHours()
const openHour = 12;
const closeHour = 24;
const isOpen = hour >= openHour && hour <= closeHour;
console.log(hour)
  return (
    <footer style={{fontSize: '2rem'}}>
      <StoreStatus status={isOpen}/>
    </footer>
  );
}

function StoreStatus({status}){
  return(
    <>
<div style={{marginBottom: '2rem'}} className="order">
        {status && <p>We're Open</p>}
        {!status && <p>We're Closed</p> }
      </div>
      <button className="btn">Order</button>
      </>
  )
}