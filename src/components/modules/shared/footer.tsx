'use client';

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
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import EngagingBanner from '../landing/engaging-banner';
import Accordion from '@/components/ui/accordion';

const contactInfo = [
  {
    icon: <MailRed className="scale-80 sm:scale-100" />,
    text: 'example@yahoo.com',
  },
  { icon: <Phone className="scale-80 sm:scale-100" />, text: '123-587-2345' },
  {
    icon: <Location className="scale-80 sm:scale-100" />,
    text: '6116 Willa River Suite 610',
  },
];

const socialLinks = [
  { icon: <Facebook className="text-dark-white" />, href: '#' },
  { icon: <Instagram className="text-dark-white" />, href: '#' },
  { icon: <X className="text-dark-white" />, href: '#' },
];

const legalLinks = [
  { key: 'terms', href: '#' },
  { key: 'privacy', href: '#' },
  { key: 'cookies', href: '#' },
];

const Footer: React.FC = () => {
  const t = useTranslations('landing.footer');
  const tMotivation = useTranslations('landing.motivation');

  return (
    <footer className="bg-dark-900 pt-8 sm:pt-10 lg:pt-20">
      <MaxWidthWrapper>
        <EngagingBanner
          heading={t('subscribeHeading')}
          subheading={t('subscribeSubtext')}
          actionElement={
            <>
              <form className="hidden lg:flex items-center gap-[10px] w-full max-w-[404px]">
                <div className="flex items-center bg-white px-4 py-3 w-full rounded-[8px] border-[1px] border-dark-200">
                  <div className="w-5 mr-3">
                    <MailIcon />
                  </div>
                  <input
                    type="email"
                    placeholder={t('emailPlaceholder')}
                    className="bg-transparent text-sm small-1-md text-dark-700 outline-none w-full"
                  />
                </div>
                <Button className="max-w-[114px] w-full" size="lg">
                  {t('subscribeButton')}
                </Button>
              </form>
              <Button size="md" className="lg:hidden w-full lg:w-auto">
                {tMotivation('getStarted')}
              </Button>
            </>
          }
          swiggleClassName="block lg:hidden 2xl:block"
        />

        <div className="mt-8 sm:mt-12 lg:mt-30">
          <div className="flex flex-col lg:flex-row gap-[32px] lg:gap-[80px] 2xl:gap-[287px] mb-10">
            <div className="space-y-6 lg:max-w-[323px] w-full shrink-0">
              <LogoWhite />
              <p className="font-normal text-[12px] sm:text-[14px] leading-[150%] text-dark-100">
                {t('description')}
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

            <div className="flex flex-col lg:flex-row gap-[24px] lg:gap-[80px] 2xl:gap-[180px]">
              <NavSection
                title={t('sections.services.title')}
                items={t.raw('sections.services.items')}
              />
              <NavSection
                title={t('sections.about.title')}
                items={t.raw('sections.about.items')}
              />
              <ContactSection title={t('sections.contact')} />
            </div>
          </div>

          <div className="hidden py-8 text-dark-500 border-t-[1px] border-dark-800 lg:flex items-center justify-between">
            <span>{t('legal.copyright')}</span>
            <div className="flex gap-6">
              {legalLinks.map(({ key, href }) => (
                <Link
                  key={key}
                  href={href}
                  className="hover:underline text-dark-white"
                >
                  {t(`legal.${key}`)}
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
  <>
    <div className="hidden lg:flex flex-col gap-[20px]">
      <h5 className="font-[600] text-[18px] leading-[150%] text-dark-white">
        {title}
      </h5>
      <ul className="space-y-2 text-gray-100 body-2-md">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>

    <Accordion
      className="lg:hidden"
      itemClassName="border-none"
      triggerClassName="p-0 bg-transparent hover:bg-transparent text-dark-white radix-state-open:bg-transparent radix-state-open:text-dark-white font-[600]"
      contentClassName="p-0 pt-3"
      items={[
        {
          title,
          content: (
            <ul className="space-y-2 text-gray-100 body-2-md">
              {items.map((item) => (
                <li
                  className="font-[500] text-[13px] leading-[150%]"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          ),
          value: title,
        },
      ]}
    />
  </>
);

const ContactSection = ({ title }: { title: string }) => (
  <div className="flex flex-col gap-[12px] sm:gap-[20px]">
    <h5 className="font-[600] text-[16px] lg:text-[18px] leading-[150%] text-dark-white">
      {title}
    </h5>
    <ul className="space-y-3 text-gray-100 body-2-md">
      {contactInfo.map(({ icon, text }, i) => (
        <li
          key={i}
          className="flex items-center gap-3 text-[14px] sm:text-[16px]"
        >
          {icon} {text}
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
