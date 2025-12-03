import React from 'react';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube, 
  FaWhatsapp,
  FaPhone 
} from 'react-icons/fa';

const SocialSidebar = () => {
  const socialLinks = [
    { icon: FaFacebookF,  label: 'Facebook',  color: 'bg-blue-600',   link: 'https://facebook.com/yourpage' },
    { icon: FaInstagram,  label: 'Instagram', color: 'bg-gradient-to-r from-purple-600 via-pink-500 to-red-500', link: 'https://instagram.com' },
    { icon: FaLinkedinIn, label: 'LinkedIn',  color: 'bg-blue-700',    link: 'https://linkedin.com' },
    { icon: FaYoutube,    label: 'YouTube',    color: 'bg-red-600',     link: 'https://youtube.com' },
    { icon: FaWhatsapp,   label: 'WhatsApp',   color: 'bg-green-500',   link: 'https://wa.me/1234567890' },
    { icon: FaPhone,      label: 'Call Us',     color: 'bg-blue-500',    link: 'tel:+1234567890' },
  ];

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/3 z-50 flex flex-col gap-3">
      {socialLinks.map((item, index) => (
        <div key={index} className="group relative">

          {/* Sliding Label */}
          <div
            className="
              absolute left-0 top-0 h-full 
              w-0 overflow-hidden bg-white text-gray-800 
              font-medium whitespace-nowrap flex items-center 
              transition-all duration-300 ease-out
              
              /* Desktop */
              text-sm group-hover:w-40 group-hover:pr-4 shadow-xl border border-gray-200 rounded-r-lg

              /* Mobile: Smaller label */
              max-md:text-xs max-md:group-hover:w-28
            "
          >
            <span className="pl-4">{item.label}</span>

            {/* Arrow */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 
              border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent 
              border-l-white translate-x-full">
            </div>
          </div>

          {/* Icon Button */}
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              ${item.color} text-white block rounded-r-lg shadow-xl transition-all duration-300

              /* Desktop */
              p-2 group-hover:translate-x-32 hover:!translate-x-36

              /* Mobile: smaller icon, smaller movement */
              max-md:p-1.5 max-md:group-hover:translate-x-24 max-md:hover:!translate-x-28
            `}
          >
            <item.icon className="text-2xl max-md:text-xl" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialSidebar;
