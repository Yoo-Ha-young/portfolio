export const introText = {
    mainTitle: "DEVELOPER YOOJIIN",
    title: "안녕하세요",
    description: "저는 <strong>사용자 경험을 최우선으로 고려하는 백엔드 개발자</strong>입니다. <strong>Java와 Spring 기반 웹 애플리케이션을 개발</strong>하며 다양한 오류와 마주했지만, 그럴 때마다 <strong>원인을 끝까지 추적하고 해결해내는 과정</strong>을 통해 문제 해결력과 끈기를 키워왔습니다. <strong>백엔드뿐 아니라 프론트엔드도 함께 경험</strong>하면서 전체 서비스의 흐름을 이해하고 <strong>사용자 중심의 로직을 설계</strong>하는 데 집중해왔습니다. <strong>단순한 기능 구현을 넘어, 사용자에게 긍정적인 경험을 전달하는 안정적이고 효율적인 서비스</strong>를 만드는 것이 저의 목표입니다. <strong>기술적인 도전을 즐기며, 실제 프로젝트에서 배운 내용을 빠르게 실전에 적용</strong>해 성장해나가는 개발자가 되고자 합니다.",
    links: {
        github: "https://github.com/Yoo-Ha-young",
        notion: "https://lateral-radar-0c1.notion.site/JI-IN-Portfolio-11d6828e560c80719687c44103dec734?pvs=4"
    }
};

export const aboutText = {
    '이름': '유지인',
    '생년월일': '93.05.27',
    '위치': '서울특별시 영등포구',
    '연락처': '010-9986-9914',
    '이메일': 'hy339814@gmail.com',
    '학력': [
        '서울현대전문학교 패션디자인과 졸업',
        '국립방송통신대학교 (컴퓨터과학과) 재학 중'
    ]
};



export const bootcampText = {
    title: "BOOTCAMP",
    bootcamps: [
        {
            name: "천재교육 AI 챗봇 개발 마스터",
            period: "2024.10 ~ 2025.02",
            projects: [
                "AI 챗봇 개발 프로젝트",
                "AWS 클라우드 인프라 구축",
                "API 설계 및 구현"
            ],
            learnings: [
                "기초 프로그래밍 및 데이터 구조",
                "기계 학습 및 데이터 전처리",
                "자연어 처리 및 생성형 AI 기술",
                "대규모 언어 모델(LLM) 활용 및 프롬프트 엔지니어링",
                "AWS 클라우드 인프라 관리",
                "API 설계 및 구현",
                "웹/앱 개발",
                "챗봇 개발, 배포 및 유지보수"
            ]
        },
        {
            name: "핀테크 데이터 분석가 1기",
            period: "2023.08 ~ 2023.11",
            projects: [
                "데이터 수집 및 분석 프로젝트",
                "서비스 기획 및 프로토타입 제작"
            ],
            learnings: [
                "Python 프로그래밍",
                "웹 크롤링을 활용한 데이터 수집",
                "데이터 분석 및 시각화",
                "서비스 기획 및 프로토타입 제작"
            ]
        },
        {
            name: "제로베이스 백엔드스쿨 9기",
            period: "2023.01 ~ 2023.06",
            projects: [
                "Java와 Spring 기반 백엔드 프로젝트",
                "데이터베이스 설계 및 최적화"
            ],
            learnings: [
                "Java와 Spring 프레임워크",
                "자료구조와 알고리즘",
                "데이터베이스 설계 및 최적화",
                "웹 어플리케이션의 구조와 작동 원리"
            ]
        }
    ]
};


