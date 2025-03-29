
// This file simulates an AI-powered prototype generator service

interface ProstheticRequirements {
  problem: string;
  age?: string;
  environment?: string;
  budget?: string;
}

export interface ProstheticSolution {
  title: string;
  description: string;
  targetAudience: {
    demographic: string;
    needs: string;
  };
  problemAnalysis: string[];
  design: {
    conceptDescription: string;
    keyFeatures: string[];
    customizationOptions: string[];
    image?: string;
  };
  materials: {
    name: string;
    purpose: string;
    alternatives?: string;
  }[];
  manufacturingProcess: string[];
  safetyConsiderations: string[];
  nextSteps: string[];
}

// Function to analyze the problem statement and extract key information
const analyzeProblemStatement = (problem: string): {
  targetAge: string;
  mobilityIssue: string;
  environmentalFactors: string;
} => {
  // In a real application, this would use NLP to extract information
  // For now, we'll use simple pattern matching and defaults
  
  let targetAge = "unknown";
  if (problem.toLowerCase().includes("toddler")) targetAge = "toddler";
  else if (problem.toLowerCase().includes("child")) targetAge = "child";
  else if (problem.toLowerCase().includes("teen")) targetAge = "teenager";
  else if (problem.toLowerCase().includes("adult")) targetAge = "adult";
  else if (problem.toLowerCase().includes("elderly")) targetAge = "elderly";
  
  let mobilityIssue = "general mobility";
  if (problem.toLowerCase().includes("walk")) mobilityIssue = "walking assistance";
  else if (problem.toLowerCase().includes("grip")) mobilityIssue = "gripping assistance";
  else if (problem.toLowerCase().includes("reach")) mobilityIssue = "reaching assistance";
  else if (problem.toLowerCase().includes("balance")) mobilityIssue = "balance assistance";
  
  let environmentalFactors = "indoor use";
  if (problem.toLowerCase().includes("outdoor")) environmentalFactors = "outdoor use";
  else if (problem.toLowerCase().includes("water")) environmentalFactors = "water-resistant";
  
  return {
    targetAge,
    mobilityIssue,
    environmentalFactors
  };
};

// Generate a solution based on the toddler mobility example as default
const generateToddlerMobilitySolution = (): ProstheticSolution => {
  return {
    title: "Toddler Mobility Trainer",
    description: "A lightweight, adjustable mobility assistance device designed specifically for toddlers to support their early walking efforts while building strength and confidence.",
    targetAudience: {
      demographic: "Toddlers (ages 1-3) with mobility challenges or developmental delays",
      needs: "Support for independent movement, building leg strength, and coordination development in a safe manner"
    },
    problemAnalysis: [
      "Limited leg strength making independent standing and walking difficult",
      "Need for balance assistance without creating dependency",
      "Requirement for adjustability as the child grows and develops skills",
      "Must be lightweight and non-restrictive to encourage natural movement",
      "Should provide confidence and sense of achievement for the child"
    ],
    design: {
      conceptDescription: "A harness-based walking assistance system with adjustable supports that gradually reduce assistance as the child gains strength and confidence.",
      keyFeatures: [
        "Soft, breathable harness with padded supports at hip and chest level",
        "Adjustable height and tension settings to customize support levels",
        "Lightweight aluminum frame with soft-touch polymer coating",
        "Swivel wheels with resistance adjustment to prevent tipping",
        "Quick-release safety mechanism for parents/caregivers",
        "Colorful, engaging design to encourage use"
      ],
      customizationOptions: [
        "Harness size adjustments (XS to M)",
        "Support rigidity settings from high support to minimal guidance",
        "Wheel resistance settings for different floor surfaces",
        "Height adjustments to accommodate growth from 24-40 inches"
      ],
      image: "https://images.unsplash.com/photo-1565677913671-ce5a5146e2f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    materials: [
      {
        name: "Aircraft-grade aluminum tubing",
        purpose: "Main frame construction - lightweight yet strong",
        alternatives: "Carbon fiber (more expensive but lighter)"
      },
      {
        name: "Medical-grade silicone padding",
        purpose: "Contact points with child's body - prevents pressure points",
        alternatives: "High-density foam with hypoallergenic cover"
      },
      {
        name: "Breathable mesh fabric",
        purpose: "Harness construction - prevents overheating",
        alternatives: "Organic cotton blend for sensitive skin"
      },
      {
        name: "Polyurethane wheels with sealed bearings",
        purpose: "Smooth movement across various surfaces",
        alternatives: "Rubber-coated wheels for quieter operation"
      }
    ],
    manufacturingProcess: [
      "Template creation for harness components based on measurements",
      "Cutting and sewing of harness materials with reinforced stitching",
      "Frame cutting and bending according to height specifications",
      "Assembly of support mechanisms with adjustable components",
      "Wheel and brake system installation with safety testing",
      "Final assembly with all safety mechanisms verified",
      "Quality control testing for weight support and stability"
    ],
    safetyConsiderations: [
      "All edges rounded and padded to prevent injury",
      "Stability testing to ensure 30° tilt in any direction without tipping",
      "Weight capacity testing up to 40 lbs (18 kg)",
      "Emergency quick-release feature for caregivers",
      "Non-toxic materials used throughout construction",
      "Regular maintenance check guidelines for parents"
    ],
    nextSteps: [
      "Take precise measurements of the child's height, weight, and hip width",
      "Consider the primary environment where the device will be used",
      "Consult with a pediatric physical therapist for specific adjustments",
      "Start with shorter periods of use (10-15 minutes) and gradually increase",
      "Document the child's progress with photos or video to track improvement",
      "Schedule regular check-ins with healthcare providers to adjust support levels"
    ]
  };
};

