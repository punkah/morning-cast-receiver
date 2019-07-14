import React, { Component } from 'react';
import './News.scss';

export default class News extends Component {
  state = {
    news: [],
  };

  async componentDidMount() {
    const url = 'https://newsapi.org/v2/top-headlines?'
      + 'country=us&'
      + 'apiKey=cffdb009bc5343679e8dbe592efb1d36';
    /*eslint-disable*/
    const response = await fetch(url);
    console.log(response);
    const { articles } = await response.json();
    console.log(articles);
    this.setState({ news: articles });
  }

  render() {
    const { news } = this.state;
    return (
      <div className="news">
        {news.map(newsArticle => (
          <div className="news--title">{newsArticle.title}</div>
        ))}
      </div>
    );
  }
}
