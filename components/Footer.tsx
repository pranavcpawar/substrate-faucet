import React from 'react'

const Footer = (): React.JSX.Element => {
  return (
    <div className='max-w-[1204px] w-[90vw] h-14 flex flex-col items-center text-wrap justify-center bg-[#1b1b1b] font-medium rounded-[10px]'>
      <p className='text-xs font-medium text-[#656565] flex items-center justify-center'>Built and maintain by Edgeware community</p>
      <p className='text-xs font-medium text-[#656565]'>Edgeware © 2024 - {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;