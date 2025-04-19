import React, { useState, useEffect } from 'react';
import LightGallery from 'lightgallery/react';
import arrow_down from './Icon/arrow-down.svg';
import totoro from './Icon/totoro.gif';


// Import your styles and icons
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';

// Import plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';

export function Gallery() {
    const [images, setImages] = useState([]);
    const [theme, setTheme] = useState('all');
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        fetch('/imagesList.json')
            .then(res => res.json())
            .then(data => {
                setImages(data);
            })
            .catch(error => console.log('Error fetching image list:', error));
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const filteredImages = images.filter(image => theme === 'all' || image.theme === theme);

    return (
        <div>
            <header >
                <div className='header-content'>
                    <h1>Image Gallery</h1>
                    {/* Theme selection buttons */}
                    <div>
                        <button onClick={() => setTheme('all')}>All</button>
                        <button onClick={() => setTheme('bw')}>Black & White</button>
                        <button onClick={() => setTheme('life')}>Life</button>
                        <button onClick={() => setTheme('scenery')}>Scenery</button>
                    </div>

                </div>
            </header> 
            <div >
                <img src={totoro} alt='Walking Totoro' className='totoro'/>
            </div>
            <div>
                <LightGallery
                    onInit={() => console.log('lightGallery has been initialized')}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgShare, lgRotate]}
                    download={false}
                >
                    {filteredImages.map((image, index) => (
                        <a href={image.src} key={index}>
                            <img alt={image.alt} src={image.src} style={{ width: '100%', marginBottom: '10px' }} />
                        </a>
                    ))}
                </LightGallery>
            </div>
            
            {scrolling && (
                <button
                    className='scroll-to-top' 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <img src={arrow_down} alt="Scroll to top" />
                </button>
            )}
        </div>
    );
}