// Generate adult balance assistance solution
const generateAdultBalanceSolution = (): ProstheticSolution => {
  return {
    title: "Dynamic Balance Assistance System",
    description: "A discreet, wearable device that provides proprioceptive feedback and subtle physical support to improve balance and prevent falls in adults with balance disorders.",
    targetAudience: {
      demographic: "Adults with balance disorders, vestibular issues, or those recovering from stroke/injury",
      needs: "Improved stability during daily activities without obvious assistive devices"
    },
    problemAnalysis: [
      "Reduced proprioception leading to balance uncertainty",
      "Risk of falls during daily activities",
      "Desire for independence without obvious assistive devices",
      "Need for feedback system to improve balance responses",
      "Varying support requirements based on activity level and environment"
    ],
    design: {
      conceptDescription: "A slim-profile wearable system combining sensor technology with strategic physical supports that activate when balance issues are detected.",
      keyFeatures: [
        "Thin, contoured support bands worn under clothing around waist and upper legs",
        "Embedded IMU sensors to detect balance shifts and body position",
        "Microprocessor-controlled tension system that activates when imbalance detected",
        "Haptic feedback system to alert user of balance adjustments",
        "Smartphone app for calibration and sensitivity adjustments",
        "10+ hour battery life with quick-charge capability"
      ],
      customizationOptions: [
        "Support level settings from subtle to maximum",
        "Sensitivity calibration for different activities",
        "Alert preferences (haptic, audio, or both)",
        "Multiple sizes and adjustable straps for proper fit"
      ],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    materials: [
      {
        name: "Moisture-wicking compression fabric",
        purpose: "Main support construction - comfortable for all-day wear",
        alternatives: "Medical-grade elastic mesh for more breathability"
      },
      {
        name: "Flexible polymer support ribs",
        purpose: "Directional support when activated by the system",
        alternatives: "Carbon fiber composite for thinner profile"
      },
      {
        name: "Silicone grip strips",
        purpose: "Prevents slipping or movement during wear",
        alternatives: "Medical adhesive strips for more active users"
      },
      {
        name: "Lithium polymer battery",
        purpose: "Power system with all-day capability",
        alternatives: "Replaceable standard batteries for travel convenience"
      }
    ],
    manufacturingProcess: [
      "Custom measurement and fitting process",
      "Cutting and reinforced stitching of base materials",
      "Installation of support structures with flexible joints",
      "Sensor placement and wiring with waterproof protection",
      "Circuit board and battery installation with protective housing",
      "Software calibration and testing across multiple scenarios",
      "Final assembly with quality control testing"
    ],
    safetyConsiderations: [
      "Fail-safe passive support even when power is depleted",
      "Water-resistant electronics with IP65 rating",
      "Skin sensitivity testing for all materials",
      "Emergency alert feature if severe imbalance detected",
      "Regular calibration reminders to ensure optimal function",
      "Auto-shutdown for overheating protection"
    ],
    nextSteps: [
      "Consultation with balance specialist to determine specific needs",
      "Professional measurement and fitting session",
      "Initial calibration session with physical therapist",
      "Start with home use before progressing to more challenging environments",
      "Weekly recalibration for first month, then monthly",
      "Track progress using the companion app analytics"
    ]
  };
};

// Main function to generate a prosthetic solution based on user requirements
export const generateProstheticSolution = async (requirements: ProstheticRequirements): Promise<ProstheticSolution> => {
  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1500));
  
  // Analyze the problem statement
  const analysis = analyzeProblemStatement(requirements.problem);
  
  // Return appropriate solution based on analysis
  // In a real application, this would be much more sophisticated
  if (analysis.targetAge === "toddler" || analysis.targetAge === "child") {
    return generateToddlerMobilitySolution();
  } else {
    return generateAdultBalanceSolution();
  }
};