export const skillText = {
    title: "SKILLS",
    skills: [
      {
        category: "Frontend",
        items: [
          { name: "HTML5", level: "familiar" },
          { name: "CSS3", level: "familiar" },
          { name: "JavaScript", level: "familiar" },
          { name: "React", level: "familiar" },
          { name: "React Native", level: "tried" },
          { name: "Vue.js", level: "tried" },
          { name: "TypeScript", level: "tried" }
        ]
      },
      {
        category: "Backend",
        items: [
          { name: "Java", level: "familiar" },
          { name: "Spring Boot", level: "familiar" },
          { name: "Python", level: "familiar" },
          { name: "Django", level: "tried" },
          { name: "RESTful API", level: "familiar" },
          { name: "Node.js", level: "tried" },
          { name: "MySQL", level: "familiar" },
          { name: "MariaDB", level: "familiar" }
        ]
      },
      {
        category: "Tools / DevOps",
        items: [
          { name: "Git", level: "familiar" },
          { name: "Docker", level: "tried" },
          { name: "AWS", level: "tried" },
          { name: "VS Code", level: "familiar" },
          { name: "IntelliJ IDEA", level: "familiar" },
          { name: "eclipse", level: "familiar" },
        ]
      },
      {
        category: "Etc.",
        items: [
          { name: "Figma", level: "tried" },
          { name: "OpenAI API", level: "tried" }
        ]
      }
    ]
  };
  

export const headerText = {
    logo: "YOOJIIN",
    menu: ["Intro", "Skill", "Project", "Contact"]
};

