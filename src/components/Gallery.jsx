// src/components/Gallery.jsx

import React, { useEffect, useState } from 'react';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom      from 'lightgallery/plugins/zoom';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import '../styles.css';

import arrow_down from '../Icon/arrow-down.svg';
import totoro     from '../Icon/totoro.gif';
import { fetchDriveImages } from '../lib/drive';

export function Gallery() {
  const [images, setImages]     = useState([]);
  const [theme, setTheme]       = useState('all');
  const [scrolling, setScrolling]= useState(false);

  useEffect(() => {
    fetchDriveImages(
      import.meta.env.VITE_DRIVE_FOLDER_ID,
      import.meta.env.VITE_DRIVE_API_KEY
    )
      .then(setImages)
      .catch(console.error);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolling(window.scrollY > 0);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const filtered = images.filter(img =>
    theme === 'all' ? true : img.alt.toLowerCase().includes(theme)
  );

  return (
    <div>
      <header>
        <div className="header-content">
          <h1>Image Gallery</h1>
          <div>
            {['all','bw','life','scenery'].map(t => (
              <button key={t} onClick={()=>setTheme(t)}>
                {t==='bw' ? 'Black & White' : t[0].toUpperCase()+t.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </header>

      <img src={totoro} alt="Walking Totoro" className="totoro" />

      <div id="my-gallery-wrapper">
        <LightGallery
          onInit={()=>console.log('lightGallery initialized')}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          download={false}
          selector=".gallery-item"
        >
          {filtered.map(({thumb, full, alt}, i) => (
            <a
              key={i}
              href={thumb}          // show thumbnail by default
              data-src={full}       // LightGallery will use this for zoom/full‑res
              className="gallery-item"
            >
              <img src={thumb} alt={alt} loading="lazy" />
            </a>
          ))}
        </LightGallery>
      </div>

      {scrolling && (
        <button
          className="scroll-to-top"
          onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}
        >
          <img src={arrow_down} alt="Scroll to top" />
        </button>
      )}
    </div>
  );
}
