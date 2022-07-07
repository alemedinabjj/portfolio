import ProfileIMG from '../../assets/profile.jpeg'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { SiJavascript, SiNodedotjs, SiReact, SiTailwindcss } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'



export function Bio() {
  return (
    <header className='flex flex-col items-center justify-center mx-4 sm:mx-0'>
      <img src={ProfileIMG} alt=""  className='w-36 my-5 rounded-full'/>
      <article className='text-center text-white'>
        <h1 className='text-3xl'>Alexandre Medina</h1>
          <p>Front-end Developer</p>
      </article>

      <div className='w-full sm:h-full flex flex-col pt-5 bg-gray-900 p-3 rounded mt-5 gap-2 sm:pb-7 '>
        <h3 className='text-white inline text-center'>Soft Skills</h3>
        <hr className='pb-2'></hr>
        <div className='flex gap-2 justify-between sm:justify-evenly'>
        <i className='py-2 w-36 text-center font-bold text-[.8rem] bg-yellow-500 rounded text-white flex items-center justify-center gap-3'> 
        <SiJavascript size={20} className="animate-pulse"/>
        Javascript
        </i>
        <i className='py-2 w-36 text-center font-bold text-[.8rem] bg-blue-500 rounded text-white flex items-center justify-center gap-3'>
          <SiReact size={20} className="animate-spin"/>
        ReactJS
          </i>
        </div>
        <div className='flex gap-2 justify-between sm:justify-around'>
        <i className='py-2 w-36 text-center font-bold text-[.8rem] bg-blue-500 rounded text-white flex items-center justify-center gap-3'>
        <TbBrandNextjs size={20} className="animate-bounce" />
          NextJS
          </i>
        <i className='py-2 w-36 text-center font-bold text-[.8rem] bg-blue-900 rounded text-white flex items-center justify-center gap-3 '>
          <SiTailwindcss size={20} className="animate-ping" />
          TailwindCSS
        </i>
        </div>
        <div className='flex gap-2 justify-between sm:justify-evenly'>
        <i className='py-2 w-36 text-center font-bold text-[.8rem] bg-[#e535ab] rounded text-white flex items-center justify-center '>
          Styled-Components
        </i>  
        <i className='py-2 w-36 text-center font-bold text-[.8rem] bg-green-500 rounded text-white flex items-center justify-center gap-3'>
          <SiNodedotjs size={20} className="animate-bounce" />
          NodeJs

        </i>
        </div>
        <div className='w-full'>
        <h3 className='text-white pb-2 text-center'>Social Links</h3>
        <hr className='' />
        <div className='flex flex-row justify-between sm:justify-evenly pt-7'>
          <a href="https://github.com/alemedinabjj" target="_blank">
            <FaGithub size={50} className="text-cyan-50 hover:animate-bounce" />
          </a>
          <a href="https://facebook.com/alexandre.medina9" target="_blank">
            <FaFacebook size={50} className="text-blue-600 hover:animate-bounce" />
          </a>
          <a href="https://instagram.com/alexandremedina" target="_blank">
            <FaInstagram size={50} className="text-orange-500 hover:animate-bounce"  />
          </a>
          <a href="https://www.linkedin.com/in/alexandre-medina-a9259a148/" target="_blank">
            <FaLinkedin size={50} className="text-blue-900 hover:animate-bounce" />
          </a>
       
        </div>

      </div>
      </div>
  

    </header>
  )
}