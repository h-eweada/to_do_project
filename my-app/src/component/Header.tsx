import React from 'react';


interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  return (
    <header style={{ textAlign: 'center', marginBottom: '20px' }}>
      <h1>{title} </h1>
    </header>
  );
}

export default Header;