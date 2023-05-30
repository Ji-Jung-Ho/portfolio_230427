import React, { useEffect, useState } from 'react';
import  { useNavigate } from 'react-router-dom';
import img2 from '../../../img/back_btn_on.png';
import './css/tablet_project03.css';

export default function TabletProject03Component () {

  const [scroll, setScrool] = useState(0);
  const navigate = useNavigate();

  const onScroll=()=>{
    setScrool(window.scrollY || document.documentElement.scrollTop);
  }
  const onClickBtn = () => {
    navigate(-1);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    window.scrollTo(0, 0);
}, []);

  return (
    <div id='tablet-project03'>
      <header id="header" className={scroll >= 99 ? "on" : ""}>
        <div className="container">
          <div className="back-btn">
            <button type='button' className={scroll >= 99 ? "on" : ""} onClick={onClickBtn}>
              <img src={img2} alt=""/>
            </button>
          </div>
          <div className="banner-img-box"></div>
        </div>
      </header>
      <div className="project03-main">
        <div className="container">
          <div className="main-title">
            <img src="./img/kurly_logo.png" alt="" />
            <h2>나의 포트폴리오</h2>
          </div>
          <div className="project-content">
            <div className="project-info">
              <h2>❗프로젝트 설명</h2>
              <p className='project-info-main-title'>React를 사용하여 제작한 반응형 포트폴리오 입니다. 다양한 라이브러리를 사용하여 기능을 구현했습니다.<br /></p>
              <p className='project-info-sub-title'>포트폴리오 웹페이지에서 구현한 핵심 기능은 <span>3가지</span>입니다.</p>
              <ul>
                <li>1. React-reveal을 사용한 애니메이션 구현</li>
                <li>2. react-scroll로 구현한 클릭 시 스크롤 이동 이벤트</li>
                <li>3. Swiper를 사용하여 구현한 슬라이드 및 페이지네이션, 네비게이션 커스터마이징</li>
                <li>4. React-Responsive 사용하여 반응형 웹페이지 제작</li>
              </ul>
            </div>
            <div className="development-part">
              <h2 className='development-main-title'>❗개발 내용</h2>
              <h2 className='development-sub-title'><span>HTML, CSS, JavaScript를 사용한 정적 & 동적인 페이지 구현</span></h2>
              <p>
                HTML로 웹 페이지의 구조를 검색 엔진 최적화 (SEO)를 생각해서 시맨틱 태그를 준수하며 구현하였고, Sass로 페이지 구조의 스타일을 추가하였습니다.
                React-Scroll 라이브러리를 사용하여 메뉴 클릭 시 스크롤 이동 되는 기능도 구현했습니다. <span>Swiper</span>로 이미지 슬라이드를 구현,
                <span>React-reveal</span>로 요소에 Fade, Filp 구현, <span>React-Router</span>를 사용하여 페이지 전환 구현, <span> React-responsive</span>를 사용하여 반응형 웹페이지를 제작했습니다. 
                포트폴리오 웹페이지다 보니 기능보다는 시각적인 효과를 중점에 두고 웹페이지를 제작했습니다.
              </p>
              <h2 className='development-sub-title'><span>React Hooks, Router를 사용한 웹페이지 구현</span></h2>
              <p>
                UseState를 사용하여 보유 기술에 대한 설명 UI의 초기상태값을 정해주어 UI 클릭 시 상태값이 변하게 만들어 Click Tooggle을 구현했으며,
                같은 방법으로 좌측 메뉴의 네비게이션 클릭 시 지정한 좌표로 Scroll되는 기능과 Scroll 위치에 상태값을 변경하고,
                각 상태값에 따라 스타일을 줄 ClassName을 동적으로 지정했습니다.
                UseEffect에 Scroll 이벤트를 추가하여 컴포넌트가 렌더링 될때마다 스크롤이 페이지의 최상단으로 구현했습니다.
                Router를 사용하여 부드러운 페이지 전환을 구현했고, UseNavigate Hook을 사용하여 버튼을 클릭 시 이전페이지로 돌아가는 기능을 구현했습니다.
              </p>
              <h2 className='development-sub-title'><span>반응형 웹페이지 제작</span></h2>
              <p>
                React-responsive를 사용하여 모바일, 태블릿, 데스크탑에 따라 볼 수 있게 반응형 웹페이지로 구현했습니다. media-query를 사용하지 않은 이유는
                모바일, 태블릿, 데스크탑의 컴포넌트를 따로 만들어 MainComponent에서 useMediaQuery를 통해 DeviceWidth가 각 분기점에 도달하면 디바이스 컴포넌트가 
                MainComponent에 랜더링 되는걸 구현하기 위해서 React-responsive를 사용했습니다. 디바이스의 환경에 따라 사용자의 편의성을 높이기 위해 모바일 버전에서 뒤로가기, 위로이동 버튼
                을 추가 하였습니다.
              </p>
            </div>
            <div className="experience">
              <h2 className='experience-main-title'>❗성장 경험</h2>
              <h2 className='experience-sub-title'><span>다양한 JavaScript 라이브러리의 사용</span></h2>
              <p>
                처음에 계획했던 포트폴리오 프로젝트에서 많은 참고 자료를 통해 지금의 웹페이지가 탄생했습니다. 라이브러리에 대한 개념과 사용 방법에 대해 잘 알지 못했지만, 이번 프로젝트를
                계기로 다양한 라이브러리의 사용법을 알게되었습니다. 처음 사용하는 라이브러리에 대해 많은 부분을 검색하고 사용해보고 오류도 수정하면서 프로젝트를 제작했습니다.
                완성된 프로젝트를 깃허브를 통해 배포 한 뒤 프로젝트를 보았을때 한정된 디바이스 환경에서만 볼 수 있다는 문제를 감지하여 react-responsive를 통해 반응형 웹페이지로 재구성 했습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};