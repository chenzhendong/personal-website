import PageFoot from "./pageFoot";
import NavBar from "./navBar";
import Script from "next/script";

export default function PageLayout({children}) {
  return (
    <>
      <main className='bg-gray-100 antialiased mx-auto p-4 max-w-screen-sm md:max-w-screen-xl lg：max-w-screen-2xl'>
        {/* <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive"></Script> */}
        {/* <NavBar /> */}
        {children}
        {/* <PageFoot /> */}
      </main>
    </>
  )
}
