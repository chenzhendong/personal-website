export default function NamePanel({basics}) {
  return (
    <>
      <div className="shadow rounded-xl overflow-hidden">
        <div className="h-32 bg-cover" style={{ backgroundImage: "url('/background.jpg')" }}></div>
        <div className="pt-14 p-7 bg-white relative">
          <a href="/personal_cv/"><img src={basics.image} alt="Avatar" className="user-photo" /> </a>
          <div className="text-2xl text-gray-600 font-bold font-serif mb-1.5">{basics.name}</div>
          <div className="text-base text-gray-400 font-sans italic mb-7">{basics.label}</div>
          <div className="flex group">
            <a className="download-btn text-center" href="https://docs.google.com/document/d/1-Fprbt49Lp4hN3NRdBmEZR-pvAdWKAY_BftKBLe98x0/export?format=pdf">Download CV</a>
            <a className="download-btn-icon" href="https://docs.google.com/document/d/1-Fprbt49Lp4hN3NRdBmEZR-pvAdWKAY_BftKBLe98x0/export?format=pdf"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg></a>
          </div>
        </div>
      </div>
    </>
  );
}