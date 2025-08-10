'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryProjects = [
  {
    id: 1,
    title: 'Modern Park Design',
    description: 'Contemporary landscape and structure design with clean lines and modern amenities',
    category: 'Architecture',
    image: 'https://images.pexels.com/photos/1694621/pexels-photo-1694621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    title: 'Digital Walkways',
    description: 'Innovative pedestrian path design integrating technology and nature',
    category: 'Urban Planning',
    image: 'https://images.pexels.com/photos/4356365/pexels-photo-4356365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    title: 'Urban Innovation',
    description: 'Effective space solutions designed for community engagement',
    category: 'Public Spaces',
    image: 'https://images.pexels.com/photos/3761263/pexels-photo-3761263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    title: 'Sustainable Design',
    description: 'Eco-friendly park solutions with renewable energy integration',
    category: 'Sustainability',
    image: 'https://images.pexels.com/photos/2144200/pexels-photo-2144200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 5,
    title: 'Smart Infrastructure',
    description: 'IoT-enabled park management systems and smart planning',
    category: 'Technology',
    image: 'https://images.pexels.com/photos/3761084/pexels-photo-3761084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 6,
    title: 'Recreation Spaces',
    description: 'Innovative recreational facilities for all age groups',
    category: 'Recreation',
    image: 'https://images.pexels.com/photos/1694621/pexels-photo-1694621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 7,
    title: 'Sustainable Design',
    description: 'Eco-friendly park solutions with renewable energy integration',
    category: 'Sustainability',
    image: 'https://images.pexels.com/photos/2144200/pexels-photo-2144200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 8,
    title: 'Smart Infrastructure',
    description: 'IoT-enabled park management systems and smart planning',
    category: 'Technology',
    image: 'https://images.pexels.com/photos/3761084/pexels-photo-3761084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 9,
    title: 'Recreation Spaces',
    description: 'Innovative recreational facilities for all age groups',
    category: 'Recreation',
    image: 'https://images.pexels.com/photos/1694621/pexels-photo-1694621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 10,
    title: 'Urban Innovation',
    description: 'Effective space solutions designed for community engagement',
    category : 'Public Spaces',
    image: ''
  }
];

export default function GalleryPage() {
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
              Our <span className="text-[#4DD0E1]">Gallery</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              Explore our portfolio of innovative digital design solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-[#4DD0E1]/50 transition-all duration-500">
                  <div className="relative h-64 md:h-72">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-medium bg-[#4DD0E1]/20 border border-[#4DD0E1]/40 text-[#4DD0E1] rounded-full backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}