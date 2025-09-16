import React, { useState, useRef, useEffect, useCallback } from 'react';
import axios from 'axios';
import HeaderFormDocs from '../../components/FormsDocsComp/HeaderFormDocs';
import TabListFormDocs from '../../components/FormsDocsComp/TabListFormDocs';
import FormDocsCardWrap from '../../components/FormsDocsComp/wrapper/FormDocsCardWrap';
import { toast } from 'sonner';
import { useSelector } from 'react-redux';
import apiClient from '../../utils/api/api';

const TABS_CONFIG = [
  { label: 'HR Forms', fileType: 'HR_form' },
  { label: 'Tax Forms', fileType: 'TAX_form' },
  { label: 'Product Related', fileType: 'product_list' },
];

const parseFileTypeToTag = (fileTypeStr) => {
  if (!fileTypeStr) return 'General';
  const typePart = fileTypeStr.split('.')[1] || '';
  return typePart.split('_')[0];
};

const FileUploader = ({
  activeTab,
  selectedFile,
  uploadLoading,
  uploadMessage,
  fileInputRef,
  onFileChange,
  onSelectFileClick,
  onUpload,
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full mt-6 p-10 border-2 border-dashed border-[#EFCD78] rounded-lg bg-[rgba(239,205,120,0.05)]">
      <p className="text-center text-gray-600 font-semibold text-lg">
        Upload a new document to {activeTab}
      </p>
      <input
        type="file"
        ref={fileInputRef}
        onChange={onFileChange}
        className="hidden"
      />
      <p className="text-sm text-gray-600 h-5">{uploadMessage}</p>
      {!selectedFile ? (
        <button
          onClick={onSelectFileClick}
          className="flex items-center px-4 py-2 bg-gray-200 text-[#444] rounded-md font-medium hover:bg-gray-300 transition"
        >
          Select File
        </button>
      ) : (
        <button
          onClick={onUpload}
          disabled={uploadLoading}
          className="flex items-center px-4 py-2 bg-[#EFCD78] text-[#444] rounded-md font-medium hover:bg-[#e3c267] transition disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {uploadLoading ? 'Uploading...' : 'Upload Now'}
        </button>
      )}
    </div>
  );
};

const EmpFormsDocsPage = () => {
  // All state and refs remain the same
  const [forms, setForms] = useState([]);
  const [activeTab, setActiveTab] = useState(TABS_CONFIG[0].label);
  const [isFetching, setIsFetching] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState('Select a file to upload');
  const fileInputRef = useRef(null);

  const {user} = useSelector((state) => state.auth)
 console.log('oijioef', user);


const handleDelete = async (id) => {
  try {
   const res=  await apiClient.delete(`/delete/${id}`);
    toast.success(res.data.message);
    setForms((prev) => prev.filter((form) => form.id !== id));
  } catch (error) {
    toast.error('File delete failed!');
    // console.error('Delete error:', error);
  }
};

  const fetchForms = useCallback(async () => {
    setIsFetching(true);
    setFetchError(null);
    try {
      const response = await apiClient.get('/list');
      console.log('response_file', response);
      
      const currentTabConfig = TABS_CONFIG.find(
        (tab) => tab.label === activeTab
      );
      const filteredData = response.data.filter(
        (item) => item.file_type === `FileType.${currentTabConfig.fileType}`
      );
      
      const transformedData = filteredData.map((item) => ({
        id: item.id,
        title: item.file_name,
        description: `Uploaded on: ${new Date(
          item.create_time
        ).toLocaleString()}`,
        tags: [parseFileTypeToTag(item.file_type)],
        fileType: item.file_name.split('.').pop().toUpperCase(),
        url: `http://54.84.66.89:8000/download/${item.id}`,
      }));
      setForms(transformedData);
    } catch (err) {
      console.error('Failed to fetch forms:', err);
      toast.error('Could not load documents.');
      setFetchError('Could not load documents. Please try again later.');
      setForms([]);
    } finally {
      setIsFetching(false);
    }
  }, [activeTab]);

  useEffect(() => {
    fetchForms();
  }, [fetchForms]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setUploadMessage(`Selected: ${file.name}`);
    }
  };

  const handleSelectFileClick = () => {
    fileInputRef.current.click();
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.warning('Please select a file first.');
      return;
    }
    setUploadLoading(true);
    setUploadMessage('Uploading...');
    const currentTab = TABS_CONFIG.find((tab) => tab.label === activeTab);
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('file_type', currentTab.fileType);
    try {
   const res=    await apiClient.post('/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
      
    );
      console.log('file', res);


      toast.success('File Upload successful!');
      setSelectedFile(null);
      setUploadMessage('Select a file to upload');
      fetchForms();
    } catch (error) {
      toast.error('File Upload failed!');
      if(error.response && error.response.status === 500){
      toast.error('Server Error!');


      }
      setUploadMessage('❌ Upload failed.');
      console.error('Error uploading file:', error);
    } finally {
      setUploadLoading(false);
    }
  };

  const renderDocumentList = () => {
    if (isFetching) {
      return <div className="text-center p-10">Loading documents...</div>;
    }
    if (fetchError) {
      return <div className="text-center p-10 text-red-500">{fetchError}</div>;
    }
    if (forms.length > 0) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 w-full">
          {forms.map((form) => (
            <FormDocsCardWrap onDelete= {handleDelete} key={form.id} data={form} />
          ))}
        </div>
      );
    }
    return (
      <p className="text-center text-gray-500 py-4">
        No documents found for {activeTab}.
      </p>
    );
  };

  return (
    <div className="flex flex-col gap-6 md:gap-10 w-full">
      <HeaderFormDocs />
      <div className="flex flex-col gap-4 md:gap-6">
        <TabListFormDocs
          tabs={TABS_CONFIG}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          formsCount={forms.length}
        />

        {renderDocumentList()}

        {
          user?.user_type.toLowerCase() === 'admin' && (

             <FileUploader
          activeTab={activeTab}
          selectedFile={selectedFile}
          uploadLoading={uploadLoading}
          uploadMessage={uploadMessage}
          fileInputRef={fileInputRef}
          onFileChange={handleFileChange}
          onSelectFileClick={handleSelectFileClick}
          onUpload={handleUpload}
        />

          )
        }
        
       
      </div>
    </div>
  );
};

export default EmpFormsDocsPage;