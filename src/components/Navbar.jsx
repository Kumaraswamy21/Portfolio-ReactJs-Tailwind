import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/Logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    const[nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[70px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="my-logo" style={{width:'110px', height:'90px'}} />
        </div>

        {/*MENU*/}

        <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='career' smooth={true} duration={500}>
            career
          </Link>
        </li>
        <li>
          <Link to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
      </ul>

            {/* <ul className='hidden md:flex'>
                <li>
                    <a href="/">Home</a>
                    </li>
                <li><a href="/about">About</a></li>
                <li><a href="/skills">Skills</a></li>
                <li><a href="/career">Career</a></li>
                <li><a href="/projects">Projects</a></li>
            </ul> */}
        
        {/*Hamburger*/}
        <div onClick= {handleClick} className='md:hidden z-10'>
           {!nav ? <FaBars /> : <FaTimes/>} 
        </div>
        {/*Mobile menu*/}
        <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='career' smooth={true} duration={500}>
            career
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
      </ul>

        {/* <ul className={!nav ? 'hidden' : 'absolute top-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'><a href="/">Home</a></li>
                <li className='py-6 text-4xl'><a href="/about">About</a></li>
                <li className='py-6 text-4xl'><a href="/skills">Skills</a></li>
                <li className='py-6 text-4xl'><a href="/career">Career</a></li>
                <li className='py-6 text-4xl'><a href="/projects">Projects</a></li>
        </ul> */}
        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                {/* Linkedin */}
                <li className='w-[150px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://www.linkedin.com/in/kumaraswamy-g2000/">
                    Linkedin <FaLinkedin size={28}/>
                    </a>
                </li>

                {/* Github */}
                <li className='w-[150px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://github.com/Kumaraswamy21">
                    Github <FaGithub size={28}/>
                    </a>
                </li>
                {/* Email */}
                <li className='w-[150px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="/">
                    Email <HiOutlineMail size={28}/>
                    </a>
                </li>
                {/* Resume */}
                <li className='w-[150px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="/">
                    Resume <BsFillPersonLinesFill size={28}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default Navbar;
