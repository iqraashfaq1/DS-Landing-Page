import React from 'react'
import styles from './SixthSection.module.scss';
import {Row,Col} from 'reactstrap'
import Image from '../../Assets/Images/sectionSixth/image6.png'
import Icon from '../../Assets/Images/sectionSixth/icon.png'
const SixthSection = () => {
    return (
        <div className={styles.main_div}>
        <Row className={styles.main_container}>
            <Col md={12} lg={4} sm={12} xs={12} className={styles.first_col} >
            <img className={styles.main_image} src={Image} alt="Image" />
            </Col>

            <Col md={12} lg={8} sm={12} xs={12}  className={styles.second_col}>
            <img  src={Icon} alt="Image" />
                <h3>You yourself, as much as anybody in the entire universe, deserve your love and affection</h3>
                <p>Dolly Singh</p>
                


            </Col>
        </Row>
        </div>
    )
}

export default SixthSection
