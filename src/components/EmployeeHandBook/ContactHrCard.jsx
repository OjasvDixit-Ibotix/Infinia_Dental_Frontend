import React from 'react'

const ContactHrCard = () => {
  return (
      <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[rgba(255,255,255,0.8)] shadow-[0_4px_12px_rgba(0,0,0,0.10)] backdrop-blur-[2px] text-center w-[280px]">
      <p className="text-[#444] text-sm mb-1">Need help finding something?</p>
      <button className="text-[#E0B545] text-sm font-medium hover:underline">
        Contact HR Department
      </button>
    </div>
  )
}

export default ContactHrCard