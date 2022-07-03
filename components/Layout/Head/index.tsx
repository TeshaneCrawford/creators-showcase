import React from 'react'
import Head from 'next/head'

type HeaderProps = {
  title: string;
};

const index: React.FC<HeaderProps> = ({ title }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </React.Fragment>
  );
};

export default index;