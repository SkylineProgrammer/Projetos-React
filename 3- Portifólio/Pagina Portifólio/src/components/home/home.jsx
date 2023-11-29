import './home.css';
import img from '../props/img2.jpg';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

        <img src={img} alt='' />
      </div>

      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>Rolar Para Baixo</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>

      <h2>
        <span>Sobre mim</span> <br />
        <p>
         Formado em Tecnologia em Jogos Digitais pela Uninove, Atualmente aluno do Intituto Proa atuando como backend do projeto Fica-Frio
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
