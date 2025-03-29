
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Link } from "lucide-react";

const resourceCategories = [
  {
    title: "Educational Materials",
    resources: [
      {
        title: "Understanding Prosthetic Basics",
        description: "A comprehensive guide to prosthetic terminology, components, and functions.",
        link: "#",
        type: "guide"
      },
      {
        title: "Materials Science for Prosthetics",
        description: "Learn about different materials used in prosthetic development and their properties.",
        link: "#",
        type: "guide"
      },
      {
        title: "Ergonomics and Human Factors",
        description: "Understanding how to design for comfort, usability, and effectiveness.",
        link: "#",
        type: "guide"
      },
      {
        title: "Accessibility Design Principles",
        description: "Key principles to follow when designing solutions for accessibility challenges.",
        link: "#",
        type: "guide"
      }
    ]
  },
  {
    title: "Technical Resources",
    resources: [
      {
        title: "3D Printing Guidelines",
        description: "Specific parameters and settings for printing prosthetic components.",
        link: "#",
        type: "technical"
      },
      {
        title: "Material Test Procedures",
        description: "Methods for testing strength, durability, and safety of prosthetic materials.",
        link: "#",
        type: "technical"
      },
      {
        title: "Measurement Techniques",
        description: "Guidelines for taking accurate measurements for custom prosthetic design.",
        link: "#",
        type: "technical"
      },
      {
        title: "Electronics Integration Guide",
        description: "Instructions for adding sensors and electronic components to prosthetics.",
        link: "#",
        type: "technical"
      }
    ]
  },
  {
    title: "Community & Support",
    resources: [
      {
        title: "Finding Local Makers",
        description: "Directory of makerspaces and individuals who can help build prosthetic designs.",
        link: "#",
        type: "community"
      },
      {
        title: "User Community Forum",
        description: "Connect with others who have similar challenges and share experiences.",
        link: "#",
        type: "community"
      },
      {
        title: "Professional Consultation Directory",
        description: "List of medical professionals who can provide guidance on prosthetic solutions.",
        link: "#",
        type: "community"
      },
      {
        title: "Funding Resources",
        description: "Information on grants, crowdfunding, and other financial support options.",
        link: "#",
        type: "community"
      }
    ]
  }
];

const Resources = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-prosthetic-50 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-prosthetic-900 mb-4">Resources & Support</h1>
            <p className="text-lg text-prosthetic-700 max-w-3xl">
              Access guides, technical documentation, and community support to help you implement your custom prosthetic solutions.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="educational" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="educational">Educational</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
            </TabsList>
            
            {resourceCategories.map((category, categoryIndex) => (
              <TabsContent key={categoryIndex} value={
                category.title.toLowerCase().includes("educational") ? "educational" :
                category.title.toLowerCase().includes("technical") ? "technical" : "community"
              }>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.resources.map((resource, resourceIndex) => (
                    <Card key={resourceIndex} className="transition-all hover:shadow-md">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl text-prosthetic-800">{resource.title}</CardTitle>
                          <div className="bg-prosthetic-100 p-2 rounded-full">
                            <FileText className="h-5 w-5 text-prosthetic-600" />
                          </div>
                        </div>
                        <CardDescription>{resource.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <a 
                          href={resource.link} 
                          className="flex items-center text-prosthetic-500 hover:text-prosthetic-700 transition-colors"
                        >
                          <Link className="h-4 w-4 mr-2" />
                          Access Resource
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          <div className="mt-16 p-6 rounded-xl bg-prosthetic-50 border border-prosthetic-100">
            <h2 className="text-2xl font-bold text-prosthetic-800 mb-4">Need Additional Help?</h2>
            <p className="text-prosthetic-600 mb-6">
              Our team of experts is available to provide personalized guidance on implementing your custom prosthetic solution.
              Schedule a consultation for in-depth assistance with your specific needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#" 
                className="inline-flex items-center px-4 py-2 rounded-md bg-prosthetic-600 text-white hover:bg-prosthetic-700 transition-colors"
              >
                Contact Support Team
              </a>
              <a 
                href="#" 
                className="inline-flex items-center px-4 py-2 rounded-md border border-prosthetic-300 text-prosthetic-600 hover:bg-prosthetic-100 transition-colors"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
