import React, { Component } from 'react';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';
import Title from '../components/Title';

export default class Services extends Component {
  state = {
    services:[
      {
        icon:<FaCocktail/>,
        title: "Free cocktail",
        info: "This sounds too good to be true, but we promise it isn't"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Endless weekend Hiking around St Patrick"
      },
      {
        icon: <FaShuttleVan />,
        title: "Endless Shuttle bus",
        info: "Endless Shuttle buses around the Island"
      },
      {
        icon:<FaBeer />,
        title: "Drink Beer",
        info: "Drink to your Satisfaction"
      }
    ]
  }
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return <article key={index} className="service">
            <span>{item.icon}</span>
            <h6>{item.title}</h6>
            <p>{item.info}</p>
            </article>
          })}
        </div>
      </section>
    );
  }
}
