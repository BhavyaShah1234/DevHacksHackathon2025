
import React from "react";
import { CircleCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Describe Your Challenge",
    description: "Tell us about the specific mobility or accessibility challenge you're facing in everyday language."
  },
  {
    number: "02",
    title: "AI Analysis",
    description: "Our AI system analyzes your input to identify key constraints, requirements, and possible solutions."
  },
  {
    number: "03",
    title: "Prototype Generation",
    description: "Receive a detailed prosthetic prototype concept with materials, assembly instructions, and safety guidelines."
  },
  {
    number: "04",
    title: "Feedback & Refinement",
    description: "Provide feedback on the prototype to refine and improve the solution for your specific needs."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-prosthetic-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-prosthetic-800 mb-4">
            The Process: From Challenge to Solution
          </h2>
          <p className="text-lg text-prosthetic-600">
            Our streamlined four-step process transforms your accessibility challenges into practical, customized prosthetic solutions.
          </p>
        </div>
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start">
              <div className="flex-shrink-0 p-4 bg-white rounded-xl shadow-md md:mr-6 mb-4 md:mb-0">
                <span className="text-2xl font-bold text-prosthetic-500">{step.number}</span>
              </div>
              <div className="flex-grow bg-white rounded-xl p-6 shadow-md relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute h-full w-0.5 bg-prosthetic-200 top-full left-0 -ml-3 transform -translate-x-1/2"></div>
                )}
                <h3 className="text-xl font-semibold mb-2 text-prosthetic-800 flex items-center">
                  <CircleCheck className="h-5 w-5 text-prosthetic-500 mr-2" />
                  {step.title}
                </h3>
                <p className="text-prosthetic-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
