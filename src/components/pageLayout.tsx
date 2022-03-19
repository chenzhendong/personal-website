import EduPanel from "./eduPanel";
import ExpPanel from "./expPanel";
import InfoPanel from "./infoPanel";
import NamePanel from "./namePanel";
import NavPanel from "./navPanel";
import SkillPanel from "./skillPanel";

export default function PageLayout() {
  return (
    <main className='bg-gray-100 antialiased mx-auto p-4 max-w-screen-sm md:max-w-screen-xl lg：max-w-screen-2xl'>
      <div className='grid gap-5 lg:grid-cols-3'>
        <div className='space-y-5'>
          <NamePanel />
          <InfoPanel />
          <SkillPanel />
        </div>
        <div className='space-y-5 lg:col-span-2'>
          <NavPanel />
          <ExpPanel />
          <EduPanel />
        </div>
      </div>
    </main>
  )
}
