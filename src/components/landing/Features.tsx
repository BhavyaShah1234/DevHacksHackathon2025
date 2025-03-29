
import React from "react";
import { Accessibility, FileText, Image, Search } from "lucide-react";

const features = [
  {
    icon: <Search className="h-8 w-8 text-prosthetic-500" />,
    title: "Natural Language Processing",
    description: "Describe your needs in plain language and our AI analyzes your requirements for precise solutions."
  },
  {
    icon: <FileText className="h-8 w-8 text-prosthetic-500" />,
    title: "Material Recommendations",
    description: "Get customized material suggestions based on your specific requirements and constraints."
  },
  {
    icon: <Image className="h-8 w-8 text-prosthetic-500" />,
    title: "Visual Prototypes",
    description: "Receive visual representations of your custom prosthetic solutions to understand the design."
  },
  {
    icon: <Accessibility className="h-8 w-8 text-prosthetic-500" />,
    title: "Accessibility Focused",
    description: "All solutions prioritize usability, comfort, and effectiveness for real-world applications."
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-prosthetic-800 mb-4">
            How Our Prototype Generator Works
          </h2>
          <p className="text-lg text-prosthetic-600 max-w-2xl mx-auto">
            Our platform uses advanced AI to analyze your needs and generate custom prosthetic solutions tailored to your unique challenges.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 border border-prosthetic-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 p-3 inline-block bg-prosthetic-50 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-prosthetic-800">
                {feature.title}
              </h3>
              <p className="text-prosthetic-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
