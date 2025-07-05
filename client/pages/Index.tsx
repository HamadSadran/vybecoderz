import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const MobileNavigation = () => {
  return (
    <nav className="w-full px-4 py-4 lg:hidden">
      <div className="flex items-center justify-between">
        <div className="flex space-x-1">
          <div className="w-5 h-0.5 bg-black"></div>
          <div className="w-5 h-0.5 bg-black"></div>
          <div className="w-5 h-0.5 bg-black"></div>
        </div>

        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e8ef9e3d9705bcde4bb901da46f37b17e675085?width=388"
          alt="VYBECODERZ Logo"
          className="h-12 w-auto"
        />

        <div className="flex flex-col space-y-1">
          <div className="w-5 h-0.5 bg-black"></div>
          <div className="w-5 h-0.5 bg-black"></div>
          <div className="w-5 h-0.5 bg-black"></div>
        </div>
      </div>
    </nav>
  );
};

const DesktopNavigation = () => {
  return (
    <nav className="hidden lg:block w-full px-6 lg:px-36 py-4 relative z-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8 lg:gap-16">
          <a
            href="#"
            className="text-vybecoderz-navy font-inter text-lg sm:text-xl font-medium"
          >
            home
          </a>
          <a
            href="/features"
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

const WaitlistSection = () => {
  const [email, setEmail] = useState("");

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
              <button className="bg-vybecoderz-purple text-white px-4 py-3 font-inter text-xs font-medium rounded-r-2xl">
                →
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-1">
              <div className="w-[14px] h-[21px] rounded-full bg-gray-300 border border-white"></div>
              <div className="w-[14px] h-[21px] rounded-full bg-gray-300 border border-white"></div>
              <div className="w-[14px] h-[21px] rounded-full bg-gray-300 border border-white"></div>
              <div className="w-[14px] h-[21px] rounded-full bg-gray-300 border border-white"></div>
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
            The wait is almost over —
            <br />
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
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="px-4 lg:px-6 xl:px-36 py-8 lg:py-16">
      <div className="max-w-[237px] mx-auto lg:mx-0 space-y-8">
        {/* Logo */}
        <div className="flex justify-center lg:justify-start">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/905b5021dc8508de212dd08ffffa3dcc949741a2?width=446"
            alt="VYBECODERZ Logo"
            className="h-[67px] w-[223px]"
          />
        </div>

        {/* Contact Info */}
        <div className="space-y-2 text-center lg:text-left">
          <p className="font-inter text-xl text-black font-normal leading-8">
            +91 9978 673 855
          </p>
          <p className="font-inter text-base text-black font-normal leading-8">
            hello@vybecoderz.com
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="font-inter text-2xl text-black font-normal leading-7 text-center lg:text-left">
            Quick Links
          </h4>
          <div className="space-y-4">
            <a
              href="#"
              className="block font-inter text-2xl text-black/65 font-normal text-center lg:text-left"
            >
              Product
            </a>
            <a
              href="#"
              className="block font-inter text-2xl text-black/65 font-normal text-center lg:text-left"
            >
              Information
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-6">
          <h4 className="font-inter text-lg text-black font-normal leading-7 text-center lg:text-left">
            Services
          </h4>
          <div className="space-y-4">
            <a
              href="#"
              className="block font-inter text-base text-black/65 font-normal text-center lg:text-left"
            >
              Full-Stack Development
            </a>
            <a
              href="#"
              className="block font-inter text-base text-black/65 font-normal text-center lg:text-left"
            >
              UI/UX Design
            </a>
          </div>
        </div>

        {/* Resources */}
        <div className="space-y-6">
          <h4 className="font-inter text-lg text-black font-normal leading-7 text-center lg:text-left">
            Resources
          </h4>
          <div className="space-y-4">
            <a
              href="#"
              className="block font-inter text-base text-black/65 font-normal text-center lg:text-left"
            >
              Blog
            </a>
            <a
              href="#"
              className="block font-inter text-base text-black/65 font-normal text-center lg:text-left"
            >
              Case Studies
            </a>
          </div>
        </div>

        {/* Subscribe */}
        <div className="space-y-6">
          <h4 className="font-inter text-lg text-black font-normal leading-7 text-center lg:text-left">
            Subscribe
          </h4>
          <div className="flex rounded-md border border-blue-200/20 bg-white w-[226px] h-[47px] mx-auto lg:mx-0">
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
