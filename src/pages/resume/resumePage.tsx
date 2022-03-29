import HtmlHead from '../../components/htmlHead'
import PageLayout from '../../components/pageLayout'
import ResumeLayout from '../../components/resume/resumeLayout'
import yaml from 'js-yaml'
import { useEffect, useState } from 'react';

export default function ResumePage() {
  const [resumeData, setResumeData] = useState<any>()
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/resume.yaml');
      setResumeData(yaml.load(await res.text()));
      setLoaded(true)
    }
    fetchData()
  })

  return (
    <>
      <HtmlHead />
      <PageLayout>
        {loaded && <ResumeLayout resumeData={resumeData} />}
      </PageLayout>
    </>
  )
}
