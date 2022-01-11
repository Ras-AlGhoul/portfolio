import Head from 'next/head';
import { FC } from 'react';

const PageHead: FC = () => {
  return (
    <Head>
      <title>{`Yazan's Portfolio`}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="https://i.postimg.cc/Z5V80KLn/1.png" />
    </Head>
  );
};

export default PageHead;
