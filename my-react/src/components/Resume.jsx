import Img1 from '../assets/6533310.jpg'
function Resume(){
   const config ={
      link:''
   }
    return(
  <>
  <section id='resume' className='flex flex-col md:flex-row ab px-5 '>
    <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
      <img className='w-[300px]' src={Img1} alt="" />
    </div>
    <div className='md:w-1/2 flex justify-center'>
      <div className='flex flex-col justify-center'>
      <h1 className='text-4xl border-b-4 border-[gray] w-[170px] font-bold'>Resume</h1>
    <p className='pt-5'>You can view my resume <a className='btn' href={config.link}>Download </a></p>
    
      </div>
     
    </div>
  </section>
  
  </>
    )
}
export default Resume