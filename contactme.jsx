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
          <style dangerouslySetInnerHTML={{__html: "\n  body{\n    background-color: #0F1020;\n  }\n  # Header\n--------------------------------------------------------------*/\n#header {\n  background: #2F195F;\n  padding: 20px 0;\n  height: 90px;\n}\n\n#header #logo {\n  float: left;\n}\n\n#header #logo h1 {\n  font-size: 36px;\n  margin: 0;\n  padding: 6px 0;\n  line-height: 1;\n  font-family: \"Raleway\", sans-serif;\n  font-weight: 700;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n}\n\n#header #logo h1 a, #header #logo h1 a:hover {\n  color: #2F195F;\n}\n\n#header #logo img {\n  padding: 0;\n  margin: 0;\n  max-height: 50px;\n}\n\n@media (max-width: 768px) {\n  #header {\n    height: 80px;\n  }\n  #header #logo h1 {\n    font-size: 26px;\n  }\n  #header #logo img {\n    max-height: 40px;\n  }\n}\n\n.is-sticky #header {\n  background:#2F195F;\n}\n\n/*--------------------------------------------------------------\n# Navigation Menu\n--------------------------------------------------------------*/\n/* Nav Menu Essentials */\n.nav-menu, .nav-menu * {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.nav-menu ul {\n  position: absolute;\n  display: none;\n  top: 100%;\n  left: 0;\n  z-index: 99;\n}\n\n.nav-menu li {\n  position: relative;\n  white-space: nowrap;\n}\n\n.nav-menu > li {\n  float: left;\n}\n\n.nav-menu li:hover > ul,\n.nav-menu li.sfHover > ul {\n  display: block;\n}\n\n.nav-menu ul ul {\n  top: 0;\n  left: 100%;\n}\n\n.nav-menu ul li {\n  min-width: 180px;\n}\n\n/* Nav Menu Arrows */\n.sf-arrows .sf-with-ul {\n  padding-right: 30px;\n}\n\n.sf-arrows .sf-with-ul:after {\n  content: \"\\f107\";\n  position: absolute;\n  right: 15px;\n  font-family: FontAwesome;\n  font-style: normal;\n  font-weight: normal;\n}\n\n.sf-arrows ul .sf-with-ul:after {\n  content: \"\\f105\";\n}\n\n/* Nav Meu Container */\n#nav-menu-container {\n  float: right;\n  margin: 5px 0;\n}\n\n@media (max-width: 768px) {\n  #nav-menu-container {\n    display: none;\n  }\n}\n\n/* Nav Meu Styling */\n.nav-menu a {\n  padding: 10px 15px;\n  text-decoration: none;\n  display: inline-block;\n  color: #fff;\n  font-family: 'Raleway', sans-serif;\n  font-weight: 300;\n  font-size: 14px;\n  outline: none;\n}\n\n.nav-menu a:hover, .nav-menu li:hover > a, .nav-menu .menu-active > a {\n  color: #03C4EB;\n}\n\n.nav-menu ul {\n  margin: 4px 0 0 15px;\n  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.08);\n}\n\n.nav-menu ul li {\n  background: #ccc;\n  border-top: 1px solid #f4f4f4;\n}\n\n.nav-menu ul li:first-child {\n  border-top: 0;\n}\n\n.nav-menu ul li:hover {\n  background: #f6f6f6;\n}\n\n.nav-menu ul li a {\n  color: #333;\n}\n\n.nav-menu ul ul {\n  margin: 0;\n}\n\n/* Mobile Nav Toggle */\n#mobile-nav-toggle {\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 999;\n  margin: 20px 20px 0 0;\n  border: 0;\n  background: none;\n  font-size: 24px;\n  display: none;\n  transition: all 0.4s;\n  outline: none;\n}\n\n#mobile-nav-toggle i {\n  color: #fff;\n}\n\n@media (max-width: 768px) {\n  #mobile-nav-toggle {\n    display: inline;\n  }\n}\n\n/* Mobile Nav Styling */\n#mobile-nav {\n  position: fixed;\n  top: 0;\n  padding-top: 18px;\n  bottom: 0;\n  z-index: 998;\n  background: rgba(0, 0, 0, 0.9);\n  left: -260px;\n  width: 260px;\n  overflow-y: auto;\n  transition: 0.4s;\n}\n\n#mobile-nav ul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\n#mobile-nav ul li {\n  position: relative;\n}\n\n#mobile-nav ul li a {\n  color: #fff;\n  font-size: 16px;\n  overflow: hidden;\n  padding: 10px 22px 10px 15px;\n  position: relative;\n  text-decoration: none;\n  width: 100%;\n  display: block;\n  outline: none;\n}\n\n#mobile-nav ul li a:hover {\n  color: #fff;\n}\n\n#mobile-nav ul li li {\n  padding-left: 30px;\n}\n\n#mobile-nav ul .menu-has-children i {\n  position: absolute;\n  right: 0;\n  z-index: 99;\n  padding: 15px;\n  cursor: pointer;\n  color: #fff;\n}\n\n#mobile-nav ul .menu-has-children i.fa-chevron-up {\n  color: #03C4EB;\n}\n\n#mobile-nav ul .menu-item-active {\n  color: #03C4EB;\n}\n\n#mobile-body-overly {\n  width: 100%;\n  height: 100%;\n  z-index: 997;\n  top: 0;\n  left: 0;\n  position: fixed;\n  background: rgba(0, 0, 0, 0.6);\n  display: none;\n}\n\n/* Mobile Nav body classes */\nbody.mobile-nav-active {\n  overflow: hidden;\n}\n\nbody.mobile-nav-active #mobile-nav {\n  left: 0;\n}\n\nbody.mobile-nav-active #mobile-nav-toggle {\n  color: #fff;\n}\n#footer {\n  background: #2F195F;\n  padding: 30px 0;\n  color: #fff;\n}\n\n#footer .copyright {\n  text-align: center;\n}\n\n#footer .credits {\n  padding-top: 10px;\n  text-align: center;\n  font-size: 13px;\n  color: #ccc;\n}\n.links {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-align: center;\n  font-size: 15px;\n  color: #ffffff;\n}\n.address {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-align: center;\n  font-size: 15px;\n  color: #ccc;\n}\n\n/* Style inputs */\ninput[type=text], select, textarea {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #ccc;\n  margin-top: 6px;\n  margin-bottom: 16px;\n  resize: vertical;\n}\n\ninput[type=submit] {\n  background-color: #4CAF50;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  cursor: pointer;\n}\n\ninput[type=submit]:hover {\n  background-color: #45a049;\n}\n\n\n/* Create two columns that float next to eachother */\n.column {\n  float: left;\n  width: 50%;\n  margin-top: 6px;\n  margin-left: 200px;\n  padding: 20px;\n}\n\n/* Clear floats after the columns */\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n  .column, input[type=submit] {\n    width: 100%;\n    margin-top: 0;\n  }\n}\nh2 {\n        font-size: 30px;\n        text-align: center;\n        color: green;\n      }\np {\n    color: black;\n    font-size: 50px;\n    font-weight: normal;\n  }\n \n\n" }} />
          {/*==========================
    Header Section
    ============================*/}
          <header id="header">
            <div className="container">
              <div id="logo" className="pull-left">
                <a href="Pathway to light.html"><img src="img/Sam.jpg" alt="" title /></a>
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
          <div style={{textAlign: 'center'}}>
            <h2>Contact Us</h2>
            <p>Swing by for a cup of coffee, or leave us a message:</p>
          </div>
          <div className="row">
            <div className="column">
              <form action="/action_page.php">
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                <label htmlFor="country">Country</label>
                <select id="country" name="country">
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="usa">USA</option>
                  <option value="usa">Kenya</option>
                  <option value="usa">Germany</option>
                  <option value="usa">Belgium</option>
                </select>
                <label htmlFor="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.." style={{height: '170px'}} defaultValue={""} />
                <input type="submit" defaultValue="Submit" />
              </form>
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
        </div>
      );
    }
  });