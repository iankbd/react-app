import React from 'react';

/**
 * A counter button: tap the button to increase the count.
 */
class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      dd1_cn: "dropdown",   //cn: className
      dd1_ae: false,        //ae: aria_expanded
      dd2_cn: "dropdown",
      dd2_ae: false,
    };
  }

  componentWillMount(){
    document.addEventListener('click', (e) => this.handleClick(e), false);
  }

  componentWillUnmount(){
    document.removeEventListener('click', (e) => this.handleClick(e), false);
  }

  handleClick(e){
    switch(e.target.id){
      case "dd1":
          this.setState({dd1_cn: "dropdown open", dd1_ae: "true"});
          break;
      case "dd2":
        switch(this.state.dd2_cn){
          case "dropdown":
            this.setState({dd2_cn: "dropdown open", dd2_ae: "true"});
            break;
          default:
            this.setState({dd2_cn: "dropdown", dd2_ae: "false"});
        }
        break;
      default:
        this.setState({dd1_cn: "dropdown", dd1_ae: "false"});
    }
  }

  render() {
    var products = [{
      id: 1,
      name: "Product1",
      price: 120
      }, {
          id: 2,
          name: "Product2",
          price: 80
      }];
    return (
      <div>
        <div className="navbar01">
          <div className="row-fluid">
            <div className="col-sm-4 col-md-2">
              <a href="http://localhost:3000/">
                <img className="img-circle"
                src = {"https://facebook.github.io/react/img/logo.svg"}/>
                React
              </a>
            </div>
            <div className="col-sm-3 col-md-2 col-centered"><a href="https://google.com">Docs</a></div>
            <div className="col-sm-3 col-md-2 col-centered"><a href="https://google.com">Tutorial</a></div>
            <div className="col-sm-3 col-md-2 col-centered"><a href="https://google.com">Community</a></div>
            <div className="col-sm-3 col-md-2 col-centered"><a href="https://google.com">Blog</a></div>
          </div>
        </div>

        <nav className="navbar navbar-default"> {/*nav bar*/}
          <div className="container-fluid">

            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Brand</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
                <li><a href="#">Link</a></li>
                <li className={this.state.dd1_cn}>
                  <a id="dd1" href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                  aria-expanded={this.state.dd1_ae}>Dropdown <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">One more separated link</a></li>
                  </ul>
                </li>
              </ul>
              <form className="navbar-form navbar-left">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Search"/>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </form>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#">Link</a></li>
                <li className={this.state.dd2_cn} >
                  <a id="dd2" href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                  aria-expanded={this.state.dd2_ae}>Dropdown <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>

    );
  }
}
export default Navbar;
