export default function TabPanel({ curPanel, updateCurPanel }) {

  function handleClick(e) {
    console.log(e)
    updateCurPanel(e.target.innerText)
  }

  function renderTab(tabName) {
    let curStyle;
    if (curPanel === tabName) {
      curStyle = "menu-link-active menu-link-hove"
    } else {
      curStyle = "menu-link menu-link-hover"
    }
    return <span className={curStyle} onClick={e => handleClick(e)}>{tabName}</span>
  }

  return (
    <>
      <div className="p-7 pb-8 block-section">
        <h2 className="block-title">About me</h2>
        <p className="text-gray-600 mb-5">Libero quas veritatis nulla distinctio fuga nihil temporibus et. Quia dicta sapiente qui porro molestiae nobis incidunt voluptatem. Et voluptas sunt nihil. At perferendis voluptatem dolores nulla. Adipisci dolore non. Praesentium ipsa magnam ut quia explicabo voluptates.</p>

        <div className="flex flex-col space-y-4">
          <a href="#0" className="mail-link social-link-hover">
            <i className="bx bx-at text-xl"></i>
            {/* <span>chenzhendong@yahoo.com</span> */}
          </a>

          <ul className="flex space-x-5">
            <li>
              <a href="#0" className="social-link-hover">
                <i className="bx bxl-facebook-circle text-2xl"></i>
              </a>
            </li>
            <li>
              <a href="#0" className="social-link-hover">
                <i className="bx bxl-twitter text-2xl"></i>
              </a>
            </li>
            <li>
              <a href="#0" className="social-link-hover">
                <i className="bx bxl-github text-2xl"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="border-t border-gray-200 my-5"></div>

        <ul className="flex space-x-8 font-medium">
          <li>
            {renderTab("Experience")}
          </li>
          <li>
            {renderTab("Education")}
          </li>
          <li>
            {renderTab("Certification")}
          </li>
          <li>
            {renderTab("Volunteer")}
          </li>
        </ul>
      </div>
    </>
  );
}