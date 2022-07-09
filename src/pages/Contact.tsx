import { FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

export function Contact () {
  return (
    <main>
      <section className='flex pt-10 flex-col items-center text-white h-[100vh] sm:h-full'>
        <h5 className='text-sm'>Get in Touch</h5>
        <h2 className='text-3xl pb-5 text-cyan-300'>Contact Me</h2>
        <div className='flex flex-row gap-3 sm:flex-col' >
        <article className='w-48 h-28 flex items-center flex-col p-2 bg-gray-900 text-white rounded hover:bg-transparent hover:border-solid hover:border-2 hover:border-slate-300 transition-all' data-aos="flip-right">
          <div className='flex items-center gap-1 justify-center pb-3'>
          <MdOutlineEmail />
          <h4>Email</h4>
          </div>
          <h5>alesurf13@gmail.com</h5>
          <a href="mailto:alesurf13@gmail.com">Send a message</a>
        </article>
        <article className='w-48 flex items-center flex-col p-2  h-28  bg-gray-900 text-white rounded  hover:bg-transparent hover:border-solid hover:border-2 hover:border-slate-300 transition-all' data-aos="flip-right">
        
          <div className='flex items-center gap-1 justify-center pb-3'>
          <FaWhatsapp />
          <h4>WhatsApp</h4>
          </div>
          <h5>11 9 9120-7155</h5>
          <a href="mailto:alesurf13@gmail.com">Send a message</a>
        </article>
        <article className='w-48 h-28 flex items-center flex-col p-2 bg-gray-900 text-white rounded  hover:bg-transparent hover:border-solid hover:border-2 hover:border-slate-300 transition-all' data-aos="flip-right">
          <div className='flex items-center gap-1 justify-center pb-3'>
          <FaLinkedin size={20}/>
          <h4>Linkedin</h4>
          </div>
          <h5>Alexandre Medina</h5>
          <a href="mailto:alesurf13@gmail.com">Send a message</a>
        </article>
        </div>
        <div className='flex w-96'>
          <form action="" className='flex flex-col gap-3'>
            <div className='w-full flex justify-between pt-10'>
              <input type="text" placeholder='Your full name' required className='rounded bg-transparent border-solid border-2 border-gray-900 transition'/>
              <input type="email" placeholder='Your email' required className='rounded bg-transparent border-solid border-2 border-gray-900 transition'/>
            </div>
            <textarea name="message" id="" placeholder='Your message' required className='rounded  bg-transparent border-solid border-2 border-gray-900 resize-none w-96 h-56 transition'></textarea>
            <button type='submit' className='bg-gray-900 rounded-full p-3 border-solid border-2 transition border-gray-900 hover:bg-transparent hover:border-gray-900'>Send message</button>
          </form>
        </div>

      </section>
    </main>
  )
}