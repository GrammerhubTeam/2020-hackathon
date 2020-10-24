import Head from 'next/head'
import React from 'react';
import NewNavBar from './Navbar/NewNavBar';
import BottomNav from './Footer/BottomNav';

const Layout = (props) => (
  <div>
    <Head>
      {process.env.NODE_ENV !== 'production' && (
        <link rel="stylesheet" type="text/css" href={'/_next/static/css/styles.chunk.css?v=' + Date.now()} />
      )}
    </Head>
    {/* <HeaderNavbar /> */}
    {/* <NewNavBar /> */}
    {props.children}
    {/* <Footer /> */}
    <BottomNav />
  </div>
);

export default Layout;
