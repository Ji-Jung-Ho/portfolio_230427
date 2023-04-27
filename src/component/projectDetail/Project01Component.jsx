import React, { useEffect, useState } from 'react';
import  { Link, useNavigate } from 'react-router-dom';
import img1 from '../../img/back_btn.png';
import img2 from '../../img/back_btn_on.png';

export default function Project01Component () {

  const [scroll, setScrool] = useState(0);
  const [backBtnImg, setBackBtnImg] = useState(true);
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
    <div id='project01'>
      <header id="header" className={scroll >= 99 ? "on" : ""}>
        <div className="container">
          <div className="back-btn">
            <button type='button' className={scroll >= 99 ? "on" : ""} onClick={onClickBtn}>
              <img src={scroll <= 99 ? img1 : img2} alt=""/>
            </button>
          </div>
        </div>
      </header>
      <div className="project01-main">
        <div className="container">
          <div className="main-title">
            <img src="./img/kurly_logo.png" alt="" />
            <h2><strong>마켓컬리</strong> 클론코딩 (팀)</h2>
          </div>
          <div className="project-content">
            <div className="project-info">
              <h2>❗프로젝트 설명</h2>
              <p>다양한 식재료와 생활용품을 판매하는 온라인 쇼핑몰 <strong>마켓컬리</strong> 홈페이지를 클론 코딩하여 본 사이트의 기능을 최대한 구현했습니다. <br />
                 <strong>마켓컬리</strong> 팀 프로젝트에서 구현한 핵심 기능은 3가지입니다.
              </p>
              <ul>
                <li>&nbsp;애니메이션과 슬라이드로 구성된 메인 페이지</li>
                <li>&nbsp;4개의 테마(신상품, 베스트, 알뜰쇼핑, 특가/혜택)로 나뉘어져 있는 상품 소개 페이지</li>
                <li>&nbsp;회원가입 페이지와 DB와 연동하여 회원가입 기능 구현</li>
              </ul>
            </div>
            <div className="development-part">
              <h2>❗프로젝트에서 맡은 부분</h2>
              <ul>
                <li>베스트 페이지</li>
                <li>특가/혜택 페이지</li>
                <li>modal 구현</li>
                <li>header 구현</li>
                <li>회원가입 주소, 이용약관동의 구현</li>
              </ul>
              <br />
              <p>
                베스트, 특가/혜택 페이지의 UI를 구현하였으며, AJAX를 사용하여 JSON 데이터(상품 이미지)를 추가했습니다.<br /> 회원가입에서 아이디와 이메일의 중복확인을 위해 PHP 조회문을 만들어 DB에 저장된 아이디와 이메일을 비교할 수 있게 구현했습니다. <br />
                Modal, Header를 제작하면서 페이지 이동, Scroll, Tool-Tip 이벤트를 구현했습니다. <br />
                회원가입 주소 검색 기능을 구현하기 위해 Daum 주소 API를 활용했고, 주소 팝업창도 구현하여 Daum 주소 API에서 주소를 입력하면 팝업창에서 나머지 주소를 입력할 수 있게 구현했습니다. <br />
                회원가입 시 유효성검사를 해서 필수입력사항이 모두 입력되어야 회원가입을 할 수 있게 구현했습니다.
              </p>
            </div>
            <div className="experience">
              <h2 className='experience-main-title'>❗성장 경험</h2>
              <h2 className='sub-title'>❕HTML, CSS로 홈페이지 구성과 디자인 이해</h2>
              <p>
                <strong>마켓컬리</strong> 홈페이지는 클론 코딩이여서 기획을 많이 하지는 않았지만, 쇼핑몰 홈페이지의 기본적인 구성을 알게되었습니다.<br />
                Sass를 사용하여 
                또한 같은 기능을 구현해도 jQuery로 JavaScirpt보다 쉽고 간결하게 만들었고 코드의 양도 줄었습니다.
              </p>
              <h2 className='sub-title'>❕JavaScript와 jQuery 이해</h2>
              <p>
                JavaScript를 이용한 터치 슬라이드 기능 구현과 jQuery를 이용한 Click, Keyup 이벤트들을 경험했으며, 
              </p>
              <h2 className='sub-title'>❕팀원들과의 협업</h2>
              <p>
                학원 수업을 하기 전 스터디 카페에서 3~4시간씩 같이 홈페이지를 제작하였습니다. 
                오프라인으로 만나서 각자의 진행상황, 오류 등을 서로 공유할 수 있었고, 각자의 의견을 통해 개선해야할 점이나 추가해야할 부분까지 
                뷰티 컬리도 만들어 보자는 팀원의 의견에 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};