import { useState, useEffect } from 'react';
import '../Css/Tabsection.css'
import axios from 'axios';

// Accordion Children Component
import Acoodionwrap from '../AccodionItm/Acoodionwrap';
import Question from '../AccodionItm/Question';
import Answer from '../AccodionItm/Answer';

// .env File
const router = process.env.REACT_APP_OPS_SERVER

let pageNum = 1
let pageCnt = 10
let status = true

function PlatformSection(props) {

  const [noticeList, setNoticeList] = useState([]);

  const [Slice, setSlice] = useState(10);

  const getData = async() => {
    await axios.get(`${router}/notice/all/${pageNum}`)
      .then(res => {
        let result = res.data.data
        if (result.length < pageCnt) {
          status = false
        }
        setNoticeList(noticeList.concat(result))
      })}

  useEffect(() => {
    getData();
  }, [])

  const moreNotice = () => {
    if (status) {
      pageNum += 1
      getData(pageNum)
    }
    setSlice(preValue => preValue + 10)
  }

  // Search Form
  const [searchTerm, setSearchTerm] = useState([]);

  return (
  // 플렛폼 관련
  <section>
      <div class="border-b">

      <form class="tabSearchForm">
          <input type="search" class="tabSearchBar" placeholder="궁금한 것을 빠르게 검색하세요" 
            onChange={event => {
              setSearchTerm(event.target.value)
            }}
        />
                          
            <button type="submit" class="tabSearchBtn">
              <svg fill="none" viewBox="0 0 24 24">
                <path stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
        </form>

        {noticeList.filter((val) => {
          if (searchTerm == "") {
              return val
          } else if (val.noticeTitle.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val
            }
          }).slice(0,Slice).map( (val,key) => (
            <div class="accordionWrap">
            <Acoodionwrap>
              <div class="Question">
                <Question key={key}>
                    Q.&nbsp;&nbsp;{val.noticeTitle}
              </Question>
              </div>

              <Answer key={key}>
                <pre class="answerText">{val.createdDttm}</pre>
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

export default PlatformSection;