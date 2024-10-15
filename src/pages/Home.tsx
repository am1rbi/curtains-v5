import React, { useState, useEffect } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Home: React.FC = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('תודה על פנייתך! נחזור אליך בהקדם.');
    setFormData({ name: '', email: '', phone: '' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/1234567890', '_blank');
  };

  const galleryImages = [
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1565898835704-3d6be4a2c98c?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1615800002234-05c4d488696c?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&h=500&fit=crop'
  ];

  return (
    <>
      <div className="relative">
        <div 
          className="fixed inset-0 bg-cover bg-center z-0" 
          style={{backgroundImage: 'url("https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=80")'}}
        ></div>
        <div className="fixed inset-0 bg-black opacity-30 z-10"></div>
        <section className="relative min-h-screen flex items-center z-20">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
            <h2 className="text-5xl font-light text-white sm:text-6xl mb-6 tracking-wide">®Vecco</h2>
            <p className="mt-4 text-xl text-gray-200 mb-12 font-light">עיצוב מינימליסטי ויוקרתי לחלל שלך</p>
            <button
              onClick={openWhatsApp}
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-light rounded-full text-white bg-gold hover:bg-gold-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
            >
              צרו קשר
              <MessageCircle className="mr-2 h-5 w-5" />
            </button>
          </div>
        </section>
      </div>

      {/* Rest of the component remains unchanged */}
      
    </>
  );
};

export default Home;