import React from 'react';
import SocialIcons from '@/components/SocialIcons';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Shell } from "lucide-react"
import { Github } from "lucide-react"
import { Link } from "lucide-react"
import { ArrowRight } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Portfolio = () => {
  return (
    <div>
      <SocialIcons />
      <div className="min-h-screen bg-gv-darker">
        <Navbar />

        <section className="pt-32 pb-20 relative overflow-hidden">
          {/* Decorative Blobs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
          <div className="absolute bottom-40 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                className="w-16 h-16 mx-auto bg-indigo-500 bg-opacity-20 rounded-full flex items-center justify-center mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <Shell className="w-8 h-8 text-indigo-400" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Nosso <span className="gradient-text">Portfólio</span></h2>
              <p className="text-gv-gray max-w-2xl mx-auto text-lg">
                Explore alguns dos nossos projetos mais recentes e descubra como transformamos ideias em realidade.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Card 1 */}
              <motion.div
                className="bg-gv-dark p-6 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 hover-card-shadow"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Nome do Projeto 1</CardTitle>
                    <CardDescription>Descrição breve do projeto.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Detalhes adicionais sobre o projeto e as tecnologias utilizadas.</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <Button variant="ghost">
                      <Github className="mr-2 h-4 w-4" />
                      Ver no GitHub
                    </Button>
                    <Button asChild>
                      <a href="#">
                        Visitar Site
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>

              {/* Project Card 2 */}
              <motion.div
                className="bg-gv-dark p-6 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 hover-card-shadow"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Nome do Projeto 2</CardTitle>
                    <CardDescription>Descrição breve do projeto.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Detalhes adicionais sobre o projeto e as tecnologias utilizadas.</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <Button variant="ghost">
                      <Github className="mr-2 h-4 w-4" />
                      Ver no GitHub
                    </Button>
                    <Button asChild>
                      <a href="#">
                        Visitar Site
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>

              {/* Project Card 3 */}
              <motion.div
                className="bg-gv-dark p-6 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 hover-card-shadow"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Nome do Projeto 3</CardTitle>
                    <CardDescription>Descrição breve do projeto.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Detalhes adicionais sobre o projeto e as tecnologias utilizadas.</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <Button variant="ghost">
                      <Github className="mr-2 h-4 w-4" />
                      Ver no GitHub
                    </Button>
                    <Button asChild>
                      <a href="#">
                        Visitar Site
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>

              {/* Project Card 4 */}
              <motion.div
                className="bg-gv-dark p-6 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 hover-card-shadow"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Nome do Projeto 4</CardTitle>
                    <CardDescription>Descrição breve do projeto.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Detalhes adicionais sobre o projeto e as tecnologias utilizadas.</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <Button variant="ghost">
                      <Github className="mr-2 h-4 w-4" />
                      Ver no GitHub
                    </Button>
                    <Button asChild>
                      <a href="#">
                        Visitar Site
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>

              {/* Project Card 5 */}
              <motion.div
                className="bg-gv-dark p-6 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 hover-card-shadow"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Nome do Projeto 5</CardTitle>
                    <CardDescription>Descrição breve do projeto.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Detalhes adicionais sobre o projeto e as tecnologias utilizadas.</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <Button variant="ghost">
                      <Github className="mr-2 h-4 w-4" />
                      Ver no GitHub
                    </Button>
                    <Button asChild>
                      <a href="#">
                        Visitar Site
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>

              {/* Project Card 6 */}
              <motion.div
                className="bg-gv-dark p-6 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 hover-card-shadow"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Nome do Projeto 6</CardTitle>
                    <CardDescription>Descrição breve do projeto.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Detalhes adicionais sobre o projeto e as tecnologias utilizadas.</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <Button variant="ghost">
                      <Github className="mr-2 h-4 w-4" />
                      Ver no GitHub
                    </Button>
                    <Button asChild>
                      <a href="#">
                        Visitar Site
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
