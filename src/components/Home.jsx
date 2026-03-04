import pic from '../assets/Pic.png'

const Hero = () => {
  return (
    <section id="Home" className="flex flex-col items-center pt-24 sm:pt-28 px-6   min-h-screen">

    
<div className="flex justify-center items-center ">
  <img 
    src={pic}
    alt="My Photo" 
    className="w-40 h-40 rounded-full object-cover border-4 border-gray-300"
  />
</div>
   

      {/* Text */}
      <div className="text-center text-2xl space-y-4 max-w-xl">
        <h1> Hi! I'm Ayesha Rafiq </h1>
        <h1 className="text-4xl sm:text-5xl font-bold ">
          FrontEnd Web developer
          <br />
          based in Pakistan
        </h1>
        <p className="text-lg sm:text-xl text-gray-300">
 I am Front-End Developer specializing in modern web interfaces.
</p>
        <div className="text-center  justify-center align-center flex gap-2 pt-6">
 
  
  <a
href="MY CV.pdf"


   
  

  download="Ayesha Rafiq CV.pdf"
  className="relative inline-block px-10 py-3 font-medium text-white rounded-full
             border border-white-400 overflow-hidden group"
>
  <span className="absolute inset-0 bg-linear-to-r from-pink-500 via-purple-500 to-sky-400
                   scale-x-0 group-hover:scale-x-100 origin-left
                   transition-transform duration-500 ease-out rounded-full z-0"></span>
  <span className="relative z-10">My Resume</span>
</a>
</div>

</div>


      

    </section>
  );
};

export default Hero;
