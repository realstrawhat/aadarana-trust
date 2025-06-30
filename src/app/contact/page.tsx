"use client";
import WhiteNavbar from "../../components/WhiteNavbar";
import Footer from "../../components/Footer";
import { useState } from "react";

const involvementOptions = [
  {
    title: "Sponsor a Child",
    desc: "Support one child&apos;s complete care for a year—just ₹66,000. Your sponsorship provides food, clothing, healthcare, school fees, books, and love."
  },
  {
    title: "Celebrate with Purpose",
    desc: "Turn your birthday, anniversary, or special day into a celebration of kindness. Bring meals, gifts, or simply joy to the children at Aadarana Children&apos;s Home."
  },
  {
    title: "Donate in Kind",
    desc: "Support our daily needs by donating: Rice, Dal, Oil, Vegetables, School Bags, Stationery, Shoes, Clothes, Bedsheets, Towels, Toiletries. You can also order from Amazon, BigBasket, or local stores to deliver directly to us."
  },
  {
    title: "Volunteer With Us",
    desc: "Use your talents to teach, tutor, mentor, or entertain. Whether it&apos;s one day or every week, your time will leave a lasting impression."
  },
  {
    title: "Corporate & CSR Partnerships",
    desc: "We welcome organizations that want to give back meaningfully. Fund infrastructure, sponsor education, or support a long-term cause with real impact."
  },
  {
    title: "Spread the Word",
    desc: "Tell your friends. Post on social media. Invite your network. The more people know, the more children we can help."
  }
];

export default function ContactPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="overflow-x-hidden max-w-full">
      <WhiteNavbar />
      
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center bg-[#005FA1] overflow-hidden pt-24">
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Get In Touch
          </h1>
          <p className="text-white text-lg md:text-2xl font-medium drop-shadow-md max-w-3xl mx-auto">
            Ready to make a difference? Let&apos;s connect and create lasting impact together.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[#005FA1] py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-stretch">
            
            {/* Left Side - Get Involved */}
            <div className="text-white flex flex-col h-full min-h-[600px]">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Get Involved</h2>
              
              <div className="flex flex-col gap-6 w-full flex-grow">
                {involvementOptions.map((item, i) => (
                  <div key={i} className="mb-2">
                    <button
                      onClick={() => setOpen(open === i ? null : i)}
                      className="flex items-center w-full text-left text-xl md:text-2xl font-bold text-white focus:outline-none focus:ring-2 focus:ring-white py-3 border-b border-white/20"
                    >
                      <div className="flex flex-col items-start">
                        <span>{item.title}</span>
                        {open === i && (
                          <span className="text-lg md:text-xl text-white/90 font-normal mt-2 text-left">
                            {item.desc}
                          </span>
                        )}
                      </div>
                      <span className={`ml-auto transition-transform text-3xl text-white font-light ${open === i ? "rotate-45" : "rotate-0"}`}>+</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl h-full min-h-[400px] flex flex-col">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#005FA1] mb-6">Contact Us</h2>
              
              <form className="space-y-4" action="https://formbold.com/s/9gJEb" method="POST">
                <input type="hidden" name="_redirect" value="/thank-you" />
                
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005FA1] focus:border-transparent"
                      placeholder="First Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005FA1] focus:border-transparent"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                {/* Email and Phone Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005FA1] focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005FA1] focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005FA1] focus:border-transparent resize-none"
                    placeholder="Tell us more about how you&apos;d like to get involved..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#005FA1] text-white font-bold py-4 px-8 rounded-lg hover:bg-[#00395c] transition-colors focus:outline-none focus:ring-2 focus:ring-[#005FA1] text-lg"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map and Contact Info Section */}
      <section className="bg-white py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
            
            {/* Left Side - Map */}
            <div className="w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.0155944827206!2d78.3817984!3d17.341831499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb961fe3716587%3A0x495f08fe03ba7284!2sAadarana%20Trust%20-%20Children%20Orphanage!5e1!3m2!1sen!2sin!4v1751095907559!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl shadow-xl"
              ></iframe>
            </div>

            {/* Right Side - Contact Info */}
            <div className="flex flex-col justify-center h-full">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#005FA1] mb-8">Contact Us</h2>
              
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xl font-bold text-[#005FA1] mb-3">Address</h3>
                  <a 
                    href="https://www.google.com/maps/dir//Aadarana+Trust+-+Children+Orphanage,+Plot+No.+84,+NRI+Colony,+Beside+AMS+MBA+College+Campus,+Kismathpur,+Gandipet+Mandal,+Rangareddy+District,+Hyderabad+-+500086,+Telangana,+India/@17.3418315,78.3817984,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3bcb961fe3716587:0x495f08fe03ba7284!2m2!1d78.3839871!2d17.3418315"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg leading-relaxed hover:text-[#005FA1] transition-colors cursor-pointer"
                  >
                    Aadarana Trust – Children&apos;s Home<br />
                    Plot No. 84, NRI Colony, Beside AMS MBA College Campus<br />
                    Kismathpur, Gandipet Mandal, Rangareddy District<br />
                    Hyderabad – 500086, Telangana, India
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#005FA1] mb-3">Email</h3>
                  <a href="mailto:aadarana2013@gmail.com" className="text-lg hover:text-[#005FA1] transition-colors">
                    aadarana2013@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#005FA1] mb-3">Phone</h3>
                  <a href="tel:+919553805112" className="text-lg hover:text-[#005FA1] transition-colors">
                    +91 95538 05112
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 