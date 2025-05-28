'use client';

import Link from 'next/link';
import LogoWhite from '@/assets/icons/logo-white.svg';
import Facebook from '@/assets/icons/social/facebook.svg';
import Instagram from '@/assets/icons/social/instagram.svg';
import Location from '@/assets/icons/social/location.svg';
import MailRed from '@/assets/icons/social/mail-red.svg';
import MailIcon from '@/assets/icons/social/mail.svg';
import Phone from '@/assets/icons/social/phone.svg';
import X from '@/assets/icons/social/x.svg';
import Button from '@/components/ui/button/button';
import MaxWidthWrapper from '@/components/utils/max-width-wrapper';

const navLinks = {
  services: [
    'Find Work',
    'Find Talent',
    'Communities',
    'Mentorship',
    'Refer a friend',
  ],
  about: ['Our team', 'Careers', 'Stores', 'Testimonials'],
};

const contactInfo = [
  { icon: <MailRed />, text: 'example@yahoo.com' },
  { icon: <Phone />, text: '123-587-2345' },
  { icon: <Location />, text: '6116 Willa River Suite 610' },
];

const socialLinks = [
  { icon: <Facebook className="text-dark-white" />, href: '#' },
  { icon: <Instagram className="text-dark-white" />, href: '#' },
  { icon: <X className="text-dark-white" />, href: '#' },
];

const legalLinks = [
  { label: 'Terms of Service', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Cookie Settings', href: '#' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 pt-20">
      <MaxWidthWrapper>
        <div className="bg-primary-100 p-12 rounded-[40px] flex justify-between items-end gap-8">
          <div className="max-w-[684px]">
            <h3 className="h3 text-dark-900 mb-4">
              Subscribe to Our Newsletter for Updates and Insights!
            </h3>
            <p className="h6-rg text-dark-700">
              Malesuada cursus nec tincidunt consectetur aenean velit. Pharetra
              orci volutpat donec sit diam pulvinar lobortis donec euismod.
            </p>
          </div>
          <form className="flex items-center gap-[10px] w-full max-w-[404px]">
            <div className="flex items-center bg-white px-4 py-3 w-full rounded-[8px] border-[1px] border-dark-200">
              <div className="w-5 mr-3">
                <MailIcon />
              </div>
              <input
                type="email"
                placeholder="Enter your Email"
                className="bg-transparent text-sm small-1-md text-dark-700 outline-none w-full"
              />
            </div>
            <Button className="max-w-[114px] w-full" size="lg">
              Subscribe
            </Button>
          </form>
        </div>

        <div className="mt-30">
          <div className="flex gap-[287px] mb-10">
            <div className="space-y-6 max-w-[323px] w-full shrink-0">
              <LogoWhite />
              <p className="small-1-rg text-dark-100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
              <div className="flex gap-4">
                {socialLinks.map(({ icon, href }, idx) => (
                  <Link
                    key={idx}
                    href={href}
                    className="w-8 h-8 flex items-center justify-center bg-dark-800 rounded-full hover:bg-primary"
                  >
                    {icon}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex gap-[180px]">
              <NavSection title="Services" items={navLinks.services} />
              <NavSection title="About Us" items={navLinks.about} />
              <ContactSection />
            </div>
          </div>

          <div className="py-8 text-dark-500 border-t-[1px] border-dark-800 flex items-center justify-between">
            <span>© 2024 All rights reserved.</span>
            <div className="flex gap-6">
              {legalLinks.map(({ label, href }, index) => (
                <Link
                  key={`${label}-${index}`}
                  href={href}
                  className="hover:underline text-dark-white"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

const NavSection = ({ title, items }: { title: string; items: string[] }) => (
  <div className="flex flex-col gap-[20px]">
    <h5 className="font-[600] text-[18px] leading-[150%] text-dark-white">
      {title}
    </h5>
    <ul className="space-y-2 text-gray-100 body-2-md">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

const ContactSection = () => (
  <div className="flex flex-col gap-[20px]">
    <h5 className="font-[600] text-[18px] leading-[150%] text-dark-white">
      Contact
    </h5>
    <ul className="space-y-3 text-gray-100 body-2-md">
      {contactInfo.map(({ icon, text }, i) => (
        <li key={i} className="flex items-center gap-3">
          {icon} {text}
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
