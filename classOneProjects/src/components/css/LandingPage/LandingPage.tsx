import "./LandingPage.css"
const LandingPage = () => {
  return (
    <>
      <header>
        <nav className="flex gap-4 p-2 items-center bg-black text-white justify-between px-4 ">
          <h1>Apple</h1>
          <ul className="flex gap-4 ">
            <li>
              <a href="">Store</a>
            </li>
            <li>
              <a href=""></a>Mac
            </li>
            <li>
              <a href=""></a>Ipad
            </li>
          </ul>
        </nav>
        <p className="text-center bg-slate-700 text-white p-2">
          Get iPhone 15 Pro from ₹5621.00/mo.‡ for 24 months with No Cost EMI from most leading
          banks. <span className="text-blue-500 cursor-pointer">Buy {">"}</span>
        </p>
      </header>
      <main className="bg-black flex flex-col justify-center items-center z-50">
        <section className="flex  items-center h-screen">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.frandroid.com%2Fwp-content%2Fuploads%2F2021%2F09%2Fapple-iphone-13-pro-frandroid-2021.png&f=1&nofb=1&ipt=7ac64dbd988edc0095f0a13be3e24398133da3930238591f9ddeea3fb0384101&ipo=images"
            alt="its an iphone"
            width={500}
            height={500}
            className="phone"
          />
          <div className="gap-8 text-white flex flex-col justify-center items-center">
            <h3 className="text-2xl text-blue-500 appear">Presenting the all new</h3>
            <h1 className="text-5xl leading-relaxed  w-1/2">
              <span className=""> Apple iPhone 15 </span>
              <span className="appear">Ultra Cringe Pro</span>
            </h1>
            <p className="">Get iPhone 15 Pro with your kidney with No Cost EMI from most banks.</p>
            <button className="bg-white text-black p-2 rounded-lg mx-auto w-32 animate-bounce hover:animate-none transition-transform duration-200">
              Buy Now
            </button>
          </div>
        </section>
        <section className="features  bg-white w-full ">
          <h2 className="text-center mt-5">Brand New Colors of Apple iPhone 15 Pro</h2>
          <img src="https://pngimg.com/d/iphone_12_PNG23.png" alt="" className="mx-auto" />
        </section>
      </main>
      <footer className="  bg-black p-5 ">
        <h1 className="text-white text-center leading-loose">
          This Cringe was made by <br /> Keshav
          <br />
          @All cringe copyrights reserved for apple
        </h1>
      </footer>
    </>
  )
}
export default LandingPage
