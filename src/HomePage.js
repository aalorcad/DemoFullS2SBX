import React, { useState } from "react";
import { Button } from "react-bootstrap";
import pcgamer from "./fotos/pcgamer.jpg";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return <h1>Hola mundo. Soy el componente NavBar</h1>;
}

function Content(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={pcgamer} />
        <Card.Body>
          <Card.Title>Producto 1</Card.Title>
          <Card.Text>el pc nae que el elian sueña tener.</Card.Text>
          <Button variant="primary">Agregar al Carro</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

function Footer() {
  return <h1>Hola mundo. Soy el componente Footer</h1>;
  <Button variant="Primary">Primary</Button>;
}

function Product(props) {
  const prodid = props.prodid;
  return (
    <div>
      (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={pcgamer} />
        <Card.Body>
          <Card.Title> i 13 20900k rtx 6090</Card.Title>
          <Card.Text>el pc nae que el elian sueña tener.</Card.Text>
          <Button variant="primary">Agregar al Carrito</Button>
        </Card.Body>
      </Card>
      );
    </div>
  );
}

function Products(props) {
  const num_prods = props.likes;

  // Para cada producto, crear un componente Product que reciba el id del producto
  // y retorne un tag html
  const complist = [];
  for (let i = 0; i < num_prods; i++) {
    complist.push(<Product key={i} prodid={i} />);
  }

  return <div>{complist}</div>;
}

export default function HomePage() {
  const [count, setCount] = React.useState(0);
  const [saludo, setSaludo] = React.useState("Hola");

  function addClick() {
    setCount(count + 1);
  }
  function subtractClick() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  }

  return (
    <div>
      <NavBar />
      <button onClick={subtractClick}> - </button>
      <b> Mostrando {count} producto(s) </b>
      <button onClick={addClick}> + </button>
      {/* {complist} */}
      <Products likes={count} />
      <Footer />
    </div>
  );
}
