import React, { Component } from 'react';
import CourseCard from './CourseCard.jsx';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      courses: [
        { name: "Data Structure and Algorithms", duration: "40hrs", price: "Rs.500", img: "1.jpeg" },
        { name: "Java Programming", duration: "40hrs", price: "Rs.600", img: "2.jpg" },
        { name: "React JS", duration: "40hrs", price: "Rs.550", img: "3.jpg" },
        { name: "Machine Learning", duration: "40hrs", price: "Rs.1499", img: "Robot_thinking.jpg" },
      ]
    };
  }

  render() {
    const { courses } = this.state;

    return (
      <div className="app">
        <div className="header">
          Course Catalog - 2500080058 - Prakhar Mishra
        </div>

        <div className="section">
          {courses.map((data, index) => (
            <CourseCard key={index} data={data} />
          ))}
        </div>

        <div className="footer">
          Copyright © 2026. All rights reserved. - Prakhar Mishra - KL University
        </div>
      </div>
    );
  }
}
