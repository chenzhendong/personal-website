export default function InfoPanel() {
  return (
    <>
      <div className="p-7 block-section">
        <h2 className="block-title">Information</h2>
        <div className="space-y-4">
        <div className="flex justify-between">
            <div className="text-gray-400">Email</div>
            <div className="font-medium text-right text-gray-600">chenzhendong@yahoo.com</div>
          </div>
          <div className="flex justify-between">
            <div className="text-gray-400">Location</div>
            <div className="font-medium text-right text-gray-600">DC Metro Area</div>
          </div>
          <div className="flex justify-between">
            <div className="text-gray-400">Expertise</div>
            <div className="font-medium text-right text-gray-600">Fullstack Deveoper <p/> System Architect</div>
          </div>
          <div className="flex justify-between">
            <div className="text-gray-400">Experience</div>
            <div className="font-medium text-right text-gray-600">20+ years</div>
          </div>          
        </div>
      </div>
    </>
  );
}