import MyPhoto from '../assets/MyPhoto.jpg'; 
import Github from '../assets/Github.png'; 
import Linkedin from '../assets/Linkedin.png'; 
import CV from '../assets/CV.pdf'; 

function Home() {

    return (   

        <div className="py-6 px-20 flex gap-12">

            <div>
                <img src={MyPhoto} alt="MyPhoto" className='rounded-full w-[500px] h-[500px]'/>
            </div>

            <div>
                
                <h1 className='text-4xl font-bold py-14'>Hello, Welcome to my portfolio website!</h1>
                <h1 className='text-2xl py-3 pl-16'>I'm Mimitha Probodani Chandrarathna.</h1>
                <h1 className='text-2xl py-3 pl-16'>I'm an Aspiring Software Developer.</h1>
                <h1 className='text-2xl py-3 pl-16'>IT Undergraduate eager to learn, build, and contribute to real-world software projects.</h1>
                
                <div className='flex gap-7 py-14 pl-16'>
                    <a href="https://www.linkedin.com/in/mimitha-prabodani-22b54134a" target="_blank" rel="noopener noreferrer">
                        <img src={Linkedin} alt="LinkedIn" className="rounded-full w-[100px] h-[100px] cursor-pointer hover:scale-110" />
                    </a>
                    <a href="https://github.com/MimithaPC" target="_blank" rel="noopener noreferrer">
                        <img src={Github} alt="Github" className='rounded-full w-[100px] h-[100px] cursor-pointer hover:scale-110'/>
                    </a>
                </div>

                <a href={CV}  download="Mimitha_Probodani_CV.pdf" className='cursor-pointer hover:scale-110 text-2xl my-3 ml-16 rounded-full bg-blue-700 p-4 text-white not-visited'>Download CV</a>

            </div>

    </div>

    


  )
  
}

export default Home
