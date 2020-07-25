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
          <link href="https://fonts.googleapis.com/css?family=Caveat" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          <style dangerouslySetInnerHTML={{__html: "\n* {\n  box-sizing: border-box;\n}\n#header {\n  background: #2F195F;\n  padding: 20px 0;\n  height: 90px;\n}\n\n#header #logo {\n  float: left;\n}\n\n#header #logo h1 {\n  font-size: 36px;\n  margin: 0;\n  padding: 6px 0;\n  line-height: 1;\n  font-family: \"Raleway\", sans-serif;\n  font-weight: 700;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n}\n\n#header #logo h1 a, #header #logo h1 a:hover {\n  color: #2F195F;\n}\n\n#header #logo img {\n  padding: 0;\n  margin: 0;\n  max-height: 50px;\n}\n\n@media (max-width: 768px) {\n  #header {\n    height: 80px;\n  }\n  #header #logo h1 {\n    font-size: 26px;\n  }\n  #header #logo img {\n    max-height: 40px;\n  }\n}\n\n.is-sticky #header {\n  background:#2F195F;\n}\n\n/*--------------------------------------------------------------\n# Navigation Menu\n--------------------------------------------------------------*/\n/* Nav Menu Essentials */\n.nav-menu, .nav-menu * {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.nav-menu ul {\n  position: absolute;\n  display: none;\n  top: 100%;\n  left: 0;\n  z-index: 99;\n}\n\n.nav-menu li {\n  position: relative;\n  white-space: nowrap;\n}\n\n.nav-menu > li {\n  float: left;\n}\n\n.nav-menu li:hover > ul,\n.nav-menu li.sfHover > ul {\n  display: block;\n}\n\n.nav-menu ul ul {\n  top: 0;\n  left: 100%;\n}\n\n.nav-menu ul li {\n  min-width: 180px;\n}\n\n/* Nav Menu Arrows */\n.sf-arrows .sf-with-ul {\n  padding-right: 30px;\n}\n\n.sf-arrows .sf-with-ul:after {\n  content: \"\\f107\";\n  position: absolute;\n  right: 15px;\n  font-family: FontAwesome;\n  font-style: normal;\n  font-weight: normal;\n}\n\n.sf-arrows ul .sf-with-ul:after {\n  content: \"\\f105\";\n}\n\n/* Nav Meu Container */\n#nav-menu-container {\n  float: right;\n  margin: 5px 0;\n}\n\n@media (max-width: 768px) {\n  #nav-menu-container {\n    display: none;\n  }\n}\n\n/* Nav Meu Styling */\n.nav-menu a {\n  padding: 10px 15px;\n  text-decoration: none;\n  display: inline-block;\n  color: #fff;\n  font-family: 'Raleway', sans-serif;\n  font-weight: 300;\n  font-size: 14px;\n  outline: none;\n}\n\n.nav-menu a:hover, .nav-menu li:hover > a, .nav-menu .menu-active > a {\n  color: #03C4EB;\n}\n\n.nav-menu ul {\n  margin: 4px 0 0 15px;\n  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.08);\n}\n\n.nav-menu ul li {\n  background: #ccc;\n  border-top: 1px solid #f4f4f4;\n}\n\n.nav-menu ul li:first-child {\n  border-top: 0;\n}\n\n.nav-menu ul li:hover {\n  background: #f6f6f6;\n}\n\n.nav-menu ul li a {\n  color: #333;\n}\n\n.nav-menu ul ul {\n  margin: 0;\n}\n\n/* Mobile Nav Toggle */\n#mobile-nav-toggle {\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 999;\n  margin: 20px 20px 0 0;\n  border: 0;\n  background: none;\n  font-size: 24px;\n  display: none;\n  transition: all 0.4s;\n  outline: none;\n}\n\n#mobile-nav-toggle i {\n  color: #fff;\n}\n\n@media (max-width: 768px) {\n  #mobile-nav-toggle {\n    display: inline;\n  }\n}\n\n/* Mobile Nav Styling */\n#mobile-nav {\n  position: fixed;\n  top: 0;\n  padding-top: 18px;\n  bottom: 0;\n  z-index: 998;\n  background: rgba(0, 0, 0, 0.9);\n  left: -260px;\n  width: 260px;\n  overflow-y: auto;\n  transition: 0.4s;\n}\n\n#mobile-nav ul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\n#mobile-nav ul li {\n  position: relative;\n}\n\n#mobile-nav ul li a {\n  color: #fff;\n  font-size: 16px;\n  overflow: hidden;\n  padding: 10px 22px 10px 15px;\n  position: relative;\n  text-decoration: none;\n  width: 100%;\n  display: block;\n  outline: none;\n}\n\n#mobile-nav ul li a:hover {\n  color: #fff;\n}\n\n#mobile-nav ul li li {\n  padding-left: 30px;\n}\n\n#mobile-nav ul .menu-has-children i {\n  position: absolute;\n  right: 0;\n  z-index: 99;\n  padding: 15px;\n  cursor: pointer;\n  color: #fff;\n}\n\n#mobile-nav ul .menu-has-children i.fa-chevron-up {\n  color: #03C4EB;\n}\n\n#mobile-nav ul .menu-item-active {\n  color: #03C4EB;\n}\n\n#mobile-body-overly {\n  width: 100%;\n  height: 100%;\n  z-index: 997;\n  top: 0;\n  left: 0;\n  position: fixed;\n  background: rgba(0, 0, 0, 0.6);\n  display: none;\n}\n\n/* Mobile Nav body classes */\nbody.mobile-nav-active {\n  overflow: hidden;\n}\n\nbody.mobile-nav-active #mobile-nav {\n  left: 0;\n}\n\nbody.mobile-nav-active #mobile-nav-toggle {\n  color: #fff;\n}\n\n\n#footer {\n  background: #2F195F;\n  padding: 30px 0;\n  color: #fff;\n}\n\n#footer .copyright {\n  text-align: center;\n}\n\n#footer .credits {\n  padding-top: 10px;\n  text-align: center;\n  font-size: 13px;\n  color: #ccc;\n}\n.links {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-align: center;\n  font-size: 15px;\n  color: #ffffff;\n}\n.address {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-align: center;\n  font-size: 15px;\n  color: #ccc;\n}\ndiv#container1{\n  font-family: 'Caveat'; font-size: 22px;;\n  padding: 10px;\n  background: #1C448E;\n  max-height: 300px;\n}\n/* Header/Blog Title */\n\n\n/* Style the top navigation bar */\n.topnav {\n  overflow: hidden;\n  background-color:#094074;\n  position: fixed;\n  top:0;\n  width: 100%;\n}\n.accordion{\nmax-width:700px\nbox-shadow: 0 0 10px #52FFEE;\noverflow:hidden;\nfont-family: 'Caveat';\nbackground: #094074;\n}\n.accordion__label,\n.accordion__content{\npadding :14px 20px;\n}\n.accordion__label{\ndisplay:block;\ncolor:#ffffff;\nfont-weight:500;\ncursor:pointer;\nposition: relative;\ntransition: background 0.1s;\n}\n.accordion__label:hover{\nbackground:#405c8a;\n}\n.accordion__label::after{\ncontent:\"\";\nposition:absolute;\ntop:50%;\ntransform:translateY(-50%);\nright: 20px;\nwidth:12px;\nheight:6px;\nbackground-image: url('data:image/svg+xml;utf8,<svg width=\"100\" height=\"50\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"0,0 100,0 50,50\" style=\"fill:%23FFFFFF99;\" /></svg>');\n  background-size: contain;\n  transition: transform 0.4s;\n}\n\n.accordion__content {\n  background: #ffffff;\n  line-height: 1.6;\n  font-size: 0.85em;\n  display: none;\n}\n\n.accordion__input {\n  display: none;\n}\n\n.accordion__input:checked ~ .accordion__content {\n  display: block;\n}\n\n.accordion__input:checked ~ .accordion__label::after {\n  transform: translateY(-50%) rotate(0.5turn);\n}\n\n}\n/* Style the topnav links */\n.topnav a {\n  float: right;\n  display: block;\n  color: #f2f2f2;\n  margin-left: 0px;\n  text-align: center;\n  padding: 14px 30px;\n  text-decoration: none;\n}\n div#container{\n  \t max-width: 70%;\n    text-align: center;\n    background-color: white;\n    margin: 0px auto;\n    margin-top: 5%;\n  }\n\n/* Change color on hover */\n.topnav a:hover {\n  background-color: #3E7CB1;\n  color: black;\n}\n.active{\nbackground-color:#0496FF;\n}\n.checkbtn\n{\n  font-size: 30px;\n  color: white;\n  float: right;\n  line-height: 0px;\n  margin-right: 40px;\n  cursor: pointer;\n} \n#check\n{\n  display: none;\n}\n\n/* Create two unequal columns that floats next to each other */\n/* Left column */\n.leftcolumn {   \n  float: ;\n  width: 100%;\n}\n\n/* Right column */\n\n\n\n\n/* Add a card effect for articles */\n.card {\n  background-color: white;\n  padding: 20px;\n  margin-top: 20px;\n}\n\n/* Clear floats after the columns */\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/* Footer */\n.footer {\n  padding: 20px;\n  text-align: center;\n  background: #1C448E;\n  margin-top: 20px;\n  color: white;\n  max-height: 10%;\n}\n\n/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 800px) {\n  .leftcolumn {   \n    width: 100%;\n    padding: 0;\n  }\n}\n\n/* Responsive layout - when the screen is less than 400px wide, make the navigation links stack on top of each other instead of next to each other */\n@media screen and (max-width: 400px) {\n  .topnav a {\n    float: none;\n    width: 100%;\n  }\n}\n" }} />
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
                      <li><a href="Read 1.html">Read</a></li>
                      <li><a href="Listen Up.html">Listen</a></li>
                      <li><a href="Pathway to light.html">Home</a></li>
                    </ul>
                  </li>
                </ul>
              </nav>
              {/* #nav-menu-container */}
            </div>
          </header>
          <div id="container1">
            <div id="container">
              <div className="row">
                <div className="leftcolumn">
                  <div className="card">
                    <div className="accordion">
                      <div>
                        <input type="checkbox" name="questions_accordion" id="Author" className="accordion__input" />
                        <label htmlFor="Author" className="accordion__label"> Who is the Author?</label>
                        <div className="accordion__content">
                          <p>
                            The author is Samuel Njoroge
                          </p>
                        </div>
                      </div>
                      <div>
                        <input type="checkbox" name="questions_accordion" id="Duration" className="accordion__input" />
                        <label htmlFor="Duration" className="accordion__label"> How long ago?</label>
                        <div className="accordion__content">
                          <p>
                            The website was published in July 31st the year 2020.
                          </p>
                        </div>
                      </div>
                      <div>
                        <input type="checkbox" name="questions_accordion" id="Host" className="accordion__input" />
                        <label htmlFor="Host" className="accordion__label"> Who is the Host</label>
                        <div className="accordion__content">
                          <p>
                            The website is hosted on a .com server
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
          </div></div>
      );
    }
  });