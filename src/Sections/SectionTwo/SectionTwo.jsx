import React from 'react'
import Image2 from '../../Assets/Images/sectionTwo/image2.png';
import styles from './SectionTwo.module.scss';
import {Row,Col,Button} from 'reactstrap'


const SectionTwo = () => {
    return (
        <div>
             <Row className={styles.main_container}>
          <Col md={12} lg={6} sm={12} xs={12} className={styles.left_col}>
          <div className={styles.col1_div}>
          <img className={styles.main_image} src={Image2} alt="Image" />
            </div>
          </Col>
          <Col md={12} lg={6} sm={12} xs={12} className={styles.right_col}>
          <div className={styles.col2_div}>
          <h1>The Dolly Singh Collection</h1>
            
            <p>
            The One of One Drop with FG Duddy for an all once in a life time chance with a live fly out where the lucky winner can fly out and meet with FGTeev Duddy to come spend the day and hang out with an one on one experience that’s never been possible before!
            </p>
            <Row className={styles.hours_row} >
                <Col className={styles.hours_col1}>
                <h2>36 Hours</h2>
                <p>Limited Time</p>
                </Col>
                <Col className={styles.hours_col2}>
                <h2>1000</h2>
                <p>NFT's Edition</p>
                </Col>
                <Col className={styles.hours_col3}>
                <h2>1000+</h2>
                <p>Unlockable</p></Col>
            </Row>
            <div className={styles.btn_container}>
            <Button className={styles.btn}>View Collection</Button>
            </div>
            </div>
          </Col>
        </Row>
        </div>
    )
}

export default SectionTwo
