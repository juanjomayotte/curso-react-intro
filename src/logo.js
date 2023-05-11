import logo from './assets/img/logo.jpg';
import './logo.css';

function Logo() {
  return (
    <img className='logo' src={logo} alt="Logo" />
  );
}

export {Logo}