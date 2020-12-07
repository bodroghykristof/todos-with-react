import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>TODO List</h1>
      <p style={linkStyle}>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </p>
    </header>
  );
}

const headerStyle = {
  width: '100%',
  textAlign: 'center',
  padding: '10px',
  fontSize: '150%',
};

const linkStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
};
