
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

interface ProblemFormProps {
  onSubmit: (data: FormData) => void;
  isLoading: boolean;
}

interface FormData {
  problem: string;
  age: string;
  environment: string;
  budget: string;
}

const EXAMPLE_PROBLEMS = [
  "My toddler is facing difficulty with mobility and can't walk. Many toddlers lack the physical strength or coordination needed to move independently, even though they have the cognitive ability to understand the mechanics of movement.",
  "My elderly father has balance issues after a stroke and is afraid of falling when walking around the house, which has severely limited his independence.",
  "I struggle with grip strength in my right hand due to arthritis, making it difficult to hold and manipulate everyday objects like kitchen utensils and tools."
];

const ProblemForm = ({ onSubmit, isLoading }: ProblemFormProps) => {
  const [selectedExample, setSelectedExample] = useState<string | null>(null);
  
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      problem: "",
      age: "",
      environment: "indoor",
      budget: "medium",
    },
  });
  
  const handleExampleClick = (example: string) => {
    setValue("problem", example);
    setSelectedExample(example);
    toast.success("Example loaded!");
  };
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl text-prosthetic-800">Describe Your Challenge</CardTitle>
        <CardDescription>
          Tell us about the mobility or accessibility challenge you're facing in everyday language.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="problem-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="problem" className="text-prosthetic-700">
                Problem Description <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="problem"
                placeholder="Describe the mobility or accessibility challenge in detail..."
                className="min-h-32 resize-y"
                {...register("problem", {
                  required: "Please describe the problem",
                  minLength: {
                    value: 20,
                    message: "Please provide a more detailed description",
                  },
                })}
              />
              {errors.problem && (
                <p className="text-sm text-red-500">{errors.problem.message}</p>
              )}
              
              <div className="mt-2">
                <p className="text-sm text-prosthetic-600 mb-2">Examples (click to use):</p>
                <div className="flex flex-wrap gap-2">
                  {EXAMPLE_PROBLEMS.map((example, index) => (
                    <Button
                      key={index}
                      type="button"
                      variant="outline"
                      size="sm"
                      className={`text-xs border-prosthetic-300 ${
                        selectedExample === example ? "border-prosthetic-500 bg-prosthetic-50" : ""
                      }`}
                      onClick={() => handleExampleClick(example)}
                    >
                      Example {index + 1}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="age" className="text-prosthetic-700">
                  Age Group
                </Label>
                <Input
                  id="age"
                  placeholder="e.g. Toddler, Adult, Elderly"
                  {...register("age")}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="environment" className="text-prosthetic-700">
                  Primary Environment
                </Label>
                <Select
                  defaultValue="indoor"
                  onValueChange={(value) => setValue("environment", value)}
                >
                  <SelectTrigger id="environment">
                    <SelectValue placeholder="Environment" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="indoor">Indoor</SelectItem>
                    <SelectItem value="outdoor">Outdoor</SelectItem>
                    <SelectItem value="mixed">Both Indoor & Outdoor</SelectItem>
                    <SelectItem value="aquatic">Water/Aquatic</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="budget" className="text-prosthetic-700">
                  Budget Constraints
                </Label>
                <Select
                  defaultValue="medium"
                  onValueChange={(value) => setValue("budget", value)}
                >
                  <SelectTrigger id="budget">
                    <SelectValue placeholder="Budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Limited Budget</SelectItem>
                    <SelectItem value="medium">Moderate Budget</SelectItem>
                    <SelectItem value="high">Flexible Budget</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button 
          form="problem-form"
          type="submit"
          disabled={isLoading}
          className="bg-prosthetic-600 hover:bg-prosthetic-700"
        >
          {isLoading ? "Processing..." : "Generate Solution"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProblemForm;
