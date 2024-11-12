import React, { useState, useEffect } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <Menu inverted color='black' borderless style={{ height: '5rem', fontSize: '1.2rem', lineHeight: '5rem',borderbottom:'white' }}>
      <Menu.Item as='a' header>
        Food Recipe Sharing 
      </Menu.Item>

      {!isMobile && (
        <Menu.Menu position='right'>
          <Menu.Item as={Link} to='/' name='home'>
            Home
          </Menu.Item>
          <Menu.Item as={Link} to='/about' name='about'>
            About
          </Menu.Item>
          <Menu.Item as={Link} to='/recipes' name='recipes'>
            Recipes
          </Menu.Item>
          <Menu.Item as={Link} to='/contact' name='contact'>
            Contact
          </Menu.Item>
        </Menu.Menu>
      )}

      {isMobile && (
        <>
          {/* <Menu.Item position='right' onClick={handleToggle}>
            <Icon name='bars' size='large' />
          </Menu.Item> */}
          <Dropdown item text='Menu' open={dropdownOpen} onClick={handleToggle} className='mobile-dropdown' style={{ width: '100%', textAlign: 'center' }}>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to='/' onClick={handleToggle}>
                Home
              </Dropdown.Item>
              <Dropdown.Item as={Link} to='/about' onClick={handleToggle}>
                About
              </Dropdown.Item>
              <Dropdown.Item as={Link} to='/recipes' onClick={handleToggle}>
                Recipes
              </Dropdown.Item>
              <Dropdown.Item as={Link} to='/contact' onClick={handleToggle}>
                Contact
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </>
      )}
    </Menu>
  );
};

export default Header;