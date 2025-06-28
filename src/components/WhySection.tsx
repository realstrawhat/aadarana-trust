import Image from "next/image";

const whyData = [
  {
    img: "/images/home/why childrej.webp",
    heading: "Why children?",
    desc: "Because one cared-for child creates a ripple of change that lifts families and communities.",
    color: "bg-pink-100 text-[#00395c]",
  },
  {
    img: "/images/home/why home (2).webp",
    heading: "Why shelter?",
    desc: "Because a roof over a child's head is a foundation for dreams to grow.",
    color: "bg-pink-100 text-[#00395c]",
  },
  {
    img: "/images/home/why education.webp",
    heading: "Why education?",
    desc: "Because schooling is not a privilege—it's a right and a path to independence.",
    color: "bg-pink-100 text-[#00395c]",
  },
];

export default function WhySection() {
  return (
    <section className="w-full py-20 flex flex-col items-center bg-white">
      <div className="flex flex-col md:flex-row gap-10 justify-center items-stretch max-w-6xl mb-12">
        {whyData.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col items-center justify-center rounded-2xl p-10 shadow-xl ${item.color} min-w-[240px] max-w-[340px] h-[400px] text-center font-bold mx-auto`}
          >
            <div className="w-32 h-32 mb-8 rounded-full overflow-hidden border-4 border-white shadow relative">
              <Image
                src={item.img}
                alt={item.heading}
                fill
                quality={80}
                loading="lazy"
                sizes="128px"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="w-full h-full"
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold mb-3 text-center">{item.heading}</h3>
            <p className="text-lg md:text-xl font-medium text-center">{item.desc}</p>
          </div>
        ))}
      </div>
      <button className="bg-[#e0f0fa] text-[#00395c] font-bold text-lg px-10 py-4 rounded-lg shadow hover:bg-[#b3d9f2] hover:text-[#00395c] transition-colors focus:outline-none focus:ring-2 focus:ring-[#005FA1]">
        Learn More
      </button>
    </section>
  );
} 