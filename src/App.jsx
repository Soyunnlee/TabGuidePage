import './App.css';
import { Routes, Route , useNavigate} from 'react-router-dom'


//css
import './Css/Tabsection.css'

// Nav
import Nav from './Component/Nav';
import Notice from './Component/Notice'
import Main from './Component/Main'


import NoticeContent from './Component/NoticeContent';



function App() {
  let history = useNavigate();

  return (
    <main>

        {/* Nav Bar */}
          <Nav />   

        <div class="mainTabWrap">
          <div class="mainTabPosition">   
            
            <Routes>
              <Route path="/" element={<Main/>}></Route>
              <Route path="/Guide" element={<Main />}></Route>
              <Route path="/Notice/*" element={<Notice />}></Route>   

            {/* 공지사항 내부 Page */}
            <Route path="/Notice/:id" element={<NoticeContent/>}></Route>
      
            </Routes>
       
           </div>
        </div>
</main>
   
  );
}

export default App;
