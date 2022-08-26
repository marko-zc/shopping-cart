import React from 'react'
import { Container, Navbar, NavbarBrand, FormControl, Nav, Dropdown, Badge } from 'react-bootstrap'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
        <Container>
            <NavbarBrand>
                <Link to="/">Shopping Cart</Link>
            </NavbarBrand>
            <Navbar.Text className='search'>
                <FormControl 
                    style={{ width: 500 }}
                    placeholder='Serach a product'
                    className='m-auto'
                />
                
            </Navbar.Text>
            <Nav>
                <Dropdown alignRight>
                    <DropdownToggle variant='success'>
                        <FaShoppingCart color='white' fontSize='25px' />
                        <Badge>{10}</Badge>
                    </DropdownToggle>

                    <Dropdown.Menu style={{ minWidth: 370 }}>
                        <span style={{ padding: 10 }}>Cart is Empty!</span>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header;