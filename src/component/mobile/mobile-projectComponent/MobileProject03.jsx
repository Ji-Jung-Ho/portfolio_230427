import React, { useEffect, useState } from 'react';
import  { useNavigate } from 'react-router-dom';
import './css/Project03.css';

export default function MobileProject03 () {

  const [scroll, setScrool] = useState(0);
  const navigate = useNavigate();

  const onScroll=()=>{
    setScrool(window.scrollY || document.documentElement.scrollTop);
  }
  const onClickBackBtn = () => {
    navigate(-1);
  };

  const onClickUpBtn=()=> {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    window.scrollTo(0, 0);
    window.history.scrollRestoration = 'manual';
}, []);

  return (
    <div id='mobile-project03'>
      <div className="project03-main">
        <div className="container">
          <div className="main-title">
            <img src="./img/kurly_logo.png" alt="" />
            <h2>나만의 포트폴리오</h2>
          </div>
          <div className="project-content">
            <div className="project-info">
              <h2>❗프로젝트 설명</h2>
              <p className='project-info-main-title'>저에 대한 간단한 소개와 기술 스택, 개발한 Project를 소개하는 홈페이지 입니다. 다양한 라이브러리를 사용하여 기능을 구현했습니다.<br /></p>
              <p className='project-info-sub-title'>포트폴리오 웹페이지에서 구현한 핵심 기능은 <br/><span>3가지</span>입니다.</p>
              <ul>
                <li>1. React-reveal을 사용한 애니메이션 구현</li>
                <li>2. JavaScript로 구현한 스크롤 이벤트</li>
                <li>3. Swiper를 사용하여 구현한 슬라이드 및 페이지네이션, 네비게이션 커스터마이징</li>
                <li>4. React-Responsive 사용하여 반응형 웹페이지 제작</li>
              </ul>
            </div>
            <div className="development-part">
              <h2 className='development-main-title'>❗개발 내용</h2>
              <h2 className='development-sub-title'><span>HTML, CSS, JavaScript를 사용한 정적 & 동적인 페이지 구현</span></h2>
              <p>
                HTML로 웹 페이지의 구조를 검색 엔진 최적화 (SEO)를 생각해서 시맨틱 태그를 준수하며 구현하였고, SASS로 페이지의 구조의 스타일을 추가하였습니다.
                포트폴리오 웹페이지다 보니 기능보다는 시각적인 효과를 중점에 두었기 때문에 애니메이션이나 hover 이벤트들을 사용해서 만들었습니다.
                정적인 페이지를 구현한 뒤 JavaScript를 사용하여 네비게이션 메뉴 클릭 시 스크롤 이동, 현재 메뉴의 위치를 알려주는 스크롤 이벤트를 구현했습니다.
              </p>
              <h2 className='development-sub-title'><span>React Hooks, Router를 사용한 웹페이지 구현</span></h2>
              <p>
                UseState를 사용하여 보유 기술에 대한 설명 UI의 초기상태값을 정해주어 UI 클릭 시 상태값이 변하게 만들어 Click Tooggle을 구현했으며,
                같은 방법으로 좌측 메뉴의 네비게이션 클릭 시 지정한 좌표로 Scroll되는 기능과 Scroll 위치에 상태값을 변경하고,
                각 상태값에 따라 스타일을 줄 ClassName을 동적으로 지정했습니다.
                UseEffect에 Scroll 이벤트를 추가하여 컴포넌트가 렌더링 될때마다 스크롤이 페이지의 최상단으로 구현했습니다.
                Router를 사용하여 부드러운 페이지 전환을 구현했고, UseNavigate Hook을 사용하여 버튼을 클릭 시 이전페이지로 돌아가는 기능을 구현했습니다.
              </p>
            </div>
            <div className="experience">
              <h2 className='experience-main-title'>❗성장 경험</h2>
              <h2 className='experience-sub-title'><span>다양한 JavaScript 라이브러리의 사용</span></h2>
              <p>
                이 웹페이지를 제작하면서 많은 라이브러리의 사용방법을 배웠습니다. 간단하게 슬라이드를 만들어주는 Swiper, 애니메이션을 효과적으로 만들어주는 React-reveal
                , SPA에서 페이지 전환을 구현하기 위해 React-Router을 사용했습니다. 다양한 라이브러리를 통해서 이미지 슬라이드, 애니메이션 효과, 페이지 전환을 구현하게 되었습니다.
              </p>
            </div>
          </div>
          <div className="btn-box">
            <button className='back-btn' onClick={onClickBackBtn}>
              <img src="./img/back_btn_on.png" alt="" />
              <h2>뒤로가기</h2>
            </button>
            <button className='up-btn' onClick={onClickUpBtn}>
              <img src="./img/back_btn_on.png" alt="" />
              <h2>맨위이동</h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};