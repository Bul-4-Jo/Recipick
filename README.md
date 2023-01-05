# 🥒 레시피를 알고싶다면 레시픽을 pick ! 🥕
![recipick4186658](https://user-images.githubusercontent.com/55517023/210679411-1ed0ab11-86be-47cf-8271-87d3d8363f4f.png)
## 🍳 프로젝트 소개

### [개요]

```
 레시픽은 요리 레시피를 업로드하여 공유하는 목적의 SNS입니다. 
 서비스 사용자는 레시피 재료를 태그로 사용하여 비슷한 재료를 사용한 다른 사용자의 레시피를 참고할 수 있습니다.
 또한, 태그를 통해 자신이 직접 기른 채소와 과일 등 레시피 재료를 판매할 수 있습니다.
 이외에도 레시픽은 게시물 및 댓글 작성, 사용자 검색, 팔로우 기능을 제공합니다.
```

### [링크]

- [🥕 프로젝트 레포지토리](https://github.com/Bul-4-Jo/Recipick)
- [📑 팀 워크스페이스](https://www.notion.so/743287e0357c491683e20e1161a23806)
- [🎨 디자인 피그마](https://www.figma.com/file/iszI0ILqCgLo378pwYFtop/Recipe?node-id=0%3A1&t=Ozd6r8O2rF5TtUjy-0)

<br />
<br />
<br />

## 👩‍👩‍👦‍👦 팀원 소개

|                                                              **강수정**                                                              |                                                                                                                           **손혜수**                                                                                                                           |                                                                                                                           **이윤구**                                                                                                                            |                                                             **이지운**                                                             |
| :----------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: |
|                        <img src="https://avatars.githubusercontent.com/u/110231276?v=4" height=180 width=180>                        |                                                                                     <img src="https://avatars.githubusercontent.com/u/46313348?v=4" height=180 width=180>                                                                                      |                                                                                      <img src="https://avatars.githubusercontent.com/u/78248971?v=4" height=180 width=180>                                                                                      |                       <img src="https://avatars.githubusercontent.com/u/55517023?v=4" height=180 width=180>                        |
| <a href="https://github.com/kngsujng"><img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/> | <a href="https://github.com/sduu"><img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a> <a href="https://66651.tistory.com/"><img src="https://img.shields.io/static/v1?label=&message=Tistory&color=orange"></a> | <a href="https://github.com/yunkooo"><img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a> <a href="https://velog.io/@yunkooo"><img src="https://img.shields.io/static/v1?label=&message=Velog&color=#20C997"></a> | <a href="https://github.com/isemae"><img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/> |

<br />
<br />
<br />

## 🎯 역할분담

### **강수정**

- 전반적인 소스 코드 포맷 정리 및 불필요한 요소 삭제
- 메인 프로필 페이지
  - 사용자가 포스팅한 게시물 불러오는 기능 구현
  - 사용자 게시물의 사진을 앨범형 / 리스트형으로 불러오는 기능 구현
  - 앨범형 사진 클릭시 게시물 상세 페이지로 이동하는 기능 구현
- 프로필 수정 페이지
  - 기존 프로필 데이터 유지 기능 구현
  - 프로필 수정 유효성 검사
- 채팅룸 페이지
  - 시멘틱한 마크업 및 반응형 스타일링 구현
- 공통 컴포넌트
  - 상단 공통 헤더 컴포넌트 구현
  - 공용 게시물 컴포넌트(PostCard) 구현

### **손혜수**

- 팀 리딩
- 전역으로 사용되는 기본 스타일 / 테마 세팅
- 레시피 재료 태그에 따른 판매 중인 상품 필터링 기능 구현
- 홈 피드 페이지
  - 무한 스크롤
  - 팔로워 유무에 따른 UI 구현
- 게시글 업로드 페이지
  - 게시글 업로드 기능
  - textarea 리사이징
  - 이미지 여러 개 업로드 기능
- 게시글 수정 페이지
  - 게시글 삭제 기능 구현
- 팔로워 / 팔로잉 리스트 페이지 구현
  - 팔로우 / 언팔로우 기능 구현
- 공통 컴포넌트
  - 하단 공통 탭 메뉴 컴포넌트 구현
  - 공용 유저 정보 컴포넌트 구현
  - 판매중인 상품 : 상품 업로드 / 상품 수정 페이지 / 상품 삭제 기능 구현

### **이윤구**

- 라우터를 활용한 유저 토큰 검증 기능
- 프로젝트 eslint / prettier 세팅
- 로그인, 로그아웃 기능 구현
- 프로필 페이지 공유 버튼 기능 구현
- splash 페이지
- 회원가입 페이지
  - 회원가입 유효성 검사
- 로그인 페이지
  - 로그인 유효성 검사
- 404 페이지
- 채팅 리스트 페이지
  - 팔로잉한 사용자 채팅리스트에 띄우는 기능 구현
- 공통 컴포넌트
  - 공용 모달 컴포넌트 구현
  - 공용 얼럿 컴포넌트 구현

### **이지운**

- 라우터 설계
- 레시픽 로고 및 배경 이미지 제작
- 유저 검색 페이지
  - 검색 결과 구현
- 게시글 상세 페이지
  - 여러 컴포넌트를 종합하여 사용자에 따른 기능 구현
- 공통 컴포넌트

  - 버튼크기와 활성화에 따른 공용 버튼 컴포넌트 구현
  - 좋아요 / 좋아요 취소 기능 구현
  - 댓글 등록 / 댓글 삭제 기능 구현
  - 댓글 / 좋아요 수 증감 반영

  <br>

<br />
<br />
<br />

## 📔 디렉터리 구조

```
📁public
  └─📄index.html
  |
📁src
  ├─📁API
  │   └─📄api
  |
  ├─📁Assets
  │   ├─📁Fonts
  │   ├─📁Icons
  │   └─📁Images
  |
  ├─📁Components
  │   ├─📁Comment
  │   ├─📁CommentItem
  │   ├─📁Common
  │   ├─📁FollowItem
  │   ├─📁LoginForm
  │   ├─📁PostEdit
  │   ├─📁Product
  │   ├─📁ProductEdit
  │   ├─📁ProfileEdit
  │   ├─📁Reactions
  │   ├─📁Search
  │   └─📄UserSearch.jsx
  |
  ├─📁Hooks
  |   ├─📄Hook.jsx
  |   └─📄useUploadFile.js
  |
  ├─📁Pages
  │   ├─📁Login
  │   ├─📁Main
  │   ├─📁NotFound
  │   ├─📁Post
  │   ├─📁Product
  │   ├─📁Signup
  │   └─📁Splash
  |
  ├─📁Routes
  |   ├─📄AuthRoute.jsx
  |   ├─📄NonAuthRoute.jsx
  |   └─📄Router.jsx
  |
  ├─📁Style
  |   ├─📄GlobalFonts.css
  |   ├─📄GlobalStyle.jsx
  |   └─📄GlobalTheme.js
  |
  ├─📄App.js
  ├─📄index.js
  ├─🎨font.css
  ├─🎨global.css
  └─🎨reset.css
📄.eslintrc
📄.prettierrc
📄package-lock.json
📄package.json
📄README.md
```

<br />
<br />
<br />

## 🖼 핵심 기능

<img src="https://user-images.githubusercontent.com/110231276/210597449-bf2e01d6-b76a-4773-9979-062664194db7.gif" width="100%" height="100%" alt="" />

### 1️⃣ 홈

|                                                                       **로그인**                                                                       |                                                                     **회원가입**                                                                     |
| :----------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/110231276/210583383-bacebb1a-7664-4c3b-b765-a45b284ae01c.gif" width="100%" height="100%" alt="" /> | <img src='https://user-images.githubusercontent.com/110231276/210583397-b9619cdf-aea5-4560-a482-1b134861c5c1.gif' width='100%' height='100%' alt=''> |

|                                                                      **홈 피드**                                                                      |                                                                        **검색**                                                                        |
| :---------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src='https://user-images.githubusercontent.com/110231276/210585535-6a0dfdc4-7fa2-4390-97b6-95ae1850c6c4.gif' width="100%" height="100%" alt=""/> | <img src='https://user-images.githubusercontent.com/110231276/210583438-27165d3a-9a05-49b5-ae43-2636b388fb9b.gif' width="100%" height="100%" alt="" /> |

| **채팅**                                                                                                                                               | **404 페이지**                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <img src='https://user-images.githubusercontent.com/110231276/210583465-0f667ea8-bc1c-40d4-a844-fba69dde376b.gif' width="100%" height="100%" alt="" /> | <img src='https://user-images.githubusercontent.com/110231276/210583478-984fd924-6533-4ad1-80bf-5519f631ff88.gif' width="100%" height="100%" alt="" /> |

### 2️⃣ 게시글

|                                                                    **게시글 작성**                                                                     |                                                                    **게시글 수정**                                                                     |                                                                    **게시글 삭제**                                                                     |
| :----------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src='https://user-images.githubusercontent.com/110231276/210583496-b1435e03-c07d-4428-9d7d-15954e3c9dd3.gif' width="100%" height="100%" alt="" /> | <img src='https://user-images.githubusercontent.com/110231276/210583539-c8f9693b-f3e8-4c77-ae01-d0136d6a08c2.gif' width="100%" height="100%" alt="" /> | <img src='https://user-images.githubusercontent.com/110231276/210583559-7d911ab3-ab9a-4c2f-95d8-10de809cfc94.gif' width="100%" height="100%" alt="" /> |

|                                                                **게시글 상세 및 댓글**                                                                 |                                                                     **댓글 삭제**                                                                      |                                                                     **댓글 신고**                                                                     |
| :----------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src='https://user-images.githubusercontent.com/110231276/210583570-328287b7-2aff-428f-8312-8fc8fd96b7e9.gif' width="100%" height="100%" alt="" /> | <img src='https://user-images.githubusercontent.com/110231276/210583586-f24410b4-a32e-4231-b165-009ee56a1201.gif' width="100%" height="100%" alt="" /> | <img src='https://user-images.githubusercontent.com/110231276/210601036-9e4eb74f-f457-4419-93af-ac81f9046f25.gif' width='100%' height='100%' alt=''/> |

| **게시글 신고**                                                                                                                                        | **좋아요, 좋아요 취소**                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <img src='https://user-images.githubusercontent.com/110231276/210583640-54c07b84-4280-4827-90cf-c53d8d1cc1cd.gif' width="100%" height="100%" alt="" /> | <img src='https://user-images.githubusercontent.com/110231276/210583649-5b2978e7-1b6b-47ca-b1c5-b49336453527.gif' width="100%" height="100%" alt="" /> |

### 3️⃣ 프로필

| **내 프로필**                                                                                                                                          | **프로필 수정**                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <img src='https://user-images.githubusercontent.com/110231276/210583663-bff77024-e296-4cb4-b531-4951a551319c.gif' width="100%" height="100%" alt="" /> | <img src='https://user-images.githubusercontent.com/110231276/210583750-0b72250d-a67c-4072-8312-a517b1417a66.gif' width="100%" height="100%" alt="" /> |

| **팔로워, 팔로잉**                                                                                                                                     | **타 유저 프로필 및 팔로우, 언팔로우**                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <img src='https://user-images.githubusercontent.com/110231276/210583808-6b0cede2-34fe-4b86-baae-369c6ebddfd6.gif' width="100%" height="100%" alt="" /> | <img src='https://user-images.githubusercontent.com/110231276/210583688-84674d02-e85c-477f-9392-e3ebaf028600.gif' width="100%" height="100%" alt="" /> |

### 4️⃣ 판매 상품

|                                                                     **상품 등록**                                                                      |                                                                     **상품 수정**                                                                      |                                                                     **상품 삭제**                                                                      |
| :----------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src='https://user-images.githubusercontent.com/110231276/210583821-58ae8d71-10d5-4711-aded-80686d7fa18c.gif' width="100%" height="100%" alt="" /> | <img src='https://user-images.githubusercontent.com/110231276/210583834-b5f138ea-0a74-4995-ad39-f6d7d9fb8b92.gif' width="100%" height="100%" alt="" /> | <img src='https://user-images.githubusercontent.com/110231276/210583847-2449835c-515a-4e87-b6d4-f52f0c230045.gif' width="100%" height="100%" alt="" /> |

<br />
<br />
<br />

## 📍 불사조만의 뽀인트

<!--
무한스크롤 쓸거면 한번에 10개까지만표시되는 api에맞춰서 최대한 방법을 찾았고 일종의최적화라고볼수도있을거같아서그걸강조하면어떨까싶습니다모르겠습니다👍
5. 전역상태관리 미구현을 통한 어려움을 경험
6. 깃헙 프로젝트 사용
7. 피그마 사용
9. 하위 컴포넌트에서 값이 제대로 안들어 갔거나 타입이 다를 경우 랜더링이 전혀 안됨 - 트러블 슈팅(&& 또는 옵셔널 체이닝으로 해결)

 -->

### 1️⃣ 적극적인 깃허브 활용

<br />

> 이슈와 PR 템플릿 활용

  <img src="https://user-images.githubusercontent.com/46313348/210583061-587c6aee-989b-483e-8e58-fc80632d7d16.png" width="70%" height="30%" alt="" />

용도별로 미리 만들어진 템플릿을 활용하여 작성자가 이슈를 손쉽게 구성하고 리뷰어가 추가적인 커뮤니케이션 없이 내용을 파악할 수 있도록 했습니다.

<br />
<br />

> 깃허브 이슈와 프로젝트로 일정 관리

<br />

  <img src="https://user-images.githubusercontent.com/46313348/210584275-7b0e720f-3a80-4438-a072-96feab3f1cbe.png" width="90%" height="50%" alt="" />

Issue와 연동된 GitHub 프로젝트를 통해 일정을 관리함으로써 여러 서비스에 분산되지 않고 GitHub 내에서 프로젝트 관련 사항을 관리하여 작업 동선을 줄이고 코드에 집중할 수 있었습니다.

<br />
<br />

> PR을 활용한 코드 리뷰 <br />

  <img src="https://user-images.githubusercontent.com/46313348/210586701-d5e2c201-1b3f-4f3e-b1d4-a55beddef236.gif" width="70%" height="50%" alt="" />

Git flow를 통한 branch 관리 전략으로 충돌을 최소화하는 협업이 가능했으며, push된 코드는 2명 이상의 코드리뷰를 통해 메인 branch에 merge함으로써 코드의 품질과 안정성을 동시에 확보할 수 있었습니다.
또한 작업 결과를 쉽게 알 수 있도록 확인 지침을 작성하거나 동영상이나 이미지 등을 적극적으로 활용하여 팀원 간 작업 내용 공유를 용이하게 했습니다.

<br />
<br />

> 디스코드 웹 훅

신속한 의사소통과 코드 관리를 위해 GitHub와 연동된 디스코드 웹 훅을 통해 PR, Issue 등의 변경을 관리했습니다. 해당 부트캠프 과정이 디스코드 내에서 주로 이루어졌기 때문에 디스코드에 상주하는 팀원들이 변경사항을 빠르게 확인하고 반영할 수 있었습니다.

<br />
<br />

### 2️⃣ 협업

> 대화하기

저희의 초점은 완성도 보다 협업의 경험에 두었습니다.

> 같이하기

코드 리뷰, 리팩토링, 공용 컴포넌트, 라이브 쉐어

각자가 맡은 파트를 구현 한 다음 하루동안 집중적으로 live share 를 통해 코드를 리뷰 및 개선하고 문제점을 해결했습니다.

해결하지 못하는 부분이 생기면 곧바로 공유하여 팀원 모두가 페어 프로그래밍을 통해 문제를 해결하는 등 원활한 커뮤니케이션을 위해 노력했습니다.

<!--
커스텀 훅
전역상태관리 미구현을 통한 어려움을 경험
 -->

<br />
<br />
<br />

## 💥 트러블 슈팅

### 1️⃣ Portal

전반적으로 체계적인 레이아웃을 잡아주기 위해 Layout 컴포넌트를 만들고 `<Header>` `<TabMenu>` `<Outlet>`를 구성 하였습니다.  
`<Header>` 와 `<TabMenu>` 안에 있는 디자인 컴포넌트들은 안에 갇히고 `main 컴포넌트`에서 처리되고 있는 data 와 `Header`에서 처리되는 data 또는 input value 를 서로 데이터 이동 시키기 위해서는 많은 props를 넘겨 받아와서 처리를 해주어야 하기 때문에 비효율적이라고 생각되어 React Portal을 사용하였습니다.

```
ReactDOM.createPortal(child, container)
  child = 랜더링 할 자식
  container = 랜더링할 장소 / 원하는 요소의 정보를 넣어줍니다
```

<br />

| Layout 컴포넌트                                                                                                                                      | Header의 Modal 버튼 <br> Header 컴포넌트에서는 Modal / Alert 동작 및 검색 Input 동작을 하고있습니다.                                                 |
| :---------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://user-images.githubusercontent.com/78248971/210580878-e100caf1-8ee1-4db7-afce-19ea16a2f5fa.png" width="100%" height="100%" alt="">  | <img src="https://user-images.githubusercontent.com/78248971/210582666-f399ae30-8e19-4edd-ac2f-60f56626d5fb.png" width="100%" height="30%" alt="" /> |
| <strong>Modal 컴포넌트</strong>                                                                                                                      |
| <img src="https://user-images.githubusercontent.com/78248971/210584193-22f1ed7b-3d76-4a36-8d63-2e1cd7f540d1.png" width="100%" height="30%" alt="" /> |

<br />
<br />

### 2️⃣ 로그인 시 api.js 에서 토큰 정보를 못 불러오는 이슈

<img src="https://user-images.githubusercontent.com/46313348/210576426-d408046f-ec4d-43f3-9910-855e7ca4a05b.png" width="60%" height="30%" alt="" />

axios를 활용한 API 호출 소스 코드를 모아 api.js 파일에서 관리하고 있었는데, 로그인 시 로컬스토리지에 저장된 토큰 정보를 불러오지 못하는 이슈가 있었습니다. axios에서 제공하는 기능인 HTTP 요청 / 응답을 가로채는 Interceptor를 활용하여 해결했습니다. API 요청 시 갱신된 토큰 정보 헤더에 전달 할 수 있도록 수정했습니다.

<br />
<br />

### 3️⃣ input 입력 시 해당 페이지의 컴포넌트가 깜빡거리는 이슈

<img src="https://user-images.githubusercontent.com/78248971/210585613-f7ae6b1a-0daf-4713-a516-aec8e7f64633.png" width="60%" height="30%" alt="" />

useMemo를 사용하여 불필요한 재렌더링을 방지할 수 있었습니다. response 상태 값이 변하기 전까지는 PostImg 컴포넌트를 새로 연산하지 않고 재사용 하여 리렌더링이 발생하지 않도록 하였습니다.

<br />
<br />
<br />

## 💖 느낀점

### 🐣 수정

팀프로젝트에 익숙하지 않아서 코드 1줄도 제대로 짜지 못할까봐 걱정이었지만 팀원분들의 코드 참고하면서 더듬더듬 짤 수 있었고, 디스코드를 통한 소통과 라이브 쉐어를 이용하여 혼자서 풀리지 않았던 코드에 대한 질의응답을 실시간으로 할 수 있어서 좋았습니다. 팔로워 입장에서 약 한 달간 많은 것을 배울 수 있어서 좋았습니다 !

### 🐣 혜수

처음 해보는 팀 프로젝트라 걱정도 많고 어떻게 시작해야 할지 감도 안 잡혔었는데, 좋은 팀원 분들을 만나서 프로젝트를 잘 진행할 수 있었던 것 같습니다. 실수해도 기죽지 않게 북돋아주셔서 감사합니다! 따듯한 불사조🔥

### 🐣 윤구

제대로된 협업과 프로젝트는 처음이여서 걱정이 많았지만 프로젝트를 진행하면서 제가 얼마나 성장했고 현재위치를 알 수 있는 좋은 시간이였던것 같습니다.

### 🐣 지운

리액트를 배우는 중에는 계속 우주에 있었어서 프로젝트를 시작하기 전에 너무 자신이 없었는데 좋은 동료분들을 만난 덕에 즐겁게 협업하며 조금이나마 성장할 수 있었다고 생각합니다. 많이 깨지면서 저에게 부족한 점을 다시 한 번 깨닫는 시간이었다고 느낍니다.

<br />
<br />
<br />

## 🔥 앞으로의 도전과제

```
- 전역상태관리
- 아토믹 패턴 적용
- 트러블 슈팅 문서화
- 이미지 사이즈 최적화
```
