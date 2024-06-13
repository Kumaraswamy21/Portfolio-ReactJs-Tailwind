import React from 'react'
import HTML from '../assets/html.png';
import JAVA from '../assets/java.png';
import CSS from '../assets/css.png';
import AWS from '../assets/aws.png';
import GITHUB from '../assets/github.png';
import  JAVASCRIPT from '../assets/javascript.png';
import NODE from '../assets/node.png';
import PYTHON from '../assets/python.png';
import REACT from '../assets/react.png';
import SPRING from '../assets/spring.png';
import TAILWIND from '../assets/tailwind.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                <p className='py-4'> My experience includes working with a variety of technologies, such as</p>
            </div>


            <div className='w-full grid grid-cols-4 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-10 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              

            
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-10 mx-auto' src={JAVA} alt="JAVA icon" />
                  <p className='my-4'>JAVA</p>
              </div>
             


              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-10 mx-auto' src={PYTHON} alt="PYTHON icon" />
                  <p className='my-4'>PYTHON</p>
              </div>

            
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-10 mx-auto' src={CSS} alt="CSS icon" />
                  <p className='my-4'>CSS</p>
                </div>
              


              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-10 mx-auto' src={JAVASCRIPT} alt="JAVASCRIPT icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
            


              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-10 mx-auto' src={AWS} alt="AWS icon" />
                  <p className='my-4'>AWS</p>
              </div>
            


              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-10 mx-auto' src={GITHUB} alt="GITHUB icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
            



              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-10 mx-auto' src={NODE} alt="NODE icon" />
                  <p className='my-4'>NODE</p>
              </div>
            


              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-10 mx-auto' src={SPRING} alt="SPRING icon" />
                  <p className='my-4'>SPRING</p>
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-10 mx-auto' src={TAILWIND} alt="TAILWIND icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
            

            
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-10 mx-auto' src={REACT} alt="REACT icon" />
                  <p className='my-4'>REACT</p>
              </div>
              </div>
              


        </div>

    </div>
  )
}

export default Skills