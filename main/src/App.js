import React, { Component } from "react";
import "./App.css";
import Article from "./Article/Article";
import NavBar from "./NavBar/NavBar";

class App extends Component {
  state = {
    articles: [
      {
        title: `France train attack: Four stand trial over foiled Thalys shooting`,
        para: "Something!",
      },
    ],
  };

  render() {
    return (
      <div>
        <NavBar />
        <Article
          title={this.state.articles[0].title}
          para={this.state.articles[0].para}
        />
      </div>
    );
  }
}

export default App;
