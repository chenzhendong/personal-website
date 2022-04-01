export default function CertPanel({ certificates }) {
  return (
    <>
      <div className="p-10 block-section">
        <h2 className="block-title">Certification</h2>
        {
          certificates.map(
            (cert) => {
              return <div className="mb-5 item-section mx-10 px-10">
                <div className="w-full space-y-5">
                  <div className="item-header items-end">
                    <div className="space-y-1.5">
                      <div className="font-medium">{cert.name}</div>
                      <div className="flex space-x-5">
                        <div className="item-header-info">
                          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path>
                          </svg>
                          <span>{cert.issuer}</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1.5 sm:text-right">
                      <div className="item-header-info">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-gray-200"></div>
                </div>
              </div>
            })
        }

      </div>
    </>
  );
}