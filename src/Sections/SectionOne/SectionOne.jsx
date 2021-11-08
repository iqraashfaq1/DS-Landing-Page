import React from 'react'
import {Row,Col,Button} from 'reactstrap'
import styles from './SectionOne.module.scss'
import DsHeader from '../../Sections/DsHeader/DsHeader'
import SectionTwo from '../../Sections/SectionTwo/SectionTwo'
import SectionThree from '../../Sections/SectionThree/SectionThree';
import Image1 from '../../Assets/Images/sectionOne/image1.png';
import SectionFour from '../SectionFour/SectionFour'
import SectionFifth from '../SectionFifth/SectionFifth'
import SixthSection from '../SixthSection/SixthSection'
import Footer from '../Footer/Footer'

const SectionOne = () => {
    return (
        <div>
            <DsHeader/>
             <Row className={styles.main_container}>
          <Col md={12} lg={6} sm={12} xs={12} className={styles.left_col}>
          <div className={styles.col1_div}>
            <h1>The Exclusive <br/> Dolly Singh <br/> Collection</h1>
            
            <p>
              We deal with your development through our assistance. We provide life-changing solutions with our business masterminds. Our elite programming techniques will boost up your advancement and to design your thoughts, we primely support you.
            </p>
            <div className={styles.btn_container}>
            <Button className={styles.btn1}>Get Started</Button>
            <Button className={styles.btn2}>View Collection</Button>
            </div>
            
            </div>

           
          </Col>
          <Col md={12} lg={6} sm={12} xs={12} className={styles.right_col}>
          <div className={styles.col2_div}>
            <img className={styles.main_image} src={Image1} alt="Image" />
            </div>
          </Col>
        </Row>
         <SectionTwo/> 
          <SectionThree/>
          <SectionFour/>
         <SectionFifth/>
         <SixthSection/>
         <Footer/>
        </div>
    )
}

export default SectionOne
