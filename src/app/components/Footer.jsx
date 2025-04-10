import { FaFacebookF, FaTwitter, FaTiktok, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0537E7] border-t-1 text-white py-10 px-6 md:px-20">
      <div className="max-w-screen-xl mx-auto space-y-10">
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border border-blue-300 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 md:mb-0">Subscribe to our Newsletter</h2>
          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-4 py-2 w-full md:w-80 text-blue-700 rounded-l-md focus:outline-none"
            />
            <button className="bg-white text-blue-700 font-semibold px-6 py-2 rounded-r-md hover:bg-blue-100 transition">
              Subscribe
            </button>
          </div>
        </div>
 
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Social Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Let's keep in touch!</h3>
            <p className="mb-4 text-blue-100">
              Find us on any of these platforms, we respond within 1–2 business days.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<FaFacebookF />} />
              <SocialIcon icon={<FaTwitter />} />
              <SocialIcon icon={<FaTiktok />} />
              <SocialIcon icon={<FaLinkedinIn />} />
              <SocialIcon icon={<FaInstagram />} />
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">USEFUL LINKS</h4>
            <ul className="space-y-2 text-blue-100">
              <li><a href="#">Blog</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Verification</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Become Our Partner</a></li>
              <li><a href="#">Become An Ambassador</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-xl font-semibold mb-4">OUR COURSES</h4>
            <ul className="space-y-2 text-blue-100">
              <li><a href="#">SEO</a></li>
              <li><a href="#">Amazon</a></li>
              <li><a href="#">Spoken English</a></li>
              <li><a href="#">Digital Marketing</a></li>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Android Development</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-blue-300 pt-6 text-center text-blue-100">
          © 2025 Edify College of IT. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }) {
  return (
    <span className="bg-white text-blue-700 p-3 rounded-full hover:bg-blue-100 transition cursor-pointer text-lg">
      {icon}
    </span>
  );
}
