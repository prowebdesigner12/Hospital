import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          
          <div className="col-span-2">
            <h4 className="text-lg font-semibold text-white mb-4">Max Healthcare</h4>
            <p className="text-sm leading-relaxed mb-6">
              A leading provider of comprehensive, seamless, and integrated world-class healthcare services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f text-xl"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter text-xl"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in text-xl"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-youtube text-xl"></i></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-md font-semibold text-white mb-4">For Patients</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Find a Doctor</a></li>
              <li><a href="#" className="hover:text-white">Book Appointment</a></li>
              <li><a href="#" className="hover:text-white">Video Consult</a></li>
              <li><a href="#" className="hover:text-white">Health Packages</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold text-white mb-4">Hospitals</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Max Saket, Delhi</a></li>
              <li><a href="#" className="hover:text-white">Max Vaishali, UP</a></li>
              <li><a href="#" className="hover:text-white">BLK-Max, Delhi</a></li>
              <li><a href="#" className="hover:text-white">Nanavati-Max, Mumbai</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-md font-semibold text-white mb-4">Specialities</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Cardiac Sciences</a></li>
              <li><a href="#" className="hover:text-white">Cancer Care</a></li>
              <li><a href="#" className="hover:text-white">Neuro Sciences</a></li>
              <li><a href="#" className="hover:text-white">Orthopaedics</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="text-md font-semibold text-white mb-4">Download App</h4>
            <div className="flex flex-col space-y-3">
                <a href="#" className="bg-black text-white rounded-lg px-3 py-2 flex items-center hover:bg-gray-700">
                    <i className="fab fa-apple text-2xl mr-3"></i>
                    <div>
                        <p className="text-xs">Download on the</p>
                        <p className="text-sm font-semibold">App Store</p>
                    </div>
                </a>
                 <a href="#" className="bg-black text-white rounded-lg px-3 py-2 flex items-center hover:bg-gray-700">
                    <i className="fab fa-google-play text-2xl mr-3"></i>
                    <div>
                        <p className="text-xs">GET IT ON</p>
                        <p className="text-sm font-semibold">Google Play</p>
                    </div>
                </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 text-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Max Healthcare. All Rights Reserved. Clone for demonstration purposes.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;