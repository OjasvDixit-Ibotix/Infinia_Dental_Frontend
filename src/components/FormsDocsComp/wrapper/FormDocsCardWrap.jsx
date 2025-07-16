import React from 'react'
import DownloadSvg from '../../../assets/svgs/WelcomePage/DownloadSvg'
import BlackIconWrapper from '../../BlackIconWrapper'
import DocumentIcon from '../../../assets/svgs/WelcomePage/DocumentIcon'
import CommonButtonWhiteBgTextYellow from '../../CommonButtonWhiteBgTextYellow'
import EyeIcon from '../../../assets/svgs/WelcomePage/EyeIcon'
import EyeIconYellow from '../../../assets/svgs/WelcomePage/EyeIconYellow'
import PrintYellowIcon from '../../../assets/svgs/WelcomePage/PrintYellowIcon'

const FormDocsCardWrap = () => {
  return (
    <div className="flex flex-col w-full items-start p-[1px] rounded-lg border border-[#F3F4F6] bg-white shadow-sm">
      <div className="flex p-4 sm:p-6 flex-col items-start gap-4 w-full">
        <div className="flex flex-col sm:flex-row justify-between w-full gap-3">
          <div className="flex items-start gap-3 flex-1">
            <BlackIconWrapper logo={<DocumentIcon />} />
            <div className="flex flex-col items-start gap-1 flex-1">
              <p className="text-[#1F2937] font-normal text-base leading-6 font-[Segoe UI Symbol]">
                Employee Certificate
              </p>
              <p className="text-[#444] text-sm sm:text-[13px] leading-5 sm:leading-6 font-[Segoe UI Symbol]">
                Official employment verification document
              </p>

              <div className="flex flex-wrap pt-1 items-start gap-1">
                {[0, 1].map((i) => (
                  <div
                    key={i}
                    className="flex py-1 px-2 rounded-full bg-[rgba(239,205,120,0.10)]"
                  >
                    <p className="text-[#EFCD78] text-xs font-normal leading-4 font-[Segoe UI Symbol]">
                      Certificate
                    </p>
                  </div>
                ))}
              </div>

              <p className="pt-1 text-[#6B7280] text-xs font-normal leading-4 font-[Segoe UI Symbol]">
                Certificate
              </p>
            </div>
          </div>

          <div className="flex h-fit py-1 px-2 rounded-md bg-[#444]">
            <p className="text-[#EFCD78] text-xs font-normal leading-4 font-[Segoe UI Symbol]">
              PDF
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 ">
          <CommonButtonWhiteBgTextYellow
            icon={<EyeIconYellow />}
            hovericon={<EyeIcon />}
            text={'View'}
          />

          <button className="flex h-9 px-3 justify-center items-center gap-2 rounded-md bg-[#EFCD78] w-auto">
            <div className="flex w-[24px] h-[16px] pr-2 items-center">
              <DownloadSvg />
            </div>
            <p className="text-[#444] text-center font-normal text-sm leading-5 font-[Segoe UI Symbol]">
              Download
            </p>
          </button>

          <CommonButtonWhiteBgTextYellow
            icon={<PrintYellowIcon />}
            hovericon={<EyeIcon />}
            text={'Print'}
          />
        </div>
      </div>
    </div>
  );
};

export default FormDocsCardWrap;
