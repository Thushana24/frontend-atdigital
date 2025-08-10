import { Minus, Plus } from "lucide-react";
import React from "react";

const FAQS = () => {
  return (
    <section className="md:[w-896px] flex w-[334px] flex-col items-center justify-center gap-[28px] p-1 sm:w-[686px]">
      {/* title */}
      <h1 className="text-center text-[27px] font-semibold tracking-[0.4px] text-[var(--color-primary)]">
        Frequently asked questions
      </h1>
      {/* content */}
      <div className="flex w-full flex-col gap-[12px]">
        {/* first container */}
        <div className="flex flex-col gap-[13px] rounded-[7px] bg-[var(--color-accent)] p-[24px]">
          {/* title */}
          <div className="flex w-full justify-between gap-10 text-[var(--color-primary)] sm:items-center">
            <h3 className="text-[20px]">
              Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
            </h3>
            <Minus className="size-15 sm:size-5" />
          </div>
          <p className="text-[18px] text-[var(--color-text-light)]">
            Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id
            ipsum. Elementum ultrices nulla faucibus odio est sed aliquam.
            Sapien massa morbi risus sagittis tortor integer.
          </p>
        </div>
        {/* second container */}
        <div className="flex w-full justify-between gap-4 rounded-[7px] bg-[var(--color-accent)] p-[24px] text-[20px] text-[var(--color-text)] sm:items-center">
          <h3 className="text-[20px]">
            Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?
          </h3>
          <Plus className="size-15 sm:size-5" />
        </div>
        {/* third container */}
        <div className="flex w-full justify-between gap-3 rounded-[7px] bg-[var(--color-accent)] p-[24px] text-[var(--color-text)] sm:items-center">
          <h3 className="text-[20px]">
            Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?
          </h3>
          <Plus className="size-15 sm:size-5" />
        </div>
      </div>
    </section>
  );
};

export default FAQS;
