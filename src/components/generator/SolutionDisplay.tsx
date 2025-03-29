
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type ProstheticSolution } from "@/services/prototypeGenerator";
import { Circle, CircleCheck, Download, FileText } from "lucide-react";

interface SolutionDisplayProps {
  solution: ProstheticSolution;
  onReset: () => void;
}

const SolutionDisplay = ({ solution, onReset }: SolutionDisplayProps) => {
  const handleDownload = () => {
    // In a real app, this would generate a PDF or other downloadable format
    alert("Download functionality would be implemented here");
  };
  
  return (
    <div className="w-full animate-fade-in">
      <Card className="w-full mb-6 overflow-hidden">
        <CardHeader className="bg-prosthetic-500 text-white">
          <CardTitle className="text-2xl">{solution.title}</CardTitle>
          <CardDescription className="text-prosthetic-100">
            {solution.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          {solution.design.image && (
            <div className="relative w-full h-64 md:h-80 bg-prosthetic-100">
              <img 
                src={solution.design.image} 
                alt={solution.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </CardContent>
      </Card>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="design">Design</TabsTrigger>
          <TabsTrigger value="materials">Materials</TabsTrigger>
          <TabsTrigger value="implementation">Implementation</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-prosthetic-800">Target Audience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-prosthetic-700">Demographic:</h4>
                <p className="text-prosthetic-600">{solution.targetAudience.demographic}</p>
              </div>
              <div>
                <h4 className="font-medium text-prosthetic-700">Specific Needs:</h4>
                <p className="text-prosthetic-600">{solution.targetAudience.needs}</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-prosthetic-800">Problem Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {solution.problemAnalysis.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <CircleCheck className="h-5 w-5 text-prosthetic-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-prosthetic-600">{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="design" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-prosthetic-800">Concept Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-prosthetic-600">{solution.design.conceptDescription}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-prosthetic-800">Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {solution.design.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CircleCheck className="h-5 w-5 text-prosthetic-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-prosthetic-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-prosthetic-800">Customization Options</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {solution.design.customizationOptions.map((option, index) => (
                  <li key={index} className="flex items-start">
                    <Circle className="h-5 w-5 text-prosthetic-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-prosthetic-600">{option}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="materials" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-prosthetic-800">Required Materials</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {solution.materials.map((material, index) => (
                  <div key={index} className="border border-prosthetic-200 rounded-lg p-4">
                    <h4 className="font-medium text-prosthetic-800 mb-1">{material.name}</h4>
                    <p className="text-sm text-prosthetic-600 mb-2">{material.purpose}</p>
                    {material.alternatives && (
                      <div className="text-xs text-prosthetic-500 italic">
                        Alternative: {material.alternatives}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="implementation" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-prosthetic-800">Manufacturing Process</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3">
                {solution.manufacturingProcess.map((step, index) => (
                  <li key={index} className="flex">
                    <span className="flex-shrink-0 bg-prosthetic-100 text-prosthetic-600 w-6 h-6 rounded-full flex items-center justify-center mr-3">
                      {index + 1}
                    </span>
                    <span className="text-prosthetic-600">{step}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-prosthetic-800">Safety Considerations</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {solution.safetyConsiderations.map((consideration, index) => (
                  <li key={index} className="flex items-start">
                    <CircleCheck className="h-5 w-5 text-prosthetic-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-prosthetic-600">{consideration}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-prosthetic-800">Next Steps</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3">
                {solution.nextSteps.map((step, index) => (
                  <li key={index} className="flex">
                    <span className="flex-shrink-0 bg-prosthetic-100 text-prosthetic-600 w-6 h-6 rounded-full flex items-center justify-center mr-3">
                      {index + 1}
                    </span>
                    <span className="text-prosthetic-600">{step}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="flex justify-between mt-8">
        <Button
          variant="outline"
          onClick={onReset}
          className="border-prosthetic-300 text-prosthetic-600"
        >
          Back to Form
        </Button>
        <div className="flex space-x-4">
          <Button 
            variant="outline"
            onClick={handleDownload}
            className="border-prosthetic-300 text-prosthetic-600"
          >
            <FileText className="mr-2 h-4 w-4" />
            Export as PDF
          </Button>
          <Button 
            onClick={handleDownload}
            className="bg-prosthetic-600 hover:bg-prosthetic-700"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Full Package
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SolutionDisplay;
