import React from 'react';

const CtaSection: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50 font-['Figtree']">
            <div className="container mx-auto px-4">
                <div className="bg-blue-900 rounded-tl-2xl rounded-br-2xl rounded-tr-[60px] rounded-bl-[60px] p-8 md:p-12 lg:p-16">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
                        {/* Left Content */}
                        <div className="lg:w-3/5 text-white text-center lg:text-left">
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                                Our Hospital Locations
                            </h2>
                            <div className="space-y-4 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                                <p>
                                    <strong>1. Max Super Speciality Hospital:</strong><br/> 
                                    1, 2, Press Enclave Marg, Saket Institutional Area, Saket, New Delhi, Delhi 110017
                                </p>
                                 <p>
                                    <strong>2. BLK-Max Super Speciality Hospital:</strong><br/>
                                    Pusa Rd, Radha Soami Satsang, Rajendra Place, New Delhi, Delhi 110005
                                </p>
                            </div>
                        </div>

                        {/* Right Interview Location & Map */}
                        <div className="w-full lg:w-2/5 xl:w-1/3">
                            <div className="bg-blue-800 text-white p-8 rounded-tl-[40px] rounded-br-[40px] rounded-tr-2xl rounded-bl-2xl shadow-2xl h-full">
                                <h3 className="text-2xl font-bold mb-2">Interview Location</h3>
                                <p className="mb-6 opacity-90">
                                    Max Healthcare Corporate Office, 3rd Floor, Saket Institutional Area, New Delhi, Delhi 110017
                                </p>
                                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                                     <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.757199136952!2d77.2069023150807!3d28.54707898245196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce21005e342f5%3A0x24713773a7837947!2sMax%20Healthcare!5e0!3m2!1sen!2sin!4v1678886036854!5m2!1sen!2sin" 
                                        width="100%" 
                                        height="250" 
                                        style={{ border: 0 }}
                                        allowFullScreen={false} 
                                        loading="lazy" 
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="rounded-lg"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;