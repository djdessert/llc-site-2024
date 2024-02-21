import Image from "next/image";
import logo from './/public/logo.svg';
import lightbulb from './/public/lightbulb.png';
import trophy from './/public/trophy.png';
import team from './/public/team.png';
import desktop from './/public/desktop-size.png'
import tablet from './/public/tablet-size.png'
import mobile from './/public/mobile-size.png'
import aboutme from './/public/aboutme.png'
import rightCurve from './/public/rightCurve.svg'

export default function Home() {
  return (
    <main className="bg-black px-10">
     <section className="min-h-screen ">

    {/* Nav section */}

      <nav className="py-10 mb-12 en text-white text-center sm: flex sm:flex-col lg:flex-row lg:justify-between lg:mx-20">

      <div className="flex justify-center lg:justify-start ">
        <Image src={logo} 
        className="lg:w-48"/>
      </div>
        
      <div>
        <ul className="flex justify-evenly py-10 lg:ml-20">
            <li><a className="cursor-pointer text-xl lg:px-3" href="#">Portfolio</a></li>
            <li><a className="cursor-pointer text-xl lg:px-3" href="#">About</a></li>
            <li><a className="cursor-pointer text-xl lg:px-3" href="#">LinkedIn</a></li>
            <li><a className="cursor-pointer text-xl lg:px-3 lg:pr-64" href="#">GitHub</a></li>
          </ul>
      </div>


      <div className="flex justify-center lg:h-9 lg:my-9 lg:pl-64 lg:ml-48 lg:flex-1">
        <a className="bg-indigo-500 px-4 py-1 rounded-md" href="#">Contact us</a>
      </div>

      </nav>

      {/* Intro Text Section */}

      <div className="flex flex-col bg-[url('.//public/striped-circle.svg')] 
      bg-no-repeat sm:bg-left-top lg:bg-right-top bg-[length:636px_636px] bg- py-10  h-lvh overflow-visible ">
        
        <div className="flex text-4xl font-bold pr-10 px-6 lg:w-6/12 lg:text-6xl lg:leading-relaxed lg:mx-20">
          <h1 className="text-white"><span className="bg-gradient-to-r from-indigo-500  to-fuchsia-500 inline-block text-transparent bg-clip-text">
            Transforming</span> Your Ideas into Reality</h1>
        </div>
        
        <div className="sm:flex sm:flex-col lg:flex-row lg:my-3 lg:mx-20">
          <div className="flex py-10 px-6">
            <a className="bg-indigo-500 px-6 py-3 rounded-md text-white text-center lg:w-40 lg:h-12" href="#">Work with us</a>
          </div>

          <div className="flex text-xl text-gray-400 pr-18 px-6 lg:pt-9 lg:w-5/12 lg:mx-20">
            <p>At Angela Taylor LLC, we're passionate about transforming ideas into digital reality. 
              With expertise in website and mobile application development, we empower small businesses 
              to thrive in the digital landscape.</p>
          </div>

        </div>

        <Image className="ml-auto overflow-hidden -mt-36" src={rightCurve} />
      </div>

    {/* Features Section */}

      <div className="flex flex-col pb-14 lg:flex-row lg:mx-48 lg:mb-36">

        <div className="flex flex-col flex-1 px-3 py-6 ">

          <div className="flex flex-col">
            <div className="flex justify-center py-6">
                <Image src={lightbulb} />
            </div>
            <h1 className="text-white text-xl font-bold m-auto p-3 text-center">Creative Solutions</h1>
            <p className="text-gray-400 text-base p-3 text-center" >Tailored websites and apps 
            reflecting your brand.</p>
          </div>
        </div>

        <div className="flex flex-col flex-1 px-3 py-6">

          <div className="flex flex-col">
            <div className="flex justify-center py-6">
                <Image src={trophy} />
            </div>
            <h1 className="text-white text-xl font-bold m-auto p-3">Results-Driven</h1>
            <p className="text-gray-400 text-base p-3 text-center" >We focus on deliverying tangible 
            results for your business.</p>
          </div>
        </div>

        <div className="flex flex-col flex-1 px-3 py-6">

          <div className="flex flex-col">
            <div className="flex justify-center py-6">
                <Image src={team} />
            </div>
            <h1 className="text-white text-xl font-bold m-auto p-3 lg:flex lg:flex-nowrap">Crafting Success Together</h1>
            <p className="text-gray-400 text-base p-3 text-center" >Our skilled team collaborates 
            with you to shape a beautifully crafted digital product.</p>
          </div>
        </div>
      </div>
      
      {/* Project Example Section */}

      <h1 className="text-white text-xl font-bold text-center py-6 lg:text-5xl">Featured Project - AbleNFTMint</h1> 

      <div className="flex flex-col lg:flex-row">

        <div className="lg:flex lg:flex-1 lg:flex-col lg:px-4">
          <h2 className="text-white text-lg font-bold text-center py-4 lg:py-8 lg:text-2xl">Desktop Size - 1920px Width</h2>
          <Image className="pb-10 mx-auto" src={desktop} />
        </div>

        <div className="lg:flex lg:flex-1 lg:flex-col lg:px-4">
          <h2 className="text-white text-lg font-bold text-center py-4 lg:py-8 lg:text-2xl">Tablet Size - 1100px Width</h2>
          <Image className="pb-10 mx-auto" src={tablet} />
        </div>

        <div className="lg:flex lg:flex-1 lg:flex-col lg:px-4">
          <h2 className="text-white text-lg font-bold text-center py-4 lg:py-8 lg:text-2xl">Mobile Size - 720px Width</h2>
          <Image className="pb-10 mx-auto" src={mobile} />
        </div>

      </div>
      
    {/* Contact Purple Box Section */}

    <div className="flex flex-col pb-16 lg:w-9/12 lg:m-auto">

      <div className="bg-gradient-to-r from-indigo-500  to-fuchsia-500 rounded-md
        h-80 lg:h-96 ">

        <p className="text-gray-300 text-center text-lg pt-16 lg:pt-24 pb-4 lg:text-2xl">Want to work with us? Let's talk</p>

        <h1 className="text-white font-bold text-2xl text-center py-6 lg:text-3xl lg:pb-10"> hello@angelataylorllc.com</h1>

        <div className="flex justify-center">
          <a className="bg-white px-4 py-2 rounded-md" href="#">Contact Us</a>
        </div>

      </div>

    </div>

    {/* Footer Section */}

    <div className="flex flex-col lg:flex-row lg:justify-between lg:w-8/12 lg:m-auto lg:mt-20">

    <div className="lg:w-7/12">
      <Image className="w-48 pl-6 py-6" src={logo} />

      <h1 className="text-gray-300 text-xl pl-6">About Us</h1>
      
      <p className="py-10 text-gray-400 pl-6">At Angela Taylor LLC, we're your dedicated digital 
      partners. Our team is on a mission to empower small businesses through innovative websites and 
      mobile applications. With a focus on collaboration and tailored solutions, we turn your vision into 
      a digital reality. Our commitment is to provide not just services, but a personalized journey to success. 
      Join us at Angela Taylor LLC, where your digital aspirations take center stage.</p>

    </div>
      
      <div className="flex justify-center pb-10 m-8 ">
        <Image src={aboutme} />
      </div>

    </div>

     </section>
    </main>
  );
}
