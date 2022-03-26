import { Html } from 'next/document'
import Head from 'next/head'
import PageLayout from './pageLayout'
import ResumeChildren from './resumeChildren'

export default function Document({children}) {
  return (
    <Html>
      <Head>
        <link href='https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css' rel='stylesheet' />
      </Head>
      <body>
        <PageLayout>
          <ResumeChildren>
            {children}
          </ResumeChildren>
        </PageLayout>
      </body>
    </Html>
  )
}
