import React from 'react';

function App() {
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
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="img/2017050909135822319.jpg" width="800" height="600" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="img/IMG_0585.JPG" width="1200" height="600" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="img/nm2.jpg" width="700" height="600" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
          </div>
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
          </div>
          <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </section>

      <section id="barraMedia">
        <center>
          <p>Atrevete a vivir la experiencia</p>
          <video src="img/video2.mp4" controls width="600" height="500" />
        </center>
      </section>

      <section id="tienda">
        <div className="carta">
          <h3>Escalada en chihuahua</h3>
          <p>Puedes acceder a la informacion de todas las zonas de escalada que hay en chihuahua, ademas de la historia de cada una de la zonas, sobre quien las desarrollo y que año se empezo a escalar ahi.</p>
          <a href="escaladaChih.html"><button>Ver</button></a>
        </div>

        <div className="carta">
          <h3>Donaciones</h3>
          <p>Accede a la cuenta comun para que puedas apoyar la escalada en Chihuahua, las colaboraciones seran destinadas a continuar con el desarrollo de vias nuevas o en su defecto en la reequipacion de las vias existentes. </p>
          <a href="donaciones.html"><button>Ver</button></a>
        </div>

        <div className="carta">
          <h3>Cursos</h3>
         
     <p>Quieres aprender a escalar? haz click para acceder a cursos de escalada, vive la experencia 
     de este hermoso deporte y agenda una clase muestra.
     </p>
     <a href="cursos.html"><button>Ver</button></a>
    </div>
  </section>

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

  <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
</>
  );
}

export default App;