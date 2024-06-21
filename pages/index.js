import React from 'react';

function TruchaClimbing() {
  return (
    <>
      <header>
        <div className="header__logo">
          <img src="img/trucha.jpeg" width="120" height="120" alt="Trucha Climbing" />
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
        <div className="slider-box">
          <ul>
            <li>
              <img src="img/2017050909135822319.jpg" height="500" width="600" alt="Imagen 1" />
              <div className="texto">
                <h2>imagen 1</h2>
                <p>textodjñjsñjfñsjñsjñsjgjgñsjgñsjgñsjgñsgjñwjgñsjñ</p>
              </div>
            </li>
            <li>
              <img src="img/IMG_0585.JPG" height="500" width="800" alt="Imagen 2" />
              <div className="texto">
                <h2>imagen 2</h2>
                <p>textodjñjsñjfñsjñsjñsjgjgñsjgñsjgñsjgñsgjñwjgñsjñ</p>
              </div>
            </li>
            <li>
              <img src="img/nm2.jpg" height="500" width="800" alt="Imagen 3" />
              <div className="texto">
                <h2>imagen 3</h2>
                <p>textodjñjsñjfñsjñsjñsjgjgñsjgñsjgñsjgñsgjñwjgñsjñ</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section id="barraMedia" style={{ textAlign: 'center' }}>
        <p>Atrevete a vivir la experiencia</p>
        <video src="img/video2.mp4" controls width="600" height="500" />
      </section>

      <section id="tienda">
        <div className="carta">
          <h3>Escalada en chihuahua</h3>
          <p>Puedes acceder a la informacion de todas las zonas de escalada que hay en chihuahua, ademas de la historia de cada una de las zonas, sobre quien las desarrollo y que año se empezo a escalar ahi.</p>
          <a href="escaladaChih.html"><button>Ver</button></a>
        </div>
        <div className="carta">
          <h3>Donaciones</h3>
          <p>Accede a la cuenta comun para que puedas apoyar la escalada en Chihuahua, las colaboraciones seran destinadas a continuar con el desarrollo de vias nuevas o en su defecto en la reequipacion de las vias existentes.</p>
          <a href="donaciones.html"><button>Ver</button></a>
        </div>
        <div className="carta">
          <h3>Cursos</h3>
          <p>Quieres aprender a escalar? haz click para acceder a cursos de escalada, vive la experiencia de este hermoso deporte y agenda una clase muestra.</p>
          <a href="cursos.html"><button>Ver</button></a>
        </div>
      </section>

      <footer>
        <div className="container2">
          <div className="logo2">
            <img src="img/trucha.jpeg" width="100" height="100" alt="Trucha Logo" />
          </div>
          <div className="columnas">
            <div className="columna">
              <h4>COLABORACIONES</h4>
              <ul>
                <li><a href="#">IKA climbing gym</a></li>
                <li><a href="#">Larva</a></li>
                <li><a href="#">Sayab Centro deportivo</a></li>
              </ul>
            </div>
            <div className="columna">
              <h4>GRUPOS SOCIALES</h4>
              <ul>
                <li><a href="#">Viva la rock</a></li>
                <li><a href="#">Club Alpino</a></li>
                <li><a href="#">La beta chica</a></li>
              </ul>
            </div>
            <div className="columna">
              <h4>MARCAS PRINCIPALES</h4>
              <ul>
                <li><a href="#">Petzel Mexico</a></li>
                <li><a href="#">The north face</a></li>
                <li><a href="#">Arterix</a></li>
                <li><a href="#">Black dimond</a></li>
                <li><a href="#">La sportiva</a></li>
              </ul>
            </div>
          </div>
          <div className="redes-sociales">
            <a href="#"><i className='bx bxl-facebook-circle'></i></a>
            <a href="#"><i className='bx bxl-instagram-alt'></i></a>
            <a href="#"><i className='bx bxl-twitter'></i></a>
            <a href="#"><i className='bx bxl-youtube'></i></a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default TruchaClimbing;