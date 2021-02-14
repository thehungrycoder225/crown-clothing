import React from 'react';
import Directory from '../components/directory/directory-menu.component';
import './homepage.styles.scss';

const HomePage = () => {
  return (
    <div>
      <div className='homepage'>
        <Directory />
      </div>
    </div>
  );
};

export default HomePage;
