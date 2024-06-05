import Img1 from '../assets/6533310.jpg'
function Contact(){
   const config ={
       Email :'sivakaruna@gmail.com',
       Phone :' 6380670357'
   }
    return(
  <>
  <section id='contacts' className='flex flex-col items-center bg-se px-5 py-32 text-white '>
    
    <div className='  '>
     
      <h1 className=' text-4xl border-b-4 border-[#d43c3c] w-[170px] font-bold '>Contact</h1>
    <p className='pt-5'>If you want more in details, please contact me </p>
    <p className='py-2'  ><span className='font-bold'> Email:</span>{config.Email} </p>
    <p className='py-2'><span className='font-bold'> Phone:</span>{config.Email}</p>
     </div>
    
  </section>
  
  </>
    )
}
export default Contact