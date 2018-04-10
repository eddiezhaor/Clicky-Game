import React, { Component } from 'react';
// import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Content from "./components/Content"
import './bootstrap.min.css';
import './App.css';
// var imageLink=[{id:1, link:"./clickImage/picture1.jpg"},{id:2, link:"./clickImage/picture1.jpg"},{id:3, link:"./clickImage/picture1.jpg"},{id:4, link:"./clickImage/picture1.jpg"},{id:5, link:"./clickImage/picture1.jpg"},{id:6, link:"./clickImage/picture1.jpg"},{id:7, link:"./clickImage/picture1.jpg"},{id:8, link:"./clickImage/picture1.jpg"},];
class App extends React.Component {
  
    render(){
        return (
            <Wrapper>
                <Content></Content>
                <Footer></Footer>
            </Wrapper>
        )
    }
};

export default App;
