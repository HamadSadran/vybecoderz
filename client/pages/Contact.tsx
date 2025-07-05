import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E2E9F9] via-[#E2E9F9] to-[#FEF2F2]">
      {/* Navigation Header */}
      <nav className="flex items-center justify-between px-36 py-12">
        <div className="flex items-center space-x-20">
          <Link
            to="/"
            className="text-vybecoderz-navy text-[21px] font-medium capitalize drop-shadow-md"
          >
            home
          </Link>
          <Link
            to="/features"
            className="text-vybecoderz-navy text-[21px] font-medium capitalize drop-shadow-md"
          >
            features
          </Link>
          <span className="text-vybecoderz-navy text-[21px] font-medium capitalize drop-shadow-md">
            about
          </span>
          <span className="text-vybecoderz-navy text-[21px] font-medium capitalize">
            Services
          </span>
          <span className="text-vybecoderz-navy text-[21px] font-medium capitalize">
            Blog
          </span>
        </div>
        <button className="flex items-center justify-center px-8 py-3 rounded-full border border-black/20 bg-vybecoderz-blue backdrop-blur-sm">
          <span className="text-vybecoderz-navy text-[21px] font-medium">
            Join Now
          </span>
        </button>
      </nav>

      {/* Main Contact Section */}
      <div className="flex justify-center px-36 pb-32">
        <div
          className="relative w-[1170px] h-[821px]"
          style={{ filter: "drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))" }}
        >
          {/* Title */}
          <div className="absolute left-[152px] top-0 w-[857px] h-[67px] flex flex-col justify-center">
            <h1 className="text-center font-inter text-[54px] font-normal leading-[126%] tracking-[-2.4px] bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Get In Touch
            </h1>
          </div>

          {/* Contact Form Container */}
          <div
            className="absolute left-0 top-[152px] w-[1160px] h-[663px] rounded-[18px]"
            style={{
              background: "linear-gradient(180deg, #F3EEF0 50%, #F9F0ED 100%)",
            }}
          >
            {/* First Name Field */}
            <div className="absolute left-[18px] top-[130px]">
              <label className="block text-[#8D8D8D] font-inter text-[12px] font-medium leading-5 mb-3">
                First Name
              </label>
              <div className="w-[278px] h-[1px] bg-[#8D8D8D]"></div>
            </div>

            {/* Last Name Field */}
            <div className="absolute left-[325px] top-[130px]">
              <div className="text-[#8D8D8D] font-inter text-[14px] font-medium leading-5 mb-2">
                Doe
              </div>
              <div className="w-[278px] h-[1px] bg-[#8D8D8D]"></div>
            </div>

            {/* Email Field */}
            <div className="absolute left-[30px] top-[237px]">
              <label className="block text-[#8D8D8D] font-inter text-[12px] font-medium leading-5 mb-3">
                Email
              </label>
              <div className="w-[278px] h-[1px] bg-[#8D8D8D]"></div>
            </div>

            {/* Phone Number Field */}
            <div className="absolute left-[325px] top-[237px]">
              <label className="block text-black font-inter text-[12px] font-medium leading-5 mb-1">
                Phone Number
              </label>
              <div className="text-black font-inter text-[14px] font-medium leading-5 mb-2">
                +1 012 3456 789
              </div>
              <div className="w-[278px] h-[1px] bg-black"></div>
            </div>

            {/* Message Field */}
            <div className="absolute left-[27px] top-[326px]">
              <label className="block text-[#8D8D8D] font-inter text-[12px] font-medium leading-5 mb-3">
                Message
              </label>
              <div className="text-[#8D8D8D] font-inter text-[14px] font-medium leading-5 mb-2">
                Write your message..
              </div>
              <div className="w-[595px] h-[1px] bg-[#8D8D8D]"></div>
            </div>

            {/* Contact Information Text */}
            <div className="absolute left-[694px] top-[137px] w-[437px] h-[140px]">
              <p className="text-black font-inter text-[16px] font-light leading-[126%]">
                Whether you've got questions about your account, want to
                collaborate on a project, or are interested in contributing an
                article as a guest author — we're here for you.
                <br />
                <br />
                Don't hesitate to reach out. The Vybe Coderz team is always
                ready to support, connect, and build with you. Let's make
                something awesome together.
              </p>
            </div>

            {/* Contact Illustration */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ed134de8e20b24d63e2ab55e83d79341456ced1?width=1100"
              alt="Contact illustration"
              className="absolute left-[620px] top-[256px] w-[550px] h-[413px] object-cover"
            />
          </div>

          {/* Send Message Button */}
          <button className="absolute left-[186px] top-[647px] flex items-center justify-center w-[194px] h-[40px] rounded-full border border-black/20 bg-vybecoderz-blue backdrop-blur-sm">
            <span className="text-black font-inter text-[14px] font-medium">
              Send Message
            </span>
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <footer
        className="w-full h-[372px] relative"
        style={{
          background:
            "linear-gradient(90deg, rgba(254, 246, 255, 0.40) 25.96%, rgba(226, 233, 249, 0.40) 74.04%)",
        }}
      >
        {/* Company Logo */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e8ef9e3d9705bcde4bb901da46f37b17e675085?width=388"
          alt="Vybe Coderz Logo"
          className="absolute left-[147px] top-[39px] w-[194px] h-[58px] drop-shadow-md"
        />

        {/* Contact Information */}
        <div className="absolute left-[165px] top-[119px]">
          <div className="text-black font-inter text-[20px] font-normal leading-8 mb-4">
            +91 9978 673 855
          </div>
          <div className="text-black font-inter text-[16px] font-normal leading-8">
            hello@vybecoderz.com
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="absolute left-[434px] top-[47px]">
          <h3 className="text-black font-inter text-[18px] font-normal leading-7 mb-6">
            Quick Links
          </h3>
          <div className="space-y-4">
            <div className="text-black font-inter text-[16px] font-normal opacity-65">
              Product
            </div>
            <div className="text-black font-inter text-[16px] font-normal opacity-65">
              Information
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="absolute left-[640px] top-[47px]">
          <h3 className="text-black font-inter text-[18px] font-normal leading-7 mb-6">
            Services
          </h3>
          <div className="space-y-4">
            <div className="text-black font-inter text-[16px] font-normal opacity-65">
              Full-Stack Development
            </div>
            <div className="text-black font-inter text-[16px] font-normal opacity-65">
              UI/UX Design
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="absolute left-[845px] top-[47px]">
          <h3 className="text-black font-inter text-[18px] font-normal leading-7 mb-6">
            Resources
          </h3>
          <div className="space-y-4">
            <div className="text-black font-inter text-[16px] font-normal opacity-65">
              Blog
            </div>
            <div className="text-black font-inter text-[16px] font-normal opacity-65">
              Case Studies
            </div>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="absolute left-[1027px] top-[48px]">
          <h3 className="text-black font-inter text-[18px] font-normal leading-7 mb-6">
            Subscribe
          </h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Get dev updates & insights"
              className="w-[226px] h-[47px] px-4 rounded-l-md border border-blue-200/20 bg-white text-[12px] text-[#0A142F] opacity-65"
            />
            <button className="w-[46px] h-[47px] bg-[#478EFF] rounded-r-md flex items-center justify-center border border-gray-300">
              <svg
                width="12"
                height="14"
                viewBox="0 0 15 13"
                fill="none"
                className="transform rotate-[-90deg]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.03058 12.3267L14.1852 7.04648C14.6598 6.56005 14.6598 5.77161 14.1852 5.28667L9.03058 0.00649452L7.31226 1.76743L10.3924 4.92194H0.616211L0.616211 7.41084H10.3924L7.31226 10.5665L9.03058 12.3267Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Divider Line */}
        <div className="absolute left-[139px] top-[261px] w-[1137px] h-[1px] bg-black opacity-20"></div>

        {/* Social Media Icons */}
        <div className="absolute left-[140px] top-[284px] flex space-x-[13px]">
          {/* LinkedIn */}
          <div className="w-[37px] h-[41px] rounded-full border-[1.5px] border-black opacity-25 flex items-center justify-center">
            <svg width="8" height="10" viewBox="0 0 10 11" fill="none">
              <path
                d="M7.45686 0.594297C6.33742 0.17016 4.93722 0.542728 4.09751 1.2108C4.0687 1.08623 3.96603 0.993518 3.84398 0.993518H1.22481C1.08023 0.993518 0.962891 1.12331 0.962891 1.28323V9.97455C0.962891 10.1345 1.08023 10.2643 1.22481 10.2643H3.84398C3.98855 10.2643 4.10589 10.1345 4.10589 9.97455V3.72839C4.52915 3.32511 5.07446 3.19648 5.52077 3.40623C5.95345 3.60845 6.20123 4.10211 6.20123 4.75976V9.97455C6.20123 10.1345 6.31857 10.2643 6.46314 10.2643H9.08231C9.22689 10.2643 9.34423 10.1345 9.34423 9.97455V4.17628C9.31437 1.79544 8.3018 0.914138 7.45686 0.594297Z"
                fill="black"
              />
            </svg>
          </div>

          {/* Facebook */}
          <div className="w-[37px] h-[41px] rounded-full border-[1.5px] border-black opacity-25 flex items-center justify-center">
            <svg width="7" height="14" viewBox="0 0 9 15" fill="none">
              <path
                d="M6.24866 2.80622H7.95239C8.10913 2.80622 8.23634 2.67362 8.23634 2.51025V0.734444C8.23634 0.57107 8.10913 0.438477 7.95239 0.438477H6.24866C4.52676 0.438477 3.12515 1.89878 3.12515 3.69412V5.76589H1.13747C0.980727 5.76589 0.853516 5.89848 0.853516 6.06186V7.83766C0.853516 8.00103 0.980727 8.13363 1.13747 8.13363H3.12515V14.3489C3.12515 14.5123 3.25237 14.6449 3.40911 14.6449H5.11284C5.26958 14.6449 5.39679 14.5123 5.39679 14.3489V8.13363H7.38448C7.50658 8.13363 7.61505 8.05194 7.65424 7.93118L8.22215 6.15538C8.25111 6.06541 8.23634 5.96596 8.18296 5.88842C8.12901 5.81147 8.04382 5.76589 7.95239 5.76589H5.39679V3.69412C5.39679 3.20459 5.779 2.80622 6.24866 2.80622Z"
                fill="black"
              />
            </svg>
          </div>

          {/* Twitter */}
          <div className="w-[37px] h-[41px] rounded-full border-[1.5px] border-black opacity-25 flex items-center justify-center">
            <svg width="13" height="12" viewBox="0 0 14 13" fill="none">
              <path
                d="M13.5843 2.26355C13.4983 2.15601 13.3596 2.12896 13.2458 2.19529C13.1751 2.23651 13.0421 2.2906 12.8841 2.34405C13.0834 2.04267 13.2436 1.70523 13.3143 1.40192C13.3449 1.27119 13.3002 1.13338 13.2028 1.05546C13.1055 0.978186 12.9758 0.978186 12.8785 1.05546C12.7251 1.17717 11.9847 1.54295 11.5166 1.66144C10.4588 0.607258 9.22767 0.497783 7.9479 1.34783C6.90756 2.03881 6.68115 3.44395 6.7253 4.30044C4.34406 4.03963 2.86392 2.60872 2.03074 1.42446C1.97244 1.34139 1.87848 1.2976 1.79018 1.30404C1.69735 1.31176 1.61358 1.37036 1.56604 1.46117C1.17209 2.21783 1.06285 3.05435 1.25133 3.88057C1.35435 4.33135 1.53434 4.72868 1.7432 5.05067C1.64302 4.99464 1.54623 4.92445 1.4551 4.84073C1.37133 4.76217 1.25416 4.74735 1.15511 4.79952C1.05662 4.85297 0.993792 4.9663 0.993792 5.09059C0.993792 6.50926 1.77377 7.4559 2.50223 7.95047C2.3845 7.93437 2.26167 7.90475 2.13772 7.8616C2.0313 7.8249 1.91584 7.8616 1.84225 7.95691C1.76867 8.05157 1.75113 8.18681 1.79697 8.30208C2.2062 9.33179 2.98165 10.0402 3.94105 10.2971C3.10334 10.8567 1.98206 11.131 0.955303 10.9965C0.822288 10.9752 0.6955 11.0712 0.653615 11.2167C0.611729 11.3622 0.666633 11.5219 0.783799 11.5966C2.34148 12.5916 3.74974 12.9471 4.96668 12.9471C6.73775 12.9471 8.10469 12.1949 8.93673 11.5657C11.1799 9.87208 12.5779 6.83125 12.3832 4.11047C12.7426 3.80844 13.2804 3.25076 13.6137 2.65123C13.6828 2.53016 13.6704 2.37045 13.5843 2.26355Z"
                fill="black"
              />
            </svg>
          </div>
        </div>

        {/* Copyright and Attribution */}
        <div className="absolute left-[642px] top-[296px] text-black font-inter text-[16px] font-normal">
          A product of
        </div>
        <div className="absolute left-[1031px] top-[293px] text-black font-inter text-[16px] font-normal">
          © 2025 Vybe Coderz. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Contact;
