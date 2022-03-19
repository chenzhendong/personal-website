import Head from 'next/head'
import Link from 'next/link';

export default function HtmlHead() {
  return (
    <>
      <Head>
        <link href='https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css' rel='stylesheet' />
      </Head>
    </>
  );
}