import React from 'react';
import { Card, Col, Row } from 'antd';
import {
  FaWordpress,
  FaCartArrowDown,
  FaCloudDownloadAlt,
  FaLanguage,
  FaPlane,
  FaChartPie,
} from 'react-icons/fa';

interface ServiceItem {
  icon: string;
  name: string;
  text: string;
}

const ServiceIcons :any= {
  'fa fa-wordpress': <FaWordpress className="text-4xl text-blue-500 mb-4" />,
  'fa fa-cart-arrow-down': <FaCartArrowDown className="text-4xl text-green-500 mb-4" />,
  'fa fa-cloud-download': <FaCloudDownloadAlt className="text-4xl text-indigo-500 mb-4" />,
  'fa fa-language': <FaLanguage className="text-4xl text-yellow-500 mb-4" />,
  'fa fa-plane': <FaPlane className="text-4xl text-red-500 mb-4" />,
  'fa fa-pie-chart': <FaChartPie className="text-4xl text-purple-500 mb-4" />,
};

export const Services = (props: { data: ServiceItem[] }) => {
  return (
    <div
  id="services"
  className="py-24 px-6 bg-gradient-to-br from-black via-gray-900 to-gray-950 relative overflow-hidden"
>
  {/* Background Glow Effects */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/20 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/20 blur-3xl rounded-full"></div>

  <div className="container mx-auto relative z-10">

    {/* Heading */}
    <div className="text-center mb-20">
      <h2 className="text-5xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-6">
        Our Services
      </h2>

      <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-8">
        Powerful tools and features designed to help writers create, publish, 
        and share meaningful content with readers across the world.
      </p>
    </div>

    {/* Cards */}
    <Row gutter={[24, 24]}>
      {props.data
        ? props.data.map((service, index) => (
            <Col xs={24} sm={12} md={8} lg={8} key={index}>
              <div className="group h-full">
                <Card
                  hoverable
                  className="relative overflow-hidden bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:shadow-orange-500/20 h-full"
                >

                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  <div className="relative z-10 text-center flex flex-col items-center">

                    {/* Icon */}
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl text-white bg-gradient-to-r from-orange-500 to-pink-500 shadow-xl mb-6">
                      {ServiceIcons[service.icon]}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {service.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 leading-7">
                      {service.text}
                    </p>

                  </div>
                </Card>
              </div>
            </Col>
          ))
        : "loading"}
    </Row>
  </div>
</div>
  );
};