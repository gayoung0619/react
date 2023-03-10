import React from 'react';

/* 2-1) link대신 Navlink를 import한다 */
import {NavLink, Routes, Route} from "react-router-dom";

/* 2-2) CSS파일도 import해야한다 */
import './assets/css/menu.css'

/* 2-3) 페이지를 구성할 컴포넌트 준비 */
import InlineCss from "./pages/InlineCss";
import CssClass from "./pages/CssClass";
import CssModule from "./pages/CssModule";
import Scss from "./pages/Scss";
import ScssModule from "./pages/ScssModule";
import StyledComponent from "./pages/StyledComponent";
import Responsive from "./pages/Responsive";
import News from './pages/News';

import createGlobalStyle from "./GlobalStyles";
import GlobalStyles from './GlobalStyles';

const App = () => {
    // (1-1) 페이지 타이틀에 적용한 InlineCSS 정의
    // -> CSS는 JS 속성으로 기술해야 함
    // -> 전체 구조는 JSON객체. (단위가 포함된 수치값의 경우 문자열로 표기, 한쌍의 속성-값 뒤에는 세미콜론이 아닌 콤마가 위치해야 함)

    const myStyle = {
        fontWeight: 'bold',
        color: '#b82514',
        textDecoration: 'none',
        marginRight: '10px',
    };

    return(
      <div>
        <GlobalStyles />
          {/* (1-2) 페이지 타이틀 구성 = Inline CSS가 적용되었다. */}
          <h1 style={myStyle}>05-stylesheet</h1>

          {/* 2-4) 페이지들에 대한 링크 구성 */}
          <nav>
              {/*
                  NavLink 구성
                  - 기본 Link컴포넌트의 기능에 className, activeClassName 속성이 추가된 객체
                  - className: 기본적으로 적용될 CSS 클래스 이름
                  - 현재 브라우저가 위치하는 URL과 동일한 주소를 갖는 링크에게 active 클래스가 자동으로 적용된다.
                  active 클래스에 대한 style일의 존재 유무와는 별개임
              */}
              <NavLink className='normalLink' to='/inline_css'>InlineCss</NavLink>
              <NavLink className='normalLink' to='/css_class'>CssClass</NavLink>
              <NavLink className='normalLink' to='/css_module'>CssModule</NavLink>
              <NavLink className='normalLink' to='/scss'>Scss</NavLink>
              <NavLink className='normalLink' to='/scss_module'>ScssModule</NavLink>
              <NavLink className='normalLink' to='/styled_component'>StyledComponent</NavLink>
              <NavLink className='normalLink' to='/responsive'>Responsive</NavLink>
              <NavLink className='normalLink' to='/news'>News(Demo)</NavLink>
          </nav>

          {/* 2-4) 페이지들에 대한 라우터 구성 */}
          <Routes>
              <Route path='/inline_css' element={<InlineCss />}></Route>
              <Route path='/css_class' element={<CssClass />}></Route>
              <Route path='/css_module' element={<CssModule />}></Route>
              <Route path='/scss' element={<Scss />}></Route>
              <Route path='/scss_module' element={<ScssModule />}></Route>
              <Route path='/styled_component' element={<StyledComponent />}></Route>
              <Route path='/responsive' element={<Responsive />}></Route>
              <Route path='/news/*' element={<News />}></Route>
          </Routes>
      </div>
    );
}

export default App;
