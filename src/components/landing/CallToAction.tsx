
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 bg-prosthetic-500">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Create Your Custom Prosthetic Solution?
          </h2>
          <p className="text-prosthetic-100 text-lg mb-8">
            Join hundreds of users who have improved their quality of life with personalized accessibility solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              variant="default"
              className="bg-white text-prosthetic-800 hover:bg-prosthetic-100"
              asChild
            >
              <Link to="/generator">Create Your Prototype</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-prosthetic-400"
              asChild
            >
              <Link to="/resources">Explore Resources</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
