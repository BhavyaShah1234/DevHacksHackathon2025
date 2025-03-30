
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-prosthetic-50 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-prosthetic-900 mb-6">About ProsPal</h1>
            <p className="text-lg text-prosthetic-700 max-w-3xl">
              Empowering individuals with custom prosthetic solutions for accessibility challenges.
            </p>
          </div>
        </div>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-prosthetic-800 mb-4">Our Mission</h2>
                <p className="text-prosthetic-600 mb-6">
                  At ProsPal, we believe that everyone deserves access to customized mobility and accessibility solutions, regardless of their unique challenges. Our mission is to bridge the gap between generic, mass-produced prosthetics and the unique needs of individuals by leveraging artificial intelligence and modern manufacturing techniques.
                </p>
                <p className="text-prosthetic-600">
                  We aim to empower users, caregivers, and healthcare professionals with the tools and knowledge to create effective, affordable, and personalized prosthetic solutions that truly enhance quality of life.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-prosthetic-200 rounded-full filter blur-2xl opacity-60"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Team collaboration" 
                  className="relative z-10 rounded-xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-prosthetic-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative">
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-prosthetic-300 rounded-full filter blur-2xl opacity-60"></div>
                <img 
                  src="https://unsplash.com/photos/a-robot-arm-industrial-miniature-figure-in-hand-of-robotics-engineer-working-on-laptop-in-laboratory-FgwUNOq8NEg" 
                  alt="Technology and innovation" 
                  className="relative z-10 rounded-xl shadow-lg w-full"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-prosthetic-800 mb-4">Our Technology</h2>
                <p className="text-prosthetic-600 mb-6">
                  ProsPal's platform combines natural language processing, machine learning, and prosthetics expertise to transform everyday descriptions of mobility challenges into actionable prototype designs.
                </p>
                <p className="text-prosthetic-600 mb-6">
                  Our AI system analyzes input text to identify key parameters like the user's age, physical abilities, environmental factors, and specific mobility challenges. It then matches these parameters with an extensive database of prosthetic designs, materials, and construction methods.
                </p>
                <p className="text-prosthetic-600">
                  The result is a custom-tailored prosthetic prototype recommendation that addresses the unique needs of each individual, complete with material lists, assembly instructions, and safety guidelines.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-prosthetic-800 mb-6">Join Us in Making a Difference</h2>
            <p className="text-prosthetic-600 mb-8 max-w-2xl mx-auto">
              Whether you're seeking a solution for yourself, a loved one, or your patients, ProsPal is here to help transform accessibility challenges into opportunities for greater independence and improved quality of life.
            </p>
            <Button 
              size="lg" 
              className="bg-prosthetic-600 hover:bg-prosthetic-700"
              asChild
            >
              <Link to="/generator">Start Creating Your Solution</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
