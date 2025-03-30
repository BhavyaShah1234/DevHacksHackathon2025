import React, {useState, useEffect} from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, MessageSquare, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface UserPrompt {
  id: string;
  username: string;
  prompt: string;
  response: string;
  category: string;
  createdAt: string;
}

const Resources = () => {
  const [prompts, setPrompts] = useState<UserPrompt[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        // This would be replaced with your actual API endpoint
        const response = await fetch('https://api.example.com/prompts');
        
        // For demonstration purposes, we'll use mock data
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        
        // Mock data for demonstration
        const mockData: UserPrompt[] = [
          {
            id: '1',
            username: 'Sarah J.',
            prompt: 'My 4-year old daughter has limited dexterity in her right hand. What prosthetic solution would help her hold a pencil for drawing?',
            response: 'Based on your description, a lightweight finger assist device would be ideal. The design uses flexible materials that conform to small hands and provides just enough support to grip a pencil without being bulky or heavy.',
            category: 'pediatric',
            createdAt: '2023-11-15T14:30:00Z'
          },
          {
            id: '2',
            username: 'Miguel R.',
            prompt: 'I need a customizable prosthetic foot that can handle hiking on uneven terrain but still look decent with formal shoes.',
            response: 'A modular ankle-foot system with interchangeable components would work best. The core structure uses carbon fiber for strength with a shock-absorbing heel. For hiking, attach the terrain adapter; for formal wear, use the slim profile cover.',
            category: 'mobility',
            createdAt: '2023-10-22T09:15:00Z'
          },
          {
            id: '3',
            username: 'David L.',
            prompt: 'My elderly father has arthritis and can\'t grip his tools in the workshop. He loves woodworking and doesn\'t want to give up his hobby.',
            response: 'Consider adaptive tool handles that increase surface area for grip. Custom 3D printed sleeves can be designed for his specific tools, using ergonomic shapes and high-friction materials to reduce the grip strength needed.',
            category: 'elderly',
            createdAt: '2023-12-05T11:45:00Z'
          },
          {
            id: '4',
            username: 'Aisha K.',
            prompt: 'I\'m looking for a waterproof arm prosthetic that would allow me to swim with my kids. Current options are too heavy when wet.',
            response: 'A hydrodynamic swim prosthetic with sealed, buoyant materials would work best. The design features channels to reduce water resistance, marine-grade components that won\'t corrode, and a quick-release system to swap between dry and water activities.',
            category: 'sports',
            createdAt: '2024-01-10T16:20:00Z'
          },
          {
            id: '5',
            username: 'Robert T.',
            prompt: 'I need a light, portable standing support for my child with cerebral palsy that we can take to restaurants and friends\' houses.',
            response: 'A collapsible standing frame with adjustable support points would be ideal. The design uses lightweight aluminum tubing that folds compactly, with quick-adjust straps and padded supports that accommodate growth and different clothing.',
            category: 'pediatric',
            createdAt: '2023-11-30T13:10:00Z'
          }
        ];
        
        setPrompts(mockData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching prompts:', error);
        toast({
          title: "Failed to load resources",
          description: "Please try again later",
          variant: "destructive"
        });
        setLoading(false);
      }
    };

    fetchPrompts();
  }, [toast]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric', 
      month: 'short', 
      day: 'numeric'
    });
  };
  
  const categories = [
    { id: 'all', name: 'All Prompts' },
    { id: 'pediatric', name: 'Pediatric Solutions' },
    { id: 'mobility', name: 'Mobility Aids' },
    { id: 'elderly', name: 'Elderly Support' },
    { id: 'sports', name: 'Sports & Recreation' }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-prosthetic-50 dark:bg-prosthetic-900 py-12">
          <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-prosthetic-900 dark:text-prosthetic-100 mb-4">Community Solutions</h1>
          <p className="text-lg text-prosthetic-700 dark:text-prosthetic-300 max-w-3xl"> Explore prompt-response pairs from the ProsPal community. See how others have used our generator to solve accessibility challenges.
          </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-5 mb-8">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>{category.name}</TabsTrigger>
              ))}
            </TabsList>
            
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                {loading ? (
                  <div className="grid grid-cols-1 gap-6">
                    {[1, 2, 3].map((i) => (
                      <Card key={i} className="overflow-hidden transition-all">
                        <CardHeader>
                          <div className="flex items-center gap-4">
                            <Skeleton className="h-10 w-10 rounded-full" />
                            <div className="space-y-2">
                              <Skeleton className="h-4 w-[200px]" />
                              <Skeleton className="h-3 w-[150px]" />
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-3/4" />
                            <div className="pt-4 space-y-3">
                              <Skeleton className="h-4 w-full" />
                              <Skeleton className="h-4 w-full" />
                              <Skeleton className="h-4 w-2/3" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-6">
                    {prompts
                      .filter(prompt => category.id === 'all' || prompt.category === category.id)
                      .map((prompt) => (
                        <Card key={prompt.id} className="overflow-hidden transition-all hover:shadow-md dark:shadow-none dark:bg-prosthetic-800 dark:border-prosthetic-700">
                          <CardHeader>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div className="bg-prosthetic-100 dark:bg-prosthetic-700 p-2 rounded-full">
                                  <User className="h-5 w-5 text-prosthetic-600 dark:text-prosthetic-300" />
                                </div>
                                <div>
                                  <CardTitle className="text-xl text-prosthetic-800 dark:text-prosthetic-200">{prompt.username}</CardTitle>
                                  <CardDescription className="flex items-center gap-1 text-prosthetic-500 dark:text-prosthetic-400">
                                    <Calendar className="h-3 w-3" /> {formatDate(prompt.createdAt)}
                                  </CardDescription>
                                </div>
                              </div>
                              <div className="bg-prosthetic-100 dark:bg-prosthetic-700 px-3 py-1 rounded-full text-xs text-prosthetic-600 dark:text-prosthetic-300 capitalize">
                                {prompt.category}
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div>
                              <h3 className="font-medium flex items-center gap-2 text-prosthetic-700 dark:text-prosthetic-300 mb-2">
                                <MessageSquare className="h-4 w-4" /> Prompt
                              </h3>
                              <p className="text-prosthetic-600 dark:text-prosthetic-300 pl-6">
                                {prompt.prompt}
                              </p>
                            </div>
                            <div className="pt-3 border-t border-prosthetic-100 dark:border-prosthetic-700">
                              <h3 className="font-medium flex items-center gap-2 text-prosthetic-700 dark:text-prosthetic-300 mb-2">
                                <MessageSquare className="h-4 w-4 rotate-180" /> Solution
                              </h3>
                              <p className="text-prosthetic-600 dark:text-prosthetic-300 pl-6">
                                {prompt.response}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                    ))}
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
          
          <div className="mt-16 p-6 rounded-xl bg-prosthetic-50 dark:bg-prosthetic-800 border border-prosthetic-100 dark:border-prosthetic-700">
            <h2 className="text-2xl font-bold text-prosthetic-800 dark:text-prosthetic-200 mb-4">Share Your Success Story</h2>
            <p className="text-prosthetic-600 dark:text-prosthetic-300 mb-6">
              Have you created a successful prototype using ProsPal? We'd love to showcase your solution to inspire others with similar challenges.
            </p>
            <div className="flex flex-wrap gap-4">
            <button 
                className="inline-flex items-center px-4 py-2 rounded-md bg-prosthetic-600 text-white hover:bg-prosthetic-700 dark:bg-prosthetic-500 dark:hover:bg-prosthetic-600 transition-colors"
              >
                Share Your Story
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};  
export default Resources;
