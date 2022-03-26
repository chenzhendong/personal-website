import ExpPanel from '../../components/expPanel'
import HtmlHead from '../../components/htmlHead'
import PageLayout from '../../components/pageLayout'
import ResumeChildren from '../../components/resumeChildren'

export default function Professional() {
  return (
    <>
      <HtmlHead />
      <PageLayout>
        <ResumeChildren>
          <ExpPanel />
        </ResumeChildren>
      </PageLayout>
    </>
  )
}
