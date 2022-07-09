import AOS from 'aos';

AOS.init();

export function About() {
  return (
    <main className="h-[100vh] sm:h-[40vh]">
      <section className="flex items-center flex-col justify-center p-5" data-aos="zoom-in-right">
        <div className="bg-slate-900 rounded-lg p-5 pb-20 relative after:w-20 after:h-20 after:rotate-45 after:bg-slate-900 after:absolute after:top-[1rem] after:left-[-1rem]">
        <h1 className="text-3xl text-gray-100 text-center">Alexandre Medina,</h1>
        <p className="text-gray-200 pb-5 text-center">is my name!</p>
        <p className="text-xl text-gray-50 text-center leading-6">I was born in São Paulo, Ermelino Matarazzo, but since I've known myself, I've lived in Guarulhos. <br />

          I am 26 years old, a lot of life experience, desire to learn more and more. I am currently studying Technologist in Systems Analysis and Development, and, of course, seeking knowledge in online courses and documentation. <br /> I consider myself a nice, expressive and very contagious person.

          Basically this,

          att, Alexandre Medina </p>
          <p className="text-xl text-gray-50 text-center leading-6">
            Currently, I only have experience with personal projects, I still don't work in the area, but I certainly dream of being a front-end developer, in the not too distant future, of course.</p>
        </div>
        
      </section>
    </main>
  )
}