import React, { useEffect } from 'react';
import { Heart, Activity, Users, Award, ArrowDown, Menu, X } from 'lucide-react';
import Appointment from './components/appointmentModal';
import Contact from './components/contacts';

const LandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Implement smooth scrolling
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Offset for header
            behavior: 'smooth'
          });
          // Close mobile menu after clicking
          setIsMenuOpen(false);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-blue-800">HealthCare Hospital</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
              <a href="#appointment" className="text-gray-700 hover:text-blue-600 font-medium">Appointment</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
            </nav>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white py-4 px-4 shadow-inner">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
              <a href="#appointment" className="text-gray-700 hover:text-blue-600 font-medium">Appointment</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-800 leading-tight mb-6">
                Your Health Is Our Top Priority
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Providing exceptional healthcare services with compassion and expertise. 
                Our team of specialists is dedicated to your well-being and recovery.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="#appointment" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300 ease-in-out text-center"
                >
                  Book Appointment
                </a>
                <a 
                  href="#services" 
                  className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-6 rounded-md border border-blue-600 transition duration-300 ease-in-out text-center"
                >
                  Our Services
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Healthcare professionals" 
                className="rounded-lg shadow-xl w-full h-auto object-cover max-h-[400px]"
              />
            </div>
          </div>
          
          <div className="flex justify-center mt-16">
            <a 
              href="#services" 
              className="animate-bounce bg-white p-2 rounded-full shadow-lg"
            >
              <ArrowDown className="h-6 w-6 text-blue-600" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of medical services to meet all your healthcare needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-2">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Activity className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Emergency Care</h3>
              <p className="text-gray-600">
                24/7 emergency services with state-of-the-art facilities and experienced medical professionals ready to provide immediate care.
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-2">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Cardiology</h3>
              <p className="text-gray-600">
                Comprehensive cardiac care including diagnostics, treatment, and rehabilitation services for heart-related conditions.
              </p>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-2">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Pediatrics</h3>
              <p className="text-gray-600">
                Specialized care for infants, children, and adolescents with a focus on growth, development, and childhood illnesses.
              </p>
            </div>
            
            {/* Service 4 */}
            <div className="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-2">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Specialized Surgery</h3>
              <p className="text-gray-600">
                Advanced surgical procedures performed by expert surgeons using the latest techniques and equipment.
              </p>
            </div>
            
            {/* Service 5 */}
            <div className="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-2">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Activity className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Diagnostic Imaging</h3>
              <p className="text-gray-600">
                Comprehensive imaging services including X-rays, MRI, CT scans, and ultrasound for accurate diagnosis.
              </p>
            </div>
            
            {/* Service 6 */}
            <div className="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-2">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Rehabilitation</h3>
              <p className="text-gray-600">
                Physical, occupational, and speech therapy services to help patients recover from injuries, surgeries, or medical conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Hospital building" 
                className="rounded-lg shadow-xl w-full h-auto object-cover max-h-[400px]"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">About Our Hospital</h2>
              <p className="text-gray-600 mb-6">
                Founded in 1985, HealthCare Hospital has been providing exceptional medical care to our community for over 35 years. Our mission is to improve the health and well-being of the people we serve.
              </p>
              <p className="text-gray-600 mb-6">
                With state-of-the-art facilities and a team of over 200 dedicated healthcare professionals, we are committed to delivering the highest quality care with compassion and respect for every patient.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-blue-600">200+</span>
                  <span className="text-gray-600 mt-2">Medical Professionals</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-blue-600">50,000+</span>
                  <span className="text-gray-600 mt-2">Patients Annually</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-blue-600">35+</span>
                  <span className="text-gray-600 mt-2">Years of Service</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-blue-600">24/7</span>
                  <span className="text-gray-600 mt-2">Emergency Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <Appointment />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 text-white" />
                <span className="ml-2 text-2xl font-bold">HealthCare Hospital</span>
              </div>
              <p className="text-blue-100 mb-4">
                Providing exceptional healthcare services with compassion and expertise since 1985.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-blue-100 hover:text-white transition duration-300">Home</a></li>
                <li><a href="#services" className="text-blue-100 hover:text-white transition duration-300">Services</a></li>
                <li><a href="#about" className="text-blue-100 hover:text-white transition duration-300">About</a></li>
                <li><a href="#appointment" className="text-blue-100 hover:text-white transition duration-300">Appointment</a></li>
                <li><a href="#contact" className="text-blue-100 hover:text-white transition duration-300">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-blue-100 hover:text-white transition duration-300">Emergency Care</a></li>
                <li><a href="#services" className="text-blue-100 hover:text-white transition duration-300">Cardiology</a></li>
                <li><a href="#services" className="text-blue-100 hover:text-white transition duration-300">Pediatrics</a></li>
                <li><a href="#services" className="text-blue-100 hover:text-white transition duration-300">Specialized Surgery</a></li>
                <li><a href="#services" className="text-blue-100 hover:text-white transition duration-300">Rehabilitation</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <address className="not-italic text-blue-100">
                <p className="mb-2">123 Healthcare Avenue</p>
                <p className="mb-2">Medical District, City, State 12345</p>
                <p className="mb-2">Phone: (123) 456-7890</p>
                <p className="mb-2">Email: info@healthcarehospital.com</p>
              </address>
            </div>
          </div>
          
          <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-100">
            <p>&copy; {new Date().getFullYear()} HealthCare Hospital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;