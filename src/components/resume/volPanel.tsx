export default function VolPanel({ volunteer }) {
  return (
    <>
      <div className="block-section">
        <div className="block-title">Social Works</div>
        {
          volunteer.map(
            (vol) => {
              return <div className="m-5 px-5 item-section">
                <div className="w-full space-y-5">
                  <div className="item-header">
                    <div className="space-y-1.5">
                      <div className="font-medium">{vol.position}</div>
                      <div className="flex space-x-5">
                        <div className="item-header-info">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                          </svg>
                          <span>{vol.organization}</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-x-1.5 pt-7">
                      <div className="item-header-info">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        <span>{vol.startDate} – {vol.endDate}</span>
                      </div>
                    </div>
                  </div>
                  <p>
                    {vol.summary
                      .split('\n')
                      .map(
                        line =>
                          <li className="mx-5 text-justify text-violet-300"><span className="text-gray-500">{line}</span></li>
                      )}
                  </p>
                  <div className="border-b border-gray-200"></div>
                </div>
              </div>
            })
        }
      </div>
    </>
  );
}