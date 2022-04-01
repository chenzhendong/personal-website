import { useState } from "react";
import CertPanel from "./certPanel";
import EduPanel from "./eduPanel";
import ExpPanel from "./expPanel";
import InfoPanel from "./infoPanel";
import NamePanel from "./namePanel";
import SkillPanel from "./skillPanel";
import VolPanel from "./volPanel";
import TabPanel from "./tabPanel";
import SummaryPanel from "./summaryPanel";

export default function ResumeLayout({resumeData}) {
  const [curPanel, setCurPanel] = useState<string>('Summary');

  function updateCurPanel(tabName) {
    console.log("updating: " + tabName)
    setCurPanel(tabName)
  }

  function conditionalRender() {
    switch(curPanel){
      case 'Summary': {
        return SummaryPanel( {basics: resumeData.basics})
      }
      case 'Experience': {
        return ExpPanel( {work: resumeData.work} )
      }
      case 'Education': {
        return EduPanel({education: resumeData.education})
      }
      case 'Certification': {
        return CertPanel({certificates: resumeData.certificates})
      }
      case 'Volunteer': {
        return VolPanel({volunteer: resumeData.volunteer})
      }
    }
  }

  return (
    <>
        <div className='grid gap-5 lg:grid-cols-3'>
          <div className='space-y-5'>
            <NamePanel basics={resumeData.basics}/>
            <InfoPanel basics={resumeData.basics}/>
            <SkillPanel skills={resumeData.skills} />
          </div>
          <div className='space-y-5 lg:col-span-2'>
            <TabPanel basics={resumeData.basics} curPanel={curPanel} updateCurPanel={updateCurPanel} />
            {
              conditionalRender()
            }
          </div>
        </div>
    </>
  );
}
