import Card from "./Card"

const Sessions = () => {
  return (
    <section data-scroll data-scroll-speed="0.8" className="p-4 min-h-screen md:min-h-[60vh]  flex flex-col items-center  md:py-24">
        <h3 className="uppercase tracking-[0.3rem]  text-[#AEAEAE]">SESSIONS</h3>
        <h2 className="md:text-5xl text-4xl text-center md:text-left">Join Our Mentor Sessions</h2>
        <p className="text-[#AEAEAE] text-center  md:w-1/2">
        Get direct, one-on-one mentorship with experienced professionals. Discuss your queries about placements, higher studies, and career paths in live, personalized sessions.
                    </p>
        <div className="flex flex-col md:flex-row md:w-3/4 my-10 space-y-10 md:space-y-0">
            <Card image={"/card-1.webp"} heading="" body="Free, personalized sessions with experts in various fields."/>
            <Card image={"cloud.png"} heading="" body="Flexible scheduling to match your availability."/>
            <Card image={"/resume.jpg"} heading="" body="Real-time guidance to help you take the next step confidently."/>
        </div>
    </section>
  )
}

export default Sessions