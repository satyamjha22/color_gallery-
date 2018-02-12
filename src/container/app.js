import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginPage from '../components/login_page';
import ModalGallery from '../components/comp_route';
import { username, password, login } from '../redux/actions/index';
import '../style/style_page.css';

// container for login and about us components
const App = (props) =>{
  return(
    <div> 
           {
             // (!props.dataValidation)?
              // <LoginPage { ...props }/>
              // :<ModalGallery />
              <ModalGallery />
            }
      </div>
    )

}


function mapStateToProps(state, ownProps) {
  return {
    username1: state.login.username1,
    password1: state.login.password1,
    dataValidation: state.login.dataValidation
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    username,
    password,
    login
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
