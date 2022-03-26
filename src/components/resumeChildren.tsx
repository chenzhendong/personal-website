import InfoPanel from "./infoPanel";
import NamePanel from "./namePanel";
import NavPanel from "./navPanel";
import SkillPanel from "./skillPanel";

export default function ResumeChildren(props) {
  return (
    <>
        <div className='grid gap-5 lg:grid-cols-3'>
          <div className='space-y-5'>
            <NamePanel />
            <InfoPanel />
            <SkillPanel />
          </div>
          <div className='space-y-5 lg:col-span-2'>
            <NavPanel />
            {props.children}
          </div>
        </div>
    </>
  );
}
