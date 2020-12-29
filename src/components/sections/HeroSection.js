import React from 'react';
import './HeroSection.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

function HeroSection({
  lightBg,
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart
}) {
  return (
    <>
      <Container fluid className={lightBg ? 'hero' : 'hero darkBg'}>
          <Row className='align-items-center'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <Col className='col-md-6'>
                <div className='top-line'>{topLine}</div>
                <h1 className={lightBg ? 'heading dark' : 'heading'}>
                  {headline}
                </h1>
                <section className={lightBg? 'hero-desc dark' : 'hero-desc' }>
                  <p>{description.p1}</p>
                  <p>{description.p2}</p>
                  <p>{description.p3}</p>
                </section>
                <Link to='/sign-up'>
                  <Button buttonStyle='btn--dark' buttonSize='btn--large'>
                    {buttonLabel}
                  </Button>
                </Link>
            </Col>
            <Col className='col-md-6'>
              <img src={img} alt={alt} className='hero-img' />
            </Col>
          </Row>
      </Container>
      <div className={lightBg ? 'black-slope' : 'white-slope' }></div>
    </>
  );
}

export default HeroSection;