export const projectText = {
  title: "PROJECTS",
  filter: {
      personal: "개인 프로젝트",
      team: "팀 프로젝트"
  },
  projects: {
      personal: [
          {
              id: "0103",
              title: "포트폴리오 웹사이트",
              period: "2024.03",
              type: "개인 프로젝트",
              position: "프론트엔드",
              contribution: "100%",
              image: "/images/projects/portfolio.jpg",
              features: [
                  "반응형 디자인으로 모바일/데스크톱 환경 최적화",
                  "React와 React Router를 활용한 SPA 구현",
                  "SCSS를 활용한 모듈화된 스타일링",
                  "GSAP를 활용한 스크롤 애니메이션 효과",
                  "프로젝트 상세 페이지 구현",
                  "반응형 네비게이션 메뉴",
                  "프로젝트 필터링 기능"
              ],
              tech: ["React", "JavaScript", "SCSS", "GSAP", "React Router", "Vite", "GitHub Pages"],
              github: "https://github.com/Yoo-Ha-young/portfolio",
              
              media: [
                { "type": "image", "src": "/images/projects/portfolio.jpg", "alt": "청년 정책 추천 서비스" },
        
              ],
              detail: {
                  background: "개발자로서의 역량과 프로젝트 경험을 효과적으로 보여줄 수 있는 포트폴리오 웹사이트를 개발했습니다. 모던한 디자인과 사용자 친화적인 인터페이스를 구현하여 방문자들에게 좋은 인상을 주고자 했습니다.",
                  challenges: [
                      "반응형 디자인 구현",
                      "스크롤 애니메이션 최적화",
                      "성능 최적화",
                      "SEO 최적화"
                  ],
                  solutions: [
                      "미디어 쿼리와 유동적 레이아웃으로 반응형 구현",
                      "GSAP를 활용한 부드러운 스크롤 애니메이션",
                      "이미지 최적화 및 코드 스플리팅 적용",
                      "메타 태그 최적화 및 시맨틱 HTML 구조 구현"
                  ],
                  troubleshooting: [
                      {
                          title: "반응형 디자인 구현 시 레이아웃 깨짐 현상",
                          problem: "특정 브레이크포인트에서 레이아웃이 깨지고 컨텐츠가 제대로 정렬되지 않는 문제 발생",
                          cause: "미디어 쿼리 설정이 불완전하고, 일부 컴포넌트의 width/height 값이 고정되어 있었음",
                          solution: [
                              "모든 컴포넌트에 유동적인 단위(%, vw, vh) 적용",
                              "flexbox와 grid 레이아웃을 활용한 반응형 구조 구현",
                              "브레이크포인트별 상세 미디어 쿼리 설정 추가"
                          ],
                          result: "모든 디바이스에서 일관된 레이아웃과 사용자 경험 제공 가능"
                      },
                      {
                          title: "index.js 값 불러오기 에러",
                          problem: "index.js에서 상수 값을 불러올 때 undefined 에러가 발생",
                          cause: "import 경로가 잘못되었거나, export된 상수가 제대로 정의되지 않았음",
                          solution: [
                              "상수 파일의 export 구문 확인 및 수정",
                              "import 경로를 상대 경로로 수정",
                              "상수 값이 제대로 정의되었는지 확인"
                          ],
                          result: "정상적으로 상수 값을 불러올 수 있게 됨"
                      },
                      {
                          title: "반응형 네비게이션 메뉴 구현 이슈",
                          problem: "모바일 환경에서 네비게이션 메뉴가 제대로 동작하지 않고, 토글 버튼 클릭 시 메뉴가 깨지는 현상 발생",
                          cause: "복잡한 애니메이션 효과와 CSS 속성들이 충돌하여 메뉴가 불안정하게 동작",
                          solution: [
                              "display: none/block을 사용한 단순 토글 방식으로 변경",
                              "모바일 메뉴의 위치를 position: absolute로 고정",
                              "메뉴 아이템의 간격과 크기를 조정하여 가독성 개선"
                          ],
                          result: "모바일 환경에서 안정적인 네비게이션 메뉴 동작 구현"
                      },
                      {
                          title: "🎨 스크롤 시 헤더 가시성 문제",
                          problem: "스크롤을 내리면서 헤더의 흰색 텍스트가 배경과 구분되지 않아 가독성이 떨어지는 현상 발생",
                          cause: "헤더의 배경색이 투명하고, 스크롤 시 배경색이 변경되지 않아 텍스트가 보이지 않음",
                          solution: [
                              "스크롤 이벤트 감지하여 헤더 배경색 동적 변경",
                              "텍스트 색상을 배경색에 따라 자동으로 반전되도록 설정",
                              "스크롤 위치에 따른 헤더 투명도 조절"
                          ],
                          result: "스크롤 위치에 따라 헤더의 가시성이 자동으로 최적화되어 사용자 경험 향상"
                      }
                  ]
              },
              description: "포트폴리오 웹사이트의 모든 기능을 직접 개발했습니다. React와 SCSS를 활용하여 모던한 디자인을 구현하고, GSAP를 통해 부드러운 애니메이션 효과를 추가했습니다. 또한 반응형 디자인을 통해 다양한 디바이스에서 최적의 사용자 경험을 제공할 수 있도록 했습니다.",
              achievements: "모던한 디자인과 사용자 친화적인 인터페이스를 구현하여 방문자들에게 좋은 인상을 줄 수 있었습니다. 반응형 디자인과 애니메이션 효과를 통해 다양한 디바이스에서 최적의 사용자 경험을 제공할 수 있었습니다."
          }
      ],
      team: [
          {
              id: "0202",
              title: "청년 정책 추천 서비스",
              period: "2023.11.01 - 2023.12.01",
              type: "팀 프로젝트",
              position: "풀스택",
              contribution: "66%",
              image: "policy.png",
              features: [
                "JWT 기반 회원가입 및 로그인/로그아웃 기능",
                "로그인 후 자동 맞춤 정책 리스트 제공",
                "지역, 카테고리, 세부 항목, 나이 기준 정책 검색 기능",
                "정책 리스트 정렬 필터 (최신순, 마감순)",
                "정책 상세 페이지 구현 (설명, 대상, 조건 등 확인 가능)",
                "ChatGPT 및 LangChain 기반 챗봇 기능"
              ],
              tech: ["React", "JavaScript", "Java 17", "Spring Boot", "Spring Security", "JPA", "MySQL", "Axios", "Vercel", "Render", "OpenAI API"],
              github: "https://github.com/Youth-Policy-recommendation-project",
              notion: "https://lateral-radar-0c1.notion.site/13e6828e560c818a9539e4f92d752239?pvs=4",
              media: [
                { "type": "image", "src": "/images/projects/policy.png", "alt": "청년 정책 추천 서비스" },
                { "type": "video", "src": "/image/projects/policy.mp4", "title": "정책 추천 서비스 데모 영상" }
              ],
              detail: {
                background: "청년층의 정책 정보 접근성을 높이기 위해 기획된 프로젝트입니다. 사용자의 나이, 지역, 관심 카테고리 등 조건에 따라 맞춤형 정책 리스트를 자동으로 제공하며, 상세 검색도 가능합니다. React와 Spring Boot를 활용해 프론트와 백엔드를 모두 구현했으며, 별도의 챗봇 기능도 함께 제공합니다.",
                challenges: [
                  "Spring 기반 인증/인가 및 JWT 토큰 발급 구조 설계",
                  "JPA를 활용한 복합 조건(지역, 카테고리, 나이 등) 검색 로직 구현",
                  "프론트엔드 설문 응답 및 결과 흐름 관리",
                  "정책 리스트 정렬(최신순/마감순) 기능 구현",
                  "프론트와 백엔드 간 CORS 오류 처리 및 배포 연동"
                ],
                solutions: [
                  "Spring Security와 JWT를 활용한 사용자 인증 구조 구축",
                  "정책 조건에 따라 필터링 가능한 다중 조건 검색 API 구현",
                  "React Hooks 기반 상태 관리 및 Axios 통신 구성",
                  "정책 리스트를 최신순/마감순으로 정렬하는 정렬 로직 구현",
                  "WebMvcConfigurer로 CORS 정책 설정 및 환경변수 분리 배포 구성"
                ]
              },
              myRole: {
                features: [
                  "<strong>프론트엔드 구현</strong>: React 기반 설문, 추천, 검색, 상세 페이지 전체 개발",
                  "<strong>백엔드 구현</strong>: Spring Boot + JPA 기반 정책 필터링 및 검색 API 전체 개발",
                  "JWT 인증 및 Spring Security 설정",
                  "Axios 비동기 요청 처리 및 상태 전환 최적화",
                  "DB 설계 및 테스트용 H2 → 운영 MySQL 전환",
                  "Vercel / Render 배포 구성 및 환경 변수 분리"
                ],
                description: "프론트엔드(React)와 백엔드(Spring Boot)를 단독으로 개발한 팀 프로젝트입니다. 설문-추천-검색 흐름을 자연스럽게 연결하고, 정책 리스트 및 상세페이지까지 전체 사용자 플로우를 구현했습니다. 로그인 시 자동 추천, 조건 검색, 정렬 필터 등 주요 기능을 모두 설계하고 구현했습니다.",
                troubleshooting: [
                  {
                      title: "🔄 컴포넌트 렌더링 최대 횟수 초과",
                      problem: "컴포넌트가 계속 꼬이면서 'Maximum update depth exceeded' 에러 발생",
                      cause: "SAP로 개발 중 컴포넌트 간의 상태 관리가 복잡해지면서 무한 렌더링 발생",
                      solution: [
                          "SAP에서 React로 프레임워크 전환",
                          "컴포넌트 구조 단순화 및 상태 관리 로직 개선",
                          "불필요한 리렌더링 방지를 위한 컴포넌트 최적화"
                      ],
                      result: "안정적인 컴포넌트 렌더링과 성능 개선 달성"
                  },
                  {
                      title: "🌐 CORS 오류",
                      problem: "프론트엔드에서 백엔드 API 호출 시 CORS 오류 발생",
                      cause: "서버 측 CORS 설정 미비로 인한 교차 출처 리소스 공유 제한",
                      solution: [
                          "WebMvcConfigurer 구현하여 CORS 설정 추가",
                          "Vite 프록시 설정으로 개발 환경에서의 CORS 우회",
                          "프로덕션 환경을 위한 적절한 CORS 정책 설정"
                      ],
                      result: "프론트엔드와 백엔드 간 안정적인 통신 구현"
                  },
                  {
                      title: "🔍 정책 필터링 조건 누락",
                      problem: "특정 검색 조건에서 일부 정책이 노출되지 않는 문제 발생",
                      cause: "JPA 쿼리 조건문의 불완전한 처리와 DTO 매핑 구조 차이",
                      solution: [
                          "JPA 조건문에 isEmpty, like, null 체크 로직 보완",
                          "DTO와 Entity 간 필드명 통일 및 매핑 구조 개선",
                          "검색 조건 처리 로직 최적화"
                      ],
                      result: "정확한 정책 검색 결과 제공 가능"
                  },
                  {
                      title: "💾 데이터베이스 전환 이슈",
                      problem: "H2에서 MySQL로 전환 시 쿼리 오류 발생",
                      cause: "데이터베이스 간 컬럼 타입, 기본값, 대소문자 구분 등의 차이",
                      solution: [
                          "Entity와 DB 스키마 설정 통일",
                          "환경별 데이터베이스 설정 최적화",
                          "MySQL 특성에 맞는 쿼리 로직 수정"
                      ],
                      result: "안정적인 데이터베이스 운영 환경 구축"
                  }
              ],
                achievements: "실제 사용자 흐름을 고려한 기능 설계와 프론트-백 통합 구현을 통해 실전 경험을 쌓았습니다. 조건 기반 정책 추천 시스템, 필터 기능, 정렬 기능 등 사용자 맞춤형 정보 제공 구조를 완성했으며, 배포 및 오류 처리까지 경험했습니다."
              },
              description: "청년층의 정책 정보 접근성을 높이기 위해 기획된 프로젝트입니다. 사용자의 나이, 지역, 관심 카테고리 등 조건에 따라 맞춤형 정책 리스트를 자동으로 제공하며, 상세 검색도 가능합니다. React와 Spring Boot를 활용해 프론트와 백엔드를 모두 구현했으며, 별도의 챗봇 기능도 함께 제공합니다.",
            },
          {
              id: "0203",
              title: "POP-IT: 스토어 커넥트",
              period: "2024.06.08 - 2024.07.08",
              type: "팀 프로젝트",
              position: "백엔드",
              contribution: "25%",
              image: "popit.jpg",
              features: [
                  "회원가입 및 로그인 기능 구현",
                  "내 주변 5키로 반경 내 스토어 찾기",
                  "지도 검색 및 이동 기능",
                  "스토어 디테일 및 분류 기능",
                  "셀러 등록 시스템",
                  "스토어/상품 등록 및 수정",
                  "게시글/댓글 등록 및 수정",
                  "스토어 찜하기와 알림 기능"
              ],
              tech: ["Java 11", "Spring Boot", "JPA", "MariaDB", "Spring Security", "AWS EC2", "AWS RDS", "Swagger 2.0", "Lombok", "Docker"],
              github: "https://github.com/popit-project/backend",
              notion: "https://zero-base.oopy.io/1302b8ad-806c-81df-8372-cdb57bd16027",
              media: [
                  { type: 'image', src: '/images/projects/popit.jpg', alt: 'POP-IT: 스토어 커넥트' },
                  { type: 'video', src: '/images/projects/register.mp4', title: '회원가입, 로그인, 구글로그인, 입점신청 데모' }
              ],
              detail: {
                  background: '"POP-IT:스토어 커넥트"는 한시적으로 팝업스토어나 플리마켓을 운영하는 청년 사업자와 소상공인을 지원하기 위한 어플리케이션입니다. 이 어플리케이션은 판매자의 상품 관리와 고객과의 상호작용, 로그인/회원가입 기능, 어드민 기능 등을 제공합니다. "스토어 커넥트"는 오프라인 팝업스토어와 플리마켓에서의 활동을 온라인 플랫폼으로 확장하여 소비자와 사업자 간의 소통과 거래를 원활하게 돕습니다.',
                  challenges: [
                      "Spring Security 기반 인증/인가 처리",
                      "JWT 토큰 발급 및 검증 로직 구현",
                      "사용자 데이터 보안 및 암호화",
                      "셀러 등록 시 사용자 권한 관리",
                      "트랜잭션 처리를 통한 데이터 일관성 유지",
                      "도메인 간 관계 설계 및 구현"
                  ],
                  solutions: [
                      "JWT 토큰 기반의 인증 시스템 구현",
                      "BCryptPasswordEncoder를 활용한 비밀번호 암호화",
                      "공통 예외 처리 구조 구현으로 코드 품질 향상",
                      "User ↔ Store 양방향 연관관계 설계 및 적용",
                      "SecurityContextHolder를 통한 인증 유저 정보 연동",
                      "확장성 있는 구조 설계를 통한 유지보수성 향상"
                  ]
              },
              myRole: {
                  features: [
                      "<strong>회원가입 및 로그인 기능 구현</strong>",
                      "Spring Security 설정 및 JWT 토큰 기반 인증 구현",
                      "사용자 엔티티 설계 및 권한 관리 시스템 구현",
                      "<strong>셀러 등록 시스템 개발</strong>",
                      "스토어와 사용자 간의 연관 관계 설정",
                      "이메일 중복 체크 및 유효성 검사 로직 구현",
                      "트랜잭션 처리를 통한 데이터 일관성 보장"
                  ],
                  
                  troubleshooting: [
                    {
                        title: "LocalTime 직렬화/역직렬화 오류",
                        problem: "LocalTime 타입 필드가 포함된 엔티티를 JSON으로 직렬화하거나 역직렬화할 때 오류가 발생하며 API 응답이 실패함.",
                        cause: "Jackson 기본 설정에는 Java 8 날짜/시간 모듈(JavaTimeModule)이 포함되어 있지 않아 LocalTime 타입을 처리할 수 없었음.",
                        solution: [
                            "해당 필드에 @JsonFormat(pattern = \"HH:mm:ss\") 어노테이션 추가",
                            "ObjectMapper에 JavaTimeModule을 명시적으로 등록"
                        ],
                        result: "LocalTime 타입이 포함된 모든 JSON 데이터가 정상적으로 처리되었고, 시간 관련 API 응답의 일관성과 안정성이 확보됨."
                    },
                    {
                        title: "JWT 토큰 구조 변경에 따른 하위 서비스 오류",
                        problem: "JWT 토큰에 사용자 역할 및 ID 정보를 추가하면서, 기존 서비스의 파싱 로직에서 오류가 발생하여 인증 과정이 실패함.",
                        cause: "기존 서비스 로직은 고정된 클레임 구조만을 파싱하도록 되어 있어, 새로운 클레임이 추가된 토큰에서 예외가 발생함.",
                        solution: [
                            "토큰 생성 시 클레임 구조 재정의",
                            "클레임 파싱 시 getOrDefault() 또는 containsKey() 등 유연한 접근 방식으로 변경",
                            "공통 파싱 유틸 클래스 리팩토링"
                        ],
                        result: "토큰 구조 변경에도 불구하고 기존 서비스의 인증/인가 기능이 정상 작동하게 되었고, 향후 클레임 확장 시에도 호환성 유지가 가능해짐."
                    },
                    {
                        title: "프론트엔드-백엔드 API 연동 오류",
                        problem: "프론트에서 API 요청 시 CORS 오류가 발생하고, 일부 요청은 파라미터 누락이나 응답 구조 불일치로 인해 작동하지 않음.",
                        cause: [
                            "명확한 API 명세서가 없어 요청 방식에 혼동 발생",
                            "서버 CORS 설정이 미비함",
                            "응답/에러 형식이 통일되지 않아 프론트에서 예외 처리가 어려움"
                        ],
                        solution: [
                            "Swagger 기반 API 문서화로 요청/응답 구조 정리",
                            "WebMvcConfigurer에서 CORS 설정 전면 정비 (allowedOrigins, methods 등)",
                            "GlobalExceptionHandler + 공통 Response DTO 도입"
                        ],
                        result: "프론트-백 간 연동이 안정화되었고, 명확한 명세 덕분에 개발 속도 향상 및 에러 발생률 감소. 팀 내 커뮤니케이션 효율도 향상됨."
                    }
                ],
                  achievements: "이러한 구현을 통해 다음과 같은 성과를 달성했습니다:\n- 사용자 인증, 셀러 등록, 스토어 연동 등 핵심 로직 구현을 통한 실무적 이해도 향상\n- Spring Security와 JWT 구조를 직접 다루며 보안 설계 역량 강화\n- 도메인 간 관계 설계를 통한 확장성 있는 구조 설계 경험\n- 공통 예외 처리 구조와 유효성 검증 구현을 통한 서비스 안정성 확보\n- 다양한 트러블슈팅 경험을 통해 문제 해결 능력 향상"
              },
              description: "한시적으로 팝업스토어나 플리마켓을 운영하는 청년 사업자와 소상공인을 지원하기 위한 어플리케이션입니다. 이 어플리케이션은 판매자의 상품 관리와 고객과의 상호작용, 로그인/회원가입 기능, 어드민 기능 등을 제공합니다. 스토어 커넥트는 오프라인 팝업스토어와 플리마켓에서의 활동을 온라인 플랫폼으로 확장하여 소비자와 사업자 간의 소통과 거래를 원활하게 돕습니다."
          }
      ]
  }
};


export const FOOTER = {
    name: "유지인",
    title: "Backend Developer",
    email: "hy339814@gmail.com",
    phone: "010-9986-9914"
};

export const CONTACT = {
    email: "hy339814@gmail.com",
    phone: "010-9986-9914"
};

