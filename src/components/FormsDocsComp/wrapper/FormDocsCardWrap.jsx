import React from 'react';
import DownloadSvg from '../../../assets/svgs/WelcomePage/DownloadSvg';
import BlackIconWrapper from '../../BlackIconWrapper';
import DocumentIcon from '../../../assets/svgs/WelcomePage/DocumentIcon';
import CommonButtonWhiteBgTextYellow from '../../CommonButtonWhiteBgTextYellow';
import EyeIcon from '../../../assets/svgs/WelcomePage/EyeIcon';
import EyeIconYellow from '../../../assets/svgs/WelcomePage/EyeIconYellow';
import PrintYellowIcon from '../../../assets/svgs/WelcomePage/PrintYellowIcon';
import { Delete } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';
import { useSelector } from 'react-redux';

const FormDocsCardWrap = ({ data , onDelete}) => {
  console.log('dataerw',data);
  
  const { 
    title = 'Untitled Document', 
    description = 'No date available.', 
    tags = [], 
    fileType = 'File',
    file_name = '',
    id
  } = data;

  const handleAction = (actionUrl) => {
    // This simple handler opens the file URL in a new tab.
    // The download/print logic can be more complex if needed.
    window.open(actionUrl, '_blank');
  };


  
  const {user}= useSelector(state =>state.auth);

  return (
    <div className="flex flex-col w-full items-start p-[1px] rounded-lg border border-[#F3F4F6] bg-white shadow-sm">
      <div className="flex p-1 sm:p-4 flex-col items-start gap-3 w-full">
        <div className="flex flex-col sm:flex-row justify-between w-full gap-2">
          <div className="flex items-start gap-3 flex-1">
            <BlackIconWrapper logo={<DocumentIcon />} />
            <div className="flex flex-col items-start gap-1 flex-1">
              
              <p className="text-[#1F2937] font-normal text-base leading-6 font-[Segoe UI Symbol] break-all">
                {title.split('.').slice(0, -1).join('.')}
              </p>
              <p className="pt-1 text-[#6B7280] text-xs font-normal leading-4 font-[Segoe UI Symbol]">
                {description}
              </p>
              <div className="flex flex-wrap pt-1 items-start gap-1">
                {tags.map((tag, i) => (
                  <div key={i} className="flex py-1 px-2 rounded-full bg-[rgba(239,205,120,0.10)]">
                    <p className="text-[#EFCD78] text-xs font-normal leading-4 font-[Segoe UI Symbol]">
                      {tag}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <div className="flex h-fit py-1 px-2 rounded-md bg-[#444]">
            <p className="text-[#EFCD78] text-xs font-normal leading-4 font-[Segoe UI Symbol]">
              {fileType}
            </p>
          </div> */}
        </div>
        <div className="w-full flex flex-wrap  gap-2 px-1">
          <CommonButtonWhiteBgTextYellow 
            onClick={() => handleAction(url)}
            icon={<EyeIconYellow />}
            hovericon={<EyeIcon />}
            text={'View'}
          />
          <button onClick={() => handleAction(file_name)} className="cursor-pointer flex h-9 px-2 justify-center items-center  rounded-md bg-[#EFCD78] w-auto">
            <div className="flex w-[27px] h-[16px]  items-center">
              <DownloadSvg />
            </div>
            <p className="text-[#444] text-center font-normal text-sm leading-5 font-[Segoe UI Symbol]">
              Download
            </p>
          </button>
          {
            user?.user_type.toLowerCase() === 'admin' &&
            
          <div

            onClick={() => onDelete(id)}>
          <CommonButtonWhiteBgTextYellow
            icon={<Delete />}
            hovericon={<Delete />}
            text={'Delete'}
            />
            
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default FormDocsCardWrap;