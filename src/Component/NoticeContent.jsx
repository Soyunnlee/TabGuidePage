import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios'

import LocalStorage from './LocalStorage';

//Css
import '../Css/Notice.css'

//.env File
const router = process.env.REACT_APP_OPS_SERVER

function NoticeContent(props) {

  const navigate = useNavigate();

  const contentNum = useParams();
  console.log(contentNum); 
  console.log(1); 

  const [noticeContent, setNoticeContent] = useState([]);
  const getData = async() => {
    await axios.get(`${router}/notice/detail/${contentNum.id}`)
      .then(res => 
        setNoticeContent(res.data.data))
    }

  useEffect(() => {
    getData();
  }, [])


  return (
    <section>
      <div class="noticeWrap">
        <div class="noticePosition">
            {/* Notice Title */}
            <h1 class="noticeTitle">공지사항</h1>
          <ul class="border">


            {/* 공지사항 Title , Date */}
            {noticeContent.map( noticeContent => (
            <li class="noticeContentItm">
                {/* NoticeContent Title   공지사항 타이틀 */}
                <span key={noticeContent.noticeId}>{noticeContent.noticeTitle}</span>
                {/* NoticeContent Date  공지사항 날짜 */}
                <span class="noticeDate">
                  {noticeContent.noticeType}  날짜 : 2022년 8월 9일
                </span>
            </li>
                ))}

            {/* 공지사항 내용 */}
            {noticeContent.map(noticeContent => (
              <pre key={noticeContent.noticeId} class="noticeTextBox">
                {noticeContent.noticeContent}
              </pre>
            ))}
             
          </ul>
        </div>
      </div>
   
      {/* 목록보기 Btn */}
      <button class="noticeBtn"
        // onClick={() => navigate(`${contentNum.id}`)}
        onClick={() => navigate(-1)}
        // onClick={() => navigate('/Notice/')}
      >
        목록보기
      </button>

        
  </section>
    );
}



export default NoticeContent;