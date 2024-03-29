'use client';
import { KeyboardEvent, MouseEvent, MouseEventHandler, useState } from 'react';
import { LuChevronsUpDown } from 'react-icons/lu';

export interface IUser {
  chain: string;
  address: string;
  amount: string;
};

export default function Faucet(){
  const [user, setUser] = useState<IUser>({
    chain: "",
    address: "",
    amount: "",
  });
  
	const checkForNumbers = (event: KeyboardEvent<HTMLInputElement>) => {
		const neededChars = ["Backspace", "Tab", "Enter", ",", "."];
		// allow only numbers, backspace, tab, enter, comma and period
		if ((event.key.charCodeAt(0) < 48 || event.key.charCodeAt(0) > 57 || (event.key.startsWith("Numpad"))) && (!neededChars.includes(event.key))) {
			event.preventDefault();
		}
		// allow only one period
		if(event.currentTarget.value.split(".").length === 2 && (event.key === "." || event.key === ",")) {
			event.preventDefault();
		}
	}

  const getMaxAmount = (event: MouseEvent<HTMLButtonElement>) => {
    setUser({...user, amount: "10"});
    event.preventDefault();
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  }

  return(
    <>
      <form className="sm:flex hidden flex-col items-center justify-center gap-[8px] p-[4px] bg-[#131313] rounded-[12px] border-2 border-[#202020]">
        <div className="flex flex-col items-center space-y-[5px]">
          <div className="max-w-[568px] w-[100vw] bg-[#1b1b1b] flex flex-col space-y-[3px] items-start justify-center p-4 rounded-[12px] border-2 border-[#202020] focus-within:border-[#404040]">
            <span className="text-xs text-[#9b9b9b]">Chain</span>
            <div className="flex items-center justify-between w-full">
              <input 
                type="text" 
                className="w-2/3 h-10 text-3xl bg-inherit outline-none placeholder:text-[#5d5d5d]" 
                value={user.chain} 
                onChange={(e) => setUser({ ...user, chain: e.target.value })}
                placeholder="Ethereum" />
              <button onClick={handleClick} className="w-1/3 h-full p-2 flex gap-2 items-center justify-center bg-[#311C31] text-base text-[#FC72FF] font-medium rounded-full outline-none">
                <p>Switch chain</p>
                <LuChevronsUpDown className='h-5 w-5' />
              </button>
            </div>
            <div className="text-[#9b9b9b] text-xs">You are on Ethereum</div>
          </div>
          <div className="max-w-[568px] w-[100vw] bg-[#1b1b1b] flex flex-col space-y-[3px] items-start justify-center p-4 rounded-[12px] border-2 border-[#202020] focus-within:border-[#404040]">
            <span className="text-xs text-[#9b9b9b]">Address</span>
            <div className="flex items-center justify-between w-full">
              <input 
                type="text" 
                className="w-2/3 h-10 text-3xl bg-inherit outline-none placeholder:text-[#5d5d5d]" 
                value={user.address} 
                onChange={(e) => setUser({ ...user, address: e.target.value })}
                placeholder="0x" />
            </div>
            <div className="text-[#9b9b9b] text-xs">Your Ethereum wallet address</div>
          </div>
          <div className="max-w-[568px] w-[100vw] bg-[#1b1b1b] flex flex-col space-y-[3px] items-start justify-center p-4 rounded-[12px] border-2 border-[#202020] focus-within:border-[#404040]">
            <span className="text-xs text-[#9b9b9b]">Amount</span>
            <div className="flex items-center justify-between w-full">
              <input 
                type="text" 
                className="w-1/2 h-10 text-3xl bg-inherit outline-none placeholder:text-[#5d5d5d]" 
                value={user.amount} 
                inputMode='decimal'
                onKeyDown={checkForNumbers}
                onChange={(e) => setUser({ ...user, amount: e.target.value.replace(",", ".") })}
                placeholder="0" />
              <button onClick={getMaxAmount} className="w-1/2 h-full p-2 flex gap-2 items-center justify-center bg-[rgba(0,102,255,0.1)] text-base text-[#0066FF] font-medium rounded-[8px] outline-none">Max</button>
            </div>
            <div className="text-[#9b9b9b] text-xs">You can request up to 10 tokens.</div>
          </div>
        </div>
        <button type="submit" className="bg-[#311C31] text-[#FC72FF] w-full h-14 text-lg font-medium rounded-[10px]">Request tokens</button>
      </form>
    </>
  );
};