import { useState, useEffect , useRef } from 'react'
//Css
// import '../Css/Tabsection.css'
import { Link , useParams } from "react-router-dom";
import axios from "axios"
import { iconButtonClasses } from '@mui/material';






// .env File
const router = process.env.REACT_APP_OPS_SERVER

let pageNum = 1


let pageCnt = 10
let status = true

function Notice() {

  const [noticeList, setNoticeList] = useState([]);

  const getData = async () => {
    await axios.get
      (`${router}/notice/all/${pageNum}`)
      // (`${router}/notice/all/2`)
      .then(res => {
        let result = res.data.data
        if (result.length < pageCnt) {
          status = false
        }
        setNoticeList(noticeList.concat(result))
      })}
      

  useEffect(() => {
    getData(pageNum);
  }, [])

  const moreNotice = () => {
    if (status) {
      pageNum += 1
      getData(pageNum)
    }
  }


 

  return (
  <section>  

    <div class="noticeWrap">
      <div class="noticePosition">
        {/* Notice Title */}
          <h1 class="noticeTitle">공지사항</h1>
          {/* Notice Items */}
          <ul class="noticeItmWrap">

            {noticeList.map(noticeList => (
              <Link to={`/Notice/${noticeList.noticeId}`}>
            <li key={noticeList.noticeId} class="noticeItm">
              &nbsp;&nbsp;{noticeList.noticeTitle}
              
              <span key={noticeList.noticeId} class="noticeDate">
                Date: {noticeList.createdDttm}
              </span>
            </li>            
            </Link>
            ))}
            
          </ul>

        </div>
      </div>

      {/* 더보기 Btn */}
      <button class="tabSectionBtn" onClick={() => {moreNotice()}}
      >
        더보기
        <svg xmlns="http://www.w3.org/2000/svg" className="tabSectionIcon" viewBox="0 0 24 24"  strokeWidth={2}><path  d="M19 9l-7 7-7-7" />
        </svg>
      </button>

  </section>

  );
}

export default Notice;