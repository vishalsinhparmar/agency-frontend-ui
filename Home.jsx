import React from 'react'
import section from '../assets/images/image1.jpg'
import google from '../assets/images/GOOGLE.png'
import microsoft from '../assets/images/microsoft.png'
import spotify from '../assets/images/Spotify.png'

import netflix from '../assets/images/NETFLIX.png'
export default function Home() {
 return (
     <>
       <section className="hero-section">
          <div className="container py-5">
             <div className="row align-items-center g-4">
                <div className="col-lg-7">
                   <p className="hero-title">
                      DIGITAL MARKETING SOLUTIONS{" "}
                      <span className="hero-title-highlight">FOR AMBITIOUS BRAND</span>
                   </p>
                   <p className="hero-subtitle">
                      Super charge your brand performance with performance-based and
                      specialized digital marketing & development solutions.
                   </p>
                   <div className="d-flex flex-wrap align-items-center gap-3">
                      <button type="button" className="btn btn-dark rounded-pill px-4 py-2 shadow-sm">
                         Get Started
                      </button>
                      <a className="hero-link" href="#success-stories">
                         Read success stories
                      </a>
                   </div>
                </div>
                <div className="col-lg-5">
                   <div className="hero-image-wrapper">
                      <img
                         src={section}
                         alt="Digital marketing dashboard preview"
                         className="hero-image"
                         loading="eager"
                         decoding="async"
                      />
                   </div>
                </div>
             </div>
          </div>
       </section>
       <section className="brand-section" id="success-stories">
          <div className="container">
             <p className="brand-title">Trusted by the world's most popular brands</p>
             <div className="row row-cols-2 row-cols-md-4 g-4 align-items-center">
                <div className="col">
                   <img
                      src={google}
                      alt="Google logo"
                      className="brand-logo"
                      loading="lazy"
                      decoding="async"
                   />
                </div>
                <div className="col">
                   <img
                      src={microsoft}
                      alt="Microsoft logo"
                      className="brand-logo"
                      loading="lazy"
                      decoding="async"
                   />
                </div>
                <div className="col">
                   <img
                      src={spotify}
                      alt="Spotify logo"
                      className="brand-logo"
                      loading="lazy"
                      decoding="async"
                   />
                </div>
                <div className="col">
                   <img
                      src={netflix}
                      alt="Netflix logo"
                      className="brand-logo"
                      loading="lazy"
                      decoding="async"
                   />
                </div>
             </div>
          </div>
       </section>
           
     
     </>
  )
}
