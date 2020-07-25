var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          {/*!DOCTYPE html*/}
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
          <link href="https://fonts.googleapis.com/css?family=Coiny" rel="stylesheet" />
          <title>About Us</title>
          <style dangerouslySetInnerHTML={{__html: "\n\t\t\t/*--------------------------------------------------------------\n# Header\n--------------------------------------------------------------*/\n#header {\n  background: #2F195F;\n  padding: 20px 0;\n  height: 90px;\n}\n\n#header #logo {\n  float: left;\n}\n\n#header #logo h1 {\n  font-size: 36px;\n  margin: 0;\n  padding: 6px 0;\n  line-height: 1;\n  font-family: \"Raleway\", sans-serif;\n  font-weight: 700;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n}\n\n#header #logo h1 a, #header #logo h1 a:hover {\n  color: #fff;\n}\n\n#header #logo img {\n  padding: 0;\n  margin: 0;\n  max-height: 50px;\n}\n\n@media (max-width: 768px) {\n  #header {\n    height: 80px;\n  }\n  #header #logo h1 {\n    font-size: 26px;\n  }\n  #header #logo img {\n    max-height: 40px;\n  }\n}\n\n.is-sticky #header {\n  background:#2F195F;\n}\n\n/*--------------------------------------------------------------\n# Navigation Menu\n--------------------------------------------------------------*/\n/* Nav Menu Essentials */\n.nav-menu, .nav-menu * {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.nav-menu ul {\n  position: absolute;\n  display: none;\n  top: 100%;\n  left: 0;\n  z-index: 99;\n}\n\n.nav-menu li {\n  position: relative;\n  white-space: nowrap;\n}\n\n.nav-menu > li {\n  float: left;\n}\n\n.nav-menu li:hover > ul,\n.nav-menu li.sfHover > ul {\n  display: block;\n}\n\n.nav-menu ul ul {\n  top: 0;\n  left: 100%;\n}\n\n.nav-menu ul li {\n  min-width: 180px;\n}\n\n/* Nav Menu Arrows */\n.sf-arrows .sf-with-ul {\n  padding-right: 30px;\n}\n\n.sf-arrows .sf-with-ul:after {\n  content: \"\\f107\";\n  position: absolute;\n  right: 15px;\n  font-family: FontAwesome;\n  font-style: normal;\n  font-weight: normal;\n}\n\n.sf-arrows ul .sf-with-ul:after {\n  content: \"\\f105\";\n}\n\n/* Nav Meu Container */\n#nav-menu-container {\n  float: right;\n  margin: 5px 0;\n}\n\n@media (max-width: 768px) {\n  #nav-menu-container {\n    display: none;\n  }\n}\n\n/* Nav Meu Styling */\n.nav-menu a {\n  padding: 10px 15px;\n  text-decoration: none;\n  display: inline-block;\n  color: #fff;\n  font-family: 'Raleway', sans-serif;\n  font-weight: 300;\n  font-size: 14px;\n  outline: none;\n}\n\n.nav-menu a:hover, .nav-menu li:hover > a, .nav-menu .menu-active > a {\n  color: #03C4EB;\n}\n\n.nav-menu ul {\n  margin: 4px 0 0 15px;\n  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.08);\n}\n\n.nav-menu ul li {\n  background: #ccc;\n  border-top: 1px solid #f4f4f4;\n}\n\n.nav-menu ul li:first-child {\n  border-top: 0;\n}\n\n.nav-menu ul li:hover {\n  background: #f6f6f6;\n}\n\n.nav-menu ul li a {\n  color: #333;\n}\n\n.nav-menu ul ul {\n  margin: 0;\n}\n\n/* Mobile Nav Toggle */\n#mobile-nav-toggle {\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 999;\n  margin: 20px 20px 0 0;\n  border: 0;\n  background: none;\n  font-size: 24px;\n  display: none;\n  transition: all 0.4s;\n  outline: none;\n}\n\n#mobile-nav-toggle i {\n  color: #fff;\n}\n\n@media (max-width: 768px) {\n  #mobile-nav-toggle {\n    display: inline;\n  }\n}\n\n/* Mobile Nav Styling */\n#mobile-nav {\n  position: fixed;\n  top: 0;\n  padding-top: 18px;\n  bottom: 0;\n  z-index: 998;\n  background: rgba(0, 0, 0, 0.9);\n  left: -260px;\n  width: 260px;\n  overflow-y: auto;\n  transition: 0.4s;\n}\n\n#mobile-nav ul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\n#mobile-nav ul li {\n  position: relative;\n}\n\n#mobile-nav ul li a {\n  color: #fff;\n  font-size: 16px;\n  overflow: hidden;\n  padding: 10px 22px 10px 15px;\n  position: relative;\n  text-decoration: none;\n  width: 100%;\n  display: block;\n  outline: none;\n}\n\n#mobile-nav ul li a:hover {\n  color: #fff;\n}\n\n#mobile-nav ul li li {\n  padding-left: 30px;\n}\n\n#mobile-nav ul .menu-has-children i {\n  position: absolute;\n  right: 0;\n  z-index: 99;\n  padding: 15px;\n  cursor: pointer;\n  color: #fff;\n}\n\n#mobile-nav ul .menu-has-children i.fa-chevron-up {\n  color: #03C4EB;\n}\n\n#mobile-nav ul .menu-item-active {\n  color: #03C4EB;\n}\n\n#mobile-body-overly {\n  width: 100%;\n  height: 100%;\n  z-index: 997;\n  top: 0;\n  left: 0;\n  position: fixed;\n  background: rgba(0, 0, 0, 0.6);\n  display: none;\n}\n\n/* Mobile Nav body classes */\nbody.mobile-nav-active {\n  overflow: hidden;\n}\n\nbody.mobile-nav-active #mobile-nav {\n  left: 0;\n}\n\nbody.mobile-nav-active #mobile-nav-toggle {\n  color: #fff;\n}\n\n\t\tbody{\n\t\t\tbackground-color: #0F1020;\n\t\t\tfont-family: 'Caveat';font-size: 22px;\n\t\t}\n\t\th1{\n\t\t\ttext-align: center;\n\t\t\tfont-family: 'Coiny';font-size: 52px;\n      padding-top: 20px;\n\t\t}\n\t\tsection {\n\t\t\tmargin: 20px;\n\t\t\tbackground-color: #FFFFFF;\n      padding-top: 10px;\n\t\t\tmargin-bottom: 10px;\n\t\t}\n\t\th2{\n\t\t\ttext-align: center;\n\t\t\tfont-family: 'Coiny';font-size: 22px;\n\t\t}\n\t\tp{\n\t\t\tmargin: 20px;\n\t\t\tpadding-bottom: 10px;\n\t\t}\n\t\n#footer {\n  background: #2F195F;\n  padding: 30px 0;\n  color: #fff;\n  font-family: \"Raleway\", sans-serif;\n}\n\n#footer .copyright {\n  text-align: center;\n}\n\n#footer .credits {\n  padding-top: 10px;\n  text-align: center;\n  font-size: 13px;\n  color: #ccc;\n}\n.links {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-align: center;\n  font-size: 15px;\n  color: #ffffff;\n}\n.address {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-align: center;\n  font-size: 15px;\n  color: #ccc;\n}\n\t" }} />
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
                      <li><a href="Favourite girl.html">About Us</a></li>
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
          <h1>ABOUT US</h1>
          <section mission>
            <h2>Mission</h2>
            <p>The primary mission of <strong>Pathway to Light</strong> is to reach out to young people with Biblical truth in the hope of pointing them to the Light 
              who is Jesus Christ. <br />We endeavor to influence the young people with the Gospel of our Lord Jesus Christ.<br /> The chief aim is that through the presentation 
              of the Gospel as a sufficient tool for all of life, that their choices in life are not influenced by the evil that surrounds them but with the truth
              of the gospel.<br /> Therefore, our prayer is that the young people are equipped with God’s word, and by God’s grace <strong>Pathway to Light</strong> will do
              it with complete patience and the sound teaching of doctrine.</p>
            <h2>Vision</h2>
            <p>Our vision is to raise a generation of young people that are acquainted with Scripture, which makes one wise for salvation through faith in
              Jesus Christ as scripture expresses in 2 Timothy 3:15. <br /> We aim at building a team that reaches out to the young people through evangelism, training,
              and discussions all for the glory of our Lord Jesus Christ.</p>
            <h2>Statement of Faith</h2>
            <p> The statements below speak the heart of our convictions as it concerns our faith:</p>
            <h2> The Holy Scriptures</h2>
            <p>We believe and teach that the Holy Scriptures which constitute the entire sixty-six books of the Bible are sufficient, infallible, and inerrant as the <br />
              original manuscripts were inspired equally in all parts by the Holy Spirit. We believe that the Bible is divinely revealed and is the authoritative word of
              God to which we are all called to faithfully submit.</p>
            <h2> The Trinity and God the Father</h2>
            <p>We believe and teach that there is only one living and true God whose being is spirit. We affirm that He is eternal, infinite, all-knowing, unchangeable<br />
              in His being, and is perfect in all His attributes.<br /> We also believe that He exists eternally in three distinct yet fully divine persons; the Father,
              the Son, and the Holy Spirit.<br /> The three persons are the same in substance, true, and eternally God in oneness, all equally deserving of worship and 
              obedience as they are equal in power and glory.</p>
            <h2> Jesus Christ (God the Son)</h2>
            <p>We believe and teach that Jesus Christ who is the second person of the Trinity, is truly God and truly man in indivisible oneness.<br /> We teach that in the incarnation, Jesus accepted humanness becoming the  God-man having been born of the Virgin Mary. In the incarnation, He revealed God to men, acted as their redeemer, and was established as the ruler over God’s kingdom.<br /> He lived a sinless life, was crucified, dead, and buried, and on the third day he was raised to life, He ascended into heaven, and will come again in glory and judgment.<br /> We teach that at the cross where He shed His blood and offered Himself sacrificially, He accomplished our redemption by acting as our mediator between man and God.</p>
            <h2> The Holy Spirit</h2>
            <p>We believe and teach that the Holy Spirit is one in substance with the Father and the Son equal in all perfect attributes expressed both in personality and deity. We recognize His sovereign work in creation, the incarnation, the divine inspiration and revelation of scripture, and the work of salvation.<br /> We teach His indwelling in the hearts of men that causes regeneration securing our salvation in Jesus Christ. <br />Further, that He performs sanctification, instruction, and empowerment of the believer in the workmanship of God’s vineyard. </p>
            <h2> Creation</h2>
            <p>We believe and teach that the Holy Spirit is one in substance with the Father and the Son equal in all perfect attributes expressed both in personality and deity. We recognize His sovereign work in creation,   <br /> the incarnation, the divine inspiration and revelation of scripture, and the work of salvation. We teach His indwelling in the hearts of men that causes regeneration securing our salvation in Jesus Christ. <br /> Further, that He performs sanctification, instruction, and empowerment of the believer in the workmanship of God’s vineyard.</p>
            <h2>  Man</h2>
            <p> We teach and believe that after God created the heavens and the earth, and the other creatures, He proceeded to create man, both male, and female, in His image and likeness. When God created man, he was created sinless and His moral responsibility was to God.<br /> God’s intention was that man should glorify God and enjoy His fellowship but Adam who was the first man sinned and woefully fell in his responsibility. Because of this, all men became corrupted by Adam’s sin for all men were in Adam except Jesus Christ. <br /> Man in his fall lost his innocence and incurred the penalty of both physical and spiritual death and by that became deserving of God’s wrath. The man was corrupted, and he morally <br />became incapable of choosing what was acceptable to God, and apart from God’s divine grace, the man forever is estranged to Him. Man has no power whatsoever to recover himself and is hopelessly lost. <br /> Therefore, we affirm that salvation is entirely God’s work as an act of His grace through the redemptive work of our Lord Jesus Christ.</p>
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