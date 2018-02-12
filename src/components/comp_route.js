import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ColorSwitch from '../components/color_galary';


const ModalGallery = () => (
  <Router>
    <Route component={ColorSwitch} />
  </Router>
);

export default ModalGallery;
