import React from 'react'

const Career = () => {
  return (
    <div name='career' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        Career</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
                <div className='sm:text-right text-4xl font-bold '>
                    <p>B.Tech - IT (2018-2022)</p>
                </div>
                <div>
                    <p>Kakatiya University College of Engneering and Technology,</p>
                    <p>Warangal, Telanagana, India.</p>
                    </div>

                    <div className='sm:text-right text-4xl font-bold '>
                    <p>Intermediate - MPC (2016-2018)</p>
                </div>
                <div>
                    <p>Alphores Junior College,</p>
                    <p>Karimnagar, Telanagana, India.</p>
                    </div>

                    <div className='sm:text-right text-4xl font-bold '>
                    <p>SSC - 2016</p>
                </div>

                <div>
                    <p>Telangana State Model School,</p>
                    <p>Karimnagar, Telanagana, India.</p>
                    </div>

            </div>

        </div>
      
    </div>
  )
}

export default Career