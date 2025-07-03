import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navigation = () => {
  return (
    <nav className="w-full px-4 sm:px-6 lg:px-36 py-4 relative z-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8 lg:gap-16">
          <a
            href="#"
            className="text-vybecoderz-navy font-inter text-lg sm:text-xl font-medium"
          >
            home
          </a>
          <a
            href="#"
            className="text-vybecoderz-navy font-inter text-lg sm:text-xl font-medium"
          >
            features
          </a>
          <a
            href="#"
            className="text-vybecoderz-navy font-inter text-lg sm:text-xl font-medium"
          >
            about
          </a>
        </div>

        <div className="flex items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e8ef9e3d9705bcde4bb901da46f37b17e675085?width=388"
            alt="VYBECODERZ Logo"
            className="h-12 w-auto"
          />
        </div>

        <div className="flex items-center gap-8 lg:gap-16">
          <a
            href="#"
            className="text-vybecoderz-navy font-inter text-lg sm:text-xl font-medium"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-vybecoderz-navy font-inter text-lg sm:text-xl font-medium"
          >
            Services
          </a>
          <button className="bg-vybecoderz-blue border border-black/20 rounded-full px-6 py-3 text-vybecoderz-navy font-inter text-lg sm:text-xl font-medium backdrop-blur-sm">
            Join Now
          </button>
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-36 py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="font-inter text-4xl lg:text-6xl text-black leading-tight tracking-tight">
              Build Cool Stuff with <br className="hidden lg:block" />
              Cool People at{" "}
            </h2>
          </div>

          <p className="font-montserrat text-xl lg:text-2xl text-black leading-normal max-w-xl">
            At VybeCoderz we bring people together to Learn, Build & Exchange
            ideas. Your Journey for building apps using AI starts here.
          </p>

          <div className="flex items-center gap-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc270fbf8a853338f78b150c107bf06e2f282fe9?width=196"
              alt="VybeCoderz Logo"
              className="w-20 h-18"
            />
            <h1 className="font-researcher text-4xl lg:text-5xl text-black">
              VYBECODERZ
            </h1>
          </div>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-vybecoderz-blue border border-black/20 rounded-full px-8 py-3 text-black font-inter text-sm font-medium backdrop-blur-sm">
              Join the Waitlist
            </button>
            <button className="bg-vybecoderz-peach border border-black/20 rounded-full px-8 py-3 text-black font-inter text-sm font-medium backdrop-blur-sm">
              Explore How It Works
            </button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4b18e405ea9be2839ec8491f3e6fb04d207a922?width=1338"
            alt="Creative illustration"
            className="w-full max-w-lg h-auto"
          />
        </div>
      </div>
    </section>
  );
};

