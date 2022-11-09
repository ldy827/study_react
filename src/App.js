// warning message disable
/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {

  let post = '강남 우동 맛집';
  const main_title = ['남자 코트 추천', '여자 코트 추천', '아이옷 추천']
  let [title_name, setTitle] = useState(main_title);

  let [logo, setLogo] = useState('ReactBlog')
  
  let [good, setGood] = useState(0);
  
  function goodState() {
    setGood(good + 1);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <div className="list">
        <h4>{ title_name[0] } <span className="mouse" onClick={() => goodState()}>💪</span> {good} </h4>
        <p>2월 2일 글 발행</p>
      </div>
      <div className="list">
        <h4>{ title_name[1] }</h4>
        <p>2월 2일 글 발행</p>
      </div>
      <div className="list">
        <h4>{ title_name[2] }</h4>
        <p>2월 2일 글 발행</p>
      </div>
      
    </div>
  );
}

export default App;
