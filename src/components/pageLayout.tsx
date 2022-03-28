import PageFoot from "./resume/pageFoot";
import NavBar from "./navBar";

export default function PageLayout({children}) {
  return (
    <>
      <main className='bg-gray-100 antialiased mx-auto p-4 max-w-screen-sm md:max-w-screen-xl lg：max-w-screen-2xl'>
        <NavBar />
        {children}
        <PageFoot />
      </main>
    </>
  )
}
