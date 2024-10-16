import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaTwitter,FaInstagram,FaLinkedin, FaGithub } from 'react-icons/fa'
const Main = () => {
  return (
    <div id="main">
        <img className='w-full h-screen object-cover object-left' src="https://images.unsplash.com/photo-1583364481915-dacea3e06d18?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D" alt="/" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
      <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-start, items-center'>
        <h1 className='sm:text-5xl text:4xl font-bold text-gray-800'>I am Ria Chaudhari</h1>
        <h2 className='flex sm:text-3xl text:2xl pt-4 text-gray-800'>I am a 
        <TypeAnimation
      sequence={[
        'Developer',
        2000, //wait
        'Coder',
        2000, //wait
        'Tech Enthusiast',
        2000
      ]}
      wrapper="div"
      speed={50}
      style={{ fontSize: '1em', paddingLeft: '5px' }}
      repeat={Infinity}
      cursor={true}
    />
    </h2>
    <div className='flex  justify-between pt-6 max-w-[200px] w-full'>
    <a href="https://x.com/riaa1794" target="_blank" rel="noopener noreferrer">
        <FaTwitter className='cursor-pointer' size={20}/>
        </a>
        <a href="https://www.linkedin.com/in/ria-chaudhari-242b921a3/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className='cursor-pointer' size={20}/>
        </a>
        <a href="https://www.instagram.com/riaa_1794/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className='cursor-pointer' size={20}/>
        </a>
        <a href="https://github.com/riachaudhari" target="_blank" rel="noopener noreferrer">
        <FaGithub className='cursor-pointer' size={20}/>
        </a>
    </div>
    <a href="../assets/Ria_Chaudhari_Resume.pdf"  download className="mt-4 inline-block px-6 py-3 bg-[#001b5e] text-white font-bold rounded-lg hover:bg-[#0a4bbf] transition duration-300">
    Resume</a>
    </div>
    </div>
    </div>
    
  )
}

export default Main
