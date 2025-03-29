
import React from "react";

const testimonials = [
  {
    quote: "The prototype generator provided us with a perfect solution for our daughter's mobility challenge. We've seen tremendous improvement in her independence.",
    author: "Maria Johnson",
    role: "Parent of Child with Mobility Challenges",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    quote: "As an occupational therapist, I've recommended this platform to numerous clients. The customized solutions address specific needs better than standard options.",
    author: "Dr. James Wilson",
    role: "Occupational Therapist",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    quote: "The detailed material recommendations and assembly instructions made creating my custom solution straightforward, even without technical expertise.",
    author: "Robert Chen",
    role: "User with Limb Difference",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-prosthetic-800 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-prosthetic-600 max-w-2xl mx-auto">
            Hear from people whose lives have been transformed by our custom prosthetic solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="p-6 border border-prosthetic-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-prosthetic-800 font-medium">{testimonial.author}</h4>
                  <p className="text-prosthetic-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="text-prosthetic-700 italic">"{testimonial.quote}"</blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
