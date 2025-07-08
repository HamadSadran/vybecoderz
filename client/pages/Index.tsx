import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const MobileNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="w-full px-4 py-4 lg:hidden relative z-50">
        <div className="flex items-center justify-between">
          <button
            onClick={isMenuOpen ? undefined : toggleMenu}
            className={`flex flex-col space-y-1 p-2 transition-all duration-300 hover:bg-black/5 rounded-md ${isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-0.5 bg-black"></div>
            <div className="w-5 h-0.5 bg-black"></div>
            <div className="w-5 h-0.5 bg-black"></div>
          </button>

          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e8ef9e3d9705bcde4bb901da46f37b17e675085?width=388"
            alt="VYBECODERZ Logo"
            className={`h-12 w-auto transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
          />

          <div className="w-9 h-9"></div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${isMenuOpen ? "visible" : "invisible"}`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={closeMenu}
        ></div>

        {/* Slide-out Panel */}
        <div
          className={`absolute left-0 top-0 h-full w-80 max-w-[85vw] transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
          style={{
            background:
              "linear-gradient(180deg, #E2E9F9 35.1%, #FEF2F2 61.54%)",
          }}
        >
          {/* Panel Header */}
          <div className="flex items-center justify-between p-6 border-b border-black/10">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e8ef9e3d9705bcde4bb901da46f37b17e675085?width=388"
              alt="VYBECODERZ Logo"
              className="h-10 w-auto"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                closeMenu();
              }}
              className="p-2 hover:bg-black/5 rounded-md transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="p-6 space-y-6">
            <Link
              to="/"
              onClick={closeMenu}
              className="block text-vybecoderz-navy text-xl font-medium hover:text-vybecoderz-purple transition-colors"
            >
              Home
            </Link>
            <Link
              to="/features"
              onClick={closeMenu}
              className="block text-vybecoderz-navy text-xl font-medium hover:text-vybecoderz-purple transition-colors"
            >
              Features
            </Link>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="block text-vybecoderz-navy text-xl font-medium hover:text-vybecoderz-purple transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Join Now Button */}
          <div className="p-6 border-t border-black/10 mt-auto">
            <button
              onClick={closeMenu}
              className="w-full bg-vybecoderz-blue border border-black/20 rounded-full px-6 py-3 text-vybecoderz-navy font-inter text-lg font-medium backdrop-blur-sm hover:bg-vybecoderz-purple hover:text-white transition-colors"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const DesktopNavigation = () => {
  return (
    <nav className="hidden lg:block w-full px-6 lg:px-36 py-4 relative z-10">
      <div className="flex justify-center items-center w-screen ml-[calc(50%-50vw)] gap-20">
        <div className="flex items-center gap-16">
          <a
            href="#"
            className="text-vybecoderz-navy font-inter text-xl font-medium"
          >
            <p>Home</p>
          </a>
          <a
            href="/features"
            className="text-vybecoderz-navy font-inter text-xl font-medium"
          >
            <p>Features</p>
          </a>
        </div>

        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e8ef9e3d9705bcde4bb901da46f37b17e675085?width=388"
          alt="VYBECODERZ Logo"
          className="h-12 w-auto"
        />

        <div className="flex items-center gap-16">
          <Link
            to="/contact"
            className="text-vybecoderz-navy font-inter text-xl font-medium block"
          >
            <p>Contact Us</p>
          </Link>
          <button className="bg-vybecoderz-blue border border-black/20 rounded-full px-6 py-3 text-vybecoderz-navy font-inter text-xl font-medium backdrop-blur-sm">
            Join Now
          </button>
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="px-4 lg:px-6 xl:px-36 py-8 lg:py-16">
      {/* Mobile Layout */}
      <div className="lg:hidden space-y-8">
        <div className="space-y-6">
          <h1 className="font-inter text-[28px] leading-[126%] tracking-[-2.4px] text-black font-normal">
            Build Cool Stuff with <br />
            Cool People at
          </h1>

          <p className="font-montserrat text-[19px] font-medium leading-normal text-black">
            At VybeCoderz we bring people together to Learn, Build & Exchange
            ideas.Your Journey for building apps using AI starts here.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/14a10c9e03d31a0dff1450b633a613ba9b4fcbea?width=704"
            alt="Creative illustration"
            className="w-full max-w-[352px] h-[352px] object-cover"
          />
        </div>

        <div className="flex gap-3 justify-center">
          <button className="bg-vybecoderz-blue border border-black/20 rounded-full px-6 py-3 text-black font-inter text-xs font-medium backdrop-blur-sm min-w-[116px]">
            Join the Waitlist
          </button>
          <button className="bg-vybecoderz-peach border border-black/20 rounded-full px-6 py-3 text-black font-inter text-xs font-medium backdrop-blur-sm min-w-[164px]">
            Explore How It Works
          </button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
            <h1 className="font-researcher text-5xl text-black leading-normal">
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
  const journeyItems = [
    {
      title: "Learn",
      description:
        "Live webinars and hands-on workshops. Templates, tools, and guides to build with AI.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a6c3928f6280ae91d63fd2ad980377fa1d6b216d?width=660",
    },
    {
      title: "Build",
      description:
        "App challenges, team sprints, and peer reviews to turn ideas into working products.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7daa5c2ced01fac469e94163ff1d9f29ad50cdf2?width=660",
    },
    {
      title: "Exchange",
      description:
        "Post ideas, find collaborators, and build with the community on our project board.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/854f5dbb69216650677a1f1ab0f15ff0d103efe2?width=648",
    },
  ];

  return (
    <section className="px-4 lg:px-6 xl:px-36 py-8 lg:py-16">
      <div className="space-y-8 mb-12 lg:mb-16">
        <h2 className="font-inter text-[25px] lg:text-5xl text-black text-center tracking-tight leading-[126%] lg:tracking-normal">
          Your Journey with <span className="font-researcher">VYBECODERZ</span>
        </h2>
        <p className="font-montserrat text-[18px] lg:text-2xl text-black text-center max-w-4xl mx-auto">
          From your first workshop to your first client — here's how you level
          up with us
        </p>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden space-y-8">
        {journeyItems.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden mx-auto max-w-[330px]"
            style={{
              background:
                index === 0
                  ? "linear-gradient(180deg, #E2E9F9 35.1%, #FEF2F2 61.54%, #FEF2F2 70.21%)"
                  : "linear-gradient(180deg, #E2E9F9 35.1%, #FEF2F2 61.54%)",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[254px] lg:h-[299px] object-cover rounded-t-2xl"
            />
            <div className="p-6 space-y-4">
              <h3 className="font-inter text-[27px] text-black font-medium text-left">
                {item.title}
              </h3>
              <p className="font-inter text-[18px] text-black font-light leading-normal text-left pl-6">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-8">
        {journeyItems.map((item, index) => (
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
  const audienceTypes = [
    {
      title: "Product Designers",
      description:
        " Learn how to transform your Figma designs into working prototypes faster.  Future-Proof your career with learning how to use AI to streamline your prototyping workflow.",
    },
    {
      title: "Product Managers",
      description:
        " Don't get left behind. AI poses a risk to PMs who aren't proficient in using AI tools to build better and faster. Join a community of PMs on the journey to build better.",
    },
    {
      title: "Non-Tech Founders",
      description:
        "Looking to hire Tech-Co Founder?  Think again.  Your 1st phase of development can be done by you sooner than you think. Learning to use AI to build your MVP is quicker than you think.",
    },
    {
      title: "Freelancers & Creators",
      description:
        "Already a freelancer? Add this skillset in your arsenal to bring your clients even more success and bring you an added revenue stream!",
    },
  ];

  return (
    <section className="px-4 lg:px-6 xl:px-36 py-8 lg:py-16">
      <div className="space-y-8 mb-12 lg:mb-16">
        <h2 className="font-inter text-[21px] lg:text-5xl text-black text-center tracking-tight leading-[126%]">
          Who is <span className="font-researcher">VYBECODERZ</span> For ?
        </h2>
        <p className="font-montserrat text-[23px] lg:text-2xl text-black text-center max-w-4xl mx-auto">
          Learn, Build and Future-Proof your career..
        </p>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div
          className="rounded-2xl border border-black p-4 mx-auto max-w-[327px]"
          style={{
            background:
              "linear-gradient(180deg, #E2E9F9 35.1%, #FEF2F2 61.54%)",
          }}
        >
          {/* Main Section */}
          <div
            className="rounded-2xl border border-black p-6 mb-6"
            style={{
              background:
                "linear-gradient(179deg, rgba(252, 251, 252, 0.40) 21.13%, rgba(255, 247, 254, 0.40) 61.81%)",
            }}
          >
            <h3 className="font-inter text-[34px] text-black font-light leading-[126%] tracking-[-2.4px] text-center mb-6">
              Built for Creative Builders
            </h3>
            <p className="font-montserrat text-[18px] text-black leading-normal font-medium mb-6">
              Join a peer-to-peer community where designers, PMs, founders, and
              freelancers learn AI, build real products, and launch faster —
              together.
            </p>
            <p className="font-montserrat text-[18px] text-black">
              Get Started now
            </p>
          </div>

          {/* Stats Section */}
          <div
            className="rounded-2xl border border-black p-6 mb-6"
            style={{
              background:
                "linear-gradient(179deg, rgba(252, 251, 252, 0.40) 21.13%, rgba(255, 247, 254, 0.40) 61.81%)",
            }}
          >
            <div className="flex items-center gap-4 mb-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a06d811c1f568369519475282a12b97f3c4bc919?width=148"
                alt="Community icon"
                className="w-[74px] h-[51px]"
              />
              <div>
                <div className="font-inter text-[22px] text-black font-light leading-[126%] tracking-[-2.4px]">
                  100+
                  <br />
                  Community member
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/984fbc1f99f559740222de2c0a463760937a19f2?width=148"
                alt="Success rate icon"
                className="w-[74px] h-[51px]"
              />
              <div>
                <div className="font-inter text-[28px] text-black font-normal">
                  95%
                </div>
                <div className="font-inter text-[19px] text-black">
                  success rate
                </div>
              </div>
            </div>
          </div>

          {/* Audience Types */}
          <div className="space-y-6">
            {audienceTypes.map((item, index) => (
              <div key={index}>
                <h4 className="font-inter text-[26px] text-black font-light text-center leading-[126%] tracking-[-1.4px] mb-4">
                  {item.title}
                </h4>
                {index < audienceTypes.length - 1 && (
                  <div className="w-[276px] h-px bg-black mx-auto mb-4"></div>
                )}
                <p className="font-inter text-[14px] text-black leading-normal text-left px-4 mb-6">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
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
                <h3
                  className="font-inter text-5xl text-black font-light leading-tight tracking-tight mb-6"
                  style={{
                    fontSize: "47px",
                    letterSpacing: "-2.4px",
                    lineHeight: "126%",
                  }}
                >
                  Built for Creative Builders
                </h3>
                <p
                  className="font-montserrat text-black leading-normal mb-8 font-medium"
                  style={{ fontSize: "26px" }}
                >
                  Join a peer-to-peer community where designers, PMs, founders,
                  and freelancers learn AI, build real products, and launch
                  faster — together.
                </p>
                <a
                  href="#"
                  className="font-inter text-black"
                  style={{
                    fontSize: "14px",
                    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  }}
                >
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
                    <div
                      className="font-inter font-normal"
                      style={{ fontSize: "28px", color: "#424242" }}
                    >
                      100+
                    </div>
                    <div
                      className="font-inter"
                      style={{ fontSize: "19px", color: "#424242" }}
                    >
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
                    <div
                      className="font-inter font-normal"
                      style={{ fontSize: "28px", color: "#000" }}
                    >
                      95%
                    </div>
                    <div
                      className="font-inter"
                      style={{ fontSize: "19px", color: "#000" }}
                    >
                      success rate
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {audienceTypes.map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <h4
                  className="font-inter text-black font-light"
                  style={{
                    fontSize: "26px",
                    letterSpacing: "-1.4px",
                    lineHeight: "126%",
                  }}
                >
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
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  return (
    <section className="px-4 lg:px-6 xl:px-36 py-8 lg:py-16">
      <div className="space-y-8 mb-12 lg:mb-16">
        <h2 className="font-inter text-[25px] lg:text-5xl text-black text-center tracking-tight leading-[126%]">
          What You Get with <span className="font-researcher">VYBECODERZ</span>
        </h2>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="max-w-[354px] mx-auto">
          <div className="rounded-2xl border border-black bg-white overflow-hidden transform rotate-[0.457deg]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8d5ff1aba72d757305b1f7a0903ce961989bcec?width=708"
              alt="Learn by doing together"
              className="w-full h-[224px] object-cover transform rotate-[0.457deg]"
            />
            <div className="p-8 space-y-4 transform rotate-[0.457deg]">
              <h3 className="font-inter text-[17px] text-black font-medium text-center">
                Learn by doing — together.
              </h3>
              <p className="font-inter text-[16px] text-black font-light leading-normal text-center">
                Join live sessions, workshops, and hands-on classes with real
                people building real things.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Feature Cards */}
        <div className="space-y-8 mt-8">
          {/* Card 1: Turn ideas into working apps */}
          <div className="max-w-[354px] mx-auto">
            <div className="rounded-2xl border border-black bg-white overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/bc913f1f0f054a5b9f05f743090abf27/78a061e08831440daa44689fa071d6b3?format=webp&width=800"
                alt="Turn ideas into working apps"
                className="w-full h-[350px] object-cover"
              />
              <div className="p-8 space-y-4">
                <h3 className="font-inter text-[17px] text-black font-medium text-center">
                  Turn ideas into working apps.
                </h3>
                <p className="font-inter text-[16px] text-black font-light leading-normal text-center">
                  Join team-based sprints and solve real-world problems using
                  no-code + AI tools.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Pitch, post, or jump in */}
          <div className="max-w-[354px] mx-auto">
            <div className="rounded-2xl border border-black bg-white overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/bc913f1f0f054a5b9f05f743090abf27/cba6d01e520e4de191332f2fa5c7cc61?format=webp&width=800"
                alt="Pitch, post, or jump in"
                className="w-full h-[207px] object-cover"
              />
              <div className="p-8 space-y-4">
                <h3 className="font-inter text-[17px] text-black font-medium text-center">
                  Pitch, post, or jump in.
                </h3>
                <p className="font-inter text-[17px] text-black font-light leading-normal text-center">
                  Discover live projects, share your own, and find collaborators
                  ready to build
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Collaborative workspace */}
          <div className="max-w-[354px] mx-auto">
            <div className="rounded-2xl border border-black bg-white overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/bc913f1f0f054a5b9f05f743090abf27/c696ae40871e4e4d828e1642da9993d3?format=webp&width=800"
                alt="Collaborative workspace"
                className="w-full h-[217px] object-cover"
              />
              <div className="p-8 space-y-4">
                <h3 className="font-inter text-[17px] text-black font-medium text-center">
                  Work together seamlessly.
                </h3>
                <p className="font-inter text-[17px] text-black font-light leading-normal text-center">
                  Connect with fellow builders in our collaborative workspace
                  environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
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
      </div>
    </section>
  );
};

import { useNavigate } from "react-router-dom";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import app, { db, auth } from "../firebase";

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const db = getFirestore(app);

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }

    try {
      await addDoc(collection(db, "waitlist"), {
        email,
        timestamp: serverTimestamp(),
      });

      navigate("/confirmation");
    } catch (error) {
      console.error("Error saving email to Firestore:", error);
      alert("Something went wrong, please try again.");
    }
  };

  // const handleSubscribe = () => {
  //   if (email.trim()) {
  //     // Optional: add email to backend/Firebase here
  //     navigate("/confirmation");
  //   }
  // };

  return (
    <section className="px-4 lg:px-6 xl:px-36 py-8 lg:py-16">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div
          className="max-w-[366px] mx-auto rounded-2xl p-6"
          style={{
            background:
              "linear-gradient(180deg, #E5E6ED 42.31%, #E4D3F4 90.38%)",
          }}
        >
          <h3 className="font-inter text-[17px] text-black font-medium text-center mb-4">
            Join the waiting list
          </h3>
          <p className="font-inter text-xs text-black font-light leading-normal text-center max-w-[278px] mx-auto mb-6">
            Launch a waiting list for your new product and grow your mailing
            list whilst preparing for launch day.
          </p>

          <div className="rounded-2xl bg-[#EEEDF0] p-2 mb-6">
            <div className="flex rounded-2xl bg-white overflow-hidden">
              <Input
                type="email"
                placeholder="Your Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border-0 text-center font-inter text-xs bg-transparent focus:ring-0 focus:outline-none"
              />
              <button
                onClick={handleSubscribe}
                className="bg-vybecoderz-purple text-white px-4 py-3 font-inter text-xs font-medium rounded-r-2xl"
              >
                →
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-1">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fbc913f1f0f054a5b9f05f743090abf27%2F7669122e92d44f87aa01d5af6b94222d?format=webp&width=800"
                alt="User avatar"
                className="w-[30px] h-[30px] rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fbc913f1f0f054a5b9f05f743090abf27%2Fc0db0c7411e444af9dcf621fded61c56?format=webp&width=800"
                alt="User avatar"
                className="w-[30px] h-[30px] rounded-full border-2 border-white object-cover -ml-2"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fbc913f1f0f054a5b9f05f743090abf27%2F3d6f696f3fcd454abcc1fe61730ca867?format=webp&width=800"
                alt="User avatar"
                className="w-[30px] h-[30px] rounded-full border-2 border-white object-cover -ml-2"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fbc913f1f0f054a5b9f05f743090abf27%2Ffc4090f3b7624ba5a226d275842a72ec?format=webp&width=800"
                alt="User avatar"
                className="w-[30px] h-[30px] rounded-full border-2 border-white object-cover -ml-2"
              />
            </div>
          </div>
          <p className="font-inter text-[11px] text-black font-light text-center mt-2">
            Join the 2,000+ others that have signed up
          </p>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="text-center space-y-8 mb-16">
          <h2 className="font-inter text-4xl lg:text-5xl text-black text-center tracking-tight leading-tight">
            The wait is almost over —<br />
            <span className="font-researcher">VYBECODERZ</span> is launching
            soon
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
            Launch a waiting list for your new product and grow your mailing
            list whilst preparing for launch day.
          </p>

          <div className="rounded-2xl bg-gray-200 p-2 max-w-2xl mx-auto">
            <div className="flex rounded-2xl bg-white overflow-hidden">
              <Input
                type="email"
                placeholder="Your Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border-0 text-center font-inter text-lg lg:text-xl bg-transparent focus:ring-0 focus:outline-none h-full py-[15px]"
              />
              <button
                onClick={handleSubscribe}
                className="bg-vybecoderz-purple text-white px-6 py-4 font-inter text-sm font-medium rounded-r-2xl"
              >
                Subscribe now
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <div className="flex -space-x-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fbc913f1f0f054a5b9f05f743090abf27%2F7669122e92d44f87aa01d5af6b94222d?format=webp&width=800"
                alt="User avatar"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fbc913f1f0f054a5b9f05f743090abf27%2Fc0db0c7411e444af9dcf621fded61c56?format=webp&width=800"
                alt="User avatar"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fbc913f1f0f054a5b9f05f743090abf27%2F3d6f696f3fcd454abcc1fe61730ca867?format=webp&width=800"
                alt="User avatar"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fbc913f1f0f054a5b9f05f743090abf27%2Ffc4090f3b7624ba5a226d275842a72ec?format=webp&width=800"
                alt="User avatar"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
            </div>
            <p className="font-inter text-lg text-black font-light ml-4">
              Join the 2,000+ others that have signed up
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// export default WaitlistSection;

const Footer = () => {
  return (
    <footer
      className="px-4 lg:px-6 xl:px-36 py-8 lg:py-16"
      style={{
        background:
          "linear-gradient(90deg, rgba(254, 246, 255, 0.40) 25.96%, rgba(226, 233, 249, 0.40) 74.04%)",
      }}
    >
      {/* Mobile Layout - unchanged */}
      <div className="lg:hidden max-w-[237px] mx-auto space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/905b5021dc8508de212dd08ffffa3dcc949741a2?width=446"
            alt="VYBECODERZ Logo"
            className="h-[67px] w-[223px]"
          />
        </div>

        {/* Contact Info */}
        <div className="space-y-2 text-center">
          <p className="font-inter text-xl text-black font-normal leading-8">
            +91 9978 673 855
          </p>
          <p className="font-inter text-base text-black font-normal leading-8">
            hello@vybecoderz.com
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="font-inter text-2xl text-black font-normal leading-7 text-center">
            Quick Links
          </h4>
          <div className="space-y-4">
            <a
              href="#"
              className="block font-inter text-2xl text-black/65 font-normal text-center"
            >
              Product
            </a>
            <a
              href="#"
              className="block font-inter text-2xl text-black/65 font-normal text-center"
            >
              Information
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-6">
          <h4 className="font-inter text-lg text-black font-normal leading-7 text-center">
            Services
          </h4>
          <div className="space-y-4">
            <a
              href="#"
              className="block font-inter text-base text-black/65 font-normal text-center"
            >
              Full-Stack Development
            </a>
            <a
              href="#"
              className="block font-inter text-base text-black/65 font-normal text-center"
            >
              UI/UX Design
            </a>
          </div>
        </div>

        {/* Resources */}
        <div className="space-y-6">
          <h4 className="font-inter text-lg text-black font-normal leading-7 text-center">
            Resources
          </h4>
          <div className="space-y-4">
            <a
              href="#"
              className="block font-inter text-base text-black/65 font-normal text-center"
            >
              Blog
            </a>
            <a
              href="#"
              className="block font-inter text-base text-black/65 font-normal text-center"
            >
              Case Studies
            </a>
          </div>
        </div>

        {/* Subscribe */}
        <div className="space-y-6">
          <h4 className="font-inter text-lg text-black font-normal leading-7 text-center">
            Subscribe
          </h4>
          <div className="flex rounded-md border border-blue-200/20 bg-white w-[226px] h-[47px] mx-auto">
            <Input
              type="email"
              placeholder="Get dev updates & insights"
              className="flex-1 border-0 text-xs font-inter text-[#0A142F]/65 bg-transparent focus:ring-0 focus:outline-none px-4"
            />
            <button className="bg-[#478EFF] text-white w-[46px] h-[47px] flex items-center justify-center rounded-r-md">
              <svg className="w-3 h-[14px]" fill="white" viewBox="0 0 15 13">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.25275 12.8115L14.4073 7.53135C14.8819 7.04492 14.8819 6.25647 14.4073 5.77154L9.25275 0.491358L7.53443 2.25229L10.6146 5.40681H0.838379L0.838379 7.8957H10.6146L7.53443 11.0513L9.25275 12.8115Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout - new design */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-5 items-start">
          {/* Logo and Contact Info */}
          <div className="space-y-8">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/86d388d1c93f098a0c7783843a8bad78e17b9deb?width=388"
              alt="VYBECODERZ Logo"
              className="w-[194px] h-[58px]"
            />
            <div className="space-y-2 -mt-[21px]">
              <p className="font-inter text-xl text-black font-normal leading-8">
                +91 9978 673 855
              </p>
              <p className="font-inter text-base text-black font-normal leading-8">
                hello@vybecoderz.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 mt-[22px]">
            <h4 className="font-inter text-lg text-black font-normal leading-7">
              Quick Links
            </h4>
            <div className="space-y-4">
              <a
                href="#"
                className="block font-inter text-base text-black/65 font-normal"
              >
                Product
              </a>
              <a
                href="#"
                className="block font-inter text-base text-black/65 font-normal"
              >
                Information
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6 mt-[22px]">
            <h4 className="font-inter text-lg text-black font-normal leading-7">
              Services
            </h4>
            <div className="space-y-4">
              <a
                href="#"
                className="block font-inter text-base text-black/65 font-normal"
              >
                Full-Stack Development
              </a>
              <a
                href="#"
                className="block font-inter text-base text-black/65 font-normal"
              >
                UI/UX Design
              </a>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-6 mt-[22px]">
            <h4 className="font-inter text-lg text-black font-normal leading-7">
              Resources
            </h4>
            <div className="space-y-4">
              <a
                href="#"
                className="block font-inter text-base text-black/65 font-normal"
              >
                Blog
              </a>
              <a
                href="#"
                className="block font-inter text-base text-black/65 font-normal"
              >
                Case Studies
              </a>
            </div>
          </div>

          {/* Subscribe */}
          <div className="space-y-6 mt-[22px]">
            <h4 className="font-inter text-lg text-black font-normal leading-7">
              Subscribe
            </h4>
            <div className="flex rounded-md border border-blue-200/20 bg-white w-[226px] h-[47px]">
              <Input
                type="email"
                placeholder="Get dev updates & insights"
                className="flex-1 border-0 text-[11px] font-inter text-[#0A142F]/65 bg-transparent focus:ring-0 focus:outline-none px-4"
              />
              <button className="bg-[#478EFF] text-white w-[46px] h-[47px] flex items-center justify-center rounded-r-md">
                <svg className="w-3 h-[14px]" fill="white" viewBox="0 0 15 13">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.25275 12.8115L14.4073 7.53135C14.8819 7.04492 14.8819 6.25647 14.4073 5.77154L9.25275 0.491358L7.53443 2.25229L10.6146 5.40681H0.838379L0.838379 7.8957H10.6146L7.53443 11.0513L9.25275 12.8115Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3 mt-12 mb-6">
          {/* LinkedIn */}
          <div className="w-[37px] h-[37px] border border-black/25 rounded-full flex items-center justify-center">
            <svg className="w-2 h-[10px]" fill="black" viewBox="0 0 10 11">
              <path d="M7.45686 0.594297C6.33742 0.17016 4.93722 0.542728 4.09751 1.2108C4.0687 1.08623 3.96603 0.993518 3.84398 0.993518H1.22481C1.08023 0.993518 0.962891 1.12331 0.962891 1.28323V9.97455C0.962891 10.1345 1.08023 10.2643 1.22481 10.2643H3.84398C3.98855 10.2643 4.10589 10.1345 4.10589 9.97455V3.72839C4.52915 3.32511 5.07446 3.19648 5.52077 3.40623C5.95345 3.60845 6.20123 4.10211 6.20123 4.75976V9.97455C6.20123 10.1345 6.31857 10.2643 6.46314 10.2643H9.08231C9.22689 10.2643 9.34423 10.1345 9.34423 9.97455V4.17628C9.31437 1.79544 8.3018 0.914138 7.45686 0.594297Z" />
            </svg>
          </div>

          {/* Facebook */}
          <div className="w-[37px] h-[37px] border border-black/25 rounded-full flex items-center justify-center">
            <svg className="w-[7px] h-[14px]" fill="black" viewBox="0 0 9 15">
              <path d="M6.24866 2.80622H7.95239C8.10913 2.80622 8.23634 2.67362 8.23634 2.51025V0.734444C8.23634 0.57107 8.10913 0.438477 7.95239 0.438477H6.24866C4.52676 0.438477 3.12515 1.89878 3.12515 3.69412V5.76589H1.13747C0.980727 5.76589 0.853516 5.89848 0.853516 6.06186V7.83766C0.853516 8.00103 0.980727 8.13363 1.13747 8.13363H3.12515V14.3489C3.12515 14.5123 3.25237 14.6449 3.40911 14.6449H5.11284C5.26958 14.6449 5.39679 14.5123 5.39679 14.3489V8.13363H7.38448C7.50658 8.13363 7.61505 8.05194 7.65424 7.93118L8.22215 6.15538C8.25111 6.06541 8.23634 5.96596 8.18296 5.88842C8.12901 5.81147 8.04382 5.76589 7.95239 5.76589H5.39679V3.69412C5.39679 3.20459 5.779 2.80622 6.24866 2.80622Z" />
            </svg>
          </div>

          {/* Twitter */}
          <div className="w-[37px] h-[37px] border border-black/25 rounded-full flex items-center justify-center">
            <svg className="w-[13px] h-[12px]" fill="black" viewBox="0 0 14 13">
              <path d="M13.5843 2.26355C13.4983 2.15601 13.3596 2.12896 13.2458 2.19529C13.1751 2.23651 13.0421 2.2906 12.8841 2.34405C13.0834 2.04267 13.2436 1.70523 13.3143 1.40192C13.3449 1.27119 13.3002 1.13338 13.2028 1.05546C13.1055 0.978186 12.9758 0.978186 12.8785 1.05546C12.7251 1.17717 11.9847 1.54295 11.5166 1.66144C10.4588 0.607258 9.22767 0.497783 7.9479 1.34783C6.90756 2.03881 6.68115 3.44395 6.7253 4.30044C4.34406 4.03963 2.86392 2.60872 2.03074 1.42446C1.97244 1.34139 1.87848 1.2976 1.79018 1.30404C1.69735 1.31176 1.61358 1.37036 1.56604 1.46117C1.17209 2.21783 1.06285 3.05435 1.25133 3.88057C1.35435 4.33135 1.53434 4.72868 1.7432 5.05067C1.64302 4.99464 1.54623 4.92445 1.4551 4.84073C1.37133 4.76217 1.25416 4.74735 1.15511 4.79952C1.05662 4.85297 0.993792 4.9663 0.993792 5.09059C0.993792 6.50926 1.77377 7.4559 2.50223 7.95047C2.3845 7.93437 2.26167 7.90475 2.13772 7.8616C2.0313 7.8249 1.91584 7.8616 1.84225 7.95691C1.76867 8.05157 1.75113 8.18681 1.79697 8.30208C2.2062 9.33179 2.98165 10.0402 3.94105 10.2971C3.10334 10.8567 1.98206 11.131 0.955303 10.9965C0.822288 10.9752 0.6955 11.0712 0.653615 11.2167C0.611729 11.3622 0.666633 11.5219 0.783799 11.5966C2.34148 12.5916 3.74974 12.9471 4.96668 12.9471C6.73775 12.9471 8.10469 12.1949 8.93673 11.5657C11.1799 9.87208 12.5779 6.83125 12.3832 4.11047C12.7426 3.80844 13.2804 3.25076 13.6137 2.65123C13.6828 2.53016 13.6704 2.37045 13.5843 2.26355Z" />
            </svg>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-black/20 mb-6"></div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center">
          <span className="font-inter text-base text-black font-normal">
            A product of
          </span>
          <span className="font-inter text-base text-black font-normal">
            © 2025 Vybe Coderz. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default function Index() {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #E2E9F9 35.1%, #FEF2F2 61.54%)",
      }}
    >
      <MobileNavigation />
      <DesktopNavigation />
      <HeroSection />
      <JourneySection />
      <AudienceSection />
      <FeaturesSection />
      <WaitlistSection />
      <Footer />
    </div>
  );
}
