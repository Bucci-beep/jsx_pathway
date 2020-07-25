var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="utf-8" />
          <title>Imperial Boootstrap Template</title>
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <meta content name="keywords" />
          <meta content name="description" />
          {/* Facebook Opengraph integration: https://developers.facebook.com/docs/sharing/opengraph */}
          <meta property="og:title" content />
          <meta property="og:image" content />
          <meta property="og:url" content />
          <meta property="og:site_name" content />
          <meta property="og:description" content />
          {/* Twitter Cards integration: https://dev.twitter.com/cards/  */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content />
          <meta name="twitter:title" content />
          <meta name="twitter:description" content />
          <meta name="twitter:image" content />
          {/* Place your favicon.ico and apple-touch-icon.png in the template root directory */}
          <link href="favicon.ico" rel="shortcut icon" />
          {/* Google Fonts */}
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Raleway:300,400,500,700,800" rel="stylesheet" />
          {/* Bootstrap CSS File */}
          <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
          {/* Libraries CSS Files */}
          <link href="lib/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
          <link href="lib/animate-css/animate.min.css" rel="stylesheet" />
          {/* Main Stylesheet File */}
          <link href="css/style.css" rel="stylesheet" />
          {/* =======================================================
      Theme Name: Imperial
      Theme URL: https://bootstrapmade.com/imperial-free-onepage-bootstrap-theme/
      Author: BootstrapMade.com
      Author URL: https://bootstrapmade.com
    ======================================================= */}
          <link href="https://fonts.googleapis.com/css?family=Caveat" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Covered By Your Grace" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Coiny" rel="stylesheet" />
          <style dangerouslySetInnerHTML={{__html: "\n    body {\n  background: #0582CA;\n  color: #666666;\n  font-family: \"Open Sans\", sans-serif;\n}\n p{\n      font-size: 16px;\n  letter-spacing: 1px;\n     font-family: 'Caveat';font-size: 22px;\n      \n    }\n    p.italic {\n  font-family: 'Covered By Your Grace';font-size: 32px;\n  }\na {\n  color: #03C4EB;\n  transition: 0.5s;\n}\n\na:hover, a:active, a:focus {\n  color: #03c5ec;\n  outline: none;\n  text-decoration: none;\n}\n\np {\n  padding: 0;\n  margin: 0 0 30px 0;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Raleway\", sans-serif;\n  font-weight: 400;\n  margin: 0 0 20px 0;\n  padding: 0;\n}\n\n/* Prelaoder */\n#preloader {\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 999;\n  width: 100%;\n  height: 100%;\n  overflow: visible;\n  background: #fff url(\"../img/preloader.svg\") no-repeat center center;\n}\n\n/* Back to top button */\n.back-to-top {\n  position: fixed;\n  display: none;\n  background: rgba(0, 0, 0, 0.2);\n  color: #fff;\n  padding: 6px 12px 9px 12px;\n  font-size: 16px;\n  border-radius: 2px;\n  right: 15px;\n  bottom: 15px;\n  transition: background 0.5s;\n}\n\n@media (max-width: 768px) {\n  .back-to-top {\n    bottom: 15px;\n  }\n}\n\n.back-to-top:focus {\n  background: rgba(0, 0, 0, 0.2);\n  color: #fff;\n  outline: none;\n}\n\n.back-to-top:hover {\n  background: #03C4EB;\n  color: #fff;\n}\n\n/*--------------------------------------------------------------\n# Welcome\n--------------------------------------------------------------*/\n#hero {\n  display: table;\n  width: 100%;\n  height: 100vh;\n  background: url(../img/Sam-bg.jpg) top center;\n  background-size: cover;\n}\n#hero.image{\n  background: url(../img/Sam-bg.jpg) top center;\n  background-size: cover;\n}\n@media (min-width: 1024px) {\n  #hero {\n    background-attachment: fixed;\n  }\n}\n\n#hero .hero-logo {\n  margin: 20px;\n}\n\n#hero .hero-logo img {\n  max-width: 100%;\n}\n\n#hero .hero-container {\n  background: rgba(0, 0, 0, 0.8);\n  display: table-cell;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n  vertical-align: middle;\n}\n\n#hero h1 {\n  margin: 30px 0 10px 0;\n  font-weight: 700;\n  line-height: 48px;\n  text-transform: uppercase;\n  color: #fff;\n}\n\n@media (max-width: 768px) {\n  #hero h1 {\n    font-size: 28px;\n    line-height: 36px;\n  }\n}\n\n#hero h2 {\n  color: #999;\n  margin-bottom: 50px;\n  font-family: 'Coiny';font-size: 32px;\n}\n\n@media (max-width: 768px) {\n  #hero h2 {\n    font-size: 24px;\n    line-height: 26px;\n    margin-bottom: 30px;\n  }\n  #hero h2 .rotating {\n    display: block;\n  }\n}\n\n#hero .rotating > .animated {\n  display: inline-block;\n}\n\n#hero .actions a {\n  font-family: \"Raleway\", sans-serif;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 16px;\n  letter-spacing: 1px;\n  display: inline-block;\n  padding: 8px 20px;\n  border-radius: 2px;\n  transition: 0.5s;\n  margin: 10px;\n}\n\n#hero .btn-get-started {\n  background: #03C4EB;\n  border: 2px solid #03C4EB;\n  color: #fff;\n}\n\n#hero .btn-get-started:hover {\n  background: none;\n  border: 2px solid #fff;\n  color: #fff;\n}\n\n#hero .btn-services {\n  border: 2px solid #fff;\n  color: #fff;\n}\n\n#hero .btn-services:hover {\n  background: #03C4EB;\n  border: 2px solid #03C4EB;\n}\n\n/*--------------------------------------------------------------\n# Header\n--------------------------------------------------------------*/\n#header {\n  background: DodgerBlue;\n  padding: 20px 0;\n  height: 90px;\n}\n\n#header #logo {\n  float: left;\n}\n\n#header #logo h1 {\n  font-size: 36px;\n  margin: 0;\n  padding: 6px 0;\n  line-height: 1;\n  font-family: \"Raleway\", sans-serif;\n  font-weight: 700;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n}\n\n#header #logo h1 a, #header #logo h1 a:hover {\n  color: #fff;\n}\n\n#header #logo img {\n  padding: 0;\n  margin: 0;\n  max-height: 50px;\n}\n\n@media (max-width: 768px) {\n  #header {\n    height: 80px;\n  }\n  #header #logo h1 {\n    font-size: 26px;\n  }\n  #header #logo img {\n    max-height: 40px;\n  }\n}\n\n.is-sticky #header {\n  background:DodgerBlue;\n}\n\n/*--------------------------------------------------------------\n# Navigation Menu\n--------------------------------------------------------------*/\n/* Nav Menu Essentials */\n.nav-menu, .nav-menu * {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.nav-menu ul {\n  position: absolute;\n  display: none;\n  top: 100%;\n  left: 0;\n  z-index: 99;\n}\n\n.nav-menu li {\n  position: relative;\n  white-space: nowrap;\n}\n\n.nav-menu > li {\n  float: left;\n}\n\n.nav-menu li:hover > ul,\n.nav-menu li.sfHover > ul {\n  display: block;\n}\n\n.nav-menu ul ul {\n  top: 0;\n  left: 100%;\n}\n\n.nav-menu ul li {\n  min-width: 180px;\n}\n\n/* Nav Menu Arrows */\n.sf-arrows .sf-with-ul {\n  padding-right: 30px;\n}\n\n.sf-arrows .sf-with-ul:after {\n  content: \"\\f107\";\n  position: absolute;\n  right: 15px;\n  font-family: FontAwesome;\n  font-style: normal;\n  font-weight: normal;\n}\n\n.sf-arrows ul .sf-with-ul:after {\n  content: \"\\f105\";\n}\n\n/* Nav Meu Container */\n#nav-menu-container {\n  float: right;\n  margin: 5px 0;\n}\n\n@media (max-width: 768px) {\n  #nav-menu-container {\n    display: none;\n  }\n}\n\n/* Nav Meu Styling */\n.nav-menu a {\n  padding: 10px 15px;\n  text-decoration: none;\n  display: inline-block;\n  color: #fff;\n  font-family: 'Raleway', sans-serif;\n  font-weight: 300;\n  font-size: 14px;\n  outline: none;\n}\n\n.nav-menu a:hover, .nav-menu li:hover > a, .nav-menu .menu-active > a {\n  color: #03C4EB;\n}\n\n.nav-menu ul {\n  margin: 4px 0 0 15px;\n  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.08);\n}\n\n.nav-menu ul li {\n  background: #ccc;\n  border-top: 1px solid #f4f4f4;\n}\n\n.nav-menu ul li:first-child {\n  border-top: 0;\n}\n\n.nav-menu ul li:hover {\n  background: #f6f6f6;\n}\n\n.nav-menu ul li a {\n  color: #333;\n}\n\n.nav-menu ul ul {\n  margin: 0;\n}\n\n/* Mobile Nav Toggle */\n#mobile-nav-toggle {\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 999;\n  margin: 20px 20px 0 0;\n  border: 0;\n  background: none;\n  font-size: 24px;\n  display: none;\n  transition: all 0.4s;\n  outline: none;\n}\n\n#mobile-nav-toggle i {\n  color: #fff;\n}\n\n@media (max-width: 768px) {\n  #mobile-nav-toggle {\n    display: inline;\n  }\n}\n\n/* Mobile Nav Styling */\n#mobile-nav {\n  position: fixed;\n  top: 0;\n  padding-top: 18px;\n  bottom: 0;\n  z-index: 998;\n  background: rgba(0, 0, 0, 0.9);\n  left: -260px;\n  width: 260px;\n  overflow-y: auto;\n  transition: 0.4s;\n}\n\n#mobile-nav ul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\n#mobile-nav ul li {\n  position: relative;\n}\n\n#mobile-nav ul li a {\n  color: #fff;\n  font-size: 16px;\n  overflow: hidden;\n  padding: 10px 22px 10px 15px;\n  position: relative;\n  text-decoration: none;\n  width: 100%;\n  display: block;\n  outline: none;\n}\n\n#mobile-nav ul li a:hover {\n  color: #fff;\n}\n\n#mobile-nav ul li li {\n  padding-left: 30px;\n}\n\n#mobile-nav ul .menu-has-children i {\n  position: absolute;\n  right: 0;\n  z-index: 99;\n  padding: 15px;\n  cursor: pointer;\n  color: #fff;\n}\n\n#mobile-nav ul .menu-has-children i.fa-chevron-up {\n  color: #03C4EB;\n}\n\n#mobile-nav ul .menu-item-active {\n  color: #03C4EB;\n}\n\n#mobile-body-overly {\n  width: 100%;\n  height: 100%;\n  z-index: 997;\n  top: 0;\n  left: 0;\n  position: fixed;\n  background: rgba(0, 0, 0, 0.6);\n  display: none;\n}\n\n/* Mobile Nav body classes */\nbody.mobile-nav-active {\n  overflow: hidden;\n}\n\nbody.mobile-nav-active #mobile-nav {\n  left: 0;\n}\n\nbody.mobile-nav-active #mobile-nav-toggle {\n  color: #fff;\n}\n\n\n#footer {\n  background: DodgerBlue;\n  padding: 30px 0;\n  color: #fff;\n}\n\n#footer .copyright {\n  text-align: center;\n}\n\n#footer .credits {\n  padding-top: 10px;\n  text-align: center;\n  font-size: 13px;\n  color: #ccc;\n}\n.links {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-align: center;\n  font-size: 15px;\n  color: #ffffff;\n}\n.address {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-align: center;\n  font-size: 15px;\n  color: #ccc;\n}\n  " }} />
          {/*==========================
    Header Section
    ============================*/}
          <header id="header">
            <div className="container">
              <div id="logo" className="pull-left">
                <a href="#hero"><img src="img/Sam.jpg" alt="" title /></a>
                {/* Uncomment below if you prefer to use a text image */}
                {/*<h1><a href="#hero">Header 1</a></h1>*/}
              </div>
              <nav id="nav-menu-container">
                <ul className="nav-menu">
                  <li className="menu-has-children"><a href>Menu</a>
                    <ul>
                      <li><a href="About Us.html">About Us</a></li>
                      <li><a href="contact me.html">Contact Me</a></li>
                      <li><a href="Help.html">Help</a></li>
                      <li><a href="Privacy.html">Privacy</a></li>
                    </ul>
                  </li>
                </ul>
              </nav>
              {/* #nav-menu-container */}
            </div>
          </header>
          {/* #header */}
          <div id="preloader" />
          {/*==========================
    Hero Section
    ============================*/}
          <section id="hero">
            <div className="hero-container">
              <div className="wow fadeIn">
                <h1>Pathway To Light</h1>
                <h2>Jesus Christ our Lord <span className="rotating">is the light of young people, is the life of young people</span></h2>
                <div className="actions">
                  <a href="#about" className="btn-get-started">Listen</a>
                  <a href="Read 1.html" className="btn-services">Read</a>
                </div>
              </div>
            </div>
          </section>
          {/*==========================
    Header Section
    ============================*/}
          <section id="about">
            <div className="container wow fadeInUp">
              <div className="row">
                <div className="col-md-12">
                  <h3 className="section-title">Welcome</h3>
                  <div className="section-title-divider" />
                  <p className="section-description">"We are alive to the fact that young people around the world have passions fueled by their inquisitiveness of life. However, many of these passions lead young people into a destructive lifestyle which unfortunately ends up with a devastating emptiness because they are disappointed at life for not fulfilling their deepest desires. In light of this, what is needed is sound instruction and the learning of truth that would lead to a purposeful life. However, truth is rear in such a world and that’s why in recognition of this fact, we submit to the truth of God’s word because we believe that it is the truth that is liberating from an empty life. What young people need is to pursue godly living and seek the knowledge of the truth. Young people desperately need to hear the word of truth as they struggle through the intricacies of their formative years.
                    With this in mind, we submit to the authority and instruction of the Bible as the living word of God to a man that is sufficient for all godly living. We are guided by the scripture in John 1:4 “In Him was life, and the life was the light of men.” Pathway to Light in its commitment to teaching godly living for young people is committed to teaching scripture by correctly handling the word of truth. We desire to see the young people pursue righteousness, faith, love, and peace, along with those who call on the Lord from a pure heart. Our deep-hearted prayer is that young people come to their senses and escape from the snares of the devil because we understand that these destructive lifestyles are a snare of the devil capturing young people to do his will."
                  </p>
                  <p className="italic">Samuel Njoroge</p>
                </div>
              </div>
            </div>
          </section>
          <footer id="footer">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="copyright">
                    © Copyright <strong>UGI &amp; BUCCI</strong>. All Rights Reserved
                  </div>
                  <div className="links">
                    <a href="contact me.html">Contact Me</a> |<a href="Help.html">Help</a> |<a href="Privacy.html">Privacy</a>|
                    <div className="credits">
                      {/*
                All the links in the footer should remain intact.
                You can delete the links only if you purchased the pro version.
                Licensing information: https://bootstrapmade.com/license/
                Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Imperial
              */}
                      <a href="https://facebook.com/">Facebook</a> |<a href="https://instagram.com/">Instagram</a> |<a href="https://Twitter.com/">Twitter</a> |
                    </div>
                    <div className="address">
                      <strong>Galana Plaza, Galana Road off Argwings Kodhek, Nairobi </strong>   
                    </div>
                  </div>
                </div>
              </div>
            </div></footer>
          {/* #footer */}
          <a href="#" className="back-to-top"><i className="fa fa-chevron-up" /></a>
          {/* Required JavaScript Libraries */}
          {/* Template Specisifc Custom Javascript File */}
        </div>
      );
    }
  });