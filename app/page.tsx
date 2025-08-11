"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const portfolioProjects = [
  {
    id: 1,
    title: "Virtual Reality Exhibition UB Tech 2023",
    subtitle: "Virtual Reality Exhibition UB Tech 2023",
    image:
      "https://images.pexels.com/photos/3761087/pexels-photo-3761087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    title: "Videotron 3D Balibo",
    subtitle: "Videotron 3D Balibo",
    image:
      "https://images.pexels.com/photos/3761065/pexels-photo-3761065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    title: "Videotron 3D Balibo",
    subtitle: "Videotron 3D Balibo",
    image:
      "https://images.pexels.com/photos/3761084/pexels-photo-3761084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    title: "Jatim Park SAFARI Malattan",
    subtitle: "Jatim Park SAFARI Malattan",
    image:
      "https://images.pexels.com/photos/3761411/pexels-photo-3761411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        ></motion.div>
        <div className="relative w-full h-[500px] xl:min-h-[1000px] sm:w-full md:h-[600px]">
          <Image
            src="/bg.png"
            alt="VR Headset representing Digital Innovation"
            fill
            className="object-cover rounded-lg max-md:hidden max-sm:hidden lg:block"
            priority
          />
          <div className="absolute md:hidden inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent rounded-lg" />
        </div>
        <div className="container absolute min-lg:left-[340px] max-sm:ml-0 ml-20 mt-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2 text-[#4DD0E1]">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-medium tracking-wide uppercase">
                Digital Design Excellence
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Welcome to <span className="text-[#4DD0E1]">DIPS</span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl">
              Digital Plan Solution - Your creative partner for innovative
              design solutions. We transform visions into compelling digital
              experiences that captivate and inspire.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                className="bg-[#4DD0E1] hover:bg-[#00BCD4] text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/gallery">
                  Explore Our Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-[#4DD0E1] text-[#4DD0E1] hover:bg-[#4DD0E1] hover:text-black px-8 py-3 rounded-lg transition-all duration-300"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our Creative Solutions
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              Discover our portfolio of innovative digital design projects that
              bring visions to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Large Project Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer overflow-hidden rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-[#4DD0E1]/50 transition-all duration-500"
            >
              <div className="relative h-64 md:h-80">
                <Image
                  src={portfolioProjects[0].image}
                  alt={portfolioProjects[0].title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {portfolioProjects[0].title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {portfolioProjects[0].subtitle}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer overflow-hidden rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-[#4DD0E1]/50 transition-all duration-500"
            >
              <div className="relative h-64 md:h-80">
                <Image
                  src={portfolioProjects[1].image}
                  alt={portfolioProjects[1].title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {portfolioProjects[1].title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {portfolioProjects[1].subtitle}
                </p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {portfolioProjects.slice(2).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer overflow-hidden rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-[#4DD0E1]/50 transition-all duration-500"
              >
                <div className="relative h-48 md:h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{project.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button
              asChild
              className="bg-[#0A1628] border border-[#4DD0E1] text-[#4DD0E1] hover:bg-[#4DD0E1] hover:text-black px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/gallery">
                View More Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
