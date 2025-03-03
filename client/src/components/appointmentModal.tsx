import React, { useState } from 'react';
import { Calendar, Clock, User, Mail } from 'lucide-react';
import { createAppointment } from '../api/appointmentApi'; 

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const appointment = {
        full_name: formData.name,
        email: formData.email,
        date: formData.date,
        time: formData.time
      };
      await createAppointment(appointment);
      alert('Appointment request submitted successfully!');
      // Reset form
      setFormData({
        name: '',
        email: '',
        date: '',
        time: ''
      });
    } catch (error) {
      console.error('Error creating appointment:', error);
      alert('Failed to submit appointment request.');
    }
  };

  return (
    <section id="appointment" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Book an Appointment</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Schedule your visit with our specialists. We're committed to providing you with the best care possible.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                  <span className="px-3 py-2 bg-gray-100">
                    <User size={18} className="text-blue-600" />
                  </span>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 focus:outline-none"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                  <span className="px-3 py-2 bg-gray-100">
                    <Mail size={18} className="text-blue-600" />
                  </span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 focus:outline-none"
                    placeholder="example@email.com"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="date" className="block text-gray-700 mb-2">Preferred Date</label>
                <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                  <span className="px-3 py-2 bg-gray-100">
                    <Calendar size={18} className="text-blue-600" />
                  </span>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full p-2 focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="time" className="block text-gray-700 mb-2">Preferred Time</label>
                <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                  <span className="px-3 py-2 bg-gray-100">
                    <Clock size={18} className="text-blue-600" />
                  </span>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full p-2 focus:outline-none"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appointment;