import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './Styles/Styles.css';

function App() {
  return (
    <>
      <main className="page-wrapper">
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default App;