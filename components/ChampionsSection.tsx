import React from 'react';
import { CHAMPIONS_DATA } from '../constants';
import type { Champion } from '../types';

const ChampionCard: React.FC<{ champion: Champion }> = ({ champion }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 transform h-full flex flex-col">
        <div className="relative p-4 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="absolute top-3 right-3 bg-amber-400 text-white font-bold text-xs px-3 py-1 rounded-full shadow-md flex items-center gap-1 z-10">
                <i className="fas fa-medal"></i>
                <span>AIR {champion.rank}</span>
            </div>
            <div className="relative w-32 h-32 mx-auto">
                <img src={champion.image} alt={champion.name} className="rounded-full w-full h-full object-cover border-4 border-white shadow-md" />
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-300 animate-spin-slow group-hover:border-blue-500 transition-colors duration-300"></div>
            </div>
        </div>
        <div className="p-4 text-center flex-grow flex flex-col justify-between">
            <div>
                <h3 className="font-bold text-blue-900 text-lg">{champion.name}</h3>
                <p className="text-gray-600 font-semibold text-sm my-1 flex items-center justify-center gap-1.5">
                    <i className="fas fa-graduation-cap text-gray-400"></i>
                    {champion.college}
                </p>
            </div>
            <div className="mt-4">
                <span className="text-gray-700 bg-gray-100 rounded-full px-4 py-1.5 text-xs font-semibold whitespace-nowrap border border-gray-200">
                    {champion.course}
                </span>
            </div>
        </div>
    </div>
);


const ChampionsSection: React.FC = () => {
    const allChampions = CHAMPIONS_DATA.flat();
    const scrollingChampions = [...allChampions, ...allChampions];

    return (
        <section className="py-20 bg-gray-50 font-['Figtree']">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">Meet Our 2024 Champions</h2>
                <div className="bg-gradient-to-r from-white to-[#e0f2ff] rounded-2xl shadow-lg p-8 relative overflow-hidden">
                    {/* Background Text */}
                    <div className="absolute inset-0 z-0 flex items-center justify-end opacity-10 pointer-events-none">
                        <span className="text-[8rem] md:text-[12rem] font-bold text-blue-300 tracking-widest -mr-12">
                            JEE MAIN 2025
                        </span>
                    </div>

                    <div className="flex flex-col md:flex-row items-center relative z-10">
                        {/* Left Side */}
                        <div className="md:w-1/3 w-full mb-8 md:mb-0 text-center md:text-left">
                            <div className="inline-block relative mb-4">
                               <svg width="50" height="50" viewBox="0 0 100 100" className="absolute -top-6 -left-8 text-blue-400">
                                   <path d="M40,0 L60,0 L60,40 L100,40 L100,60 L60,60 L60,100 L40,100 L40,60 L0,60 L0,40 L40,40 Z" fill="currentColor" />
                               </svg>
                               <svg width="30" height="30" viewBox="0 0 100 100" className="absolute -top-4 -left-4 text-green-400" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M5 50 H20 L30 30 L45 70 L60 40 L70 50 H95" />
                               </svg>
                            </div>
                            <h3 className="text-3xl font-bold text-blue-800 mt-4">ALLEN ONLINE</h3>
                            <p className="text-2xl font-semibold text-gray-800 mt-2">Online padhai ka ASLI leader.</p>
                            <p className="text-xl font-bold text-teal-500 mt-4">JEE ADV. 2024 RESULTS</p>
                            <div className="flex items-end justify-center md:justify-start mt-8 space-x-6 h-16">
                                <i className="fas fa-stethoscope text-5xl text-gray-500"></i>
                                <i className="fas fa-pills text-6xl text-gray-500"></i>
                            </div>
                        </div>

                        {/* Right Side - Scrolling Marquee */}
                        <div className="md:w-2/3 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_48px,_black_calc(100%-48px),transparent_100%)] group">
                            <ul className="flex items-stretch justify-center md:justify-start [&_li]:mx-2 animate-scroll group-hover:[animation-play-state:paused]">
                                {scrollingChampions.map((champion, index) => (
                                    <li key={`a-${index}`} className="flex-shrink-0 w-64">
                                        <ChampionCard champion={champion} />
                                    </li>
                                ))}
                            </ul>
                             <ul className="flex items-stretch justify-center md:justify-start [&_li]:mx-2 animate-scroll group-hover:[animation-play-state:paused]" aria-hidden="true">
                                {scrollingChampions.map((champion, index) => (
                                    <li key={`b-${index}`} className="flex-shrink-0 w-64">
                                        <ChampionCard champion={champion} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChampionsSection;