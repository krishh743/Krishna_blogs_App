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
    <div id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <Row gutter={[24, 24]}>
          {props.data
            ? props.data.map((service, index) => (
                <Col xs={24} sm={12} md={8} lg={6} key={index}>
                  <Card
                    hoverable
                    className="shadow-md rounded-lg p-6 transition-transform duration-300 transform hover:scale-105 h-full flex flex-col justify-between"
                  >
                    <div className="text-center">
                      {ServiceIcons[service.icon]}
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {service.name}
                      </h3>
                      <p className="text-gray-600">{service.text}</p>
                    </div>
                  </Card>
                </Col>
              ))
            : 'loading'}
        </Row>
      </div>
    </div>
  );
};