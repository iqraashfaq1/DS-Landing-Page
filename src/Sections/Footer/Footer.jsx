import React from 'react'
import styles from './Footer.module.scss';
import {Row, Col, Button} from 'reactstrap';



const Footer = () => {
    return (
        <div className={styles.footer_container}>
            <Row className={styles.first_footer_container}>
                <Col className={styles.first_container} md={2} lg={2} sm={12} xs={12}>
                <ul>
                    <li> SOLUTIONS </li>
                    <li> Marketing</li>
                    <li>Analytics</li>
                    <li> Commerce</li>
                    <li> Insight</li>
                </ul>
                </Col>
                <Col className={styles.second_container} md={2} lg={2} sm={12} xs={12}>
                    <ul>
                    <li> SUPPORT</li>
                    <li> Pricing</li>
                    <li> Documentation</li>
                    <li> Guides</li>
                    <li>API Status</li>
                    </ul>
                   
                </Col>
                <Col className={styles.third_container} md={2} lg={2} sm={12} xs={12}>
                    <ul>
                    <li> COMPANY</li>
                    <li>About</li>
                    <li>Jobs</li>
                    <li>Blogs</li>
                    <li>Press</li>
                    <li>Partner</li>
                    </ul>
                   
                </Col>
                <Col className={styles.fourth_container} md={2} lg={2} sm={12} xs={12}>
                    <ul>
                    <li> LEGAL</li>
                    <li>Claim</li>
                    <li> Privacy</li>
                    <li>Terms</li>
                    </ul>
                   
                </Col>
                <Col className={styles.fifth_container} md={4} lg={4} sm={12} xs={12}>
                    <ul>
                    <li>LANGUAGE AND CURRENCY</li>

                    </ul>
                   
                    <select name="Languages"   className={styles.select_one}>
    <option value="English">English</option>
    <option value="Urdu">Urdu</option>
    <option value="French">French</option>
  </select>
  <br/>
  <select name="Currency" >
    <option value="AUD">AUD</option>
    <option value="RS">Rs</option>
    <option value="Dollar">Dollar</option>
  </select>

                </Col>
            </Row>
            <hr/>
            <Row className={styles.second_footer_container}>
                <Col className={styles.sixth_container} md={8} lg={8} sm={12} xs={12}>
<h3>Subscribe to our newsletter</h3>
<p>The latest news, articles, and resources, sent to your inbox weekly.</p>
                      </Col>
                <Col  className={styles.seventh_container} md={4} lg={4} sm={12} xs={12}> 
                <input type="email" id="email" name="email" placeholder='Enter Your Email'/>
                
                <Button>Subscribe</Button>
                </Col>
                <hr/>
            </Row>
            <Row className={styles.third_footer_container} >
                <Col md={6} lg={6} sm={12} xs={12}>
                © 2020 Workflow, Inc. All rights reserved.

                </Col>
                <Col md={6} lg={6} sm={12} xs={12}>
                <i class="fa fa-facebook-square" aria-hidden="true"></i>
                </Col>
            </Row>
        </div>
    )
}

export default Footer
