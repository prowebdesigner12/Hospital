import React from 'react';
import { PROCESS_STEPS } from '../constants';
import type { ProcessStep } from '../types';

const ProcessCard: React.FC<{ step: ProcessStep; isHighlighted: boolean }> = ({ step, isHighlighted }) => {
    const cardBaseClasses = 'p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col';
    const cardClasses = isHighlighted 
        ? 'bg-blue-900 text-white shadow-xl relative overflow-hidden' 
        : 'bg-white text-gray-800 shadow-lg hover:shadow-xl border border-gray-100';
    
    const numberClasses = isHighlighted 
        ? 'text-white/90' 
        : 'text-blue-600';

    const titleClasses = isHighlighted
        ? 'text-white'
        : 'text-gray-800';
    
    const descriptionClasses = isHighlighted
        ? 'text-gray-300'
        : 'text-gray-600';

    const lineClasses = isHighlighted
        ? 'bg-white/50'
        : 'bg-blue-600';

    return (
        <div className={`${cardBaseClasses} ${cardClasses}`}>
             {isHighlighted && (
                <>
                    <img 
                        src={step.image} 
                        alt="" 
                        className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
                    />
                    <div className="absolute inset-0 bg-blue-900 opacity-70 z-10"></div>
                </>
            )}
            <div className="relative z-20">
                <div className="flex items-center mb-4">
                    <span className={`text-5xl font-bold ${numberClasses}`}>{step.number}</span>
                    <div className={`h-px w-10 ml-4 ${lineClasses}`}></div>
                </div>
                <h3 className={`text-xl font-bold mb-3 ${titleClasses}`}>{step.title}</h3>
                <p className={`text-sm leading-relaxed ${descriptionClasses}`}>
                  Nec tristis fringilla. it egestas fringilla condimentum purus.
                </p>
            </div>
        </div>
    );
};

const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col gap-y-6">
            <div>
                <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-2">Process</p>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                    Take Control Of Your Health With These Simple Steps
                </h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-base">
                Et phasellus turpis vel fermentum cursus. Cursus mi placerat faucibus sapien purus odio arcu in. Amet dui mauris accumsan elit nec.
            </p>
            <div className="mt-4">
                <img 
                    src="https://i.ibb.co/6PqjXfG/doctors-team.png"
                    alt="Team of doctors" 
                    className="w-full h-auto"
                />
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {PROCESS_STEPS.map((step, index) => (
                <ProcessCard key={step.number} step={step} isHighlighted={index === 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;