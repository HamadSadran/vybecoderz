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
              onClick={closeMenu}
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
            href="/"
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
          className="h-12 w-auto shadow-lg"
        />

        <div className="flex items-center gap-16">
          <a
            href="/contact"
            className="text-vybecoderz-navy font-inter text-xl font-medium block"
          >
            <p>Contact Us</p>
          </a>
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
    <section className="px-4 sm:px-6 lg:px-36 py-16 lg:py-24">
      <div className="text-center space-y-8">
        <h1 className="font-inter text-4xl lg:text-5xl text-black font-medium leading-tight tracking-tight max-w-4xl mx-auto">
          Don't Just Watch — Build as You Learn.
        </h1>

        <p className="font-researcher text-3xl lg:text-4xl text-black font-light leading-normal max-w-5xl mx-auto">
          <span className="font-researcher">VybeCoderz</span> turns learning
          into a team sport. Attend hands-on sessions, ask questions live, and
          build alongside creative minds like you.
        </p>

        <div className="pt-8">
          <button className="bg-vybecoderz-peach border border-black/20 rounded-full px-8 py-3 text-black font-inter text-lg sm:text-xl font-medium backdrop-blur-sm">
            Features Overview
          </button>
        </div>
      </div>
    </section>
  );
};

const WhyDifferentSection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-36 py-16 lg:py-24">
      <div className="text-center mb-16">
        <h2 className="font-inter text-3xl lg:text-4xl text-black font-normal">
          Why Learning with <span className="font-researcher">VybeCoderz</span>{" "}
          Feels Different
        </h2>
      </div>

      <div className="space-y-24">
        {/* Learn Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="font-inter text-xl lg:text-2xl text-black font-light leading-normal">
              Gain hands-on experience with weekly live sessions, peer feedback
              circles, and expert-led workshops — all built for creative doers
              like you.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e78e7ec7cc9778ace2c0665b66ef39d71c689ea?width=1130"
              alt="Learn together"
              className="w-full max-w-lg h-auto rounded-2xl border border-black shadow-lg"
            />
          </div>
        </div>

        {/* Build Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/babab435635f70e4e561970b7de740c6c5094117?width=1130"
              alt="Build projects"
              className="w-full max-w-lg h-auto rounded-2xl border border-black shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="font-inter text-3xl lg:text-4xl text-black font-bold text-center lg:text-left">
              Build
            </h3>
            <p className="font-inter text-xl lg:text-2xl text-black font-light leading-normal">
              Apply what you've learned in real-time through app challenges,
              team sprints, and hands-on projects that mimic real-world product
              development.
            </p>
            <div className="space-y-4">
              <p className="font-inter text-lg lg:text-xl text-black leading-relaxed">
                Join monthly app-building challenges with prompts
                <br />
                Collaborate in team-based sprints
                <br />
                Get peer reviews and mentor feedback
                <br />
                Publish real products or MVPs after each build phase
              </p>
            </div>
          </div>
        </div>

        {/* Exchange Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="font-inter text-3xl lg:text-4xl text-black font-bold">
              Exchange
            </h3>
            <p className="font-inter text-xl lg:text-2xl text-black font-light leading-normal">
              Pitch ideas, find collaborators, post open projects, or lend a
              hand to others — all through our dynamic project board and
              peer-to-peer exchange system.
            </p>
            <div className="space-y-4">
              <p className="font-inter text-lg lg:text-xl text-black leading-relaxed">
                Post project ideas or challenges to the community
                <br />
                Browse others' open builds and join as a teammate
                <br />
                Skill-based filters to match with the right people
                <br />
                Share templates, tools, and collaborate async or live
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/77be233b39dcab24c21fd027057ecc4e39f79db1?width=1130"
              alt="Exchange ideas"
              className="w-full max-w-lg h-auto rounded-2xl border border-black shadow-lg"
            />
          </div>
        </div>

        {/* Monetize Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/393ab331e1800092f7bf1a6b411a3fbb5316b63e?width=1130"
              alt="Monetize skills"
              className="w-full max-w-lg h-auto rounded-2xl border border-black shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="font-inter text-3xl lg:text-4xl text-black font-bold text-center lg:text-left">
              Monetize
            </h3>
            <p className="font-inter text-xl lg:text-2xl text-black font-light leading-normal">
              Whether you're freelancing, launching your agency, or joining paid
              builds �� Vybe Coderz gives you real ways to start earning from
              what you create.
            </p>
            <div className="space-y-4">
              <p className="font-inter text-lg lg:text-xl text-black leading-relaxed">
                Join paid build challenges and client-facing projects
                <br />
                Launch your own no-code micro-agency
                <br />
                Learn pricing, packaging, and client communication
                <br />
                Access monetization-focused bootcamps and templates
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer
      className="px-4 lg:px-6 xl:px-36 py-8 lg:py-16"
      style={{
        background:
          "linear-gradient(90deg, rgba(254, 246, 255, 0.40) 25.96%, rgba(226, 233, 249, 0.40) 74.04%)",
      }}
    >
      {/* Mobile Layout */}
      <div className="lg:hidden max-w-[237px] mx-auto space-y-8">
        <div className="flex justify-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/905b5021dc8508de212dd08ffffa3dcc949741a2?width=446"
            alt="VYBECODERZ Logo"
            className="h-[67px] w-[223px]"
          />
        </div>

        <div className="space-y-2 text-center">
          <p className="font-inter text-xl text-black font-normal leading-8">
            +91 9978 673 855
          </p>
          <p className="font-inter text-base text-black font-normal leading-8">
            hello@vybecoderz.com
          </p>
        </div>

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

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-5 items-start">
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

        <div className="flex gap-3 mt-12 mb-6">
          <div className="w-[37px] h-[37px] border border-black/25 rounded-full flex items-center justify-center">
            <svg className="w-2 h-[10px]" fill="black" viewBox="0 0 10 11">
              <path d="M7.45686 0.594297C6.33742 0.17016 4.93722 0.542728 4.09751 1.2108C4.0687 1.08623 3.96603 0.993518 3.84398 0.993518H1.22481C1.08023 0.993518 0.962891 1.12331 0.962891 1.28323V9.97455C0.962891 10.1345 1.08023 10.2643 1.22481 10.2643H3.84398C3.98855 10.2643 4.10589 10.1345 4.10589 9.97455V3.72839C4.52915 3.32511 5.07446 3.19648 5.52077 3.40623C5.95345 3.60845 6.20123 4.10211 6.20123 4.75976V9.97455C6.20123 10.1345 6.31857 10.2643 6.46314 10.2643H9.08231C9.22689 10.2643 9.34423 10.1345 9.34423 9.97455V4.17628C9.31437 1.79544 8.3018 0.914138 7.45686 0.594297Z" />
            </svg>
          </div>

          <div className="w-[37px] h-[37px] border border-black/25 rounded-full flex items-center justify-center">
            <svg className="w-[7px] h-[14px]" fill="black" viewBox="0 0 9 15">
              <path d="M6.24866 2.80622H7.95239C8.10913 2.80622 8.23634 2.67362 8.23634 2.51025V0.734444C8.23634 0.57107 8.10913 0.438477 7.95239 0.438477H6.24866C4.52676 0.438477 3.12515 1.89878 3.12515 3.69412V5.76589H1.13747C0.980727 5.76589 0.853516 5.89848 0.853516 6.06186V7.83766C0.853516 8.00103 0.980727 8.13363 1.13747 8.13363H3.12515V14.3489C3.12515 14.5123 3.25237 14.6449 3.40911 14.6449H5.11284C5.26958 14.6449 5.39679 14.5123 5.39679 14.3489V8.13363H7.38448C7.50658 8.13363 7.61505 8.05194 7.65424 7.93118L8.22215 6.15538C8.25111 6.06541 8.23634 5.96596 8.18296 5.88842C8.12901 5.81147 8.04382 5.76589 7.95239 5.76589H5.39679V3.69412C5.39679 3.20459 5.779 2.80622 6.24866 2.80622Z" />
            </svg>
          </div>

          <div className="w-[37px] h-[37px] border border-black/25 rounded-full flex items-center justify-center">
            <svg className="w-[13px] h-[12px]" fill="black" viewBox="0 0 14 13">
              <path d="M13.5843 2.26355C13.4983 2.15601 13.3596 2.12896 13.2458 2.19529C13.1751 2.23651 13.0421 2.2906 12.8841 2.34405C13.0834 2.04267 13.2436 1.70523 13.3143 1.40192C13.3449 1.27119 13.3002 1.13338 13.2028 1.05546C13.1055 0.978186 12.9758 0.978186 12.8785 1.05546C12.7251 1.17717 11.9847 1.54295 11.5166 1.66144C10.4588 0.607258 9.22767 0.497783 7.9479 1.34783C6.90756 2.03881 6.68115 3.44395 6.7253 4.30044C4.34406 4.03963 2.86392 2.60872 2.03074 1.42446C1.97244 1.34139 1.87848 1.2976 1.79018 1.30404C1.69735 1.31176 1.61358 1.37036 1.56604 1.46117C1.17209 2.21783 1.06285 3.05435 1.25133 3.88057C1.35435 4.33135 1.53434 4.72868 1.7432 5.05067C1.64302 4.99464 1.54623 4.92445 1.4551 4.84073C1.37133 4.76217 1.25416 4.74735 1.15511 4.79952C1.05662 4.85297 0.993792 4.9663 0.993792 5.09059C0.993792 6.50926 1.77377 7.4559 2.50223 7.95047C2.3845 7.93437 2.26167 7.90475 2.13772 7.8616C2.0313 7.8249 1.91584 7.8616 1.84225 7.95691C1.76867 8.05157 1.75113 8.18681 1.79697 8.30208C2.2062 9.33179 2.98165 10.0402 3.94105 10.2971C3.10334 10.8567 1.98206 11.131 0.955303 10.9965C0.822288 10.9752 0.6955 11.0712 0.653615 11.2167C0.611729 11.3622 0.666633 11.5219 0.783799 11.5966C2.34148 12.5916 3.74974 12.9471 4.96668 12.9471C6.73775 12.9471 8.10469 12.1949 8.93673 11.5657C11.1799 9.87208 12.5779 6.83125 12.3832 4.11047C12.7426 3.80844 13.2804 3.25076 13.6137 2.65123C13.6828 2.53016 13.6704 2.37045 13.5843 2.26355Z" />
            </svg>
          </div>
        </div>

        <div className="w-full h-px bg-black/20 mb-6"></div>

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

export default function Features() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(180deg, #E2E9F9 35.1%, #FEF2F2 61.54%)",
      }}
    >
      <MobileNavigation />
      <DesktopNavigation />
      <HeroSection />
      <WhyDifferentSection />
      <Footer />
    </div>
  );
}
