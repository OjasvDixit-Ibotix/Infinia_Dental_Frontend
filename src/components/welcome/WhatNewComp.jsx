import React from 'react';
import homeOffice from '../../assets/svgs/WelcomePage/home-office.svg'
import newproduct from '../../assets/svgs/WelcomePage/new-product-training.svg'

import teamlunch from '../../assets/svgs/WelcomePage/team-lunch-learn.svg'

const cards = [
  {
    title: "Home Office Decorating Contest",
    description: "Show off your workspace! Submit photos by March 15th.",
    image: homeOffice,
    badge: "Contest",
  },
  {
    title: "New Product Training",
    description: "Learn about our latest dental technology innovations.",
    image: newproduct,
    badge: "Training",
  },
  {
    title: "Team Lunch & Learn",
    description: "Join us for catered lunch and professional development.",
    image: teamlunch,
    badge: "Event",
  },
];

const WhatNewComp = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <h2 className="text-xl mb-6 text-[#444] font-normal text-[24px] leading-[24px] tracking-[-0.6px] font-[Segoe UI Symbol]">What’s New?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <div key={idx} className="rounded-lg overflow-hidden shadow-sm border border-gray-200 bg-white">
            <div className="relative">
              <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
              <span className="absolute top-2 left-2 bg-[#403930] text-white text-[12px] px-2 py-[2px] rounded-full">
                {card.badge}
              </span>
            </div>
            <div className="p-4">
              <p className="text-[16px] font-medium mb-1">{card.title}</p>
              <p className="text-[14px] text-[#6B7280]">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatNewComp;
