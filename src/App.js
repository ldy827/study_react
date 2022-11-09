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
    let [btnEdit, setBtnEdit] = useState(false);
    return (
      <div className="modal">
        {
           btnEdit == true ? <h4>{props.title_name[1]}</h4> : <h4>제목</h4>
        }
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={() => setBtnEdit(true)}>글 수정</button>
      </div>
    )
  }


  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
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
        main_title.map(function(title, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => {
                if(modal[i]) {
                  let cpy = [...modal];
                  cpy[i] = false
                  setModal(cpy);
                  return;
                }else {
                  let cpy = [...modal];
                  cpy[i] = true
                  setModal(cpy);
                  return;
                }
                
              }}>{ main_title[i] } <span className="mouse" onClick={() => goodState(i)}>💪</span> { good[i] } </h4>
              <p>2월 2일 글 발행</p>
            </div>
          )
        })
      }

      {
        modal == true ? <Modal title_name={title_name} setTitle={setTitle} />: null
      }
      <div className="list">
        <p onClick={() => asd()}>{ title_name[0] }</p>
      </div>
      
      
    </div>
  );
}

export default App;
