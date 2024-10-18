
const Footer = () => {
  return (
    <footer className="bg-[#F0F0F0] flex flex-col items-center justify-center p-4 py-10 md:py-24">
      <div className="md:w-3/4  w-full flex flex-col space-y-5 justify-center items-center">
        <h2 className="md:text-5xl text-3xl">Register Now</h2>
        <div className=" w-full flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0  md:space-x-5">
        <input
          type="text"
          className="md:w-1/2 w-full px-10 py-3 border md:py-5 rounded-full outline-none"
          placeholder="Email Address..."
        />
        <button className="bg-[#2B2B2B] rounded-full px-9 py-3 md:py-5 text-white ">
          Connect Now!
        </button>
      </div>
      </div>
      <div className="w-full">
        <h2 className="text-4xl  my-5 uppercase text-center text-[#AEAEAE] opacity-70">
          Mentor Connect
        </h2>
        
      </div>
  
    </footer>
  );
};

export default Footer;
