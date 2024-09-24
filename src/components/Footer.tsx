
const Footer = () => {
  return (
    <footer className="bg-[#F0F0F0] flex flex-col items-center justify-center p-4 py-10 md:py-24">
      <div className="w-3/4 flex flex-col space-y-5 justify-center items-center space-x-5">
        <h2 className="text-5xl">Register Now</h2>
        <input
          type="text"
          className="md:w-1/2 px-10 py-5 rounded-full outline-none"
          placeholder="Email Address..."
        />
        <button className="bg-[#2B2B2B] rounded-full px-9 py-5 text-white ">
          Join Now!
        </button>
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
