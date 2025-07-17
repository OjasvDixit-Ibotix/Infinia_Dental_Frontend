import React from 'react'
import HeaderFormDocs from '../../components/FormsDocsComp/HeaderFormDocs'
import TabListFormDocs from '../../components/FormsDocsComp/TabListFormDocs'
import FormDocsCardWrap from '../../components/FormsDocsComp/wrapper/FormDocsCardWrap'

const EmpFormsDocsPage = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-10 w-full">
      <HeaderFormDocs />
      <div className="flex flex-col gap-4 md:gap-6">
        <TabListFormDocs />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 w-full">
          <FormDocsCardWrap />
          <FormDocsCardWrap />
          <FormDocsCardWrap />
        </div>
      </div>
    </div>
  );
};

export default EmpFormsDocsPage;
