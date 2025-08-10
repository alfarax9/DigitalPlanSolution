'use client';

import { api } from '@/components/lib/api';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  galleries: {image_path: string}[];
  category: { name: string; };
}



export default function GalleryPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get('/events');
        if (response.data.status !== 'success') throw new Error('Network response was not ok');
        console.log('Fetched projects:', response.data.data);
        setProjects(response.data.data);
      } catch (error) {
        console.error('Failed to fetch events:', error);
      }
    };

    fetchProjects();
  }, []);
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
            {projects.map((project, index) => (
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
                    {project.galleries.length > 0 ? (
                      <Image
                      src={project.galleries[0].image_path}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    /> ) : (
                      <Image
                        src={"null"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-medium bg-[#4DD0E1]/20 border border-[#4DD0E1]/40 text-[#4DD0E1] rounded-full backdrop-blur-sm">
                        {project.category.name}
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