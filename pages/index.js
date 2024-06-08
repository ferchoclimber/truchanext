import React from 'react';
import 'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';
import 'https://unpkg.com/boxicons@latest/css/boxicons.min.css';
import './style.css';

function HomePage() {
  return (
    <>
      <header>
        <div className="header__logo">
          <img src="img/trucha.jpeg" width="120" height="120" alt="Trucha Climbing Logo" />
          <a className="luckiest_guy_regular">Trucha!!!! Climbing</a>
        </div>
        <div className="header_nav">
          <ul>
            <li><a href="index.html" className="btn2">Inicio</a></li>
            <li><a href="qet.html" className="btn2">Que es trucha climbing?</a></li>
            <li><a href="galeria.html" className="btn2">Galeria de imagenes</a></li>
            <li><a href="Contacto.html" className="btn2">Contacto</a></li>
            <li id="login"><a href="login.html">Inicia sesion</a></li>
          </ul>
        </div>
      </header>

      <section id="logo">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="img/2017050909135822319.jpg" width="800" height="600" alt="First slide" />
              <div className="carousel-caption">
                <h3>Tienda</h3>
                <p>Encuentra los mejores productos y materiales necesarios para escalar, contamos con un amplio catalogo de productos locales.</p>
                <button>Entrar</button>
              </div>
            </div>
            {/* Additional carousel items */}
          </div>
          <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>

      {/* Additional sections */}

      <footer>
        <div className="container2">
          <div className="logo2">
            <img src="img/trucha.jpeg" width="100" height="100" alt="Footer Logo" />
          </div>
          <div className="columnas">
            <div className="columna">
              <h4>COLABORACIONES</h4>
              <ul>
                <li><a href="#">IKA climbing gym</a></li>
                {/* Additional links */}
              </ul>
            </div>
            {/* Additional columns */}
          </div>
          <div className="redes-sociales">
            <a href="#"><i className='bx bxl-facebook-circle'></i></a>
            {/* Additional social icons */}
          </div>
        </div>
      </footer>
    </>
  );
}

export default HomePage;

