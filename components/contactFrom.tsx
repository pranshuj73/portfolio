export default function ContactForm() {
  return (
    <div className="container px-10 py-24 mx-auto text-gray-400">
      <div className="flex flex-col w-full mb-10">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">reach out to me.</h1>
        <div className="h-1 w-20 bg-gray-500 rounded" />
      </div>
      <div className="lg:w-1/3 md:w-1/2 bg-[#242628] rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
        <h2 className="text-white text-lg mb-1 font-medium title-font">Contact</h2>
        <p className="leading-relaxed mb-5">Send me a email message or book a call</p>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm">Email</label>
          <input type="email" id="email" name="email" className="w-full bg-[#232425] rounded border border-gray-300 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm">Message</label>
          <textarea id="message" name="message" className="w-full bg-[#232425] rounded border border-gray-300 h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
        </div>
        <button className="text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded">Send Message</button>
        <p className="text-xs text-gray-500 my-3">Or you could...</p>
        <a className="text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded" href="https://cal.com/pranshujha" rel="noopener noreferer" target="_blank">Book a Call instead</a>
      </div>
    </div>
  )
}