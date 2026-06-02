import React from 'react';
import { FaComments, FaBullhorn, FaUsers, FaMagic } from 'react-icons/fa';
import { Card } from 'antd';
interface FeatureItem {
  icon: string;
  title: string;
  text: string;
}

const iconMap: { [key: string]: React.ReactNode } = {
  'fa fa-comments-o': <FaComments className="text-4xl text-blue-500" />,
  'fa fa-bullhorn': <FaBullhorn className="text-4xl text-green-500" />,
  'fa fa-group': <FaUsers className="text-4xl text-indigo-500" />,
  'fa fa-magic': <FaMagic className="text-4xl text-purple-500" />,
};

export const Features = (props: { data: FeatureItem[] }) => {
  return (
   <div
  id="features"
  className="py-24 px-6 bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden"
>
  {/* Background Glow */}
  <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full"></div>
  <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full"></div>

  <div className="container mx-auto relative z-10">
    
    {/* Section Heading */}
    <div className="text-center mb-20">
      <h2 className="text-5xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">
        Key Features
      </h2>

      <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-8">
        Discover powerful features designed to help writers share ideas and readers explore inspiring content effortlessly.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {props.data &&
        props.data.map((feature, index) => (
          <div key={index} className="group">
            <div className="relative h-full bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden">

              {/* Gradient Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Icon */}
              <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 text-white text-3xl shadow-lg mb-6 mx-auto">
                {iconMap[feature.icon]}
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-300 leading-7">
                  {feature.text}
                </p>
              </div>

            </div>
          </div>
        ))}
    </div>
  </div>
</div>
  );
};