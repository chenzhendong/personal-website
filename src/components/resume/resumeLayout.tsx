import { useState } from "react";
import CertPanel from "./certPanel";
import EduPanel from "./eduPanel";
import ExpPanel from "./expPanel";
import InfoPanel from "./infoPanel";
import NamePanel from "./namePanel";
import SkillPanel from "./skillPanel";
import VolPanel from "./volPanel";
import TabPanel from "./tabPanel";

export default function ResumeLayout(props) {
  const [curPanel, setCurPanel] = useState<string>('Experience');

  function updateCurPanel(tabName) {
    console.log("updating: " + tabName)
    setCurPanel(tabName)
  }

  function conditionalRender() {
    switch(curPanel){
      case 'Experience': {
        return ExpPanel()
      }
      case 'Education': {
        return EduPanel()
      }
      case 'Certification': {
        return CertPanel()
      }
      case 'Volunteer': {
        return VolPanel()
      }
    }
  }

  return (
    <>
        <div className='grid gap-5 lg:grid-cols-3'>
          <div className='space-y-5'>
            <NamePanel />
            <InfoPanel />
            <SkillPanel />
          </div>
          <div className='space-y-5 lg:col-span-2'>
            <TabPanel curPanel={curPanel} updateCurPanel={updateCurPanel} />
            {
              conditionalRender()
            }
          </div>
        </div>
    </>
  );
}
