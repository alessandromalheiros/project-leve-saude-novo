import React from 'react';
import { STATS } from '../constants';

export const StatsSection: React.FC = () => {
  return (
    <section className="py-12 bg-white border-b border-gray-100 shadow-sm relative z-20 -mt-4 md:mt-0 rounded-t-3xl md:rounded-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center group cursor-default hover:transform hover:scale-105 transition duration-300">
              <div className="w-16 h-16 mx-auto bg-orange-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#ff6b35] group-hover:text-white transition-colors">
                <stat.icon className="w-8 h-8 text-[#ff6b35] group-hover:text-white transition-colors" />
              </div>
              <div className="text-3xl font-heading font-bold text-[#4a0d4a]">{stat.number}</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wide mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};