import EduPanel from '../../components/eduPanel'
import HtmlHead from '../../components/htmlHead'
import PageLayout from '../../components/pageLayout'
import ResumeChildren from '../../components/resumeChildren'

export default function Education() {
  return (
    <>
      <HtmlHead />
      <PageLayout>
        <ResumeChildren>
          <EduPanel />
        </ResumeChildren>
      </PageLayout>
    </>
  )
}
