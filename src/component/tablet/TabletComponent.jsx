import React, { useEffect, useState, useRef } from 'react';
import  { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import {Fade, Flip} from 'react-reveal';
import { Link as ScrollLink } from 'react-scroll';
import 'swiper/swiper-bundle.css';
import './css/tablet_main.css'

SwiperCore.use([Navigation, Pagination])

export default function TabletComponent () {

  const [frontendTextUi, setFrontendTextUi] = useState(false);
  const [backendTextui, setBackendTextUi] = useState(false);
  const [dbTextui, setDbTextUi] = useState(false);
  const [collaborationTextui, setCollaborationTextUi] = useState(false);
  const [scroll, setScrool] = useState(0);

  const onScroll=()=>{  
    setScrool(window.scrollY || document.documentElement.scrollTop);
  }
  // 컴포넌트가 실행될때(새로고침 시) 최초 한번만 실행 
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    window.scrollTo(0, 0);
}, []);

// Skill UI 클릭 시 상태 변경
  const onClickToggleFrontend=()=>{
    setFrontendTextUi (frontendTextUi => !frontendTextUi);
  }
  const onClickToggleBackend=()=>{
    setBackendTextUi (backendTextui => !backendTextui);
  }
  const onClickToggleDb=()=>{
    setDbTextUi (dbTextui => !dbTextui);
  }
  const onClickToggleCollaboration=()=>{
    setCollaborationTextUi (collaborationTextui => !collaborationTextui);
  }

  return (
    <main id='tablet-main'>
        <section id='section1' className='intro'>
            <aside className="sec1-aside">
              <nav className='menu-bar'>
              <ul className="main-title">
                  <li>
                    <ScrollLink
                     to='section1'
                     spy={true}
                     smooth={true}
                     >
                    Home
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                     to='aboutMe'
                     spy={true}
                     smooth={true}
                     >
                    ABOUT ME
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                     to='skillMainTitle'
                     spy={true}
                     smooth={true}
                     >
                    SKILLS
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                     to='projectMainTitle'
                     spy={true}
                     smooth={true}
                     >
                    PROJECT
                    </ScrollLink>
                  </li>
                </ul>
                <ul className='github-email'>
                  <li><a href="mailto:kiik52.naver.com">kiik52.naver.com</a></li>
                  <li><a href="https://github.com/Ji-Jung-Ho" target="_blank" rel='noopener noreferrer'>github.com/Ji-Jung-Ho</a></li>
                  <li><p>Last Update : 2023-05-15</p></li>
                </ul>
              </nav>
            </aside>
            <article className="sec1-article">
              <div className="img-box">
              </div>
              <div className="main-title">
                  <Fade top duration={2000} delay={1000} fraction={0.9}>
                  <h2 className='info'>상상을 구현하는</h2>
                  </Fade>
                  <Flip top duration={1000} delay={2000} fraction={0.9}>
                  <h2 className='info-name'>
                    <span>지정호</span> 입니다.
                  </h2>
                  </Flip>
                  <Fade bottom duration={2000} delay={1000} fraction={0.9}>
                  <div className='info-subtitle'>
                    <span>프론트앤드 개발자를 목표로 노력하고 있습니다.</span>
                    <span>부족한 부분을 하나씩 채워가는 재미를 즐깁니다.</span>
                    <span>: 인생을 긍정적으로 살아가자라는 좌우명을 가지고 있습니다.</span>
                  </div>
                  </Fade>
              </div>
              <div className="down-arrow">
                <img src="./img/56747.png" alt="down-img" />
              </div>
            </article>
        </section>
        <section id="section2" className='main-content'>
          <aside className='sec2-aside'>
            <nav className='menu-bar'>
            <ul className="nav-main-title">
                <li>
                  <ScrollLink 
                  to="section1"
                  spy={true}
                  smooth={true}
                  >
                  Home
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink 
                  to='aboutMe' 
                  spy={true}
                  smooth={true}
                  >
                  ABOUT ME
                  </ScrollLink>
                  <div className="project-submenu">
                    <ul>
                      <li>
                        <ScrollLink 
                        to="education"
                        spy={true}
                        smooth={true}
                        >
                        - Education
                        </ScrollLink>
                      </li>
                      <li>
                        <ScrollLink 
                        to="workExperience"
                        spy={true}
                        smooth={true}
                        >
                        - Work experience
                        </ScrollLink>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <ScrollLink 
                  to='skillMainTitle' 
                  spy={true}
                  smooth={true}
                  >
                  SKILLS
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink 
                  to='projectMainTitle' 
                  spy={true}
                  smooth={true}
                  >
                  PROJECT
                  </ScrollLink>
                  <div className='project-submenu'>
                    <ul>
                      <li>
                        <ScrollLink 
                        to="content01" 
                        spy={true}
                        smooth={true}
                        >
                        - Kurly Team Project
                        </ScrollLink>
                      </li>
                      <li>
                        <ScrollLink 
                        to="content02" 
                        spy={true}
                        smooth={true}
                        >
                        - Kurly 개인 Porject</ScrollLink>
                      </li>
                      <li>
                        <ScrollLink 
                        to="content03" 
                        spy={true}
                        smooth={true}
                        >
                        - 나만의 포트폴리오
                        </ScrollLink>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
          </aside>
          <article className='sec2-article'>
            <div id="aboutMe">
              <div className="main-title">
                <h1><span>ABOUT ME</span></h1>
              </div>
              <div className="about-row-box">
                <div className="about-me">
                  <div className="row1-left">
                    <div className="name">
                      <img src="./img/user-info.png" alt="user-img" />
                      <h2>이름</h2>
                    </div>
                    <div className="detail">
                        <p>지정호</p>
                    </div>
                  </div>
                  <div className="row1-center">
                    <div className="birth">
                      <img src="./img/birth.png" alt="birth-img" />
                      <h2>생년월일</h2>
                    </div>
                    <div className="detail">
                        <p>1996.09.04</p>
                    </div>
                  </div>
                  <div className="row1-right">
                  <div className="phone-number">
                      <img src="./img/phone-number.png" alt="phone-img" />
                      <h2>전화번호</h2>
                    </div>
                    <div className="detail">
                        <p>010-5501-7918</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="education">
              <div className="edcation-main-title">
                <h2>#Educataion</h2>
              </div>
              <div className="education-content">
                <div className="education-school">
                  <h2>용인예술과학대학교 (구 용인송담대학교)</h2>
                  <ul>
                    <li>- 2015.03 ~ 2021.02 (졸업)</li>
                    <li>- 컴퓨터게임과</li>
                  </ul>
                </div>
                <div className="education-academy">
                  <h2>메가스터디 프론트엔드 5기</h2>
                  <ul>
                    <li>- 2022.07.15 ~ 2023.02.13</li>
                    <li>- 메가스터디 IT에서 진행하는 프론트엔드 개발자 양성 교육 과정</li>
                    <li>- 웹 프론트엔드 중심으로 백엔드의 기초와 함께 배우는 <span>자기 주도형 교육 과정</span></li>
                    <li>- <span>HTML</span>, <span>CSS</span>, <span>JS</span>, <span>jQuety</span>, <span>React.js</span>, <span>TypeScript</span> 외 다수</li>
                  </ul>
                </div>
              </div>
            </div>
            <div id="workExperience">
              <div className="work-experience-main-title">
                <h2>#Work</h2>
              </div>
              <div className="work-experience-content">
                <h1>카카오게임즈 - 모바일 운영팀</h1>
                <h2>(2020.06.23 ~ 2022.06.21)</h2>
                <h3>가디언테일즈 & 오딘  & 우마무스메 서비스 런칭 경험</h3>
                <ul> 
                  <li>- 원활한 게임 진행을 위한 게임 환경 및 서비스 제공</li>
                  <li>- 유저 동향 파악을 위한 모니터링</li>
                  <li>- 일일 데이터 관리 및 유저 관리</li>
                  <li>- 장애, 점검 히스토리 기록 및 게임 이슈 상황 수집</li>
                  <li>- 커뮤니티(공식카페, 디시인사이드 등) 유저 동향 수집</li>
                  <li>- 불법 프로그램 사용 유저 제제 및 공식카페 불건전 게시글, 댓글 삭제</li>
                  <li>- 이벤트 체크리스트 작성</li>
                  <li>- 정상적인 게임 점검 확인 및 내·외부망, 디바이스별 게임 접속 확인</li>
                  <li>- 이벤트 및 점검 공지사항 작성</li>
                  <li>- 공식 카페 활성화를 위한 게시글 댓글 기획안 작성</li>
                </ul>
              </div>
            </div>
            <div id="skillMainTitle">
              <h1><span>SKILLS</span></h1>
            </div>
            <div className="skill-content">
              <div className="skill-column-1">
                <div className={frontendTextUi ? "content-box frontend on" : "content-box frontend"} onClick={onClickToggleFrontend}>
                  <p className='content-title'>Frontend</p>
                  <img src="./img/frontend.png" className='frontend-img' alt="frontend-skills-img" />
                  <div className="click-ui-container">
                  <div className="click-ui-content">
                    <h2>HTML5, CSS3, JS(ES6)</h2>
                    <div className="detail-box">
                      <ul>
                        <li>- HTML 시멘틱 마크업 가능 </li>
                        <li>- meta태그 활용으로 SEO 최적화 가능 </li>
                        <li>- CSS의 유형별 선언 및 사용 </li>
                        <li>- Flex속성 활용 가능 </li>
                        <li>- JavaScript, jQuery를 활용하여 동적인 웹 페이지 구축 가능 </li>
                        <li>- jQuery를 활용하여 이벤트 구현 가능 </li>
                        <li>- Ajax를 이용하여 비동기 방식으로 웹 페이지 구축 가능 </li>
                      </ul>
                    </div>
                    <h2>React</h2>
                      <div className="detail-box">
                        <ul>
                          <li>- 리액트 개발환경 설정과 Virtual DOM 개념 이해</li>
                          <li>- JSX, TSX 사용과 함수형 컴포넌트 작성 가능</li>
                          <li>- TypeScript를 사용하여 변수 타입 명시 가능</li>
                          <li>- state, props 개념 및 데이터의 흐름 이해</li>
                          <li>- Axios를 활용하여 비동기 통신이 가능한 웹페이지 구현 경험</li>
                          <li>- Hook을 사용하여 React.state, useEffect 등 생명주기 연동 가능</li>
                          <li>- React-router-dom을 사용한 페이지이동 구현</li>
                        </ul>
                      </div>
                  </div>
                  </div>
                </div>   
              </div>
              <div className="skill-column-2">
                <div className={backendTextui ? "content-box backend on" : "content-box backend"} onClick={onClickToggleBackend}>
                  <p className='content-title'>Backend</p>
                  <img src="./img/backend.png" alt="backend-skills-img" />
                  <div className="click-ui-container">
                    <div className="click-ui-content">
                      <div className="detail-box">
                        <h2>PHP</h2>
                        <ul>
                        <li>- 웹문서를 모듈화하여 연동 후 활용 가능</li>
                        <li>- RESTFUL API 구현</li>
                        </ul>
                      </div>
                      <div className="detail-box">
                      <h2>Node.js</h2>
                        <ul>
                        <li>- Node.js 기반 서버의 웹페이지 구축 가능 </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>   
                <div className={dbTextui ? "content-box db on" : "content-box db"} onClick={onClickToggleDb}>
                  <p className='content-title'>DataBase</p>
                  <img src="./img/mysql.png" alt="db-skills-img" />
                  <div className="click-ui-container">
                    <div className="click-ui-content">
                      <div className="detail-box">
                        <h2>MySQL</h2>
                        <ul>
                          <li>- MySQL 테이블 생성, 수정, 삭제 가능</li>
                          <li>- 데이터 삽입, 수정, 조회, 삭제 활용 가능</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={collaborationTextui ? "content-box collaboration on" : "content-box collaboration"} onClick={onClickToggleCollaboration}>
                  <p className='content-title'>GitHub, Git</p>
                  <img src="./img/collaboration.png" alt="collaboration-skills-img" />
                  <div className="click-ui-container">
                    <div className="click-ui-content">
                      <div className="detail-box">
                        <h2>GitHub, Git</h2>
                        <ul>
                          <li>- GitHub를 통한 레포지토리 관리</li>
                          <li>- Git bash를 이용하여 홈페이지 배포 가능</li>
                          <li>- Git, Node.js를 통한 빌드 가능</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill-msg">
              <h2>❗스킬 화면을 클릭해 주세요!</h2>
            </div>         
            </div>
            <div id="projectMainTitle">
              <h1><span>PROJECT</span></h1>
            </div>
            <div className="project-content">
              <div id="content01">
                <div className="content-title">
                  <h2>Kurly Project (팀)</h2>
                </div>
                <div className="project-info-01">
                  <div className="swiper-container">
                    <Swiper
                      pagination = {{
                        el: '.swiper-pagination-01',
                        clickable: true,
                        bulletClass:"custom_bullet",
                        bulletActiveClass: "swiper-pagination-custom-bullet-active",
                        renderBullet: function (index, className) {
                          return `<button class="${className}"><img src="./img/project01-img/kurly_jquery_preview_${index + 1}.png" alt="Page ${index + 1}" /></button>`;
                        }}}
                      navigation={{
                        nextEl: '.project-01-next-btn',
                        prevEl: '.project-01-prev-btn'
                      }}
                      slidesPerView = {1}
                      loop = {true}
                    >
                      <SwiperSlide><img src="./img/project01-img/kurly_jquery_preview_1.png" alt="kurly_jQuery_img1" /></SwiperSlide>
                      <SwiperSlide><img src="./img/project01-img/kurly_jquery_preview_2.png" alt="kurly_jQuery_img2" /></SwiperSlide>
                      <SwiperSlide><img src="./img/project01-img/kurly_jquery_preview_3.png" alt="kurly_jQuery_img3" /></SwiperSlide>
                      <SwiperSlide><img src="./img/project01-img/kurly_jquery_preview_4.png" alt="kurly_jQuery_img4" /></SwiperSlide>
                      <SwiperSlide><img src="./img/project01-img/kurly_jquery_preview_5.png" alt="kurly_jQuery_img5" /></SwiperSlide>
                      <SwiperSlide><img src="./img/project01-img/kurly_jquery_preview_6.png" alt="kurly_jQuery_img6" /></SwiperSlide>
                    </Swiper>
                    <button className="project-01-next-btn">
                      <img src="./img/swiper-nav-btn.png" alt="next-btn-img" />
                    </button>
                    <button className="project-01-prev-btn">
                      <img src="./img/swiper-nav-btn.png" alt="prev-btn-img" />
                    </button>
                    <div className="swiper-pagination-01"></div>
                  </div>
                  <div className="info">
                    <p>마켓컬리 홈페이지 클론 코딩입니다. <span>Node서버 기반으로 HTML, CSS, JavaScript, jQuery를 사용하여 개발</span>하였으며, 스터디를 구성하여 팀 프로젝트로 마켓컬리의 상품페이지와 회원가입 페이지를 구현했습니다.</p>
                    <div className="development-info">
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>개발 기간 :</p>
                        <p className='right-p'>2022-12 ~ 2023-01</p>
                      </div>
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>개발 인원 :</p>
                        <p className='right-p'>3명</p>
                      </div>
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>Frontend :</p>
                        <p className='right-p'>HTML, CSS, javascript, jQuery</p>
                      </div>
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>Backend :</p>
                        <p className='right-p'>PHP, Node.js</p>
                      </div>
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>DB :</p>
                        <p className='right-p'>MySQL</p>
                      </div>
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>URL :</p>
                        <p className='right-p'><a href='https://kiik52.com/kurly' target='_blank' rel='noopener noreferrer'>홈페이지 바로가기</a></p>
                      </div>
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>배포 :</p>
                        <p className='right-p'>닷홈 웹 호스팅을 사용한 홈페이지 배포</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="view-detail-btn">
                  <Link to='/table-project01'>
                    <button >
                    자세히보기
                    </button>
                  </Link>
                </div>
              </div>
              <div id="content02">
                <div className="content-title">
                  <h2>Kurly Project (개인)</h2>
                </div>
                <div className="project-info-02">
                  <div className="swiper-container">
                    <Swiper
                      pagination = {{
                        el: '.swiper-pagination-02',
                        clickable: true,
                        bulletClass:"custom_bullet",
                        bulletActiveClass: "swiper-pagination-custom-bullet-active",
                        renderBullet: function (index, className) {
                          return `<button class="${className}"><img src="./img/project02-img/kurly_react_preview_${index + 1}.png" alt="Page ${index + 1}" /></button>`;
                        }}}
                      navigation={{
                        nextEl: '.project-02-next-btn',
                        prevEl: '.project-02-prev-btn'
                      }}
                      slidesPerView = {1}
                      loop = {true}
                    >
                      <SwiperSlide><img src="./img/project02-img/kurly_react_preview_1.png" alt="kurly_react_img1" /></SwiperSlide>
                      <SwiperSlide><img src="./img/project02-img/kurly_react_preview_2.png" alt="kurly_react_img2" /></SwiperSlide>
                      <SwiperSlide><img src="./img/project02-img/kurly_react_preview_3.png" alt="kurly_react_img3" /></SwiperSlide>
                      <SwiperSlide><img src="./img/project02-img/kurly_react_preview_4.png" alt="kurly_react_img4" /></SwiperSlide>
                      <SwiperSlide><img src="./img/project02-img/kurly_react_preview_5.png" alt="kurly_react_img5" /></SwiperSlide>
                      <SwiperSlide><img src="./img/project02-img/kurly_react_preview_6.png" alt="kurly_react_img6" /></SwiperSlide>
                    </Swiper>
                    <button className="project-02-next-btn">
                      <img src="./img/swiper-nav-btn.png" alt="next-btn-img" />
                    </button>
                    <button className="project-02-prev-btn">
                      <img src="./img/swiper-nav-btn.png" alt="prev-btn-img" />
                    </button>
                    <div className="swiper-pagination-02"></div>
                  </div>
                  <div className="info">
                    <p>마켓컬리 홈페이지 클론 코딩입니다. <span className='color'>Node서버 기반으로 HTML, CSS, JavaScript, jQuery, React를 사용하여 개발</span>하였으며, 팀 프로젝트로 만든 마켓컬리를 React를 사용하여 다시 만든 프로젝트입니다. </p>
                    <div className="development-info">
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>개발 기간 :</p>
                        <p className='right-p'>2022-01 ~ 2023-04</p>
                      </div>
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>개발 인원 :</p>
                        <p className='right-p'>1명</p>
                      </div>
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>Frontend :</p>
                        <p className='right-p'>HTML, CSS, javascript, jQuery React</p>
                      </div>
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>Backend :</p>
                        <p className='right-p'>PHP, Node.js</p>
                      </div>
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>DB :</p>
                        <p className='right-p'>MySQL</p>
                      </div>
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>URL :</p>
                        <p className='right-p'><a href='https://ji-jung-ho.github.io/kurly_react_deploy/' target='_blank' rel='noopener noreferrer'>홈페이지 바로가기</a></p>
                      </div>
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>배포 :</p>
                        <p className='right-p'>ghpage를 사용하여 GitHub 홈페이지 배포</p>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div className="view-detail-btn">
                  <Link to='/table-project02'>
                    <button >
                    자세히보기
                    </button>
                  </Link>
                </div>
              </div>
              <div id="content03">
                <div className="content-title">
                  <h2>My Portfolio</h2>
                </div>
                <div className="project-info-03">
                  <img src="./img/mypage.png" alt="portfolio-web-img" />
                  <div className="info">
                    <p>React를 사용하여 제작한 개인 웹 포트폴리오 입니다. 모바일과 PC, 태블릿에서 볼 수 있게 최대한 반응형을 고려하여 작업하였습니다.</p>
                    <div className="development-info">
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>개발 기간 :</p>
                        <p className='right-p'>2022-04 ~ 2023-05</p>
                      </div>
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>개발 인원 :</p>
                        <p className='right-p'>1명</p>
                      </div>
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>Frontend :</p>
                        <p className='right-p'>HTML, CSS, Javascript, React</p>
                      </div>
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>Backend :</p>
                        <p className='right-p'>Node.js</p>
                      </div>
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>URL :</p>
                        <p className='right-p'><a href='https://ji-jung-ho.github.io/portfolio_deploy/' target='_blank' rel='noopener noreferrer'>홈페이지 바로가기</a></p>
                      </div>
                      <div className='detail'>
                        <p className='left-p'><span>🔺</span>배포 :</p>
                        <p className='right-p'>GitHub 홈페이지 배포</p>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div className="view-detail-btn">
                  <Link to='/table-project03'>
                    <button >
                    자세히보기
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            
          </article>
        </section>
        <div className="footer">
          <h2>Copyright © JungHo Ji. All rights reserved.</h2>
        </div>
      </main>
  );
};
