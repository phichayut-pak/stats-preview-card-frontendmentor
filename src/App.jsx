import desktopImg from './images/image-header-desktop.jpg'
import mobileImg from './images/image-header-mobile.jpg'

const App = () => {
  return (
    <div className="min-h-screen bg-main flex justify-center items-center">

      <div className="rounded-lg mx-5 my-16 md:m-36 grid grid-rows-2 grid-flow-col md:grid-cols-2 md:grid-rows-none md:grid-flow-row justify-items-center content-center bg-card">
        <div id="content" className="order-2 md:order-1 m-16 flex flex-col justify-center items-center md:items-start max-w-2xl md:max-w-none">
          <div id="title" className=" font-inter font-bold text-3xl md:text-5xl text-white">
            Get<span className="text-accent"> insights</span> that help 
            <br />
            your business grow.
          </div>

          <div id="description" className="py-8 font-inter font-normal text-center md:text-left text-md text-mainParagraph">
            Discover the benefits of data analytics and make  
            <br />
            better decisions regarding revenue, customer 
            <br />
            experience, and overall efficiency.
          </div>

          <div id="info" className="pt-8 md:pt-12 w-full flex flex-col md:flex-row justify-center md:justify-between space-y-10 md:space-y-0 ">
            <div id="companies" className="text-center md:text-left text-white">
              <span className="font-inter font-bold text-2xl">10k+</span>
              <span className="mt-1 block font-lexend text-xs tracking-widest text-statHeadings">COMPANIES</span>
            </div>

            <div id="templates" className="text-center md:text-left text-white">
              <span className="font-inter font-bold text-2xl">314</span>
              <span className="mt-1 block font-lexend text-xs tracking-widest text-statHeadings">TEMPLATES</span>
            </div>

            <div id="queries" className="text-center md:text-left text-white">
              <span className="font-inter font-bold text-2xl">12M+</span>
              <span className="mt-1 block font-lexend text-xs tracking-widest text-statHeadings">QUERIES</span>
            </div>
          </div>
        </div>

        <div id="image" className="relative order-1 md:order-2 right-0 top-0 w-full">
          <div className="absolute bg-accent opacity-[.65] inset-0 rounded-t-lg md:rounded-r-lg"></div>
          {window.innerWidth > 768 ? <img src={desktopImg} alt="" className='w-full h-full rounded-r-lg'/> : <img src={mobileImg} alt="" className='w-full h-full rounded-t-lg'/> }
        </div>
      </div>
    </div>
  );
}

export default App;
