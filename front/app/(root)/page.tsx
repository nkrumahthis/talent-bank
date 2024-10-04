import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = { firstName: "Emmanuel" };
  return (
    <section className="home">
      <div className="home-content">
        <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || "Guest"}
          subtext="Access and manage your accounts and transactions efficiently."
        />

        <TotalBalanceBox
          accounts={[]}
          totalBanks={3}
          totalCurrentBalance={16656.62}
        />
      </div>
    </section>
  );
};

export default Home;
