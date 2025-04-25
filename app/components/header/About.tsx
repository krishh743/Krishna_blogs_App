import Image from "next/image";
import AboutUs from "../../assets/about.jpg";

export const About = (props: { data: { paragraph?: string; Why?: string[]; Why2?: string[] } }) => {
  return (
    <div id="about" className="py-16 bg-white px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <Image src={AboutUs} className="rounded-lg shadow-lg" alt="About Us" width={500} height={300} />
        <div>
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="mb-6">{props.data?.paragraph ?? "Loading..."}</p>
          <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {props.data?.Why?.map((d, i) => (
              <li key={i}>{d}</li>
            )) ?? "Loading"}
            {props.data?.Why2?.map((d, i) => (
              <li key={i}>{d}</li>
            )) ?? "Loading"}
          </div>
        </div>
      </div>
    </div>
  );
};
