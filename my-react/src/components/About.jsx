import AboutImg from '../assets/—Pngtree—cartoon professional boy computer office_14082449.png'
function About(){
  const config = {
     line1:'Hi,My name is siva.I am a fullstack web developer.',
     line2:'I am proficient in frontend skills like Html,Css3,Tailwindcss,React,Bootstrap',
     
     
  }
    return(
  <>
  <section id='about' className='flex flex-col md:flex-row ab px-5 '>
    <div className='py-5 md:w-1/2'>
      <img className='img2' src={AboutImg} alt="" />
    </div>
    <div className='md:w-1/2 flex justify-center'>
      <div className='flex flex-col justify-center'>
      <h1 className='text-4xl border-b-4 border-[gray] w-[170px] font-bold'>About me</h1>
      <p className='mt-5'>{config.line1}</p>
      <p className='pt-5'>{config.line2}</p>
      </div>
     
    </div>
  </section>
  
  </>
    )
}
export default About