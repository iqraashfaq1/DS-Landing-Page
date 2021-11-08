import React from 'react'
import styles from './SectionThree.module.scss';
import Image3 from '../../Assets/Images/sectionThree/image3.png';
import {Row,Col,Button} from 'reactstrap'


const SectionThree = () => {
    return (
        <div>
               <Row className={`${styles.main_container} gx-0`}>
          <Col md={12} lg={5} sm={12} xs={12} className={styles.left_col}>
          <div className={styles.col1_div}>
          <h1>The One Of One Duddy <br/>
              Experience NFT</h1>
            
            <p>
            The One of One Drop with FG Duddy for an all once in a life time chance with a live fly out where the lucky winner can fly out and meet with FGTeev Duddy to come spend the day and hang out with an one on one experience that’s never been possible before!
            </p>
            </div>
            <div className={styles.prices}>
                <h2>$350,000</h2>
                <p>10 MINTED</p>
                </div>
            <div className={styles.btn_container}>
            <Button className={styles.btn}>View Item</Button>
            </div>
          </Col>
          <Col md={12} lg={7} sm={12} xs={12} className={styles.right_col}>
          <div className={styles.col2_div}>
        
            <img className={styles.main_image} src={Image3} alt="Image" />
           
            </div>
          </Col>
        </Row>
        </div>
    )
}

export default SectionThree
