
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import s1 from '../assets/SlideShow1.jpg'
import s2 from '../assets/SlideShow2.jpg'
import s3 from '../assets/Slideshow3.jpg'
import s4 from '../assets/Slideshow4.jpg'


const HomePage = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  const slides = [
    {
      image: s1,
      title: 'Elevate Your Bathing Experience',
      titleColor: 'text-gray-900',
      description: 'Step into luxury with our modern bathroom collection. Impeccable design meets functionality, creating a serene oasis in your home.',
      descriptionColor: 'text-gray-900',
      titlePosition: 'center',
      descriptionPosition: 'center',
    },
    {
      image: s2,
      title: 'Wall Tiles That Define Elegance',
      titleColor: 'text-gray-200',
      description: 'Transform your living space with our exquisite wall tiles. Crafted with precision and style, they add sophistication to every corner of your home.',
      descriptionColor: 'text-gray-200',
      titlePosition: 'center',
      descriptionPosition: 'center'
    },
    {
      image: s3,
      title: 'Floor Tiles for a Lasting Impression',
      titleColor: 'text-gray-800',
      description: 'Make a statement with our premium floor tiles. From classic to contemporary, our collection offers durability and beauty to complement any room.',
      descriptionColor: 'text-gray-700',
      titlePosition: 'center',
      descriptionPosition: 'center'
    },
    {
      image: s4,
      title: 'Create Memories in Style',
      titleColor: 'text-white',
      description: 'Welcome guests into your stunning living space. With our versatile ceramic products, every gathering becomes an occasion to cherish.',
      descriptionColor: 'text-gray-200',
      titlePosition: 'center',
      descriptionPosition: 'center'
    },
    
  ];
  

  return (
    <div>
      <nav className="bg-orange-700 bg-opacity-10 shadow fixed w-full top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-8" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold mr-10 ml-10">Ramitha Ceramics</Link>
          </div>
          <ul className="flex font-bold space-x-20 mr-20">
            <li><a href="#home" className="hover:text-gray-500">HOME</a></li>
            <li><Link to="/products" className="hover:text-gray-500">PRODUCTS</Link></li>
            <li><a href="#about" className="hover:text-gray-500">ABOUT US</a></li>
            <li><a href="#contact" className="hover:text-gray-500">CONTACT US</a></li>
          </ul>
        </div>
      </nav>

      <main className="pt-8">

      <section id="home" className="h-screen flex items-center justify-center bg-gray-100 mb-10">
        <Slider {...settings} className="w-full h-full">
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-full relative">
              <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="text-white text-center" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  <h1 className={`text-5xl font-bold ${slide.titleColor} ${slide.titlePosition === 'left' ? 'absolute left-4' : ''}`}>{slide.title}</h1>
                  <p className={`mt-5 font-bold ${slide.descriptionColor} ${slide.descriptionPosition === 'left' ? 'absolute left-4' : ''}`}>{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <section id="about" className="h-screen flex items-center justify-center bg-white mt-10">
        <div className="max-w-4xl mx-auto text-center p-8" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg mb-4">Welcome to Ramitha Ceramics, where artistry meets functionality. We pride ourselves on offering an extensive selection of high-quality ceramic products, ranging from elegant wall tiles to durable floor tiles and exquisite bathroom fittings.</p>
          <p className="text-lg mb-4">Our mission is to enhance the beauty and comfort of your home with our meticulously crafted ceramics. Each piece is designed to reflect both contemporary and classic styles, ensuring that you find the perfect match for your aesthetic preferences.</p>
          <p className="text-lg">At Ramitha Ceramics, we are committed to sustainability and innovation. We use eco-friendly materials and processes to create products that not only look good but also contribute to a greener planet. Join us in transforming your spaces with our beautiful and sustainable ceramic solutions.</p>
        </div>
      </section>

        <section id="contact" className="h-screen flex items-center justify-center bg-gray-100">
          <div className="max-w-2xl text-center" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
