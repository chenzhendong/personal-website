export default function InfoPanel({basics}) {
  return (
    <>
      <div className="block-section">
        <div className="block-title">Information</div>
        <div className="space-y-2 mt-5">
        <div className="flex justify-between">
            <div className="text-gray-400">Email</div>
            <div className="font-medium text-right text-gray-600">{basics.email}</div>
          </div>
          <div className="flex justify-between">
            <div className="text-gray-400">Location</div>
            <div className="font-medium text-right text-gray-600">{basics.location.region}</div>
          </div>
          <div className="flex justify-between">
            <div className="text-gray-400">Expertise</div>
            <div className="font-medium text-right text-gray-600">{basics.expertise.map(line => <p key={line} >{line}</p>)}</div>
          </div>
          <div className="flex justify-between">
            <div className="text-gray-400">Experience</div>
            <div className="font-medium text-right text-gray-600">{basics.seniority}</div>
          </div>
        </div>
      </div>
    </>
  );
}