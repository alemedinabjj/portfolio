import AOS from 'aos'
import 'aos/dist/aos.css'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { BsFillArrowUpCircleFill } from 'react-icons/bs' 




AOS.init()

export function Home() {
  return (
   
    <main className=" h-[100vh]  bg-gradient-to-l from-gray-900 to-transparent
      sm:w-full sm:h-[40vh]
    ">
      <section className='flex pt-10 flex-col items-center text-white sm:w-full'>
        <h3 className='animate__backInDown'>Hello World!</h3>
        <h1 className="text-3xl">I'am Alexandre Medina</h1>
        <small>Front-end Developer</small>
        <div className="p-5 m-5 bg-blue-900 skew-y-6 rounded-tr-xl rounded-bl-xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] animate__swing" >
          <h1 className="text-3xl italic" data-aos="zoom-out-right">

          { 
            window.innerWidth < 1200 ? 'browse the menu above to get to know me and my work' : 'browse the menu on the side to get to know me and my work'
          }

          </h1>
        </div>

          { window.innerWidth < 1200 ? <BsFillArrowUpCircleFill size={90} className="animate-bounce" /> : <BsFillArrowLeftCircleFill size={90} className="animate-bounce" /> }

        
      </section>
    </main>
  )
}