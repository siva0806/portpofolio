import webim1 from '../assets/6533310.jpg'
import webim2 from '../assets/9796308.jpg'
import webim3 from '../assets/9796308.jpg'
function Projects(){
     
    const config ={
        project :[
                  {
              Image: webim1 ,
              descryption:'I buid the e-commerce websites',
              link:'',

                  },
                  {
                    Image: webim2 ,
                    descryption:'I buid the e-commerce websites',
                    link:'',
      
                        },
                        {
                            Image: webim3 ,
                            descryption:'I buid the e-commerce websites',
                            link:'',
              
                                }
        ]
    }

    return(

        <>
        <section id='projects' className="flex flex-col   py-0 px-5 justify-center bg-se text-white">
    <div className="w-full ">
        <div className="flex  flex-col px-5 py-5">
        <h1 className="  text-4xl border-b-4 border-[#e04141] w-[140px]  font-bold  ">Projects</h1>
        <p className='pt-5'> These are some of mybest projects </p>
   </div> </div>
    <div className="w-full px-20 py-5  ">
        <div className='flex flex-col justify-between md:flex-row px-0 gap-10 '>
            {config.project.map((project) =>(
               
                <div className='relative'>
                <img className='h-[200px]  im' src={project.Image} alt="" />
                <div className='proj-dep'> 
                    <p  className='text-center px-5 py-5'>{project.descryption}</p>
                    <div>
                <a target='_blank' className='btn' href={project.link}>get code</a>
                </div>
                </div>
               
                </div> 
                
            ))}
       
       
        </div>
    </div>
    </section>
        </>
    ) 

    
}
export default Projects