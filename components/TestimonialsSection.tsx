import React from 'react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-heading font-bold text-[#4a0d4a] mb-4">
            Quem contratou, recomenda
          </h2>
          <p className="text-gray-600">
            Veja o que dizem os nossos clientes atendidos pela Vortex.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-gray-200" />
              <div className="flex gap-1 mb-4">
                {[...Array(item.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6 text-sm leading-relaxed">"{item.text}"</p>
              <div>
                <div className="font-bold text-[#4a0d4a]">{item.name}</div>
                <div className="text-xs text-gray-500">{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};