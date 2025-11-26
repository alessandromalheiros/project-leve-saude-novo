import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';

export const FaqSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-bold text-center text-[#4a0d4a] mb-10">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-gray-800">{item.question}</span>
                  {openFaqIndex === index ? <Minus className="w-5 h-5 text-[#ff6b35]" /> : <Plus className="w-5 h-5 text-gray-400" />}
                </button>
                {openFaqIndex === index && (
                  <div className="p-4 bg-gray-50 text-gray-600 text-sm border-t border-gray-100 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};