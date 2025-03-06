import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props: {
  data: {
    address?: string;
    phone?: string;
    email?: string;
    facebook?: string;
    twitter?: string;
    youtube?: string;
  };
}) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     console.log(name, email, message);
  //     clearState();
  //   };

  const handleSubmit = (e: any) => {
    // e.preventDefault()
    // console.log(name, email, message)
    // emailjs
    //   .sendForm(
    //     'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text)
    //       clearState()
    //     },
    //     (error) => {
    //       console.log(error.text)
    //     }
    //   )
  };

  return (
    <div>
      <div id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="mb-6">
                Please fill out the form below to send us an email and we will
                get back to you as soon as possible.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  value={message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg shadow-lg transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
              <p className="mb-4">
                <span className="font-bold">Address: </span>
                {props.data?.address ?? "Loading"}
              </p>
              <p className="mb-4">
                <span className="font-bold">Phone: </span>
                {props.data?.phone ?? "Loading"}
              </p>
              <p className="mb-4">
                <span className="font-bold">Email: </span>
                {props.data?.email ?? "Loading"}
              </p>
              <div className="flex space-x-4">
                {props.data?.facebook && (
                  <a
                    href={props.data.facebook}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    Facebook
                  </a>
                )}
                {props.data?.twitter && (
                  <a
                    href={props.data.twitter}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    Twitter
                  </a>
                )}
                {props.data?.youtube && (
                  <a
                    href={props.data.youtube}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    YouTube
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer" className="bg-gray-800 text-white text-center py-4">
        <p>
          &copy; 2020 Issaaf Kattan React Landing Page Template. Design by{" "}
          <a
            href="http://www.templatewire.com"
            rel="nofollow"
            className="text-blue-400 hover:text-blue-500"
          >
            TemplateWire
          </a>
        </p>
      </div>
    </div>
  );
};

export const Header = (props: { data: any }) => {
  return (
    <header id="header" className="relative bg-cover bg-center h-screen">
      <div className="intro h-full flex items-center justify-center">
        <div className="overlay bg-black bg-opacity-50 w-full h-full absolute top-0 left-0"></div>
        <div className="container relative z-10 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {props.data ? props.data.title : "Loading"}
              <span></span>
            </h1>
            <p className="text-lg md:text-xl mb-6">
              {props.data ? props.data.paragraph : "Loading"}
            </p>
            <a
              href="#features"
              className="btn bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg shadow-lg transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export const Navigation = () => {
  return (
    <nav id="menu" className="fixed w-full top-0 bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-xl font-bold">
          <a href="#page-top" className="page-scroll">
            React Landing Page
          </a>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#features" className="page-scroll hover:text-blue-600">
            Features
          </a>
          <a href="#about" className="page-scroll hover:text-blue-600">
            About
          </a>
          <a href="#services" className="page-scroll hover:text-blue-600">
            Services
          </a>
          <a href="#portfolio" className="page-scroll hover:text-blue-600">
            Gallery
          </a>
          <a href="#testimonials" className="page-scroll hover:text-blue-600">
            Testimonials
          </a>
          <a href="#team" className="page-scroll hover:text-blue-600">
            Team
          </a>
          <a href="#contact" className="page-scroll hover:text-blue-600">
            Contact
          </a>
        </div>
        <button className="md:hidden text-xl" aria-label="Toggle navigation">
          ☰
        </button>
      </div>
    </nav>
  );
};
