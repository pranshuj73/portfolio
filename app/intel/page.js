import Footer from "@/components/footer";
import Header from "@/components/header";
import Introduction from "@/components/introduction";

const Arrow = () => {
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
};

export default function About() {
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div>
        <h1 className="text-4xl mb-1">Hey, Pranshu 👋</h1>
        <h2 className="text-gray-400 text-lg mb-8">Download your paper & presentation below!</h2>

        <div className="mb-2 flex flex-row ">
          <a className="flex flex-row items-baseline text-blue-100 mr-4 hover:text-blue-400 duration-400 transition-all ease-in-out" href="/intel/Logistic Regression for Fake News Detection.docx" download>
            Paper (Word)
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-3 h-3 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
          <a className="flex flex-row items-baseline text-blue-100 ml-4 hover:text-blue-400 duration-400 transition-all ease-in-out" href="/intel/Logistic Regression for Fake News Detection.pdf" download>
            Paper (PDF)
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-3 h-3 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
        <a className="flex flex-row items-baseline text-blue-100 hover:text-blue-400 duration-400 transition-all ease-in-out" href="/intel/Logistic Reg for Fake News Detection.pptx" download>
          Your Presentation
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-3 h-3 ml-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      </div>
      <Footer />
    </main>
  )
}