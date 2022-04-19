export default function SummaryPanel({basics}) {
  return (
    <>
      <div className="block-section">
        <div className="block-title">Career Highlights</div>
        <div className="text-gray-600 mb-5 ml-8 list-disc">
          <ul className="">
            {
              basics.summary
                .split('\n')
                .map(
                  line =>
                  <li className="border-l-8 border-l-violet-300 rounded-md shadow-md p-5 m-5 text-justify">{line}</li>
                )
            }
          </ul>
        </div>
      </div>
    </>
  );
}