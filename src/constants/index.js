export const introText = {
    mainTitle: "DEVELOPER YOOJIIN",
    title: "안녕하세요",
    description: "저는 <strong>사용자 경험을 최우선</strong>으로 고려하는 <strong>백엔드 개발자</strong>입니다. <strong>사용자 중심의 탄탄한 로직 설계</strong>를 통해 안정적이고 효율적인 서비스를 구현하며, <strong>프론트엔드와 UI/UX</strong>에도 깊은 관심을 가지고 있어 전체적인 사용자 만족도를 극대화합니다. <strong>끊임없는 성장을 추구</strong>하며 기술적 도전과 혁신을 즐기는 개발자입니다.",
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
                github: "https://github.com/Yoo-Ha-young/port2025-react",
                
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
                tech: ["React", "JavaScript", "Java 17", "Spring Boot", "Spring Security", "JPA", "MySQL", "Axios", "Vite", "Vercel", "Render", "OpenAI API"],
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
                    "<strong>프론트엔드 구현</strong>: React + Tailwind 기반 설문, 추천, 검색, 상세 페이지 전체 개발",
                    "<strong>백엔드 구현</strong>: Spring Boot + JPA 기반 정책 필터링 및 검색 API 전체 개발",
                    "JWT 인증 및 Spring Security 설정",
                    "Axios 비동기 요청 처리 및 상태 전환 최적화",
                    "DB 설계 및 테스트용 H2 → 운영 MySQL 전환",
                    "Vercel / Render 배포 구성 및 환경 변수 분리"
                  ],
                  description: "프론트엔드(React)와 백엔드(Spring Boot)를 단독으로 개발한 팀 프로젝트입니다. 설문-추천-검색 흐름을 자연스럽게 연결하고, 정책 리스트 및 상세페이지까지 전체 사용자 플로우를 구현했습니다. 로그인 시 자동 추천, 조건 검색, 정렬 필터 등 주요 기능을 모두 설계하고 구현했습니다.",
                  troubleshooting: {
                    title: "트러블슈팅 경험",
                    items: [
                      {
                        problem: "프론트에서 API 호출 시 CORS 오류 발생",
                        solution: "Spring `WebMvcConfigurer`에서 CORS 설정 명시 및 Vite 프록시 설정으로 해결"
                      },
                      {
                        problem: "정책 필터링 조건 누락으로 일부 정책 노출되지 않음",
                        solution: "JPA 조건문 로직 개선 및 DTO 구조 수정으로 검색 정확도 개선"
                      },
                      {
                        problem: "H2에서 정상 동작하던 쿼리가 MySQL에서 오류 발생",
                        solution: "컬럼 타입/이름 차이로 인한 쿼리 충돌을 해결하고, 스키마 전환 테스트 수행"
                      },
                      {
                        problem: "검색 및 추천 결과가 로딩 중 오류로 비정상 노출",
                        solution: "useEffect 타이밍 및 로딩 상태 분리, 조건부 렌더링 처리로 개선"
                      }
                    ]
                  },
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
                    
                    troubleshooting: {
                        title: "트러블슈팅 경험",
                        items: [
                            {
                                problem: "Object Mapper에서 LocalTime 데이터 직렬화/역직렬화 문제",
                                solution: "Jackson 라이브러리의 @JsonFormat 어노테이션을 활용하여 날짜/시간 포맷을 명시적으로 지정하고, ObjectMapper에 JavaTimeModule을 등록하여 해결했습니다."
                            },
                            {
                                problem: "JWT 토큰 정보 추가로 인한 서비스 간 호환성 문제",
                                solution: "JWT 토큰의 클레임 구조를 재설계하고, 기존 서비스들의 토큰 파싱 로직을 업데이트하여 하위 호환성을 유지하면서 새로운 정보를 추가할 수 있도록 개선했습니다."
                            },
                            {
                                problem: "프론트엔드-백엔드 API 연동 과정에서 발생한 다양한 문제",
                                solution: "Swagger를 활용한 API 문서화를 강화하고, 프론트엔드 개발자와의 지속적인 커뮤니케이션을 통해 API 스펙을 명확히 정의하여 해결했습니다. 또한 CORS 설정과 에러 응답 형식을 표준화하여 통신 안정성을 높였습니다."
                            }
                        ]
                    },
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