const JourneySection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-36 py-16 lg:py-24">
      <div className="text-center space-y-8 mb-16">
        <h2 className="font-inter text-4xl lg:text-5xl text-black text-center tracking-tight">
          Your Journey with <span className="font-researcher">VYBECODERZ</span>
        </h2>
        <p className="font-montserrat-alt text-xl lg:text-2xl text-black max-w-4xl mx-auto">
          From your first workshop to your first client — here's how you level
          up with us
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {[
          {
            title: "Learn",
            description:
              "Live webinars and hands-on workshops. Templates, tools, and guides to build with AI.",
            image:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/423d3c46af153967a4785cbfb5ccdc47e267a71b?width=734",
          },
          {
            title: "Build",
            description:
              "App challenges, team sprints, and peer reviews to turn ideas into working products.",
            image:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/77800234d0076fc07bdf057ac8d5b818e49d9cb6?width=734",
          },
          {
            title: "Exchange",
            description:
              "Post ideas, find collaborators, and build with the community on our project board.",
            image:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/2b2f3a4672c943c4cf2d7ac093251378984689bb?width=734",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden"
            style={{ background: "var(--vybecoderz-gradient-card)" }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-6 space-y-4">
              <h3 className="font-inter text-2xl lg:text-3xl text-black font-medium text-center">
                {item.title}
              </h3>
              <p className="font-inter text-lg text-black leading-normal">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const AudienceSection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-36 py-16 lg:py-24">
      <div className="text-center space-y-8 mb-16">
        <h2 className="font-inter text-4xl lg:text-5xl text-black text-center tracking-tight">
          Who is <span className="font-researcher">VYBECODERZ</span> For ?
        </h2>
        <p className="font-montserrat text-xl lg:text-2xl text-black max-w-4xl mx-auto">
          Learn, Build and Future-Proof your career..
        </p>
      </div>

      <div
        className="rounded-2xl p-8 lg:p-12"
        style={{ background: "var(--vybecoderz-gradient-secondary)" }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div
              className="rounded-2xl border border-black/40 p-8"
              style={{
                background:
                  "linear-gradient(179deg, rgba(252, 251, 252, 0.40) 21.13%, rgba(255, 247, 254, 0.40) 61.81%)",
              }}
            >
              <h3 className="font-inter text-3xl lg:text-4xl text-black font-light leading-tight tracking-tight mb-6">
                Built for Creative Builders
              </h3>
              <p className="font-montserrat text-xl lg:text-2xl text-black leading-normal mb-8">
                Join a peer-to-peer community where designers, PMs, founders,
                and freelancers learn AI, build real products, and launch faster
                — together.
              </p>
              <a href="#" className="font-inter text-sm text-black">
                Get Started now
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div
              className="rounded-2xl border border-black/50 p-6"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 250, 252, 0.60) 50%, rgba(242, 241, 248, 0.60) 100%)",
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a06d811c1f568369519475282a12b97f3c4bc919?width=148"
                  alt="Community icon"
                  className="w-16 h-12"
                />
                <div>
                  <div className="font-inter text-2xl lg:text-3xl text-gray-600 font-normal">
                    100+
                  </div>
                  <div className="font-inter text-lg text-gray-600">
                    Community member
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/984fbc1f99f559740222de2c0a463760937a19f2?width=148"
                  alt="Success rate icon"
                  className="w-16 h-12"
                />
                <div>
                  <div className="font-inter text-2xl lg:text-3xl text-black font-normal">
                    95%
                  </div>
                  <div className="font-inter text-lg text-black">
                    success rate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {[
            {
              title: "Product Designers",
              description:
                "Learn how to transform your Figma designs into working prototypes faster. Future-Proof your career with learning how to use AI to streamline your prototyping workflow.",
            },
            {
              title: "Product Managers",
              description:
                "Don't get left behind. AI poses a risk to PMs who aren't proficient in using AI tools to build better and faster. Join a community of PMs on the journey to build better.",
            },
            {
              title: "Non-Tech Founders",
              description:
                "Looking to hire Tech-Co Founder? Think again. Your 1st phase of development can be done by you sooner than you think. Learning to use AI to build your MVP is quicker than you think.",
            },
            {
              title: "Freelancers & Creators",
              description:
                "Already a freelancer? Add this skillset in your arsenal to bring your clients even more success and bring you an added revenue stream!",
            },
          ].map((item, index) => (
            <div key={index} className="text-center space-y-4">
              <h4 className="font-inter text-xl lg:text-2xl text-black font-light tracking-tight">
                {item.title}
              </h4>
              <div className="w-32 h-px bg-black mx-auto"></div>
              <p className="font-inter text-sm text-black leading-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-36 py-16 lg:py-24">
      <div className="text-center space-y-8 mb-16">
        <h2 className="font-inter text-4xl lg:text-5xl text-black text-center tracking-tight">
          What You Get with <span className="font-researcher">VYBECODERZ</span>
        </h2>
        <p className="font-montserrat text-xl lg:text-2xl text-black max-w-5xl mx-auto">
          From peer-led workshops to real-world challenges — these features make
          your learning journey hands-on, collaborative, and rewarding.
        </p>
      </div>

      <div className="grid gap-8 mb-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-black bg-white overflow-hidden">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c2462757ef2d2798dcef7ed524ccbcf5c886da6?width=1130"
              alt="Learn by doing together"
              className="w-full h-80 object-cover"
            />
            <div className="p-8 space-y-4">
              <h3 className="font-inter text-2xl lg:text-3xl text-black font-medium text-center">
                Learn by doing — together.
              </h3>
              <p className="font-inter text-xl lg:text-2xl text-black font-light leading-normal">
                Join live sessions, workshops, and hands-on classes with real
                people building real things.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-black bg-white overflow-hidden">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/596549170350b673899c99645e38fbfe75389280?width=1130"
              alt="Turn ideas into working apps"
              className="w-full h-80 object-cover"
            />
            <div className="p-8 space-y-4">
              <h3 className="font-inter text-2xl lg:text-3xl text-black font-medium text-center">
                Turn ideas into working apps.
              </h3>
              <p className="font-inter text-xl lg:text-2xl text-black font-light leading-normal">
                Join team-based sprints and solve real-world problems using
                no-code + AI tools.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              title: "Pitch, post, or jump in.",
              description:
                "Discover live projects, share your own, and find collaborators ready to build",
              image:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/c676276c42b6c5f739bcdfde1c44cfb20df33301?width=734",
            },
            {
              title: "Build with like-minded creators.",
              description:
                "Get matched with teammates based on your skills, interests, and goals.",
              image:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/f319c007d33bb79df176ceeb1209f8538d75e2f6?width=734",
            },
            {
              title: "Go from builder to earner.",
              description:
                "Learn how to find clients, price your work, and get paid doing what you love.",
              image:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/2f8bdf6e35b1bbdb1882fbf6e5c5459a00061390?width=734",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-black bg-white overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6 space-y-3">
                <h4 className="font-inter text-lg lg:text-xl text-black font-medium text-center">
                  {item.title}
                </h4>
                <p className="font-inter text-base lg:text-lg text-black font-light leading-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WaitlistSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="px-4 sm:px-6 lg:px-36 py-16 lg:py-24">
      <div className="text-center space-y-8 mb-16">
        <h2 className="font-inter text-4xl lg:text-5xl text-black text-center tracking-tight leading-tight">
          The wait is almost over —
          <br />
          <span className="font-researcher">VYBECODERZ</span> is launching soon
        </h2>
      </div>

      <div
        className="max-w-3xl mx-auto rounded-2xl p-8 lg:p-12 text-center space-y-8"
        style={{ background: "var(--vybecoderz-gradient-waitlist)" }}
      >
        <h3 className="font-inter text-2xl lg:text-3xl text-black font-medium">
          Join the waiting list
        </h3>
        <p className="font-inter text-lg lg:text-xl text-black font-light leading-normal max-w-2xl mx-auto">
          Launch a waiting list for your new product and grow your mailing list
          whilst preparing for launch day.
        </p>

        <div className="rounded-2xl bg-gray-200 p-2 max-w-2xl mx-auto">
          <div className="flex rounded-2xl bg-white overflow-hidden">
            <Input
              type="email"
              placeholder="Your Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border-0 text-center font-inter text-lg lg:text-xl bg-transparent focus:ring-0 focus:outline-none"
            />
            <button className="bg-vybecoderz-purple text-white px-6 py-4 font-inter text-sm font-medium rounded-r-2xl">
              Subscribe now
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"
              ></div>
            ))}
          </div>
          <p className="font-inter text-lg text-black font-light ml-4">
            Join the 2,000+ others that have signed up
          </p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer
      className="px-4 sm:px-6 lg:px-36 py-16"
      style={{ background: "var(--vybecoderz-gradient-footer)" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
        <div className="lg:col-span-1">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/86d388d1c93f098a0c7783843a8bad78e17b9deb?width=388"
            alt="VYBECODERZ Logo"
            className="h-12 w-auto mb-6"
          />
          <div className="space-y-4">
            <p className="font-inter text-lg text-black">+91 9978 673 855</p>
            <p className="font-inter text-base text-black">
              hello@vybecoderz.com
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-inter text-lg text-black font-normal mb-6">
            Quick Links
          </h4>
          <div className="space-y-4">
            <a href="#" className="block font-inter text-base text-black/65">
              Product
            </a>
            <a href="#" className="block font-inter text-base text-black/65">
              Information
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-inter text-lg text-black font-normal mb-6">
            Services
          </h4>
          <div className="space-y-4">
            <a href="#" className="block font-inter text-base text-black/65">
              Full-Stack Development
            </a>
            <a href="#" className="block font-inter text-base text-black/65">
              UI/UX Design
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-inter text-lg text-black font-normal mb-6">
            Resources
          </h4>
          <div className="space-y-4">
            <a href="#" className="block font-inter text-base text-black/65">
              Blog
            </a>
            <a href="#" className="block font-inter text-base text-black/65">
              Case Studies
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-inter text-lg text-black font-normal mb-6">
            Subscribe
          </h4>
          <div className="space-y-4">
            <div className="flex rounded-md border border-blue-200/20 bg-white">
              <Input
                type="email"
                placeholder="Get dev updates & insights"
                className="flex-1 border-0 text-sm font-inter bg-transparent focus:ring-0 focus:outline-none"
              />
              <button className="bg-blue-400 text-white p-3 rounded-r-md">
                <svg
                  className="w-3 h-4 rotate-90"
                  fill="white"
                  viewBox="0 0 15 13"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.03058 12.3267L14.1852 7.04648C14.6598 6.56005 14.6598 5.77161 14.1852 5.28667L9.03058 0.00649452L7.31226 1.76743L10.3924 4.92194H0.616211L0.616211 7.41084H10.3924L7.31226 10.5665L9.03058 12.3267Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-black/20 pt-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="flex gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border border-black/25 flex items-center justify-center"
                >
                  <div className="w-4 h-4 bg-black"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center lg:text-left">
            <p className="font-inter text-base text-black">A product of</p>
          </div>

          <div className="text-center lg:text-right">
            <p className="font-inter text-base text-black">
              © 2025 Vybe Coderz. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Index() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--vybecoderz-gradient-primary)" }}
    >
      <Navigation />
      <HeroSection />
      <JourneySection />
      <AudienceSection />
      <FeaturesSection />
      <WaitlistSection />
      <Footer />
    </div>
  );
}
