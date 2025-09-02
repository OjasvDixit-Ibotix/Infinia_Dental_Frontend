import React, { useState } from "react";
import PolicyContentRenderer from "./wrapper/PolicyContentRenderer";
import { paymentpolicydata } from "./data/paymentpolicydata";
import { AllOnXProductPolicyData } from "./data/AllOnXProductPolicyData";
import { ChairsideServiceReviewsPolicyData } from "./data/ChairsideServiceReviewsPolicyData";
import { InfiniaPrescriptionGuidelinesData } from "./data/InfiniaPrescriptionGuidelinesData";
import LabPolicySectionWrap from "./wrapper/LabPolicySectionWrap";
import { pickupDeliveryData } from "./data/pickupDeliveryData";
import { rebateProgramData } from "./data/rebateProgramData";
import { RecommendationsHelpfulTipsData } from "./data/RecommendationsHelpfulTipsData";
import { remakePolicyData } from "./data/remakePolicyData";
import { removableProductsData } from "./data/removableProductsData";
import { rushChargesData } from "./data/rushChargesData";
import { standardTurnaroundTimesData } from "./data/standardTurnaroundTimesData";
import { turnaroundPolicyData } from "./data/turnaroundPolicyData";
import { warrantyData } from "./data/warrantyData";
import { usePagination } from "../../../utils/customHooks/usePagination";
import PaginationControls from "../../PaginationControls";

const ITEMS_PER_PAGE = 7;

const LabPolicySectionsComp = () => {
  const [openSection, setOpenSection] = useState(null);

  const handleToggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const policies = [
    paymentpolicydata,
    AllOnXProductPolicyData,
    ChairsideServiceReviewsPolicyData,
    InfiniaPrescriptionGuidelinesData,
    pickupDeliveryData,
    rebateProgramData,
    RecommendationsHelpfulTipsData,
    remakePolicyData,
    removableProductsData,
    rushChargesData,
    standardTurnaroundTimesData,
    turnaroundPolicyData,
    warrantyData,
  ];

  // Define color pairs for categories { text, bg }
  const categoryColors = [
    { text: '#1E40AF', bg: '#DBEAFE' }, // Blue
    { text: '#166534', bg: '#DCFCE7' }, // Green
    { text: '#92400E', bg: '#FEF3C7' }, // Amber
    { text: '#0E7490', bg: '#E0F2FE' }, // Cyan
    { text: '#9D174D', bg: '#FCE7F3' }, // Pink
    { text: '#5B21B6', bg: '#EDE9FE' }, // Violet
    { text: '#C2410C', bg: '#FFF7ED' }, // Orange
  ];

  const {
    paginatedData,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
  } = usePagination(policies, ITEMS_PER_PAGE);

  return (
    <div className="w-full flex h-fit flex-col p-6 items-start gap-6 rounded-2xl bg-white/80 shadow-md backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-center gap-[10px] self-stretch">
        <h3 className="text-[#020817] font-normal text-[24px] leading-[24px] tracking-[-0.6px] font-['Segoe_UI_Symbol']">
          Policy Documents
        </h3>
      </div>

      {/* Sections */}
      <div className="flex flex-col items-start gap-[8px] self-stretch">
        {paginatedData.map((policy, index) => (
          <LabPolicySectionWrap
            key={index}
            title={policy?.title}
            category={policy?.category}
            updatedOn={policy?.updatedOn}
            isOpen={openSection === index}
            onToggle={() => handleToggle(index)}
            categoryColor={categoryColors[index % categoryColors.length]} // Pass the color object
          >
            <PolicyContentRenderer content={policy?.content} />
          </LabPolicySectionWrap>
        ))}
      </div>
      <div className="flex place-items-center justify-center w-full">
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          nextPage={nextPage}
          prevPage={prevPage}
          goToPage={goToPage}
        />
      </div>
    </div>
  );
};

export default LabPolicySectionsComp;