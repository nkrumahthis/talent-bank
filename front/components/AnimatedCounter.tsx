"use client";

import CountUp from "react-countup";

interface AnimatedCounterProps {
  amount: number;
}

const AnimatedCounter = ({ amount }: AnimatedCounterProps) => {
  return (
    <div className="w-full">
      <CountUp
        decimal="."
        prefix="GH¢"
        end={amount}
        duration={1}
        decimals={2}
      />
    </div>
  );
};

export default AnimatedCounter;
