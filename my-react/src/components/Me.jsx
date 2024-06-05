import { LuSubtitles } from 'react-icons/lu';
import HeroImg from '../assets/—Pngtree—anonymous dark figure with boxing_14794248.png';
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin, } from "react-icons/ai";

function Me() {
  const config = {
       subtitle:'',
       social:'',
       github:'',
       ln:''
       
  }
    return (
      <>
      <section className='md:flex flex-col md:flex-row px-5 py-32 bg-se justify-center'>
        <div className='w-1/2 flex flex-col'>
       <h1 className='w-1/2 text-white text-4xl font-me-font' >hi <br/> Im <span className='siva'>siva</span> k<p className='text-2xl'>{config.subtitle}</p> </h1>
       
       <div className='text-white  flex  py-10'>
       <a href={config.social} className='pr-5 icon '><AiOutlineTwitter size={40}/></a>
       <a href={config.github}className='pr-5 icon'><AiOutlineFacebook size={40}/></a>
       <a href={config.ln}className='pr-5 icon'><AiOutlineLinkedin size={40}/></a>

       </div></div>
       <img className='md:w-1/3 img1' src={HeroImg}/>
       </section>
      </>
    )
  }
  
  export default Me
  