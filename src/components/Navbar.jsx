import React, {useEffect} from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import {FiShoppingCart} from 'react-icons/fi';
import {BsChatLeft} from 'react-icons/bs';
import {RiNotification3Line} from 'react-icons/ri';
import {MdKeyboardArrowDown} from 'react-icons/md';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import {Cart, Chat, Notification, UserProfile} from '.';
import {useStateContext} from '../contexts/ContextProvider';

const NavButton = ({title, customFunc, icon, color, dotColor}) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button type='button' onClick={customFunc} style={{color}} className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
      <span style={{backgroundColor: dotColor}} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"/>
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {activeMenu, setActiveMenu, isClicked, setIsClicked, handelClick, screenSize, setScreenSize, currentColor} = useStateContext();

  useEffect(() => {
    const handelResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handelResize);

    handelResize();

    return () => window.removeEventListener('resize', handelResize);
  }, []);

  useEffect(() => {
    if(screenSize <= 900)
      setActiveMenu(false);
    else
      setActiveMenu(true);
  }, [screenSize]);
  

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title="Menu" customFunc={()=>setActiveMenu((prevActiveMenu)=> (!prevActiveMenu))} color={currentColor} icon={<AiOutlineMenu></AiOutlineMenu>}/>
      <div className='flex'>
        <NavButton title="Cart" customFunc={()=> handelClick('cart')} color={currentColor} icon={<FiShoppingCart></FiShoppingCart>}/>
        <NavButton title="Chat" dotColor='#03C907' customFunc={()=> handelClick('chat')} color={currentColor} icon={<BsChatLeft></BsChatLeft>}/>
        <NavButton title="Notification" dotColor='#03C907' customFunc={()=> handelClick('notification')} color={currentColor} icon={<RiNotification3Line></RiNotification3Line>}/>
        <TooltipComponent content="Profile" position="BottomCenter">
          <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' onClick={()=> handelClick('userProfile')}>
            <img className='rounded-full w-8 h-8' src={avatar} alt=""/>
            <p>
              <span className='text-gray-400 text-14'>Hi, </span>{" "}<span className='text-gray-400 font-bold ml-1 text-14'>Sudheer</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14'></MdKeyboardArrowDown>
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart/>}
        {isClicked.chat && <Chat/>}
        {isClicked.notification && <Notification/>}
        {isClicked.userProfile && <UserProfile/>}
      </div>
    </div>
  )
}

export default Navbar;