import { Link } from "react-router-dom";

const Confirmation = () => {
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

      {/* Confirmation Section */}
      <div className="flex justify-center items-center px-36 py-36">
        <div className="text-center w-full max-w-2xl p-12 rounded-3xl shadow-xl bg-white">
          <h1 className="text-[54px] bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-inter font-semibold mb-6">
            You're on the list!
          </h1>
          <p className="text-black text-[18px] font-inter font-light leading-relaxed">
            Thank you for sharing your email with Vybe Coderz. We'll be in touch soon with exclusive updates and community news.
          </p>

          <div className="mt-10">
            <Link
              to="/"
              className="inline-block px-6 py-3 bg-vybecoderz-blue rounded-full text-black font-medium border border-black/20 hover:shadow-md transition"
            >
              Return Home
            </Link>
          </div>
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
        {/* Footer content same as your Contact page */}
        {/* You can copy-paste that section directly here or import a shared component */}
      </footer>
    </div>
  );
};

export default Confirmation;
