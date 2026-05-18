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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };


  const handleSubmit = (e: any) => {};

  return (
    <div
      id="contact"
      className="py-24 px-6 bg-gradient-to-br from-black via-gray-900 to-gray-950 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/20 blur-3xl rounded-full"></div>

      <div className="container mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-8">
            Have questions, feedback, or ideas? We'd love to hear from you.
            Connect with us and become part of our growing blogging community.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-6">
              Send a Message ✨
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={name}
                onChange={handleChange}
                className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleChange}
                className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />

              <textarea
                name="message"
                placeholder="Write your message..."
                value={message}
                onChange={handleChange}
                rows={6}
                className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-semibold text-lg shadow-xl hover:scale-105 transition duration-300"
              >
                Send Message 🚀
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            {/* Quote */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl mb-8">
              <p className="text-2xl italic text-gray-200 leading-10">
                “Every great conversation starts with a simple message. Let’s
                connect, collaborate, and create something meaningful together.”
              </p>
            </div>

            {/* Contact Details */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-8">
                Contact Information 📞
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center text-white text-2xl shadow-lg">
                    📍
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white mb-1">
                      Address
                    </h4>
                    <p className="text-gray-300">
                      {props.data?.address ?? "Loading"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl shadow-lg">
                    📞
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white mb-1">
                      Phone
                    </h4>
                    <p className="text-gray-300">
                      {props.data?.phone ?? "Loading"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center text-white text-2xl shadow-lg">
                    ✉️
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white mb-1">
                      Email
                    </h4>
                    <p className="text-gray-300">
                      {props.data?.email ?? "Loading"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-10">
                {props.data?.facebook && (
                  <a
                    href={props.data.facebook}
                    className="px-5 py-3 rounded-2xl bg-blue-600 hover:scale-105 transition text-white shadow-lg"
                  >
                    Facebook
                  </a>
                )}

                {props.data?.twitter && (
                  <a
                    href={props.data.twitter}
                    className="px-5 py-3 rounded-2xl bg-sky-500 hover:scale-105 transition text-white shadow-lg"
                  >
                    Twitter
                  </a>
                )}

                {props.data?.youtube && (
                  <a
                    href={props.data.youtube}
                    className="px-5 py-3 rounded-2xl bg-red-600 hover:scale-105 transition text-white shadow-lg"
                  >
                    YouTube
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
