'use client';

import { useTheme } from 'next-themes'
import { BsToggleOff,BsToggleOn  } from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div>
     <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
       <div className='flex center items-center'>
      {theme === 'light' ? 
      (<>
       <BsToggleOff size={30}/>
       <IoSunnyOutline className="ml-2 w-4" size={30} />       
      </>)
       : 
       (<>
       <BsToggleOn className="text-white" size={30} />
        <FaMoon className="text-white ml-2 w-4" size={13} />       
       </>)}
       </div>
     </button>
    </div>
  )
}
