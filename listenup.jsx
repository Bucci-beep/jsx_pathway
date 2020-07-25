var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style dangerouslySetInnerHTML={{__html: "\n* {\n  box-sizing: border-box;\n}\n\n/* Add a gray background color with some padding */\nbody {\n  font-family: Arial;\n  padding: 40px;\n  background: rgb(176,224,230);\n}\n\n/* Header/Blog Title */\n.header {\n  padding: 30px;\n  font-size: 40px;\n  text-align: center;\n  background: #2F195F;\n}\n\n/* Create two unequal columns that floats next to each other */\n/* Left column */\n.leftcolumn {   \n  float: left;\n  width: 90%;\n  padding: 10%\n\n  \n}\n\n\n\n/* Fake image */\n.fakeimg {\n  background-color: #aaa;\n  width: 50%;\n  padding: 20px;\n}\n\n/* Add a card effect for articles */\n.card {\n   background-color: white;\n   padding: 30px;\n   margin-top: 20px;\n}\n\n/* Clear floats after the columns */\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n\n\n/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 800px) {\n  .leftcolumn, .rightcolumn {   \n    width: 100%;\n    padding: 0;\n  }\n}\n/* Footer */\n.footer {\n  padding: 20px;\n  text-align: center;\n  background: #2F195F;\n  margin-top: 20px;\n}\n#footer .copyright {\n  text-align: center;\n}\n\n.links {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-align: center;\n  font-size: 15px;\n  color: #ccc;\n}\n#footer .credits {\n  padding-top: 10px;\n  text-align: center;\n  font-size: 13px;\n  color: #ccc;\n}\n.address {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-align: center;\n  font-size: 15px;\n  color: #ccc;\n}\n" }} />
          <div className="header">
            <h2>Listen</h2>
          </div>
          <div className="row">
            <div className="leftcolumn">
              <div className="card">
                <h2>Way maker, miracle worker.</h2>
                <h5>Samuel Njoroge | May 5| 2020</h5>
                <img src="img/meditate.jpg" style={{height: '100px'}} "width:200px;" />
                <p>Way maker, miracle worker, promise keeper, light in the darkness. My <br />
                  God that is who you are. That is who you are ...</p>
                <a href="bible reading during corona.html" className="btn tm-btn-gray">Read More</a> 
              </div>
              <div className="card">
                <h2>It is so!</h2>
                <h5>Sharon Murugi | May 10| 2020</h5>
                <img src="img/yeah.jpg" style={{height: '100px'}} "width:200px;" />
                <p>There is a promise, that points beyond my <br />
                  failures. Even in the worst of my mistakes, there....</p>
                <a href="have you prayed today.html" className="btn tm-btn-gray">Read More</a> 
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="copyright">
                    © Copyright <strong>UGI &amp; BUCCI</strong>. All Rights Reserved
                  </div>
                  <div className="links">
                    <a href="contact me.html">Contact Me</a> |<a href="Help.html">Help</a> |<a href="Privacy.html">Privacy</a> |
                  </div>
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
          </div>
        </div>
      );
    }
  });