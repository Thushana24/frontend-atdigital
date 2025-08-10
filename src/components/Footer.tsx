import React from "react";

const Footer = () => {
  return (
    <footer className="bottom-0 z-50 flex max-h-[700px] w-full flex-col gap-10 bg-[var(--color-primary)] px-5 pt-10 pb-5 text-[var(--color-accent2)] md:px-10 lg:px-15 xl:px-20">
      {/* top container */}
      <div className="flex flex-col justify-between gap-[60px] lg:flex-row lg:gap-[112px]">
        {/* logo and title */}
        <div className="flex flex-col gap-[20px]">
          <div className="flex items-center gap-[14px]">
            <img
              src="/logo/logo.svg"
              alt="Company Logo"
              className="h-[43.75px] w-[44.02px] rounded-[1.41px]"
            />
            <img
              src="/logo/logo_text.svg"
              alt="Company Logo"
              className="h-[49.62px] w-[167.98px]"
            />
          </div>

          <p className="flex w-[335px] justify-start text-[16px] font-[400px] text-[var(--color-accent2)] sm:w-[413px]">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>
        {/* technology and services */}
        <div className="flex flex-col justify-between gap-[40px] sm:flex-row md:gap-[79px] lg:gap-[128px]">
          {/* technologies */}
          <div className="flex flex-col gap-[12px]">
            {/* title */}
            <h1 className="text-[21px] font-semibold">Our Technologies</h1>
            {/* technologies */}
            <div className="flex flex-col gap-[12px]">
              <p className="text-[14px] font-medium">React</p>
              <p className="text-[14px] font-medium">Gatsby</p>
              <p className="text-[14px] font-medium">NextJS</p>
              <p className="text-[14px] font-medium">NodeJS</p>
            </div>
          </div>
          {/* services */}
          <div className="flex flex-col gap-[12px]">
            {/* title */}
            <h1 className="text-[21px] font-semibold">Our Services</h1>
            {/* technologies */}
            <div className="flex flex-col gap-[12px]">
              <p className="text-[14px] font-medium">Social Media Marketing</p>
              <p className="text-[14px] font-medium">
                Web & Mobile App
                <br /> Development
              </p>
              <p className="text-[14px] font-medium">Data & Analytics</p>
            </div>
          </div>
        </div>
      </div>
      {/* bottom container */}
      <div className="flex flex-col items-center-safe justify-center gap-[8px] text-[var(--color-accent2)]">
        <div className="w-[335px] border-[1px] bg-[var(--color-accent2)] sm:w-[630px]"></div>
        <div className="flex items-center justify-center gap-[16px]">
          <p>Privacy Pollicy</p>
          <div className="h-[16px] border-[1px] bg-[var(--color-accent2)]"></div>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
