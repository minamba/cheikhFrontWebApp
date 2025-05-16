import '../../App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { useSelector } from 'react-redux';

export const Home = () => {
const datas = useSelector((state) => state.registrationPage);
const isClosed = datas.registrationPage.find((registrationPage) => registrationPage.id === 1)?.isClosed;
const homes = useSelector((state) => state.homes);
const witnesses = useSelector((state) => state.witnesses);

console.log("home",homes.homes);
console.log(homes.homes?.media?.url);
console.log("witnesses",witnesses.witnesses);


const videoUrl = homes.homes?.media?.url;
console.log("videoUrl",videoUrl);
console.log("homes",homes.homes?.image?.url);
const imgUrl = homes.homes?.image?.url;
const banniere = homes.homes?.banner?.url;

  return (
    <div>
      {/* Section 1 : Hero avec vidéo */}
      <section className="hero-section-with-image d-flex align-items-center text-white"     style={{backgroundImage: banniere ? `url("${banniere}")` : 'none'}}>
        <div className="container text-center">
          <h1 className="calligraphic-glow mb-5">{homes.homes?.title}</h1>
          <div className="ratio ratio-16x9 shadowed-video mx-auto" style={{ maxWidth: '900px' }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-100 h-100"
              style={{ objectFit: 'cover' }}
            >
                 <source src={videoUrl} type="video/mp4" />
              Votre navigateur ne supporte pas la balise vidéo.
            </video>
          </div>
        </div>
      </section>

      {/* Bouton entre sections */}
      <div className="text-center position-relative" style={{ marginTop: '-60px', zIndex: 2 }}>
      <Link to={isClosed ? "/CloseInscriptions" : "/inscription"} className="btn subscribe-btn btn-lg mt-4 animated-button">S 'inscrire maintenant</Link> 
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
                src={imgUrl} 
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
      <Link to={isClosed ? "/CloseInscriptions" : "/inscription"} className="btn subscribe-btn btn-lg mt-4 animated-button">S 'inscrire maintenant</Link> 
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
               autoplay={{ delay: 3000, disableOnInteraction: true }}
              navigation
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 }
              }}
            >
            {/* Slide 1 */}
           
            {witnesses.witnesses.map((witness) => (
              <SwiperSlide key={witness.id}>
                <div className="testimonial-card p-4 h-100 rounded">
                  <div className="ratio ratio-16x9 mb-3">
                    {witness.media.type === 1 ? (
                      <video controls className="w-100 rounded shadowed-video">
                        <source src={witness.media?.url} type="video/mp4" />
                        Votre navigateur ne supporte pas la vidéo.
                      </video>
                    ) : (
                      <audio controls className="w-100 rounded shadowed-video">
                        <source src={witness.media?.url} type="audio/mpeg" />
                      </audio>
                    )}
                  </div>
                  <h5 className="mb-1">{witness.title}</h5>
                  <p className="testimonial-desc mb-0">{witness.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

    </div>
  );
};
