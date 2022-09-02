import 'antd/dist/antd.css';
import '../styles/globals.css';

import { Layout } from 'antd';
import Image from 'next/image';

const { Header } = Layout;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header className="site-layout-background">
        <div className="header-title">
          <Image src="/client-logo.png" width={120} height={50} alt="logo" />
        </div>
        <h1 className="title">Receipt Parser</h1>
      </Header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
