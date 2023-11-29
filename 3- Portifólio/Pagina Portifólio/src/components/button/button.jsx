import "./button.css";

function Buttons() {
  return (
    <div className="container button-container">
      <a href="#about" className="btn pri">
        Leia mais
      </a>
      <a href="#contact" className="btn sec">
        Contatos
      </a>
    </div>
  );
}

export default Buttons;
