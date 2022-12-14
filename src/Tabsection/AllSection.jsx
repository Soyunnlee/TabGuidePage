import { useState ,useEffect } from 'react';
import '../Css/Tabsection.css'
import axios from 'axios'

// Accordion Children Component
import Acoodionwrap from '../AccodionItm/Acoodionwrap';
import Question from '../AccodionItm/Question';
import Answer from '../AccodionItm/Answer';

import Api from '../Api/service'

// .env File
const router = process.env.REACT_APP_OPS_SERVER

// async 작성된 함수는 async로 호출해야한다.
// async 안에는 반드시 await으로 호출하는 메소드가 존재해야합니다.

let pageNum = 1
let pageCnt = 10
let status = true

function AllSection() {
  const [noticeList, setNoticeList] = useState([]);

  const [Slice , setSlice] = useState(10)

  const getData = async(pageNum) => {
    await axios.get
      (`${router}/notice/all/${pageNum}`)
      .then(res => {
        let result = res.data.data
        if (result.length < pageCnt) {
          status = false
        }
        setNoticeList(noticeList.concat(result)); {
        }
      })}
  useEffect(() => {
    getData(pageNum);
  }, [])


  const moreNotice = () => {
    if(status) {
      pageNum += 1
       getData(pageNum)
    }
    setSlice(preValue => preValue + 10)
  }  
  
  // Search Form


  return (
    // 전체 질문페이지
    <section>      

      {/* Search Form */}
      <form class="tabSearchForm">
        <input type="search" class="tabSearchBar" placeholder="궁금한 것을 빠르게 검색하세요"
        />
          <div class="tabSearchBtn">
            <svg fill="none" viewBox="0 0 24 24">
              <path stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
      </form>
      

      <div class="border-b">
        {noticeList.slice(0,Slice).map((val,key) => ( 
          <div class="accordionWrap">
          <Acoodionwrap>
            <div class="Question">
              <Question key={key}>
                  Q.&nbsp;&nbsp;{val.noticeTitle}ㅇㅇㅇ
            </Question>
            </div>

            <Answer key={key}>
                <pre class="answerText">
                  {val.createdDttm}
                </pre>
            </Answer>
          </Acoodionwrap>
          </div>
        ))}
      </div>
      
      <div>
        <button class="tabSectionBtn" onClick={() => {moreNotice()}}>
          더보기
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  strokeWidth={2}><path  d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

  </section>
  );
}

export default AllSection;