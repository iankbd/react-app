import React from 'react';
import styles from './component.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
/**
 * A counter button: tap the button to increase the count.
 */
class Nav_bar extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      btn1_cn: "btn-group",  //cn: className
      btn1_ae: false,        //ae: aria_expanded
      dd1_cn: "dropdown",
      dd1_ae: false,
      dd2_cn: "dropdown",
      dd2_ae: false,
    };
  }
  componentWillMount(){
    console.log("WillMount");
    document.addEventListener('click', () => this.handleClick("undefined_type"), false);
  }

  componentWillUnmount(){
    document.removeEventListener('click', () =>this.handleClick("undefined_type"), false);
  }

  handleClick(type){
    //console.log(e.target);
    if (type === "undefined_type")
    {
      this.setState({btn1_cn: "btn-group", btn1_ae: "false"});
      this.setState({dd1_cn: "dropdown", dd1_ae: "false"});
      this.setState({dd2_cn: "dropdown", dd2_ae: "false"});
    }
    else if (type === "btn1")
    {
      if (this.state.btn1_cn === "btn-group")
        this.setState({btn1_cn: "btn-group open", btn1_ae: "true"});
      else
        this.setState({btn1_cn: "btn-group", btn1_ae: "false"});
    }
    else if (type === "dd1")
    {
      if (this.state.dd1_cn === "dropdown")
        this.setState({dd1_cn: "dropdown open", dd1_ae: "true"});
      else
        this.setState({dd1_cn: "dropdown", dd1_ae: "false"});
    }
    else if (type === "dd2")
    {
      if (this.state.dd2_cn === "dropdown")
        this.setState({dd2_cn: "dropdown open", dd2_ae: "true"});
      else
        this.setState({dd2_cn: "dropdown", dd2_ae: "false"});
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

        <div className={this.state.btn1_cn}>
          <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded={this.state.btn1_ae} onClick={() => this.handleClick("btn1")}>
            Action <span className="caret"></span>
          </button>
          <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </div>

        <ul className="nav nav-pills">
          <li role="presentation" className="active"><a href="#">Home</a></li>
          <li role="presentation"><a href="#">Profile</a></li>
          <li role="presentation"><a href="#">Messages</a></li>
        </ul>

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
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                  key="y"
                  aria-expanded={this.state.dd1_ae} onClick={() => this.handleClick("dd1")}>Dropdown <span className="caret"></span></a>
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
                <li className={this.state.dd2_cn}>
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                  aria-expanded={this.state.dd2_ae} onClick={() => this.handleClick("dd2")}>Dropdown <span className="caret"></span></a>
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
export default Nav_bar;
