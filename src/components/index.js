import React, { Component } from "react";
import s from "./index.styl";
import Header from "components/Header/";
import Main from "components/Main/";
import container from "components/container";
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <div className={s.app}>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
