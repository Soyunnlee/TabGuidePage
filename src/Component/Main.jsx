import React from 'react';
import { Tab } from '@headlessui/react';
import { useState } from 'react'


import '../Css/Tabsection.css'

// Tabsection
import AllSection from '../Tabsection/AllSection';
import AnswerSection from '../Tabsection/AnswerSection';
import PlatformSection from '../Tabsection/PlatformSection';
import AccountSection from '../Tabsection/AccountSection';
import BuySellSection from '../Tabsection/BuySellSection';

function Main(props) {
  const [selected, setSelect] = useState("Tab1", "Tab2", "Tab3", "Tab4","Tab5");
  const selectedstyle = {
    borderBottom: "2px solid #2563eb", color: "#2563eb", fontWeight: "500"
  }

  return (
    <main>
          {/* Title */}
          <div class="tabTitWrap">
            <h1 class="tabTit">무엇을 도와드릴까요?</h1>
          </div>

         {/* Tab Section */}
        <Tab.Group>    
          
          {/* TAB MENU */}
          <div class="flex">
            <Tab.List class="tabMenuList">
              <Tab class="tabMenuItm"
                style={selected === "Tab1" ? selectedstyle : undefined}
                onClick={() => setSelect("Tab1")}>전체</Tab>
                <Tab class="tabMenuItm"
                style={selected === "Tab2" ? selectedstyle : undefined}
                onClick={() => setSelect("Tab2")}>자주묻는질문</Tab>
                <Tab class="tabMenuItm"
                style={selected === "Tab3" ? selectedstyle : undefined}
                onClick={() => setSelect("Tab3")}>플랫폼 관련</Tab>
                <Tab class="tabMenuItm"
                style={selected === "Tab4" ? selectedstyle : undefined}
                onClick={() => setSelect("Tab4")}>입금과 출금</Tab>
                <Tab class="tabMenuItm"
                style={selected === "Tab5" ? selectedstyle : undefined}
                onClick={() => setSelect("Tab5")}>매수와 매도</Tab> 
            </Tab.List>
          </div> 

              
          {/* SearchBar , Tabsection*/}
          <div class="tabWrap">

                
            {/* Tab section */}
            <Tab.Panels class="tabPanel">
                  {/* 전체 */}
                  <Tab.Panel>
                    <AllSection />
                  </Tab.Panel>

                  {/* 자주뭍는질문 */}
                  <Tab.Panel>
                    <AnswerSection/>
                  </Tab.Panel>

                  {/* 플렛폼 관련 */}
                  <Tab.Panel>
                    <PlatformSection />
                  </Tab.Panel>

                  {/* 입금과 출금 */}
                  <Tab.Panel>
                    <AccountSection />
                  </Tab.Panel>

                  {/* 매수와 매도 */}
                  <Tab.Panel>
                    <BuySellSection />
                  </Tab.Panel>

              </Tab.Panels>
              </div>
              
            </Tab.Group>
</main>

  );
}

export default Main;