import '../Styles/Styles.css';
import NavTabs from './NavTabs';

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">RodrigoMP</h1>
      <NavTabs />
    </header>
  );
}

export default Header;