import Image from "next/image";
import AboutUs from "../../assets/about.jpg";

export const About = (props: {
  data: { paragraph?: string; Why?: string[]; Why2?: string[] };
}) => {
  return (
   <div
  id="about"
  className="py-24 px-6 bg-gradient-to-br from-black via-gray-900 to-gray-950 relative overflow-hidden"
>
  {/* Background Glow Effects */}
  <div className="absolute top-10 left-10 w-80 h-80 bg-orange-500/20 blur-3xl rounded-full"></div>
  <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-500/20 blur-3xl rounded-full"></div>

  <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

    {/* Left Image Section */}
    <div className="relative group">
      <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-3xl blur opacity-40 group-hover:opacity-70 transition duration-500"></div>

      <Image
        src={AboutUs}
        className="relative rounded-3xl shadow-2xl object-cover w-full h-full group-hover:scale-[1.02] transition duration-500"
        alt="About Us"
        width={600}
        height={450}
      />
    </div>

    {/* Right Content */}
    <div>

      {/* Heading */}
      <h2 className="text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-8">
        About Our Platform
      </h2>

      {/* Paragraph */}
      <p className="text-lg md:text-xl leading-9 text-gray-300 tracking-wide mb-10">
        {props.data?.paragraph ??
          "Loading..."}
      </p>

      {/* Quote Box */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 mb-10 shadow-xl">
        <p className="text-xl italic text-gray-200 leading-8">
          “Empowering writers to share stories and readers to discover ideas that inspire, educate, and connect people worldwide.”
        </p>
      </div>

      {/* Why Choose Us */}
      <h3 className="text-3xl font-bold text-white mb-8 relative inline-block">
        Why Choose Us?
        <span className="absolute left-0 -bottom-2 w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"></span>
      </h3>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {props.data?.Why?.map((d, i) => (
          <div
            key={i}
            className="group bg-gradient-to-r from-orange-500 to-pink-500 p-[1px] rounded-2xl hover:scale-105 transition duration-300"
          >
            <div className="bg-black/80 backdrop-blur-md rounded-2xl p-5 h-full">
              <p className="text-white leading-7 flex items-start gap-3">
                <span className="text-2xl">✨</span>
                {d}
              </p>
            </div>
          </div>
        ))}

        {props.data?.Why2?.map((d, i) => (
          <div
            key={i}
            className="group bg-gradient-to-r from-blue-500 to-purple-600 p-[1px] rounded-2xl hover:scale-105 transition duration-300"
          >
            <div className="bg-black/80 backdrop-blur-md rounded-2xl p-5 h-full">
              <p className="text-white leading-7 flex items-start gap-3">
                <span className="text-2xl">🚀</span>
                {d}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  </div>
</div>
  );
};
