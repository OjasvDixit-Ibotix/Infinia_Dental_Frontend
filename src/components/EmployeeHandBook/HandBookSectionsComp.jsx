import React from "react";
import EmployehandBookYellow from "../../assets/svgs/WelcomePage/EmployehandBookYellow";
import HandBookSectionWrap from "./wrapper/HandBookSectionWrap";

import introductionData from "./data/introdunction.json";
import employmentData from "./data/employment.json";
import conductandBehaviourData from './data/conduct_and_behavior.json';
import compesationData from './data/compensation.json';
import benefitsData from './data/benefits.json';
import healthsecuityData from './data/health_safety_and_security.json';
import worklaceData from './data/workplace_guidelines.json'
import empSeperationData from './data/employment_separation.json'
import empHandAcknoData from './data/employee_handbook_acknowledgement.json'
// import { be } from "zod/v4/locales";
import PaginationControls from "../PaginationControls";
import { usePagination } from "../../utils/customHooks/usePagination";
const HandBookSectionsComp = () => {

  const ITEMS_PER_PAGE = 6;

  const categoryColors = [
    { text: '#1E40AF', bg: '#DBEAFE' }, // Blue
    { text: '#166534', bg: '#DCFCE7' }, // Green
    { text: '#92400E', bg: '#FEF3C7' }, // Amber
    { text: '#0E7490', bg: '#E0F2FE' }, // Cyan
    { text: '#9D174D', bg: '#FCE7F3' }, // Pink
    { text: '#5B21B6', bg: '#EDE9FE' }, // Violet
    { text: '#C2410C', bg: '#FFF7ED' }, // Orange
  ];
  const sections = [
    { ...introductionData.introduction, category: "General", updatedOn: "Dec 15, 2024" },
    { ...employmentData.employment, category: "HR", updatedOn: "Dec 20, 2024" },
    { ...conductandBehaviourData.conduct_and_behavior, category: "HR", updatedOn: "Dec 20, 2024" },
    {...compesationData.compensation, category: "Finance", updatedOn: "Jan 5, 2024" },
    {...benefitsData.benefits, category: "Benefits", updatedOn: "Jan 10, 2024" },
    {...healthsecuityData.health_safety_and_security, category: "Safety", updatedOn: "Jan 15, 2024" },
    {...worklaceData.workplace_guidelines, category: "General", updatedOn: "Jan 20, 2024" },
    {...empSeperationData.employment_separation, category: "HR", updatedOn: "Feb 1, 2024" },
    {...empHandAcknoData.employee_handbook_acknowledgement, category: "General", updatedOn: "Feb 5, 2024" },
  ];
  const {
    paginatedData,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
    } = usePagination(sections, ITEMS_PER_PAGE);

  return (
    <div className="w-full h-full  flex flex-col p-6 items-start gap-6 rounded-2xl bg-white/80 shadow-md backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-center gap-[10px] self-stretch">
        <div className="p-[10px] gap-[10px] flex items-center justify-center bg-[#444] rounded-md">
          <EmployehandBookYellow />
        </div>
        <h3 className="text-[#020817] font-normal text-[24px] leading-[24px] tracking-[-0.6px] font-[Segoe_UI_Symbol]">
          Handbook Sections
        </h3>
        <div className="flex flex-col items-end flex-1 min-w-[74.69px] ">
          <div className="flex items-center px-[11px] py-[3px] rounded-full bg-[#F1F5F9] ">
            <p className="text-[#444] font-[400] text-[12px] leading-[16px] tracking-[-0.6px] font-[Segoe UI Symbol]">
              {sections.length} sections
            </p>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="flex flex-col items-start gap-[8px] self-stretch">
        {paginatedData.map((section, index) => (
          <HandBookSectionWrap
            key={index}
            title={section.title.charAt(0).toUpperCase() + section.title.toLowerCase().slice(1)}
            category={section.category}
            updatedOn={section.updatedOn}
            content={section}
            color={categoryColors[index % categoryColors.length]}
          />
        ))}
        <div className="flex items-center justify-center w-full">

         <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          nextPage={nextPage}
          prevPage={prevPage}
          goToPage={goToPage}
          />
          </div>
      </div>
    </div>
  );
};

export default HandBookSectionsComp;
