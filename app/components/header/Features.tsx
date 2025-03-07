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
    <div id="features" className="py-20 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Key Features</h2>
          <p className="text-lg text-gray-600">Discover what makes us stand out.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {props.data &&
            props.data.map((feature, index) => (
              <div key={index} className="flex justify-center">
                <Card
                  hoverable
                  className="w-full max-w-sm shadow-md rounded-lg p-6 transition-transform duration-300 transform hover:scale-105 h-full flex flex-col justify-between"
                >
                  <div className="text-center">
                    <div className="mb-4">{iconMap[feature.icon]}</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.text}</p>
                  </div>
                </Card>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};