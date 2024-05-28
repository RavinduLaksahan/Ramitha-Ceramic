import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import s1 from '../assets/SlideShow1.jpg'
import s2 from '../assets/SlideShow2.jpg'
import s3 from '../assets/Slideshow3.jpg'
import s4 from '../assets/Slideshow4.jpg'
import { FaUserTie } from "react-icons/fa";
import { MdOutlineFax } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";
import { PiOfficeChairFill } from "react-icons/pi";
import { FaShop } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


const HomePage = () => {

  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    ssEase: 'ease-in-out',
  };

  const slides = [
      {
        image: s1,
        title: 'Elevate Your Bathing Experience!',
        titleColor: 'text-gray-200',
        description: 'Experience luxury with our modern bathroom collection.',
        descriptionColor: 'text-gray-200',
        titlePosition: 'center',
        descriptionPosition: 'center',
      },
      {
        image: s2,
        title: 'Wall Tiles That Define Elegance!',
        titleColor: 'text-gray-200',
        description: 'Transform your space with our exquisite wall tiles.',
        descriptionColor: 'text-gray-200',
        titlePosition: 'center',
        descriptionPosition: 'center'
      },
      {
        image: s3,
        title: 'Floor Tiles for a Lasting Impression!',
        titleColor: 'text-gray-200',
        description: 'Make a statement with our premium floor tiles.',
        descriptionColor: 'text-gray-200',
        titlePosition: 'center',
        descriptionPosition: 'center'
      },
      {
        image: s4,
        title: 'Create Memories in Style!',
        titleColor: 'text-gray-200',
        description: 'Welcome guests into your stunning living space.',
        descriptionColor: 'text-gray-200',
        titlePosition: 'center',
        descriptionPosition: 'center'
      },
      
  ];

  

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const hash = `#${section.id}`;
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          setActiveLink(hash);
        }
      });
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  

  return (
    <div>
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }

          .text-gradient {
            background-image: radial-gradient(circle, transparent 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.8) 80%, rgba(255,255,255,0.9) 100%),linear-gradient(90deg, #000000, #241e2f, #40484a);
            background-size: 200% auto;
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            animation: gradient 10s linear infinite;
          }

          @keyframes gradient {
            0% {
              background-position: 100% 50%; 
            }
            50% {
              background-position: 0% 50%; 
            }
            100% {
              background-position: 100% 50%; 
            }
          }
        `}
      </style>

      <nav className="bg-black bg-opacity-30 shadow fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-8" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
        <div className="flex items-center">
          <Link to="/" className="text-3xl font-bold mr-10 ml-10">
            <span className=" text-gray-200">Ramitha Ceramics</span>
          </Link>
        </div>
        <ul className="flex font-bold space-x-20 mr-20 text-gray-500">
          <li><a href="#home" className={`hover:text-gray-200 ${activeLink === '#home' ? 'text-white' : ''}`}>HOME</a></li>
          <li><Link to="/products" className={`hover:text-gray-200 ${location.pathname === '/products' ? 'text-white' : ''}`}>PRODUCTS</Link></li>
          <li><a href="#about" className={`hover:text-gray-200 ${activeLink === '#about' ? 'text-white' : ''}`}>ABOUT US</a></li>
          <li><a href="#contact" className={`hover:text-gray-200 ${activeLink === '#contact' ? 'text-white' : ''}`}>CONTACT US</a></li>
        </ul>
      </div>
    </nav>

      <main className="pt-8">

      <section id="home" className="h-screen flex items-center justify-center bg-gray-100 mb-10">
        <Slider {...settings} className="w-full h-full">
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-full relative">
              <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="text-white text-center" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  <h1 className={`text-gradient text-6xl font-bold ${slide.titleColor} ${slide.titlePosition === 'left' ? 'absolute left-4' : ''}`}>{slide.title}</h1>
                  <p className={`mt-8 font-bold ${slide.descriptionColor} ${slide.descriptionPosition === 'left' ? 'absolute left-4' : ''}`}>{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>


      <section id="about" className="h-screen flex items-center justify-center bg-white mt-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
        <div className="max-w-6xl mx-auto text-center p-8">
          <h2 className="text-5xl font-bold mb-6 relative overflow-hidden">
            <span className="text-transparent bg-gradient-to-r bg-clip-text from-gray-900 to-gray-700 transition-all duration-500 ease-in-out hover:from-white hover:to-gray-900 text-gradient">About Ramitha Ceramic</span>
          </h2>
          <p className="text-lg mb-4 text-gray-900 font-bold">Welcome to Ramitha Ceramics, where artistry meets functionality!</p>
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 justify-center bg-opacity-10">
            <div className="flex-1 w-96 h-64 p-6 bg-gradient-to-b from-navy-600 to-gray-200 shadow-lg flex flex-col justify-center rounded-lg items-center hover:scale-105 transition duration-300">
              <p className="text-lg text-center">Discover our exquisite range of ceramic tiles and fittings, crafted with passion and precision.</p>
            </div>
            <div className="flex-1 w-96 h-64 p-6 bg-gradient-to-b from-navy-600 to-gray-200 shadow-lg flex flex-col justify-center rounded-lg items-center hover:scale-105 transition duration-300">
              <p className="text-lg text-center">We blend traditional craftsmanship with modern design, offering sustainable and stylish solutions for every home.</p>
            </div>
            <div className="flex-1 w-96 h-64 p-6 bg-gradient-to-b from-navy-600 to-gray-200 shadow-lg flex flex-col justify-center rounded-lg items-center hover:scale-105 transition duration-300">
              <p className="text-lg text-center">Transform your spaces with our unique and beautiful collections. Experience the difference today!</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="h-screen flex items-center justify-center bg-white" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
        <div className="max-w-full mx-auto text-center p-8" style={{ fontFamily: 'Rajdhani, sans-serif', maxWidth: '80%' }}>
          <h2 className="text-5xl font-bold mb-6 relative overflow-hidden">
            <span className="text-transparent bg-gradient-to-r bg-clip-text from-gray-900 to-gray-700 transition-all duration-500 ease-in-out hover:from-white hover:to-gray-900 text-gradient">Contact Us</span>
          </h2>
          <div className="flex flex-col space-y-6 justify-center bg-opacity-10 mt-8">
            <div className="w-full p-6 bg-gradient-to-b from-navy-600 to-gray-200 shadow-lg flex flex-row justify-between rounded-lg items-stretch hover:scale-105 transition duration-300">
              <div className="flex-1 flex flex-col items-center px-6">
                <h3 className="text-xl font-bold mb-4"><FaUserTie className="inline mr-2" />Director</h3>
                <p>J.M. Ramitha Jayasundara</p>
                <p className='hover:text-gray-200'><GiRotaryPhone className="inline mr-2" /><a href="tel:+94763942353">076-394 2353</a></p>
                <p className='hover:text-gray-200'><IoMailSharp className="inline mr-2" /><a href="mailto:ramithaj18@gmail.com">ramithaj18@gmail.com</a></p>
              </div>
              <div className="border-r border-gray-400 h-full mx-4"></div>
              <div className="flex-1 flex flex-col items-center px-6">
                <h3 className="text-xl font-bold mb-4"><PiOfficeChairFill className="inline mr-2" />Office</h3>
                <p><FaAddressCard className="inline mr-2" />No.14, Kandy Road, Gurudeniya.</p>
                <p className='hover:text-gray-200'><GiRotaryPhone className="inline mr-2" /><a href="tel:+94812406835">Tel: 081-24 06 835</a></p>
                <p className='hover:text-gray-200'><MdOutlineFax className="inline mr-2" /><a href="tel:+94812406835">Fax: 081-24 06 835</a></p>
              </div>
              <div className="border-r border-gray-400 h-full mx-4"></div>
              <div className="flex-1 flex flex-col items-center px-16" style={{ flexBasis: '20%' }}>
                <h3 className="text-xl font-bold mb-4"><FaShop className="inline mr-2" />Showrooms</h3>
                <div className="flex justify-center space-x-10">
                  <div>
                    <p><FaLocationDot className="inline mr-2"/>Gurudeniya</p>
                    <p className='hover:text-gray-200'><GiRotaryPhone className="inline mr-2" /><a href="tel:+94812052230">081-20 52 230</a></p>
                    <p className='hover:text-gray-200'><GiRotaryPhone className="inline mr-2" /><a href="tel:+94812052224">081-20 52 224</a></p>
                  </div>
                  <div>
                    <p><FaLocationDot className="inline mr-2" />Kandy</p>
                    <p className='hover:text-gray-200'><GiRotaryPhone className="inline mr-2" /><a href="tel:+94812222494">081-22 22 494</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      </main>
      
      <footer className="bg-gray-700 text-white text-center py-4">
        <p>© {new Date().getFullYear()} Ramitha Enterprises(Pvt) Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
