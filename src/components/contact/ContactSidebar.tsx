
const ContactSidebar = () => {
  return (
        <aside className=" md:w-1/4  py-10 px-4 my-10 shadow-md h-fit rounded-3xl hover:scale-105 transition">
            <h2 className="text-2xl">Reach out to us through the following channels</h2>

            <div className=" flex flex-col space-y-5 my-10">
                <div className="">

                <h3 className="text-xl font-semibold">Phone</h3>
                <p>+91 870 093 9666</p>
                </div>

                <div className="">
                <h3 className="text-xl font-semibold">Email</h3>
                <p> connect@mentorconnect.in </p>
                </div>

            </div>
        </aside>
  )
}

export default ContactSidebar