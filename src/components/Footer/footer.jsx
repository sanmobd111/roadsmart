import Image from "next/image";
import React from "react";
import Link from "next/link";
import BrandLogo from "@/assets/images/logo.png";
import FacebookLogo from "@/assets/images/Facebook.png";
import instagramLogo from "@/assets/images/Instagram.png";
import Twiter from "@/assets/images/Twiter.png";
import youtube from "@/assets/images/youtube.png";

const Footer = () => {
  return (
    <footer className="footer bg-[#F9F7F7] relative z-[9]">
      {/* Top Logo + Social (Always centered) */}
      <div className="py-10 px-4 md:px-6">
        <div className="max-w-[1600px] mx-auto flex flex-col items-center text-center">
          <Image src={BrandLogo} alt="Brand Logo" className="h-12 w-auto lg:hidden" />
          <div className="flex gap-4 pt-4 justify-center lg:hidden">
            {[FacebookLogo, instagramLogo, Twiter, youtube].map((icon, idx) => (
              <Link href="#" key={idx}>
                <Image src={icon} alt="social" className="w-6 h-6 object-contain" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive Grid */}
      <div className="py-10 px-4 md:px-6">
        {/* Mobile & Tablet View */}
        <div className="block lg:hidden max-w-[1600px] mx-auto grid grid-cols-2 gap-8 text-center sm:text-left sm:grid-cols-2">
          {/* Left Column */}
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-gray-700 mb-6">
              <li><Link href="#">Parts</Link></li>
              <li><Link href="#">Accessories</Link></li>
            </ul>

            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><Link href="#">About us</Link></li>
              <li><Link href="#">Policy</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Press</Link></li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="text-right">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-700 mb-6">
              <li><Link href="#">Repairs</Link></li>
              <li><Link href="#">Insurance</Link></li>
              <li><Link href="#">Compliance</Link></li>
              <li><Link href="#">Security</Link></li>
              <li><Link href="#">Finance</Link></li>
              <li><Link href="#">Hiring</Link></li>
            </ul>

            <h3 className="text-lg font-semibold mb-4">Service Providers</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><Link href="#">Our products</Link></li>
              <li><Link href="#">Join us</Link></li>
            </ul>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <div className="max-w-[1600px] mx-auto grid grid-cols-2 gap-3 md:grid-cols-5">
            <div className="md:pt-[4.5rem]">
              <Image quality={100} src={BrandLogo} alt="Brand Logo" className="h-auto w-[80%]" />
              <div className="flex gap-8 pt-4">
                <Link href="#"><Image src={FacebookLogo} alt="facebook" /></Link>
                <Link href="#"><Image src={instagramLogo} alt="instagram" /></Link>
                <Link href="#"><Image src={Twiter} alt="twitter" /></Link>
                <Link href="#"><Image src={youtube} alt="youtube" /></Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-2xl pb-10">Shop</h3>
              <ul>
                <li><Link href="#">Parts</Link></li>
                <li><Link href="#">Accessories</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-2xl pb-10">Service</h3>
              <ul>
                <li><Link href="#">Repairs</Link></li>
                <li><Link href="#">Insurance</Link></li>
                <li><Link href="#">Compliance</Link></li>
                <li><Link href="#">Security</Link></li>
                <li><Link href="#">Finance</Link></li>
                <li><Link href="#">Hiring</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-2xl pb-10">Company</h3>
              <ul>
                <li><Link href="#">About us</Link></li>
                <li><Link href="#">Policy</Link></li>
                <li><Link href="#">Blog</Link></li>
                <li><Link href="#">Press</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-2xl pb-10">Service Providers</h3>
              <ul>
                <li><Link href="#">Our products</Link></li>
                <li><Link href="#">Join us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#CA2026] py-5">
        <div className="max-w-[1600px] mx-auto px-4 md:px-6 text-white text-center text-sm flex flex-col items-center gap-3">
          <p>Roadsmart © 2022 Roadsmart. All rights reserved.</p>
          <ul className="flex flex-wrap justify-center gap-6">
            <li><Link href="#">Privacy</Link></li>
            <li><Link href="#">Terms</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
