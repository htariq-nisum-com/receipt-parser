import 'antd/dist/antd.css';
import '../styles/globals.css';

import { Layout } from 'antd';

const { Header } = Layout;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header className="site-layout-background">
        <h1 className="header-title">Receipt Parser</h1>
      </Header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
