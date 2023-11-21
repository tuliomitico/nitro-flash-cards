import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-t from-marine-600 to-marine-500 px-5 py-6 flex flex-col gap-8">
      <img src={'http://github.com/tuliomitico.png'} alt='Imbrochavel' className='w-16 h-16 rounded-full self-end'/>
      <span className="text-2xl leading-heading font-bold text-mirage-50">
        Dashboard
      </span>
      </div>
      <main>
        
      </main>
    </>
  ) 
}
