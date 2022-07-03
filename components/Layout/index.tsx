import React from 'react'
import Footer from './Footer'
import Navbar from './Footer'
import Sidebar from './Sidebar'
import Head from './Head'

type Layoutprops ={
  children: React.ReactNode;
}

const Layout: React.FC<Layoutprops> = ({ children }) => {
  return (
    <React.Fragment>
      <Head title={'Creators Showcase'} />
      <div>
        <nav>
          <Navbar />
        </nav>
        <nav>
          <Sidebar />
        </nav>
        <main>

        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </React.Fragment>
  );
};

export default Layout;