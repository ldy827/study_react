// warning message disable
/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {

  let post = '강남 우동 맛집';
  const main_content = ['김치찜', '아이스크림', '메인 제목3']
  const main_title = ['지니 궁둥이', '궁디 팡팡', '쿵쿵쿵']
  
  let [title_name, setTitle] = useState(main_title);

  let [logo, setLogo] = useState('ReactBlog')
  
  let [good, setGood] = useState([0, 0, 0]);

  let [modal, setModal] = useState([false, false, false]);

  let [title_state, setTitleState] = useState(0);

  let [inputText, setInputText] = useState('');

  let inputData = '';
  
  function asd() {
    let cpy = [...title_name];
    cpy[0] = "워라";
    setTitle(cpy);
  }
  
  function goodState(i) {
    let cpy = [...good];
    cpy[i] = cpy[i] + 1
    setGood(cpy);
  }
  function editContent() {
    let copy = [...title_name];
    copy[0] = '이대영'
    setTitle(copy)
  }
  function arrangeTitle() {
    let cpy = [...title_name]
    cpy.sort()
    setTitle(cpy);
  }
  
  

  function Modal(props) {
    return (
      <div className="modal">
        <p>{props.title_name[title_state]}</p>
        <p>상세내용</p>
        <button onClick={() => {props.setTitle(['헬로우', '하이', '방갈로'])}}>글 수정</button>
      </div>
    )
  }

  function modalState(i) {
    setTitleState(i)
    if(!modal[i]) {
      setModal(true);
    }else {
      setModal(false)
    }
  }

  function sendInput() {
    setInputText(inputData)
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <h3>{inputText}</h3>
      <button onClick={() => {
        editContent();
      }}>글 수정</button>

      <button onClick={()=>{
        arrangeTitle();
      }}>정렬</button>

      <button onClick={() => {
        setModal(true);
      }}>
        글 수정 창 열기
      </button>

      <button onClick={() => {
        setModal(false);
      }}>
        확인
      </button>

      {
        title_name.map(function(title, i) {
          return (
            <>
              <div className="list" key={i}>
                <h4 title_name={title_name[i]} onClick={() => modalState(i)}>{ title_name[i] } <span className="mouse" onClick={(e) => {e.stopPropagation();goodState(i);}}>💪</span> { good[i] } </h4>
                <p>2월 2일 글 발행
                  <button onClick={() => {
                    let cpy = [...title_name];
                    cpy.splice(i, 1);
                    setTitle(cpy);
                  }}>삭제</button>
                </p>
                
              </div>
            </>
          )
        })
      }

      {
        modal == true ? <Modal title_name={title_name} setTitle={setTitle} title_state={title_state} />: null
      }
      
      <input onChange={(event) => {inputData = event.target.value}}>
        
      </input>
      <button onClick={() => {
        let cpy = [...title_name];
        cpy.unshift(inputData);
        setTitle(cpy);
      }}>입력</button>
      
    </div>
  );
}

export default App;
