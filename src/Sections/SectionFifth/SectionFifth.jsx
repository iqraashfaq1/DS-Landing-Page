import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button , Row , Col
  } from 'reactstrap';
  import styles from './SectionFifth.module.scss'
  import Image from '../../Assets/Images/sectionFifth/imageFifth.png' 
const SectionFifth = () => {
    return (
        <div>
            <div className={styles.text_container}>
                <h1>The Dolly Singh Collection</h1>
            </div>
              <Row className={styles.main_container}>
                <Col className={styles.first_col} md={12} lg={4} sm={12} xs={12} >
                <Card  className={styles.first_card} >
        <img top width="100%" src={Image} alt="Card image cap" />
        
          <h1> 369$ </h1>
          <p>10 of 100 Minted</p>
          <Button className={styles.buy_now}> Buy Now</Button>

      </Card>
                </Col>
                <Col className={styles.second_col}  md={12} lg={4} sm={12} xs={12}>
                <Card className={styles.second_card}>
        <img top width="100%" src={Image} alt="Card image cap" />
        
        <h1> 369$ </h1>
          <p>10 of 100 Minted.</p>
          <Button className={styles.buy_now}> Buy Now</Button>
        
      </Card>
      </Col>
                <Col className={styles.third_col}  md={12} lg={4} sm={12} xs={12} >
                <Card className={styles.third_card}>
        <img top width="100%" src={Image} alt="Card image cap" />
    
        <h1> 369$ </h1>
          <p>10 of 100 Minted.</p>
          <Button  className={styles.buy_now}> Buy Now</Button>
        
      </Card></Col>
            </Row>
       
        </div>
    )
}

export default SectionFifth
