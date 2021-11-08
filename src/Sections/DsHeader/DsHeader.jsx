
import React , {useState} from 'react'
import styles from './DsHeader.module.scss';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
  } from 'reactstrap';
  import './Override.scss';


const DsHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  

    return (
        <div>
            <Navbar color="light" light expand="md"  className={styles.main_nav}>
        <NavbarBrand href="/" className={styles.logo_container}>
          <h1 className={styles.logo}> DS</h1>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav  className={`${styles.nav_menu} mr-auto`} >
            <NavItem className={styles.nav_item}>
              <NavLink href="/home/">Solutions</NavLink>
            </NavItem>
            <NavItem className={styles.nav_item}>
              <NavLink href="/services/">Pricing</NavLink>
            </NavItem>
            <NavItem className={styles.nav_item}>
              <NavLink href="/blogs/">Docs</NavLink>
            </NavItem>
            <NavItem className={styles.nav_item}>
              <NavLink href="/about-us/">More</NavLink>
            </NavItem>
          
          </Nav>
          <Button className={styles.proj_btn1}> Sign In  </Button>
        
          <Button className={styles.proj_btn2}> Sign Up  </Button>
        </Collapse>
      
      </Navbar>
        
        </div>
    )
}

export default DsHeader
