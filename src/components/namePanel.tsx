export default function NamePanel() {
  return (
    <>
      <div className="shadow rounded-xl overflow-hidden">
        <div className="h-32 bg-cover"></div>
        <div className="pt-14 p-7 bg-white relative">
          <div className="text-lg font-semibold mb-1.5">Zhendong Chen</div>
          <div className="text-sm text-gray-400 mb-7">Principle Developer</div>
          <div className="flex group">
            <button className="download-btn">Download CV</button>
            <button className="download-btn-icon"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg></button>
          </div>
        </div>
      </div>
    </>
  );
}