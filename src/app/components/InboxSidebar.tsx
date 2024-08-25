import React from 'react';
import { CiMail } from 'react-icons/ci';
import { IoMdPaperPlane } from 'react-icons/io';
import { RiMailOpenLine } from 'react-icons/ri';

interface LeadDetailsProps {
  label: string;
  value: string;
}

const LeadDetailRow: React.FC<LeadDetailsProps> = ({ label, value }) => (
  <div className="flex justify-between">
    <p className="text-md text-[#7D8A96] dark:text-[#DFDFDF]">{label}</p>
    <p className="dark:text-[#B9B9B9]">{value}</p>
  </div>
);

const CampaignStep: React.FC<{
  step: string;
  date: string;
  icon: React.ReactNode;
}> = ({ step, date, icon }) => (
  <div className="flex space-y-5 gap-x-10 rounded-lg">
    <div  className='flex flex-col items-center'>
      <div className='relative flex items-center'>
    <CiMail className="size-10 p-2 mt-6 bg-[#EEF1F4] dark:bg-[#23272C] text-[#637381] dark:text-[#BFBFBF] rounded-full" />
      </div>
      {/* <div className='absolute top-full h-10 w-0.5 bg-[#212C31]'/> */}
    </div>
    <div className="">
      <p>{step}</p>
      <p className="flex text-[#707781] items-center gap-2">
        {icon}
        {date}
      </p>
    </div>
  </div>
);

const InboxSidebar: React.FC = () => {
  const leadDetails = [
    { label: 'Name', value: 'Orlando' },
    { label: 'Contact No', value: '+54-90627869' },
    { label: 'Email ID', value: 'orlando@gmail.com' },
    { label: 'LinkedIn', value: 'linkedin.com/in/timvadde' },
    { label: 'Company Name', value: 'ReachInbox' },
  ];

  const campaignSteps = [
    {
      step: 'Step 1: Email',
      date: 'Sent 3rd, Feb',
      icon: <IoMdPaperPlane className="text-[#697886]" />,
    },
    {
      step: 'Step 2: Email',
      date: 'Opened 5th, Feb',
      icon: <RiMailOpenLine className="text-[#EEC840]" />,
    },
    {
      step: 'Step 3: Email',
      date: 'Opened 5th, Feb',
      icon: <RiMailOpenLine className="text-[#EEC840]" />,
    },
  ];

  return (
    <div className="">
      <div className="p-3 mt-5 rounded-lg bg-[#ECEFF3] text-[#454F5B] dark:bg-[#23272C] dark:text-white">
        Lead Details
      </div>
      <div className="p-4 mt-1">
        {leadDetails.map((detail, index) => (
          <React.Fragment key={index}>
            <LeadDetailRow label={detail.label} value={detail.value} />
            <br />
          </React.Fragment>
        ))}
      </div>
      <div className="p-3 rounded-lg bg-[#ECEFF3] text-[#454F5B] dark:bg-[#23272C] dark:text-white">
        Activities
      </div>
      <div className="p-4">
        <h1 className="font-bold text-[#1D3152] dark:text-[#F9F9F9]">
          Campaign Name
        </h1>
        <h3 className="text-[#676F78] dark:text-[#F3F3F3] pt-4">
          <span className="font-bold">3</span> Steps |{' '}
          <span className="font-bold">5</span> Days in Sequence
        </h3>
        <div className="p-2 ">
          {campaignSteps.map((step, index) => (
            <CampaignStep
              key={index}
              step={step.step}
              date={step.date}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InboxSidebar;
