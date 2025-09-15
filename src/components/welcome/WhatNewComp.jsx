import React from "react";
import { Link } from "react-router-dom";
import homeOffice from "../../assets/svgs/WelcomePage/home-office.svg";
import newproduct from "../../assets/svgs/WelcomePage/new-product-training.svg";
import teamlunch from "../../assets/svgs/WelcomePage/team-lunch-learn.svg";

const cards = [
  {
    title: "Latest Events",
    description: "Show off your workspace! Submit photos by March 15th.",
    image: homeOffice,
    badge: "Contest",
    linkto: "https://infiniadental.com/our-events/",
    external: true,
  },
  {
    title: "Product Promotions",
    description: "Learn about our latest dental technology innovations.",
    image: newproduct,
    badge: "Training",
    linkto: "https://infiniadental.com/one-stop-resource-for-new-infinia-dental-lab-clients/",
    external:true
  },
 
];

const WhatNewComp = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <h2 className="text-2xl mb-6 text-[#444] font-semibold tracking-tight">
        What’s New?
      </h2>
      <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 gap-6">
        {cards.map((card, idx) => {
          const CardWrapper = card.external ? "a" : Link;
          const props = card.external
            ? { href: card.linkto, target: "_blank", rel: "noopener noreferrer" }
            : { to: card.linkto };

          return (
            <CardWrapper
              key={idx}
              {...props}
              className="block rounded-lg overflow-hidden shadow-sm border border-gray-200 bg-white hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="relative">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-48 object-cover"
                  loading="lazy" 
                  />
                <span className="absolute top-2 left-2 bg-[#403930] text-white text-xs px-2 py-[2px] rounded-full">
                  {card.badge}
                </span>
              </div>
              <div className="p-4">
                <p className="text-base font-medium mb-1">{card.title}</p>
                <p className="text-sm text-[#6B7280]">{card.description}</p>
              </div>
            </CardWrapper>
          );
        })}
      </div>
    </div>
  );
};

export default WhatNewComp;
