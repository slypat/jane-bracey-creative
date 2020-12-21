import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Resume.css';

const Resume = () => (
  <Container>
    <h1 className="text-center py-5">Resum&eacute; for Jane Bracey</h1>
    <h4>Formal Education</h4>
    <Row>
      <Col md={4}>
        <span className="font-weight-bold">
          BA (Hons) Degree in Fine Art – <span className="font-italic">2:1</span>
        </span>
      </Col>
      <Col>
        Birmingham Institute of Art and Design (BIAD) and Warwickshire College School of Art, Leamington Spa (2005-08)
      </Col>
    </Row>
    <Row className="mt-3">
      <Col md={4}>
        <span className="font-weight-bold">
          BTEC Level 3 Diploma in Foundation Studies Art &amp; Design - <span className="font-italic">Distinction</span>
        </span>
      </Col>
      <Col>Warwickshire College School of Art, Leamington Spa (2004-05)</Col>
    </Row>
    <h4>Continuing Professional Development</h4>
    <Row className="mt-3">
      <Col md={4}>
        <span className="font-weight-bold">5 day Intensive Mosaic-making Masterclass:</span> Cutting with Hammer &amp;
        Hardie; Indirect Setting &amp; Fixing in Cement; Direct Setting &amp; Fixing in Lime
      </Col>
      <Col>
        Gary Drostle (<a href="https://www.drostle.com">www.drostle.com</a>), Guilia Vogrig, Chris Smith, Alessandro
        Lugari (
        <a href="https://chicagomosaicschool.org/chicago-mosaic-school-blog/cms-news/artist-profile-alessandro-lugari">
          https://chicagomosaicschool.org/chicago-mosaic-school-blog/cms-news/artist-profile-alessandro-lugari
        </a>
        ) &amp; Will Wootton, Kings College London, UK (July 2017) See:{' '}
        <a href="https://www.lsomosaic.com/team">www.lsomosaic.com/team</a> for Vogrig, Smith &amp; Wootton
      </Col>
    </Row>
    <Row className="mt-3">
      <Col md={4}>
        <span className="font-weight-bold">Pebble Mosaic Workshop</span>
      </Col>
      <Col>
        Sue Rew (<a href="https://www.suerewmosaics.co.uk">www.suerewmosaics.co.uk</a>), Great Wolford,
        Shipston-upon-Stour, Warwickshire (Sept 2016)
      </Col>
    </Row>
    <Row className="mt-3">
      <Col md={4}>
        <span className="font-weight-bold">Mosaic Intensive – Developing Artistic Expression</span> (5 day residential)
      </Col>
      <Col>
        Delivered by Sonia King (<a href="http://mosaicworks.com/">http://mosaicworks.com/</a>) at West Dean College of
        Arts and Conservation (<a href="https://www.westdean.org.uk">www.westdean.org.uk</a>), West Sussex, UK (July
        2016)
      </Col>
    </Row>
    <Row className="mt-3">
      <Col md={4}>
        <span className="font-weight-bold">DUNLOP Introduction to Tiling Course</span> (4 day intensive)
      </Col>
      <Col>Dave Rowley, at BAL (Building Adhesives Limited), Stoke-on-Trent, UK (July 2016)</Col>
    </Row>
    <Row className="mt-3">
      <Col md={4}>
        <span className="font-weight-bold">One day Introduction to Screeds and Sub-floor Preparation</span>
      </Col>
      <Col>Dave Rowley, at BAL (Building Adhesives Limited), Stoke-on-Trent, UK (April 2016)</Col>
    </Row>
    <Row className="mt-3">
      <Col md={4}>
        <span className="font-weight-bold">Assisting Aidan Hart</span> with a commission using the Ravenna double-direct
        method
      </Col>
      <Col>
        Supporting Aidan Hart (<a href="https://aidanharticons.com/">https://aidanharticons.com/</a>) with a commission
        for a large format mosaic, double direct (Ravenna) technique using smalti: The Resurrection, for St George’s
        Orthodox Church in Houston, Texas, USA. Visit:{' '}
        <a href="https://aidanharticons.com/the-resurrection-st-george-orthodox-church-houston-texas/">
          https://aidanharticons.com/the-resurrection-st-george-orthodox-church-houston-texas/
        </a>{' '}
        for more information and an image of the finished work. (Feb 2016)
      </Col>
    </Row>
    <Row className="mt-3">
      <Col md={4}>
        <span className="font-weight-bold">Work experience with Mosaic Restoration at Westminster Cathedral</span>,
        London
      </Col>
      <Col>
        Experience with Gary Bricknell (<a href="https://www.mosaicrestoration.co.uk">www.mosaicrestoration.co.uk</a>{' '}
        based in Daventry, Northants) and his team observing and assisting with mosaic installation in the Chapel of St.
        George and the English Martyrs at Westminster Cathedral, London (January 2016)
      </Col>
    </Row>
    <Row className="mt-3">
      <Col md={4}>
        <span className="font-weight-bold">5 day Standard Intensive Mosaic Course:</span> Roman/Byzantine copy, Modern
        Mosaic work
      </Col>
      <Col>
        Luciana Notturni, la Scuola Arte del Mosaico (the Mosaic Art School{' '}
        <a href="https://www.mosaicschool.com/art/">www.mosaicschool.com/art/</a>), Ravenna, Italy (January 2016)
      </Col>
    </Row>
    <Row className="mt-3">
      <Col md={4}>
        <span className="font-weight-bold">Weekend Intensive Stained Glass Course</span>
      </Col>
      <Col>
        Creative Glass Guild (<a href="https://www.creativeglassguild.co.uk/">www.creativeglassguild.co.uk/</a>)
        Bristol, UK (May 2016)
      </Col>
    </Row>
    <Row className="mt-3">
      <Col md={4}>One day Outdoor Mosaics Course</Col>
      <Col>
        Kate Rattray (<a href="https://www.rattraymosaics.co.uk">www.rattraymosaics.co.uk</a>), Somerset Crafts Centre,
        Avalon Marshes, Westhay, Somerset (May 2014)
      </Col>
    </Row>
    <Row className="mt-3">
      <Col md={4}>Saturday Mosaics Course (x4 weeks)</Col>
      <Col>
        Catherine Parkinson (<a href="https://www.catherineparkinson.com">www.catherineparkinson.com</a>) Great Western
        Studios, London (Sept 2012)
      </Col>
    </Row>
    <Row className="mt-3">
      <Col md={4}>City and Guilds Level 3 Studio</Col>
      <Col>Mark Acton, Photography Tutor, Warwickshire College</Col>
    </Row>
    <Row className="mt-3">
      <Col md={4}>Lighting for Photography</Col>
      <Col>School of Art, Leamington Spa, Warwickshire, UK (2009)</Col>
    </Row>
    <Row className="mt-3">
      <Col md={4}>City and Guilds Level 2 Studio Lighting for Photography</Col>
      <Col>
        Mark Acton, Photography Tutor, Warwickshire College School of Art, Leamington Spa, Warwickshire, UK (2008- 09)
      </Col>
    </Row>
    <h4>Exhibitions</h4>
    <Row className="mt-3">
      <Col md={4}>It Gets Lighter from Here</Col>
      <Col>
        ‘Freedom to Begin’ video piece with original visuals and audio published online commissioned by Pentabus Theatre
        Company and Heritage &amp; Culture Warwickshire as part of an initiative coordinated by Culture Central (Dec
        2020)
      </Col>
    </Row>
    <Row className="mt-3">
      <Col md={4}>Temperance Open Art Exhibition</Col>
      <Col>Temperance Bar, Leamington Spa, Warwickshire (May 2019)</Col>
    </Row>
    <Row className="mt-3">
      <Col md={4}>Chedworth Roman Villa Art Exhibition</Col>
      <Col>
        Chedworth Roman (
        <a href="https://www.nationaltrust.org.uk/chedworth-roman-villa">
          www.nationaltrust.org.uk/chedworth-roman-villa
        </a>
        ), Yanworth, Cheltenham, Gloucestershire (Sept 2017)
      </Col>
    </Row>
    <Row className="mt-3">
      <Col md={4}>
        ‘Behind the Glass – the inner world of artists’ – exhibition exploring the inner process of mosaic artists &amp;
        the connection between creativity &amp; emotional wellbeing.
      </Col>
      <Col>
        Mosaic Exhibition curated by Concetta Perot (
        <a href="https://www.glitteringshards.com">www.glitteringshards.com</a>) at the Sound Lounge, London (June 2017)
      </Col>
    </Row>
    <Row className="mt-3">
      <Col md={4}>
        Art in the Park Festival - stand showing mosaics alongside Mosaicist Lucy Cooke (
        <a href="https://www.lucycookemosaics.co.uk">www.lucycookemosaics.co.uk</a>)
      </Col>
      <Col>
        Art in the Park Festival (www.artinpark.co.uk), Jephson Gardens, Leamington Spa, Warwickshire (May 2017)
      </Col>
    </Row>
    <Row className="mt-3">
      <Col md={4}>‘Ancient Themes, New Perspectives’</Col>
      <Col>
        Mosaic Exhibition hosted by BAMM (British Association for Modern Mosaic) at the Corinium Museum, Cirencester,
        Gloucestershire (July 2016)
      </Col>
    </Row>
    <Row className="mt-3">
      <Col md={4}>Birmingham School of Art Degree Show 2008</Col>
      <Col>BIAD (Birmingham Institute of Art &amp; Design), Margaret Street, Birmingham, UK (2008)</Col>
    </Row>
    <Row className="mt-3">
      <Col md={4}>1st Birmingham International Festival of Live &amp; Time Based Art (BIFLTBA)</Col>
      <Col>The Edge, Birmingham (2007)</Col>
    </Row>
    <Row className="mt-3">
      <Col md={4}>LSA (Leamington Studio Artists) &amp; AMA (Association of Midland Artists) Open Exhibition</Col>
      <Col>Warwickshire College School of Art, Leamington Spa (2007)</Col>
    </Row>
    <Row className="mt-3">
      <Col md={4}>‘Darling, you shouldn’t have gone to so much trouble’</Col>
      <Col>
        End of year show (2 nd year Dip.H.E. Fine Art), Warwickshire College School of Art, Leamington Spa (2007)
      </Col>
    </Row>
    <Row className="mt-3">
      <Col md={4}>‘sedUCEd’</Col>
      <Col>Exhibition at the Works Gallery, Digbeth, Birmingham (2007)</Col>
    </Row>
    <Row className="mt-3">
      <Col md={4}>‘Out to Lunch’</Col>
      <Col>Exhibition at the Warwickshire College School of Art, Leamington Spa (2007)</Col>
    </Row>
    <Row className="mt-3">
      <Col md={4}>‘Great Expectations’</Col>
      <Col>
        End of year show (1 st year Dip.H.E. Fine Art), Warwickshire College School of Art, Leamington Spa (2006)
      </Col>
    </Row>
    <Row className="mt-3">
      <Col md={4}>Foundation Art and Design Exhibition</Col>
      <Col>Warwickshire College, Leamington Spa (2005)</Col>
    </Row>
  </Container>
);

export default Resume;
