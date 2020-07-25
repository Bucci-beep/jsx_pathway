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
          <style dangerouslySetInnerHTML={{__html: "\n              /*--------------------------------------------------------------\n# Header\n--------------------------------------------------------------*/\n #header {\n  background: #2F195F;\n  padding: 20px 0;\n  height: 90px;\n}\n\n#header #logo {\n  float: left;\n}\n\n#header #logo h1 {\n  font-size: 36px;\n  margin: 0;\n  padding: 6px 0;\n  line-height: 1;\n  font-family: \"Raleway\", sans-serif;\n  font-weight: 700;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n}\n\n#header #logo h1 a, #header #logo h1 a:hover {\n  color: rgb(70,130,180);\n}\n\n#header #logo img {\n  padding: 0;\n  margin-left: 20px;\n  max-height: 50px;\n}\n\n@media (max-width: 768px) {\n  #header {\n    height: 80px;\n  }\n  #header #logo h1 {\n    font-size: 26px;\n  }\n  #header #logo img {\n    max-height: 40px;\n  }\n}\n\n.is-sticky #header {\n  background: #2F195F;\n}\n/*--------------------------------------------------------------\n# Header\n--------------------------------------------------------------*/\n#header {\n  background: #2F195F;\n  padding: 20px 0;\n  height: 90px;\n}\n\n#header #logo {\n  float: left;\n}\n\n#header #logo h1 {\n  font-size: 36px;\n  margin: 0;\n  padding: 6px 0;\n  line-height: 1;\n  font-family: \"Raleway\", sans-serif;\n  font-weight: 700;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n}\n\n#header #logo h1 a, #header #logo h1 a:hover {\n  color: #fff;\n}\n\n#header #logo img {\n  padding: 0;\n  margin: 0;\n  max-height: 50px;\n}\n\n@media (max-width: 768px) {\n  #header {\n    height: 80px;\n  }\n  #header #logo h1 {\n    font-size: 26px;\n  }\n  #header #logo img {\n    max-height: 40px;\n  }\n}\n\n.is-sticky #header {\n  background:#2F195F;\n}\n\n/*--------------------------------------------------------------\n# Navigation Menu\n--------------------------------------------------------------*/\n/* Nav Menu Essentials */\n.nav-menu, .nav-menu * {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.nav-menu ul {\n  position: absolute;\n  display: none;\n  top: 100%;\n  left: 0;\n  z-index: 99;\n}\n\n.nav-menu li {\n  position: relative;\n  white-space: nowrap;\n}\n\n.nav-menu > li {\n  float: left;\n}\n\n.nav-menu li:hover > ul,\n.nav-menu li.sfHover > ul {\n  display: block;\n}\n\n.nav-menu ul ul {\n  top: 0;\n  left: 100%;\n}\n\n.nav-menu ul li {\n  min-width: 180px;\n}\n\n/* Nav Menu Arrows */\n.sf-arrows .sf-with-ul {\n  padding-right: 30px;\n}\n\n.sf-arrows .sf-with-ul:after {\n  content: \"\\f107\";\n  position: absolute;\n  right: 15px;\n  font-family: FontAwesome;\n  font-style: normal;\n  font-weight: normal;\n}\n\n.sf-arrows ul .sf-with-ul:after {\n  content: \"\\f105\";\n}\n\n/* Nav Meu Container */\n#nav-menu-container {\n  float: right;\n  margin: 5px 0;\n}\n\n@media (max-width: 768px) {\n  #nav-menu-container {\n    display: none;\n  }\n}\n\n/* Nav Meu Styling */\n.nav-menu a {\n  padding: 10px 15px;\n  text-decoration: none;\n  display: inline-block;\n  color: #fff;\n  font-family: 'Raleway', sans-serif;\n  font-weight: 300;\n  font-size: 14px;\n  outline: none;\n}\n\n.nav-menu a:hover, .nav-menu li:hover > a, .nav-menu .menu-active > a {\n  color: #03C4EB;\n}\n\n.nav-menu ul {\n  margin: 4px 0 0 15px;\n  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.08);\n}\n\n.nav-menu ul li {\n  background: #ccc;\n  border-top: 1px solid #f4f4f4;\n}\n\n.nav-menu ul li:first-child {\n  border-top: 0;\n}\n\n.nav-menu ul li:hover {\n  background: #f6f6f6;\n}\n\n.nav-menu ul li a {\n  color: #333;\n}\n\n.nav-menu ul ul {\n  margin: 0;\n}\n\n/* Mobile Nav Toggle */\n#mobile-nav-toggle {\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 999;\n  margin: 20px 20px 0 0;\n  border: 0;\n  background: none;\n  font-size: 24px;\n  display: none;\n  transition: all 0.4s;\n  outline: none;\n}\n\n#mobile-nav-toggle i {\n  color: #fff;\n}\n\n@media (max-width: 768px) {\n  #mobile-nav-toggle {\n    display: inline;\n  }\n}\n\n/* Mobile Nav Styling */\n#mobile-nav {\n  position: fixed;\n  top: 0;\n  padding-top: 18px;\n  bottom: 0;\n  z-index: 998;\n  background: rgba(0, 0, 0, 0.9);\n  left: -260px;\n  width: 260px;\n  overflow-y: auto;\n  transition: 0.4s;\n}\n\n#mobile-nav ul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\n#mobile-nav ul li {\n  position: relative;\n}\n\n#mobile-nav ul li a {\n  color: #fff;\n  font-size: 16px;\n  overflow: hidden;\n  padding: 10px 22px 10px 15px;\n  position: relative;\n  text-decoration: none;\n  width: 100%;\n  display: block;\n  outline: none;\n}\n\n#mobile-nav ul li a:hover {\n  color: #fff;\n}\n\n#mobile-nav ul li li {\n  padding-left: 30px;\n}\n\n#mobile-nav ul .menu-has-children i {\n  position: absolute;\n  right: 0;\n  z-index: 99;\n  padding: 15px;\n  cursor: pointer;\n  color: #fff;\n}\n\n#mobile-nav ul .menu-has-children i.fa-chevron-up {\n  color: #03C4EB;\n}\n\n#mobile-nav ul .menu-item-active {\n  color: #03C4EB;\n}\n\n#mobile-body-overly {\n  width: 100%;\n  height: 100%;\n  z-index: 997;\n  top: 0;\n  left: 0;\n  position: fixed;\n  background: rgba(0, 0, 0, 0.6);\n  display: none;\n}\n\n/* Mobile Nav body classes */\nbody.mobile-nav-active {\n  overflow: hidden;\n}\n\nbody.mobile-nav-active #mobile-nav {\n  left: 0;\n}\n\nbody.mobile-nav-active #mobile-nav-toggle {\n  color: #fff;\n}\n\n\n#footer {\n  background: #2F195F;\n  padding: 30px 0;\n  color: #fff;\n}\n\n#footer .copyright {\n  text-align: center;\n}\n\n#footer .credits {\n  padding-top: 10px;\n  text-align: center;\n  font-size: 13px;\n  color: #ccc;\n}\n.links {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-align: center;\n  font-size: 15px;\n  color: #ffffff;\n}\n.address {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-align: center;\n  font-size: 15px;\n  color: #ccc;\n}\nbody{\n        background-color: #ffffffs;\n\n      }\n      h1 {\n        text-align: center;\n        color: green;\n      }\n  h2 {\n    margin: 50px;\n    color: rgb(210,105,30);\n  }\n  #heading {\n    margin: 70px;\n    color: rgb(255,222,173);\n    font-weight: bolder;\n    font-size: 30px;\n  }\n  p {\n    margin: 40px;\n    color: black;\n    font-size: 20px;\n    font-weight: normal;\n  }\n \np {\n    color: black;\n    font-size: 20px;\n    font-weight: normal;\n  }\n\n\n" }} />
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
          <h1>Privacy Policy</h1>
          <p>This Privacy Policy tells you about your rights and choices with respect to your Personal Information, and how you can contact us if you have any questions or concerns.</p>
          <h2>HOW Mtu wa Kirk COLLECTS YOUR INFORMATION</h2>
          <p>For the purpose of this Privacy Policy, “Personal Information” means any information relating to an identified or identifiable individual. We obtain Personal Information relating to you from various sources as described below.</p>
          <p>Where applicable, we indicate whether and why you must provide us with your Personal Information, as well as the consequences of failing to do so. If you do not provide Personal Information when requested, you may not be able to benefit from our Service if that information is necessary to provide you with the Service or if we are legally required to collect it.</p>
          <h id="heading">1&gt;&gt;Personal Information Provided by You</h>
          <p>Account Registration and Profile Creation. If you register to use the Service, then you must provide us with your name, date of birth, a password and email address in order to create an account and user profile. </p>
          <p>Subscriptions. If you obtain a Subscription to the Service, then we will ask you to provide your payment information, such as your credit card number, so our service providers can process your payments for the Service.</p>
          <p>Subscriptions. If you obtain a Subscription to the Service, then we will ask you to provide your payment information, such as your credit card number, so our service providers can process your payments for the Service.</p>
          <h id="heading">2&gt;&gt;Personal Information Obtained from Third Parties<h>
              <p>Social Sign-on. We collect information from social media services when you use your credentials for these services to log into the Service. For example, when you log in with your Facebook credentials, we collect the information you have authorized Facebook to share with us, such as your name, email address, gender, date of birth, and profile picture. We may also obtain other non-public information with your permission.</p>
              <p>Other Third Parties. We may collect information about you from other third parties, such as other users or our marketing partners. For example, we may receive information about you when another user allows us to upload your contact information to the Service. We may combine this information with the other information we collect about you.</p>
              <h id="heading">3&gt;&gt;Personal Information Collected From your Device via Automated Means</h>
              <p>Using the Service. When you use the Service, we collect information about your activities, such as the stations, artists or channels that you listen to, the User profiles that you view, your searches for friends or stations and your other actions and interactions with other Users or content on the Service, the stations, content and people that you follow (“Follow Lists”), your comments, any content that you post on the Service, and any other information resulting from your use of the Service that is publicly accessible by other Users (“Public Information”).</p>
              <p>Your Contacts. If you give us permission to import to the Service the contacts from any email account associated with your account, then we may collect information about your contacts. We may also collect your contacts if you share information or content with them from the Service or invite them to use the Service.</p>
              <p>Location Information. With your consent, we may obtain information about your physical location at regular intervals when you use the Service, such as by use of geolocation features in the device(s) through which you access the Service. In addition, we may infer your location from other information we collect (for example, your IP address indicates the general geographic region from which you are connecting to the Internet). We use location information to comply with radio stations’ content licenses (which are location-specific), and to provide you with features, notifications, advertising, or other content that is influenced by your location (such as showing you your local radio station).</p>
              <p>Device Information. We receive information from Users’ devices through which a User accesses the Service, such as IP address, web browser type, mobile operating system version, and unique device identifiers.</p>
              <p>Widget Information. Other websites may integrate TuneIn widgets (such as the TuneIn Player or TuneIn Follow Button). When you visit a site with a TuneIn widget embedded, we may receive certain information, including information about the web page you visited, your IP address, and other information about your device. TuneIn and the widget can recognize you across websites containing TuneIn widgets, and the widget may be used to show personalized content or advertising. We know when you interact with a widget, and websites containing the widgets may receive this information.</p>
              <h2>HOW WE USE YOUR INFORMATION</h2>
              <p>Internal and Service-Related Usage. We use Personal Information for internal and Service-related purposes, including to operate, provide, and maintain the Service.</p>
              <p>Analytics and Improving the Service. We and our service providers use Personal information that we collect on the Service, such as your location and your activities on the Service, to monitor and analyze usage of the Service and to improve and enhance the Service.</p>
              <p>Communications. We may send emails to an email address you provide to us (i) for customer-service or technical-support purposes, or (ii) to send you (a) information about topics or content that we think may interest you, or (b) updates about the latest developments or features on the Service. We also may send push notifications to your device and a newsletter to the email address you provide to us in the event that you subscribe to receive the newsletter.</p>
              <p>Advertising. We and our advertising partners may use your Personal Information, including your location and your activities on the Service to facilitate the delivery of advertisements.</p>
              <p>Tailored Content. We may use your Personal Information to provide you with personalized services, content, offers and recommendations. For example, we may analyze your listening history to recommend similar content that we think would be of particular interest to you, send you tailored recommendations based on your location or send you personalized marketing communications based on Personal Information we have collected about you.</p>
              <h2>HOW WE MAY DISCLOSE YOUR INFORMATION</h2>
              <p>Vendors and Service Providers. We may share any Personal Information we receive with vendors and service providers retained in connection with the provision of the Service. For example, we may use service providers to measure app usage and user engagement, serve advertising on our Services or provide DDoS mitigation services.</p>
              <p>Publishers. We may share certain types of Personal Information with Publishers who provide the content you listen to and read on our Service. This may include information such as your device or cookie identifiers, device type, user agent, IP address, and zip code.</p>
              <p>Social Networking and Other Websites. The Service may allow you to share Personal Information with social networking services, such as Facebook. We do not share your Personal Information with them unless you direct the Service to share it. Their use of your Personal Information is governed by their privacy policies, and you may be able to modify your privacy settings on their services.</p>
              <p>Search Engines. Your Public Information may also be accessible through search engines, such as Google or Yahoo, just like with many common social media services.</p>
              <p>Other Third Parties. We may also share Personal Information about you with other third parties in the following circumstances:</p>
              <p> a)With Your Consent. We may disclose your Personal Information with your permission. We may seek your permission in various ways. For example, we may present you with an “opt-in” prompt when you register to use the Service or access certain content</p>
              <p>b)To Comply with Legal Obligations. We may access, preserve, and disclose your Personal Information or other account information if we believe doing so is required or appropriate to (i) comply with laws, law enforcement requests, and legal process, such as a court order or subpoena; (ii) respond to your requests; or (iii) protect your, our or others’ rights, property, or safety.</p>
              <h2>SECURITY OF YOUR INFORMATION</h2>
              <p>We maintain administrative, technical and physical safeguards that are intended to appropriately protect Personal Information against accidental or unlawful destruction, accidental loss, unauthorized alteration, unauthorized disclosure or access, misuse, and any other unlawful form of processing of the Personal Information in our possession. Unfortunately, the Internet cannot be guaranteed to be 100% secure, and we cannot ensure or warrant the security of any Personal Information you provide to us.</p>
              <h2>DATA RETENTION</h2>
              <p>We take measures to delete your Personal Information or keep it in a form that does not permit identifying you when this information is no longer necessary for the purposes for which we process it, unless we are required by law to keep this information for a longer period. When determining the retention period, we take into account various criteria, such as the type of products and services requested by or provided to you, the nature and length of our relationship with you, possible re-enrollment with our products or services, the impact on the services we provide to you if we delete some information from or about you and mandatory retention periods provided by law and the statute of limitations.</p>
              <h2>THIRD PARTY PRIVACY PRACTICES</h2>
              <p>This Privacy Policy applies only to the processing of your Personal Information by TuneIn. The Service may contain links to third party sites, such as third party content providers (“Third Party Sites”). The policies and procedures described in this Privacy Policy do not apply to Third Party Sites. The links from the Service to any Third Party Sites do not imply that we endorse or have reviewed the Third Party Sites.</p>
              <h2>PRIVACY OPTIONS AND SETTINGS</h2>
              <p>Account Information. Once you have registered for the Service, you may change your profile settings in your account on the Service. For example, you can change the email address and password associated with your account and you may choose to keep your Follow Lists private. If you are a broadcaster, you can change the information you provided to us by contacting us per the information below.</p>
              <p>Devices. You can access the Service from multiple devices if you sign into your account on the devices or register them on the Service. If you would like to disconnect your account from any of these devices, you can unregister the device through your account settings on the Service.</p>
              <p>Location Information. You can prevent us from collecting location information from your device by changing the settings on your device, if your device allows you to do so; however, if you do not provide us with location information you may not be able to fully use the Service. Please note that we will continue to receive your IP address and use it as described above to determine, for example, your location to comply with our licensing agreements.</p>
              <h2>CHANGES TO OUR PRIVACY POLICY AND PRACTICES</h2>
              <p>Posting of Revised Privacy Policy. We will post any adjustments to the Privacy Policy on this web page, and the revised version will be effective when it is posted. If you are concerned about how your information is used, then bookmark this page and read this Privacy Policy periodically.</p>
              <p>New Uses of Information. From time to time, we may desire to use or disclose Personal Information for uses not previously disclosed in our Privacy Policy. If our practices change regarding previously collected information in a way that would be materially less restrictive than stated in the version of this Privacy Policy in effect at the time we collected the information, then we will make reasonable efforts to provide notice and obtain consent prior to any such uses as may be required by law.</p>
              <p>Contact Information. If you have any questions, would like to exercise your rights or share suggestions for improving the Privacy Policy or the Service, or otherwise would like to contact us, then please feel free to contact us per the information below.</p>
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
              <a href="Pathway to light.html" className="back-to-top"><i className="fa fa-chevron-up" /></a>
              {/* Required JavaScript Libraries */}
              {/* Template Specisifc Custom Javascript File */}
            </h></h></div>
      );
    }
  });