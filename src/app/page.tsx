import Button from "@/components/Button";
import FAQS from "@/components/FAQS";
import Footer from "@/components/Footer";
import TopNavigation from "@/components/TopNavigation";

const HomePage = () => (
  <div className="h-dvh max-w-screen overflow-x-hidden">
    <TopNavigation />
    <main className="flex flex-col items-center justify-center overflow-hidden">
      {/* image  */}
      <div className="flex w-full flex-col md:relative">
        <img
          src="/images/home.jpg"
          alt="Home Image"
          className="w-full object-cover"
        />

        {/* Gradient background container only around text */}
        <div className="w-full gap-[20px] bg-gradient-to-r from-[#4DCA79] to-[#1CBDDD] px-[40px] py-[24px] pb-[32px] text-[var(--color-accent2)] md:absolute md:bottom-20 md:left-10 md:max-w-[622px]">
          <h1 className="text-[48px] leading-tight font-bold drop-shadow-lg">
            We Crush Your Competitors, Goals, And Sales Records - Without The
            B.S.
          </h1>
          <Button>Get free consultation</Button>
        </div>
      </div>
      {/* body */}

      <div className="flex w-full flex-col items-center justify-center gap-20 px-5 py-20 sm:px-10 md:px-[152px]">
        {/* first container */}
        <div className="flex max-w-[1064px] min-w-[335px] flex-col items-center justify-between gap-5 sm:flex-row xl:gap-[108px]">
          {/* image */}
          <div className="max-w-[414px] min-w-[275px]">
            <img
              src="/images/image1.png"
              alt="Computer Logo"
              className="w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-[20px]">
            <h3 className="text-[27px] font-semibold text-[var(--color-primary)]">
              Web & Mobile Development
            </h3>
            <p className="max-w-[542px] text-[16px]">
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online
            </p>
            <Button>LEARN MORE</Button>
          </div>
        </div>
        {/* second container */}
        <div className="flex max-w-[1064px] min-w-[335px] flex-col items-center justify-between gap-5 sm:flex-row xl:gap-[108px]">
          {/* content */}
          <div className="flex max-w-[542px] flex-col gap-[20px]">
            <h3 className="text-[27px] font-semibold text-[var(--color-primary)]">
              Digital Strategy Consulting
            </h3>
            <p className="text-[16px]">
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </p>
            <Button>LEARN MORE</Button>
          </div>
          {/* image */}
          <div className="max-w-[414px] min-w-[275px]">
            <img
              src="/images/image2.png"
              alt="Computer Logo"
              className="w-full object-cover"
            />
          </div>
        </div>
        {/* third container - FAQS */}
        <FAQS />
      </div>
    </main>
    <Footer />
  </div>
);

export default HomePage;
