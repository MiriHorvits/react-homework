// src/components/Header.jsx

function Header({ userName }) {
  return (
    <header>
      <h1>אתר לניהול משימות</h1>
      <h2>שלום, {userName}</h2>
    </header>
  );
}

export default Header;