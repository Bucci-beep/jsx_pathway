var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Front page</title>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,800,900" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900" rel="stylesheet" />
          <link rel="stylesheet" href="css/bootstrap.css" />
          <link rel="stylesheet" href="css/font-awesome.min.css" />
          <link rel="stylesheet" href="css/owl.carousel.min.css" />
          <link rel="stylesheet" href="css/owl.theme.default.min.css" />
          <link rel="stylesheet" href="style.css" />
          <link rel="stylesheet" href="responsive.css" />
          <style dangerouslySetInnerHTML={{__html: "\n\t@font-face {\n    font-family: Geometria;\n    src: url(geometria_font/Geometria.ttf);\n    font-weight: 300;\n}\n\n@font-face {\n    font-family: Geometria;\n    src: url(geometria_font/Geometria-Bold.ttf);\n    font-weight: 700;\n}\n\n@font-face {\n    font-family: Geometria;\n    src: url(geometria_font/Geometria-ExtraBold.ttf);\n    font-weight: 800;\n}\n\n@font-face {\n    font-family: Geometria;\n    src: url(geometria_font/geometria-light.ttf);\n    font-weight: 400;\n}\n\n@font-face {\n    font-family: Geometria;\n    src: url(geometria_font/geometria-medium.ttf);\n    font-weight: 500;\n}\n\n/*--------------------------------------------------------------\n# Header\n--------------------------------------------------------------*/\n#header {\n  background: #2F195F;\n  padding: 20px 0;\n  height: 90px;\n}\n\n#header #logo {\n  float: left;\n}\n\n#header #logo h1 {\n  font-size: 36px;\n  margin: 0;\n  padding: 6px 0;\n  line-height: 1;\n  font-family: \"Raleway\", sans-serif;\n  font-weight: 700;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n}\n\n#header #logo h1 a, #header #logo h1 a:hover {\n  color: #2F195F;\n}\n\n#header #logo img {\n  padding: 0;\n  margin: 0;\n  max-height: 50px;\n}\n\n@media (max-width: 768px) {\n  #header {\n    height: 80px;\n  }\n  #header #logo h1 {\n    font-size: 26px;\n  }\n  #header #logo img {\n    max-height: 40px;\n  }\n}\n\n.is-sticky #header {\n  background:#2F195F;\n}\n\n/*--------------------------------------------------------------\n# Navigation Menu\n--------------------------------------------------------------*/\n/* Nav Menu Essentials */\n.nav-menu, .nav-menu * {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.nav-menu ul {\n  position: absolute;\n  display: none;\n  top: 100%;\n  left: 0;\n  z-index: 99;\n}\n\n.nav-menu li {\n  position: relative;\n  white-space: nowrap;\n}\n\n.nav-menu > li {\n  float: left;\n}\n\n.nav-menu li:hover > ul,\n.nav-menu li.sfHover > ul {\n  display: block;\n}\n\n.nav-menu ul ul {\n  top: 0;\n  left: 100%;\n}\n\n.nav-menu ul li {\n  min-width: 180px;\n}\n\n/* Nav Menu Arrows */\n.sf-arrows .sf-with-ul {\n  padding-right: 30px;\n}\n\n.sf-arrows .sf-with-ul:after {\n  content: \"\\f107\";\n  position: absolute;\n  right: 15px;\n  font-family: FontAwesome;\n  font-style: normal;\n  font-weight: normal;\n}\n\n.sf-arrows ul .sf-with-ul:after {\n  content: \"\\f105\";\n}\n\n/* Nav Meu Container */\n#nav-menu-container {\n  float: right;\n  margin: 5px 0;\n}\n\n@media (max-width: 768px) {\n  #nav-menu-container {\n    display: none;\n  }\n}\n\n/* Nav Meu Styling */\n.nav-menu a {\n  padding: 10px 15px;\n  text-decoration: none;\n  display: inline-block;\n  color: #fff;\n  font-family: 'Raleway', sans-serif;\n  font-weight: 300;\n  font-size: 14px;\n  outline: none;\n}\n\n.nav-menu a:hover, .nav-menu li:hover > a, .nav-menu .menu-active > a {\n  color: #03C4EB;\n}\n\n.nav-menu ul {\n  margin: 4px 0 0 15px;\n  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.08);\n}\n\n.nav-menu ul li {\n  background: #ccc;\n  border-top: 1px solid #f4f4f4;\n}\n\n.nav-menu ul li:first-child {\n  border-top: 0;\n}\n\n.nav-menu ul li:hover {\n  background: #f6f6f6;\n}\n\n.nav-menu ul li a {\n  color: #333;\n}\n\n.nav-menu ul ul {\n  margin: 0;\n}\n\n/* Mobile Nav Toggle */\n#mobile-nav-toggle {\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 999;\n  margin: 20px 20px 0 0;\n  border: 0;\n  background: none;\n  font-size: 24px;\n  display: none;\n  transition: all 0.4s;\n  outline: none;\n}\n\n#mobile-nav-toggle i {\n  color: #fff;\n}\n\n@media (max-width: 768px) {\n  #mobile-nav-toggle {\n    display: inline;\n  }\n}\n\n/* Mobile Nav Styling */\n#mobile-nav {\n  position: fixed;\n  top: 0;\n  padding-top: 18px;\n  bottom: 0;\n  z-index: 998;\n  background: rgba(0, 0, 0, 0.9);\n  left: -260px;\n  width: 260px;\n  overflow-y: auto;\n  transition: 0.4s;\n}\n\n#mobile-nav ul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\n#mobile-nav ul li {\n  position: relative;\n}\n\n#mobile-nav ul li a {\n  color: #fff;\n  font-size: 16px;\n  overflow: hidden;\n  padding: 10px 22px 10px 15px;\n  position: relative;\n  text-decoration: none;\n  width: 100%;\n  display: block;\n  outline: none;\n}\n\n#mobile-nav ul li a:hover {\n  color: #fff;\n}\n\n#mobile-nav ul li li {\n  padding-left: 30px;\n}\n\n#mobile-nav ul .menu-has-children i {\n  position: absolute;\n  right: 0;\n  z-index: 99;\n  padding: 15px;\n  cursor: pointer;\n  color: #fff;\n}\n\n#mobile-nav ul .menu-has-children i.fa-chevron-up {\n  color: #03C4EB;\n}\n\n#mobile-nav ul .menu-item-active {\n  color: #03C4EB;\n}\n\n#mobile-body-overly {\n  width: 100%;\n  height: 100%;\n  z-index: 997;\n  top: 0;\n  left: 0;\n  position: fixed;\n  background: rgba(0, 0, 0, 0.6);\n  display: none;\n}\n\n/* Mobile Nav body classes */\nbody.mobile-nav-active {\n  overflow: hidden;\n}\n\nbody.mobile-nav-active #mobile-nav {\n  left: 0;\n}\n\nbody.mobile-nav-active #mobile-nav-toggle {\n  color: #fff;\n}\n\n.read{\n  text-align: center;\n   font-family: \"Raleway\", sans-serif;\n  text-transform: uppercase;\n  font-size: 50px;\n  letter-spacing: 1px;\n  border-top: 10px;\n  border-bottom: 10px;\n}\n\nsection.blog-post-area {\n    margin-top: 50px;\n    background-color: #0F1020;\n}\n\nsection.blog-post-area .big-image {\n    float: left;\n    width: 50%;\n    padding-right: 35px;\n}\n\nsection.blog-post-area .big-text {\n    float: right;\n    width: 50%;\n    padding-right: 20px;\n}\n\nsection.blog-post-area img {\n    width: 100%;\n}\n\nsection.blog-post-area .big-text h3 {\n    margin: 10px 0 0;\n}\n\nsection.blog-post-area .big-text h3 a {\n    font-family: Geometria;\n    font-weight: 700;\n    font-size: 40px;\n    color: #061e37;\n    text-decoration: none;\n}\n\nsection.blog-post-area .big-text p {\n    color: #061e37;\n    font-family: Geometria;\n    font-size: 15px;\n    font-weight: 400;\n    line-height: 24px;\n    padding-top: 18px;\n    text-align: justify;\n    text-decoration: none;\n}\n\nsection.blog-post-area .big-text h4 {\n    margin-top: 25px;\n    padding-top: 30px;\n    position: relative;\n}\n\nsection.blog-post-area .big-text h4::before {\n    background: #e6e6e6 none repeat scroll 0 0;\n    content: \"\";\n    height: 1px;\n    position: absolute;\n    top: 0;\n    width: 100%;\n}\n\nsection.blog-post-area .single-post {\n    padding: 5px 7px;\n    margin: 100px 0px 0px;\n    border-width:initial;  \n    border-style:double;\n    background-color: #ffffff;\n}\n\nsection.blog-post-area h4 span {\n    font-family: Geometria;\n    font-weight: 400;\n    font-size: 15px;\n    color: #061e37;\n    text-decoration: none;\n}\n\nsection.blog-post-area .big-text h4 span.author {\n    float: right\n}\n\nsection.blog-post-area h4 span.author-name {\n    font-weight: 500;\n}\n\n.blog-post-area .single-post h3 a {\n    font-family: Geometria;\n    font-size: 28px;\n    font-weight: 700;\n    text-decoration: none;\n    color: #061e37;\n}\n\n.blog-post-area .single-post p {\n    color: #061e37;\n    font-family: Geometria;\n    font-size: 15px;\n    font-weight: 400;\n    line-height: 27px;\n    padding-top: 14px;\n    position: relative;\n    text-align: justify;\n}\n\n.blog-post-area .single-post h4 {\n    margin-bottom: 12px;\n    padding-top: 10px;\n    position: relative;\n}\n\n.blog-post-area .single-post h4::before {\n    background: #e6e6e6 none repeat scroll 0 0;\n    content: \"\";\n    height: 1px;\n    position: absolute;\n    top: 0;\n    width: 100%;\n}\n\n.blog-post-area .single-post p::before {\n    background: #e6e6e6 none repeat scroll 0 0;\n    content: \"\";\n    height: 1px;\n    position: absolute;\n    top: 0;\n    width: 100%;\n}\n\n.blog-post-area .single-post h3 {\n    margin: 25px 0 15px;\n}\n\n.blog-post-area .pegination {\n    margin-top: 60px;\n    margin-bottom: 60px;\n}\n\n.blog-post-area .pegination .nav-links {\n    margin: 0;\n    padding: 0;\n    text-align: center;\n}\n\n.blog-post-area .pegination .nav-links .page-numbers {\n    border: 1px solid #448aff;\n    border-radius: 50%;\n    color: #2AF5FF;\n    display: inline-block;\n    font-family: \"Roboto\", sans-serif;\n    font-size: 15px;\n    font-weight: 400;\n    height: 45px;\n    line-height: 45px;\n    list-style: outside none none;\n    margin-right: 5px;\n    text-align: center;\n    width: 45px;\n}\n\n.blog-post-area .blog-post-area-style {\n    margin: 0 20px 0 40px;\n}\n\n.blog-post-area .pegination .nav-links .page-numbers.current {\n    background: #448aff;\n    color: #fff;\n}\n\n.blog-post-area .pegination .nav-links .page-numbers:hover {\n    background: #448aff;\n    color: #fff;\n}\n\n.blog-post-area .pegination .nav-links a {\n    text-decoration: none;\n}\n\n/*css for single blog page*/\n\n.single-blog-area {\n    margin-bottom: 100px;\n\n}\n\n.single-blog-area .border-top {\n    border-top: 1px solid #40c4ff;\n}\n\n.single-blog-area h2 {\n    color: #010101;\n    font-family: Geometria;\n    font-size: 38px;\n    font-weight: 500;\n    margin-bottom: 60px;\n    margin-top: 45px;\n}\n\n.single-blog-area p {\n    font-family: Geometria;\n    font-size: 15px;\n    font-weight: 500;\n    line-height: 35px;\n    position: relative;\n    text-align: justify;\n}\n\n.single-blog-area .blog-area-part p {\n    margin-top: 30px;\n}\n\n.single-blog-area .for-style {\n    margin-bottom: 50px;\n}\n\n.single-blog-area .for-style p span {\n    color: #40c4ff;\n    float: left;\n    font-family: Geometria;\n    font-size: 60px;\n    font-weight: 400;\n    margin: 18px 30px 20px 20px;\n    position: relative;\n}\n\n.single-blog-area .for-style p span.drop_caps::before {\n    color: #40c4ff;\n    content: \"”\";\n    font-size: 40px;\n    left: -20px;\n    position: absolute;\n    top: -7px;\n    font-weight: 500;\n}\n\n.single-blog-area .for-style p span::after {\n    color: #40c4ff;\n    content: \"”\";\n    font-size: 40px;\n    right: -15px;\n    position: absolute;\n    top: -7px;\n    font-weight: 500;\n}\n\n.single-blog-area h3 {\n    color: #757575;\n    font-family: Geometria;\n    font-size: 38px;\n    font-style: italic;\n    font-weight: 500;\n    line-height: 65px;\n    margin-bottom: 25px;\n    word-spacing: 15px;\n}\n\n.single-blog-area h3 i.fa-quote-left {\n    float: left;\n    font-size: 55px;\n    font-style: italic;\n    margin-right: 20px;\n    margin-top: 10px;\n    color: #eeeeee;\n}\n\n.single-blog-area h3 i.fa-quote-right {\n    display: inline-block;\n    font-size: 55px;\n    font-style: italic;\n    margin-left: 20px;\n    color: #eeeeee;\n}\n\n.single-blog-area .image-one {\n    padding-right: 20px;\n    width: 100%;\n    margin-bottom: 20px;\n}\n\n.single-blog-area .image-two {\n    width: 100%;\n    padding-left: 20px;\n    margin-bottom: 20px;\n}\n\n.single-blog-area img {\n    width: 100%\n}\n\n.single-blog-area .blog-area {\n    margin-right: 40px;\n}\n\n.single-blog-area .ads-area {\n    border-top: 1px solid #e6e6e6;\n    margin-top: 30px;\n    padding: 50px 0;\n    position: relative;\n}\n\n.single-blog-area .ads-area img {\n    width: 100%;\n    height: 90px;\n    padding: 0 60px;\n}\n\n.single-blog-area .ads-area p {\n    color: #fff;\n    font-family: Geometria;\n    font-size: 33px;\n    font-weight: 500;\n    line-height: 150px;\n    position: absolute;\n    text-align: center;\n    top: 15px;\n    width: 100%;\n}\n\n\n/*comment part start*/\n\n.single-blog-area .commententries h3 {\n    color: #000;\n    font-family: Geometria;\n    font-size: 18px;\n    font-style: normal;\n    font-weight: 500;\n    margin: 0;\n    padding-bottom: 5px;\n    position: relative;\n}\n\n.single-blog-area .commententries h3::before {\n    background: #e6e6e6 none repeat scroll 0 0;\n    content: \"\";\n    height: 1px;\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n}\n\n.single-blog-area .commententries ul {\n    margin: 0;\n    padding: 0;\n}\n\n.single-blog-area .commententries ul ul {\n    margin-left: 60px;\n}\n\n.single-blog-area .commententries ul li article.comment {\n    padding-bottom: 13px;\n    padding-top: 30px;\n    position: relative;\n}\n\n.single-blog-area .commententries ul li article.comment:before {\n    background: #e6e6e6 none repeat scroll 0 0;\n    content: \"\";\n    height: 1px;\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n}\n\n\n}\n.single-blog-area .commententries .author-name h5 a {\n    font-family: Geometria;\n    font-size: 21px;\n    font-weight: 500;\n    text-decoration: none;\n    color: #000;\n}\n.single-blog-area .commententries .author-name h5 a {\n    color: #000;\n    font-family: Geometria;\n    font-size: 21px;\n    font-weight: 500;\n    line-height: 10px;\n    color: #000;\n    text-decoration: none;\n}\n.single-blog-area .commententries .author-name p {\n    color: #000;\n    font-family: Geometria;\n    font-size: 13px;\n    font-weight: 500;\n    line-height: 10px;\n    color: #989191\n}\n.single-blog-area .commententries .comment-body p {\n    font-family: Geometria;\n    font-size: 15px;\n    font-weight: 500;\n    line-height: 25px;\n    color: #989191\n}\n.single-blog-area .commententries .reply p span {\n    color: #989191;\n    font-family: Geometria;\n    font-size: 18px;\n    font-weight: 500;\n    margin-right: 50px;\n}\n.single-blog-area .commententries .reply p span i {\n    color: #989191;\n    margin-right: 10px;\n}\n.single-blog-area .commententries ul {\n    overflow: hidden;\n}\n.single-blog-area .commententries ul li {\n    list-style: none\n}\n.commententries .comment-author {\n    border-radius: 50%;\n    float: left;\n    height: 55px;\n    width: 55px;\n}\n.commententries .comment-details {\n    margin-left: 70px;\n}\n.single-blog-area form input {\n    border: 1px solid #e6e6e6;\n    margin: 0;\n    padding: 12px 22px;\n    border-radius: 5px;\n    width: 100%\n}\n.single-blog-area form input[placeholder] {\n    color: #000;\n    font-family: Geometria;\n    font-size: 16px;\n    font-weight: 500;\n}\n.single-blog-area form .name {\n    float: left;\n    margin-bottom: 15px;\n    width: 50%;\n}\n.single-blog-area form .email {\n    width: 50%;\n    float: right;\n}\n.single-blog-area form .name input {\n    width: 95%;\n}\n.single-blog-area form .name .name {\n    margin-right: 20px;\n}\n.single-blog-area form .email input {\n    width: 95%;\n}\n.single-blog-area form .comment {\n    margin-right: 150px;\n}\n.single-blog-area form .post {\n    bottom: 0;\n    position: absolute;\n    right: 0;\n}\n.single-blog-area form .post input[type=\"submit\"] {\n    background: #40c4ff none repeat scroll 0 0;\n    bottom: 0;\n    color: #fff;\n    font-family: Geometria;\n    font-size: 15px;\n    font-weight: 500;\n    padding: 14px 38px;\n    right: -150px;\n    text-transform: uppercase;\n    width: auto;\n}\n.single-blog-area form {\n    margin: 50px 0 0;\n    position: relative;\n}\n\n/*comment part end*/\n.grid .portfolio-item {\n    margin-bottom: 30px;\n}\n.grid .portfolio-item img {\n    float: left;\n    height: 72px;\n    width: 72px;\n}\n.single-blog-area .grid .portfolio-item .portfolio-text {\n    margin-left: 110px;\n}\n.single-blog-area .grid .portfolio-item .portfolio-text h5 {\n    margin: 0\n}\n.single-blog-area .grid .portfolio-item .portfolio-text h5 a {\n    color: #000;\n    font-family: Geometria;\n    font-size: 15px;\n    font-weight: 500;\n    line-height: 27px;\n    text-decoration: none;\n}\n.single-blog-area .grid .portfolio-item .portfolio-text p {\n    font-family: Geometria;\n    font-size: 13px;\n    font-weight: 500;\n    line-height: 20px;\n    color: #b2b2b2;\n}\n.single-blog-area .grid .portfolio-item .portfolio-text p span {\n    margin: 0 10px;\n}\n.single-blog-area .button-group button {\n    border: medium none;\n    border-radius: 0;\n    color: #000;\n    display: inline-block;\n    font-family: Geometria;\n    font-size: 13px;\n    font-weight: 500;\n    margin-right: -2px;\n    padding: 21px;\n    text-transform: uppercase;\n    width: 33%;\n}\n.single-blog-area .button-group {\n    margin: 40px 0;\n}\n.single-blog-area .button-group button.is-checked {\n    background: #40c4ff;\n    color: #fff;\n}\n.single-blog-area .button-group button:hover {\n    background: #40c4ff;\n    color: #fff;\n}\n.single-blog-area .sidebar-ads {\n    width: 300px;\n    position: relative;\n}\n.single-blog-area .sidebar-ads p {\n    color: #fff;\n    font-family: Geometria;\n    font-size: 30px;\n    font-weight: 500;\n    position: absolute;\n    text-align: center;\n    top: 85px;\n    width: 100%;\n}\n.single-blog-area h2.sidebar-title {\n    background: #efefef none repeat scroll 0 0;\n    color: #000;\n    font-family: Geometria;\n    font-size: 16px;\n    font-weight: 500;\n    margin-bottom: 20px;\n    margin-top: 50px;\n    padding: 21px 25px;\n    text-transform: uppercase;\n}\n.single-blog-area .tags p {\n    background: #40c4ff none repeat scroll 0 0;\n    border-radius: 5px;\n    display: inline-block;\n    font-family: Geometria;\n    font-size: 13px;\n    font-weight: 500;\n    margin-right: 4px;\n    padding: 0 12px;\n    margin-bottom: 7px;\n}\n.single-blog-area .tags p a {\n    color: #fff;\n    display: inline-block;\n    text-decoration: none;\n}\n.single-blog-area .newsletter form {\n    margin: 30px 0 0;\n}\n.single-blog-area .newsletter input[type=\"email\"] {\n    width: 50%;\n    margin-right: 20px;\n}\n.single-blog-area .newsletter input[type=\"submit\"] {\n    width: 40%;\n    background: #40c4ff;\n    color: #fff;\n    text-transform: uppercase;\n    font-family: Geometria;\n    font-size: 15px;\n    font-weight: 500;\n}\n#footer {\n  background: #2F195F;\n  padding: 30px 0;\n  color: #fff;\n}\n\n#footer .copyright {\n  text-align: center;\n}\n\n#footer .credits {\n  padding-top: 10px;\n  text-align: center;\n  font-size: 13px;\n  color: #ccc;\n}\n.links {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-align: center;\n  font-size: 15px;\n  color: #ffffff;\n}\n.address {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-align: center;\n  font-size: 15px;\n  color: #ccc;\n}\n" }} />
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
          <div className="read">
            <h2>Read</h2>
          </div>
          <div className="wrapper">
            <section className="blog-post-area">
              <div className="container">
                <div className="row">
                  <div className="blog-post-area-style">
                    <div className="col-md-3">
                      <div className="single-post">
                        <img src="img/Read me.jpg" alt="" height={177} width={284} />
                        <h3><a href="bible reading during corona.html">Bible reading during Corona.</a></h3>
                        <h4><span>Posted By: <span className="author-name">Samuel Njoroge</span></span>
                        </h4>
                        <p>The Covid-19 pandemic has been on for the past few months...</p>
                        <a href="bible reading during corona.html" className="btn tm-btn-gray">Read More</a>  
                        <h4><span>5th May 2020</span></h4>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="single-post">
                        <img src="img/Worship.jpg" height={177} width={284} alt="" />
                        <h3><a href="have you prayed today.html">Have you prayed today?</a></h3>
                        <h4><span>Posted By: <span className="author-name">Sharon Murugi</span></span>
                        </h4>
                        <p>We are in the Covid-19 season which we are trusting God to....</p>
                        <a href="have you prayed today.html" className="btn tm-btn-gray">Read More</a> 
                        <h4><span>10th May 2020</span></h4>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="single-post">
                        <img src="img/Desiring God.jpg" height={177} width={284} alt="" />
                        <h3><a href="#">Do not limit yourself.</a></h3>
                        <h4><span>Posted By: <span className="author-name">Dinah Wangari</span></span>
                        </h4>
                        <p>Don't limit yourself, God can use anyone....</p>
                        <a href="Do not limit yourself.html" className="btn tm-btn-gray">Read More</a>
                        <h4><span>15th May 2020</span></h4>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="single-post">
                        <img src="img/Happy people.jpg" alt="" height={177} width={284} />
                        <h3><a href="#">Come as you are and be freed</a></h3>
                        <h4><span>Posted By: <span className="author-name">Ruth Wamuyu</span></span>
                        </h4>
                        <p>Let Christ do the work of cleaning you up, come as you are...</p>
                        <a href="Come as you are and be freed.html" className="btn tm-btn-gray">Read More</a>
                        <h4><span>20th May 2020</span></h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pegination">
                {/*
                  <ul>
                      <li><i class="fa fa-angle-left" aria-hidden="true"></i></li>
                      <li class="active">1</li>
                      <li>2</li>
                      <li>3</li>
                      <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
                  </ul>
  */}
                <div className="nav-links">
                  <span className="page-numbers current">1</span>
                  <a className="page-numbers" href="index 2.html">2</a>
                  <a className="page-numbers" href="#">3</a>
                  <a className="page-numbers" href="#">4</a>
                  <a className="page-numbers" href="#">5</a>
                  <a className="page-numbers" href="#"><i className="fa fa-angle-right" aria-hidden="true" /></a>
                </div>
              </div>
            </section>
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
        </div>
      );
    }
  });