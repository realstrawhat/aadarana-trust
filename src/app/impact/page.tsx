import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";

const stats = [
  {
    number: "65+",
    description: "Children under full-time care (From just 8 children in 2013 to 65+ today)"
  },
  {
    number: "100+",
    description: "Volunteers and supporters have given their time, love and resources"
  },
  {
    number: "12+",
    description: "Years of service to some of India's most vulnerable children"
  },
  {
    number: "2",
    description: "Dedicated children's homes Separate, safe spaces for boys and girls"
  }
];

const statColors = [
  "bg-[#005FA1] text-white",
  "bg-[#e0f0fa] text-[#00395c]",
  "bg-[#005FA1] text-white",
  "bg-[#e0f0fa] text-[#00395c]",
];

const services = [
  "Long-term residential care",
  "Formal education in private schools",
  "Healthcare, nutrition, and hygiene",
  "Emotional support and moral guidance"
];

const childSupport = [
  "School uniforms, books, and tuition",
  "Daily healthy meals and clean water",
  "Clean beds, safe bathrooms, and hygiene kits",
  "Play, festivals, and personality development",
  "Regular medical checkups and emotional care"
];

const missionActions = [
  "Sponsor a Child – ₹66,000/year",
  "Celebrate a Special Day with Our Kids",
  "Donate in Kind – Food, Clothes, School Supplies",
  "Partner with Us for CSR Initiatives"
];

const testimonials = [
  {
    quote: "I celebrated my daughter's birthday at Aadarana—it was the most meaningful celebration we've ever had.",
    author: "Donor, Hyderabad"
  },
  {
    quote: "The children are bright, respectful and full of hope. Aadarana is raising future leaders.",
    author: "Volunteer / Teacher"
  }
];

export default function ImpactPage() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <section className="relative w-full h-[50vh] md:h-[70vh] flex items-center justify-center bg-gray-900">
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Real Impact. Real Stories. Real Change.
          </h1>
          <p className="text-white text-lg md:text-2xl font-medium drop-shadow-md max-w-3xl mx-auto">
            Join us in turning small acts of kindness into life-changing milestones. Every child deserves more than survival—they deserve a future filled with opportunity and care.
          </p>
        </div>
      </section>
      <main className="bg-white py-16 md:py-24">
        <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center px-4">
          {/* Left Side: Image */}
          <div className="w-full h-72 md:h-[480px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/home/why home (2).webp"
              alt="A child at Aadarana Home receiving care"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Right Side: Text */}
          <div className="flex flex-col justify-center text-gray-800 h-full">
            <p className="text-xl md:text-2xl leading-relaxed">
              Since 2013, Aadarana Trust has been transforming lives—one child at a time. We go beyond just providing food and shelter; we nurture futures filled with dignity, opportunity, education, and hope. Every act of care creates a ripple of impact that helps vulnerable children rise above their circumstances and step into a brighter, self-reliant future. Through consistent support and compassion, we've empowered hundreds to rewrite their stories and reclaim their childhoods with confidence.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="max-w-7xl mx-auto py-16 md:py-24 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-r from-[#005FA1] to-[#00395c] text-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center h-full">
                <h3 className="text-5xl font-extrabold mb-4">{stat.number}</h3>
                <p className="text-base font-medium opacity-90">{stat.description}</p>
              </div>
              ))}
          </div>
        </section>

        {/* How We Work Section */}
        <section className="max-w-7xl mx-auto py-16 md:py-24 px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Side: Text Content */}
            <div className="flex flex-col justify-center text-gray-800">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#005FA1]">How We Work</h2>
              <p className="mb-4 text-lg font-semibold">Our impact is possible thanks to the generosity of individual donors, volunteers and partners who believe every child deserves a chance. We provide:</p>
              <ul className="list-disc list-inside mb-4 pl-4 space-y-2 text-lg font-semibold">
                {services.map(service => <li key={service}>{service}</li>)}
              </ul>
              <p className="mb-4 text-lg font-semibold">We do not believe in a one-time intervention. We are in it for the long run—raising children like family.</p>
              <p className="mb-4 text-lg font-semibold">Each child is supported with:</p>
              <ul className="list-disc list-inside pl-4 space-y-2 text-lg font-semibold">
                {childSupport.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
            {/* Right Side: Image */}
            <div className="w-full h-96 md:h-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/home/why education.webp"
                alt="Child receiving education and support"
                width={600}
                height={700}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Built on Local Love Section */}
        <section className="bg-[#005FA1] py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-white">Built on Local Love</h2>
            <p className="text-lg md:text-xl font-semibold text-white/90 mb-6">
              Aadarana is a grassroots effort. Our team is made up of local caregivers, educators and volunteers who understand the challenges these children face. We grow stronger with the help of everyday citizens, donors, families and corporate well-wishers who celebrate, contribute and partner with us.
            </p>
            <p className="text-xl md:text-2xl font-bold text-white">
              This is not just aid. This is partnership. Purpose. Progress.
            </p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-12 text-center bg-gradient-to-r from-[#005FA1] to-[#00395c] text-transparent bg-clip-text">
              Testimonials from Our Supporters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-r from-[#005FA1] to-[#00395c] text-white p-8 rounded-2xl shadow-lg flex flex-col h-full">
                  <span className="text-7xl text-white opacity-20 font-serif leading-none">“</span>
                  <p className="text-xl italic font-semibold text-white mb-6 flex-grow">
                    {testimonial.quote}
                  </p>
                  <p className="text-right font-bold text-lg text-white">
                    — {testimonial.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-gray-800 py-16 md:py-24">
          <Image
            src="/images/home/1-1.webp" // A different image for variety
            alt="Join our mission"
            fill
            className="object-cover z-0"
            quality={80}
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="relative z-20 max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 drop-shadow-lg">
              Ready to Join Our Mission?
            </h2>
            <p className="text-lg md:text-xl text-white font-semibold mb-8">
              Be a part of our growing impact:
            </p>
            <ul className="text-lg md:text-xl text-white space-y-3 list-none mb-10">
              {missionActions.map(action => (
                <li key={action} className="font-semibold">{action}</li>
              ))}
            </ul>
            <a
              href="/donate"
              className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-[#005FA1] to-[#00395c] text-white font-bold text-lg shadow-lg hover:from-[#00395c] hover:to-[#00395c] transition-all focus:outline-none focus:ring-2 focus:ring-white"
            >
              Donate Today
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 