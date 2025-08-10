'use client';

import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, Award, CheckCircle, Palette, Smartphone, Monitor } from 'lucide-react';

const whyChooseData = [
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Talented and experienced designers in various design fields'
  },
  {
    icon: Target,
    title: 'Client-Focused',
    description: 'Collaborative approach to understand vision and goals'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Latest design software and tools for cutting-edge solutions'
  },
  {
    icon: Award,
    title: 'Quality',
    description: 'Focus on detail excellence and optimal functionality'
  }
];

const services = [
  { icon: Palette, title: 'Graphic Design' },
  { icon: Monitor, title: 'Branding Design' },
  { icon: Smartphone, title: 'Visual Communication Design' },
  { icon: Monitor, title: 'Product Design' },
  { icon: Target, title: 'Digital Marketing Solutions' },
  { icon: Smartphone, title: 'UI/UX Design' }
];

export default function AboutPage() {
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
              About <span className="text-[#4DD0E1]">DIPS</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
              Digital Plan Solution - Your Creative Design Partner
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 xl:px-24 bg-gray-900/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Who We Are</h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto text-left">
              <p>
                Digital Plan Solution (DIPS) is a creative digital company focused on providing innovative and attractive design solutions for our clients. We have a team of talented and experienced designers in various design fields, such as graphic design, branding, design, visual communication design, and product design.
              </p>
              
              <p>
                We are committed to producing unique and inspiring designs that can help our clients build a strong brand image and differentiate themselves from competitors. With a collaborative approach, we work closely with clients to understand their vision and goals, and integrate our creative ideas with their business needs.
              </p>
              
              <p>
                We understand the importance of technology and the latest trends in digital design, and we use the latest design software and tools to create solutions that keep up with the times. In every project, we focus on detail excellence, eye-catching aesthetics, and optimal functionality.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose DIPS Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose DIPS?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-[#4DD0E1]/50 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-[#4DD0E1]/10 border border-[#4DD0E1]/20">
                  <item.icon className="h-6 w-6 text-[#4DD0E1]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 xl:px-24 bg-gray-900/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Services</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 hover:border-[#4DD0E1]/50 transition-all duration-300"
              >
                <CheckCircle className="h-5 w-5 text-[#4DD0E1] flex-shrink-0" />
                <span className="text-gray-200">{service.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Commitment</h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
              <p>
                In addition, we recognize the importance of effective communication with our clients. We listen carefully to their needs, provide professional input, and provide regular project progress to ensure their satisfaction.
              </p>
              
              <p>
                DIPS has a solid reputation for providing high quality services and impressive design results. We pride ourselves on being a creative partner for companies and individuals, helping them produce compelling visual content that fulfils their purpose.
              </p>
              
              <div className="mt-12 p-8 rounded-xl bg-[#4DD0E1]/10 border border-[#4DD0E1]/20">
                <p className="text-xl font-semibold text-[#4DD0E1]">
                  "Whatever your design needs, we are ready to provide solutions that are innovative, original and meet your expectations."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}