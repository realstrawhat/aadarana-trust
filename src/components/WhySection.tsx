import Image from "next/image";

const whyData = [
  {
    img: "/images/why-children.webp",
    heading: "Why children?",
    desc: "Because one cared-for child creates a ripple of change that lifts families and communities.",
    color: "bg-purple-100 text-purple-800",
  },
  {
    img: "/images/why-shelter.webp",
    heading: "Why shelter?",
    desc: "Because a roof over a child's head is a foundation for dreams to grow.",
    color: "bg-purple-100 text-purple-800",
  },
  {
    img: "/images/why-education.webp",
    heading: "Why education?",
    desc: "Because schooling is not a privilege—it's a right and a path to independence.",
    color: "bg-purple-100 text-purple-800",
  },
];

export default function WhySection() {
  return (
    <section className="w-full py-20 flex flex-col items-center bg-white">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">Why Children Home</h2>
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center max-w-6xl mb-12">
        {whyData.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col items-center justify-center rounded-2xl p-10 shadow-xl ${item.color} min-w-[240px] max-w-[340px] min-h-[260px] text-center font-bold mx-auto`}
          >
            <div className="w-32 h-32 mb-8 rounded-full overflow-hidden border-4 border-white shadow">
              <Image
                src={item.img}
                alt={item.heading}
                width={128}
                height={128}
                quality={80}
                loading="lazy"
                sizes="128px"
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold mb-3 text-center">{item.heading}</h3>
            <p className="text-lg md:text-xl font-medium text-center">{item.desc}</p>
          </div>
        ))}
      </div>
      <button className="bg-purple-100 text-purple-800 font-bold text-lg px-10 py-4 rounded-lg shadow hover:bg-purple-200 hover:text-purple-900 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-600">
        Learn More
      </button>
    </section>
  );
} 