import Image from 'next/image';
import pfp from '../public/pfp.png';

export default function Main() {
  return (
    <main className="pt-14 flex flex-col-reverse md:flex-row md:items-center justify-center h-screen dark:bg-primary">
      <section className="md:w-1/2 flex flex-col justify-start md:justify-center items-center md:items-end my-2">
        <h5 className="px-1 md:text-2xl lg:text-5xl sub-text md:w-3/5 mx-4 text-wrap text-center md:text-left">
          Hobbyist programmer by night,<br/>
          By day, just your regular college student.
        </h5>
      </section>
      <section className="md:w-1/2 flex flex-col justify-end md:justify-center items-center md:items-start my-2">
        <div className="mb-2 lg:w-3/12">
          <Image alt="Pranshu Jha" src={pfp} width={200} height={200}/>
        </div>
        <div className="px-1">
          <h3 className="px-1 hidden sm:block">Hello, I'm</h3>
          <h1>Pranshu Jha</h1>
        </div>
      </section>
    </main>
  )
} 