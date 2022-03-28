import HtmlHead from '../../components/htmlHead'
import PageLayout from '../../components/pageLayout'
import ResumeLayout from '../../components/resume/resumeLayout'

export default function ResumePage() {
  return (
    <>
      <HtmlHead />
      <PageLayout>
        <ResumeLayout />
      </PageLayout>
    </>
  )
}
