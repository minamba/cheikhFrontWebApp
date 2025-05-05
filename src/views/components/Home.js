import '../../App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

export const Home = () => {
  return (
    <div>
      {/* Section 1 : Hero avec vidéo */}
      <section className="hero-section-with-image d-flex align-items-center text-white">
        <div className="container text-center">
          <h1 className="calligraphic-glow mb-5">INSTITUT MALIK IBN ANAS</h1>
          <div className="ratio ratio-16x9 shadowed-video mx-auto" style={{ maxWidth: '900px' }}>
            <iframe
              src="https://www.youtube.com/embed/hQEr_8MPcEg?si=SeEe5_SVzGG1eKgn"
              title="Vidéo de présentation"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Bouton entre sections */}
      <div className="text-center position-relative" style={{ marginTop: '-60px', zIndex: 2 }}>
        <Link to="/CloseInscriptions" className="btn subscribe-btn btn-lg mt-4 animated-button">S'inscrire maintenant</Link>
      </div>

      {/* Section 2: Présentation texte + image */}
      <section className="styled-section">
        <div className="container">
          <div className="row align-items-stretch">

            {/* Colonne gauche : Texte */}
            <div className="col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0">
              <div>
                <h2 className="mb-3">Découvrez notre méthodologie</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                  Plongez dans notre monde et découvrez notre mission, notre énergie et l’expérience que nous offrons à notre communauté.
                </p>
                <p style={{ fontSize: '1.1rem' }}>
                  Chaque jour, nous inspirons, nous connectons et nous innovons pour vous offrir le meilleur.
                </p>
              </div>
            </div>

              {/* Colonne droite : Image */}
                  <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <img 
                src="/Images/study2.jpg" 
                alt="Méthodologie" 
                className="rounded shadow"
                style={{ maxWidth: '80%', height: 'auto', objectFit: 'cover' }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* Bouton entre sections */}
      <div className="text-center position-relative" style={{ marginTop: '-60px', zIndex: 2 }}>
      <Link to="/CloseInscriptions" className="btn subscribe-btn btn-lg mt-4 animated-button">S'inscrire maintenant</Link>
      </div>

      {/* Section 3: Témoignages avec Swiper */}
      <section className="styled-section">
        <div className="container text-center">
          <h2 className="mb-5">Témoignages</h2>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 } }}
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="testimonial-card p-4 h-100 rounded">
                <div className="ratio ratio-16x9 mb-3">
                  <video controls className="w-100 rounded shadowed-video">
                    <source src="/Vidéos/video1.mp4" type="video/mp4" />
                  </video>
                </div>
                <h5 className="mb-1">Fatima</h5>
                <p className="testimonial-desc mb-0">"Une expérience enrichissante et bienveillante."</p>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="testimonial-card p-4 h-100 rounded">
                <div className="ratio ratio-16x9 mb-3">
                  <video controls className="w-100 rounded shadowed-video">
                    <source src="/Vidéos/video2.mp4" type="video/mp4" />
                  </video>
                </div>
                <h5 className="mb-1">Yassine</h5>
                <p className="testimonial-desc mb-0">"J’ai trouvé une vraie communauté."</p>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="testimonial-card p-4 h-100 rounded">
                <div className="ratio ratio-16x9 mb-3">
                  <video controls className="w-100 rounded shadowed-video">
                    <source src="/Vidéos/video2.mp4" type="video/mp4" />
                  </video>
                </div>
                <h5 className="mb-1">Aïcha</h5>
                <p className="testimonial-desc mb-0">"Chaque session est motivante."</p>
              </div>
            </SwiperSlide>

            {/* Slide 4 — AUDIO */}
            <SwiperSlide>
              <div className="testimonial-card p-4 h-100 rounded">
                <div className="audio-wrapper mb-3">
                  <audio controls className="w-100 rounded shadowed-video">
                    <source src="/Audios/audio1.mp3" type="audio/mpeg" />
                  </audio>
                </div>
                <h5 className="mb-1">Omar</h5>
                <p className="testimonial-desc mb-0">"Une parole pleine de sagesse à écouter."</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

    </div>
  );
};
