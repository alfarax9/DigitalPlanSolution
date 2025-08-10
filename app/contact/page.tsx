'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 xl:px-24 text-center">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-[#4DD0E1]">Contact</span> Us
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              Ready to transform your vision into reality? Let's discuss your project
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-20 px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Get In Touch</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Your first name"
                      className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-[#4DD0E1]"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Your last name"
                      className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-[#4DD0E1]"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-[#4DD0E1]"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="What's this about?"
                    className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-[#4DD0E1]"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-[#4DD0E1] resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-[#4DD0E1] hover:bg-[#00BCD4] text-black font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-[#4DD0E1]/10 border border-[#4DD0E1]/20">
                      <MapPin className="h-6 w-6 text-[#4DD0E1]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Address</h3>
                      <p className="text-gray-300">
                        Jl. Danau Batur, Sawojajar, Kec. Kedungkandang,<br />
                        Kota Malang, Jawa Timur 65139
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-[#4DD0E1]/10 border border-[#4DD0E1]/20">
                      <Phone className="h-6 w-6 text-[#4DD0E1]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Phone</h3>
                      <p className="text-gray-300">+62 812 8546 1822</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-[#4DD0E1]/10 border border-[#4DD0E1]/20">
                      <Mail className="h-6 w-6 text-[#4DD0E1]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Email</h3>
                      <p className="text-gray-300">Digitalplansolution@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-700/50">
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}