
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProblemForm from "@/components/generator/ProblemForm";
import SolutionDisplay from "@/components/generator/SolutionDisplay";
import { generateProstheticSolution, type ProstheticSolution } from "@/services/prototypeGenerator";
import { toast } from "sonner";

interface FormData {
  problem: string;
  age: string;
  environment: string;
  budget: string;
}

const Generator = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [solution, setSolution] = useState<ProstheticSolution | null>(null);
  
  const handleSubmit = async (data: FormData) => {
    if (!data.problem.trim()) {
      toast.error("Please provide a problem description.");
      return;
    }
    
    setIsLoading(true);
    try {
      toast.info("Analyzing your request...");
      const generatedSolution = await generateProstheticSolution(data);
      setSolution(generatedSolution);
      toast.success("Solution generated successfully!");
    } catch (error) {
      console.error("Error generating solution:", error);
      toast.error("There was an error generating your solution. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleReset = () => {
    setSolution(null);
  };
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-prosthetic-50 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-prosthetic-900 mb-4">Custom Prosthetic Generator</h1>
            <p className="text-lg text-prosthetic-700 max-w-3xl">
              Describe your accessibility challenge, and our AI will generate a customized prosthetic solution tailored to your specific needs.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          {solution ? (
            <SolutionDisplay solution={solution} onReset={handleReset} />
          ) : (
            <ProblemForm onSubmit={handleSubmit} isLoading={isLoading} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Generator;
