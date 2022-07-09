import { useEffect, useState } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

export function Repository() {
  const [repository, setRepository] = useState<any[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/alemedinabjj/repos')
    .then(response => response.json())
    .then(data => setRepository(data))
  }, [])

  return (
    <main>
      <section className='flex pt-10 flex-col items-center text-white h-[100%]  '>
        <ul className="grid sm:flex sm:flex-col sm:w-full grid-rows-9 grid-flow-col gap-4 mt-5">
          {repository.map(repo => {
            return (
              <li  className="w-full bg-blue-900 drop-shadow-xl p-5 grid-rows-1 rounded hover:drop-shadow-2xl hover:scale-105 transition-all" data-aos="flip-right">
                <h3>{repo.name}</h3>
                <h3>{repo.description}</h3>
                <a href={repo.html_url}>Acessar o link</a>
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  )
}