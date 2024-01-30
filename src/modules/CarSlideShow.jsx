import { useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const CarSlideShow = () => {
    const [slidesToShow, setSlidesToShow] = useState(1);
    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth >= 750) {
        setSlidesToShow(4);
        } else if (window.innerWidth <= 450) {
        setSlidesToShow(2);
        } else {
        setSlidesToShow(1);
        }
    };
            handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    
  return (
    <div className='carslideshow'>
            <Slide slidesToScroll={1} slidesToShow={slidesToShow} indicators={true}>
        <div className='slide'>
        <article className="card">
            <img
                className="card__background"
                src="src\media\images\fleet\peugeot3008.jpg"
                alt="car"
                width="1920"
                height="2193"
            />
            <div className="card__content | flow">
                <div className="card__content--container | flow">
                <h2 className="card__title">Peugeot 3008</h2>
                <p className="card__description">
                Peugeot’s stylish new 3008 comes with hybrid power and an upmarket interior, but although it is cheaper than the electric E-3008, there are more affordable hybrid alternatives out there
                </p>
                </div>
            </div>
        </article>
        </div>
        <div className='slide'>
        <article className="card">
            <img
                className="card__background"
                src="src\media\images\fleet\bmw-320i-31.jpg"
                alt="car"
                width="1920"
                height="2193"
            />
            <div className="card__content | flow">
                <div className="card__content--container | flow">
                <h2 className="card__title">BMW 320i</h2>
                <p className="card__description">
                Along with a new look, the 320i wades into battle in 2023 with a higher price tag and an overhauled interior.
                </p>
                </div>
            </div>
        </article>
        </div>
        <div className='slide'>
        <article className="card">
            <img
                className="card__background"
                src="src\media\images\fleet\Honda-cr.jpg"
                alt="car"
                width="1920"
                height="2193"
            />
            <div className="card__content | flow">
                <div className="card__content--container | flow">
                <h2 className="card__title">Honda CR-V</h2>
                <p className="card__description">
                Its the 2024 Honda CR-V VTi LX AWD, which is a feature-rich variant with the same turbo-petrol engine as all the lower-grade versions.
                </p>
                </div>
            </div>
        </article>
        </div>
        <div className='slide'>
        <article className="card">
            <img
                className="card__background"
                src="src\media\images\fleet\skoda-kodiaq.jpg"
                alt="car"
                width="1920"
                height="2193"
            />
            <div className="card__content | flow">
                <div className="card__content--container | flow">
                <h2 className="card__title">Skoda Kodiaq RS</h2>
                <p className="card__description">
                Take one part Skoda Octavia RS, and combine it with one part seven-seat SUV, and what do you get? This - the excellent Skoda Kodiaq RS.
                </p>
                </div>
            </div>
        </article>
        </div>
        <div className='slide'>
        <article className="card">
            <img
                className="card__background"
                src="src\media\images\fleet\audiq8.jpg"
                alt="car"
                width="1920"
                height="2193"
            />
            <div className="card__content | flow">
                <div className="card__content--container | flow">
                <h2 className="card__title">Audi Q8</h2>
                <p className="card__description">
                The Audi Q8 range is the most expansive line-up of models in Australia, and the latest addition - this 2024 Audi Q8 60 TFSI e plug-in hybrid - adds yet another option for buyers to consider.
                </p>
                </div>
            </div>
        </article>
        </div>
        <div className='slide'>
        <article className="card">
            <img
                className="card__background"
                src="src\media\images\fleet\audia4.jpg"
                alt="car"
                width="1920"
                height="2193"
            />
            <div className="card__content | flow">
                <div className="card__content--container | flow">
                <h2 className="card__title">Audi A4 45 TFSI</h2>
                <p className="card__description">
                There are no wholesale revolutions here in this blink-and-you-might-miss-it update thats actually more involved than exterior styling suggests.
                </p>
                </div>
            </div>
        </article>
        </div>
    </Slide>
        </div>
  )
}

export default CarSlideShow