export const introText = {
    mainTitle: "DEVELOPER YOOJIIN",
    title: "안녕하세요",
    description: "저는 <strong>사용자 경험을 최우선</strong>으로 고려하는 <strong>백엔드 개발자</strong>입니다. <strong>사용자 중심의 탄탄한 로직 설계</strong>를 통해 안정적이고 효율적인 서비스를 구현하며, <strong>프론트엔드와 UI/UX</strong>에도 깊은 관심을 가지고 있어 전체적인 사용자 만족도를 극대화합니다. <strong>끊임없는 성장을 추구</strong>하며 기술적 도전과 혁신을 즐기는 개발자입니다.",
    links: {
        github: "https://github.com/Yoo-Ha-young",
        portfolio: "https://yourportfolio.com"
    },
    skills: [
        "JavaScript", "TypeScript", "React", "Node.js", "Express", "MongoDB", "MySQL", "AWS", "Docker", "Git"
    ]
};

export const aboutText = {
    '이름': '유지인',
    '생년월일': '93.05.27',
    '위치': '서울특별시 영등포구',
    '연락처': '010-9986-9914',
    '이메일': 'hy339814@gmail.com',
    '학력': '국립방송통신대학교 (컴퓨터과학과)'
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
                { name: "Node.js", level: "familiar" },
                { name: "Express", level: "familiar" },
                { name: "MongoDB", level: "familiar" },
                { name: "MySQL", level: "tried" },
                { name: "RESTful API", level: "familiar" }
            ]
        },
        {
            category: "Tools & Others",
            items: [
                { name: "Git", level: "familiar" },
                { name: "Docker", level: "tried" },
                { name: "AWS", level: "tried" },
                { name: "VS Code", level: "familiar" },
                { name: "Figma", level: "tried" }
            ]
        },
        {
            category: "Tools & Others",
            items: [
                { name: "Git", level: "familiar" },
                { name: "Docker", level: "tried" },
                { name: "AWS", level: "tried" },
                { name: "VS Code", level: "familiar" },
                { name: "Figma", level: "tried" }
            ]
        }
    ]
};

export const bootcampText = {
    title: "BOOTCAMP",
    bootcamps: [
        {
            name: "코드스테이츠",
            period: "2023.03 ~ 2023.09",
            projects: [
                "개인 프로젝트: 포트폴리오 웹사이트",
                "팀 프로젝트: 실시간 채팅 애플리케이션"
            ],
            learnings: [
                "HTML, CSS, JavaScript 기초",
                "React와 Node.js를 활용한 풀스택 개발",
                "RESTful API 설계 및 구현",
                "Git을 활용한 협업 워크플로우"
            ]
        },
        {
            name: "멋쟁이사자처럼",
            period: "2022.06 ~ 2022.12",
            projects: [
                "개인 프로젝트: 블로그 웹사이트",
                "팀 프로젝트: 커뮤니티 플랫폼"
            ],
            learnings: [
                "Python과 Django 기초",
                "데이터베이스 설계 및 관리",
                "웹 보안 기초",
                "프로젝트 기획 및 관리"
            ]
        },
        {
            name: "우아한테크코스",
            period: "2021.09 ~ 2022.03",
            projects: [
                "개인 프로젝트: 자동차 경주 게임",
                "팀 프로젝트: 지하철 노선도"
            ],
            learnings: [
                "Java와 Spring 기초",
                "객체지향 프로그래밍",
                "테스트 주도 개발",
                "클린 코드 작성법"
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
                id: "0101",
                title: "IT 엘도라도 (블로그)",
                period: "2024.09",
                description: "Notion API/DB와 연동하여 개발한 개인 블로그",
                image: "/images/projects/it-eldorado.png",
                features: [
                    "티스토리 플랫폼에서의 불편함을 해소하고자 직접 개발",
                    "별도의 데이터베이스 서버 없이 Notion API/DB와 연동하여 개발",
                    "검색 엔진 최적화(SEO) 고도화 및 검색 엔진 마이그레이션",
                    "무한 스크롤, 방문/조회 수 추적, 댓글/좋아요 등의 커뮤니티 기능 개발"
                ],
                tech: ["TypeScript", "Next.js", "Zustand", "React-Query", "Tailwind CSS", "Notion", "Vercel"],
                link: "https://it-eldorado.com",
                github: "https://github.com/yourusername/it-eldorado",
                detail: {
                    background: "개인 블로그를 운영하면서 티스토리 플랫폼의 제약사항을 느끼게 되었습니다. 이를 해결하기 위해 직접 블로그를 개발하게 되었습니다.",
                    challenges: [
                        "Notion API를 활용한 데이터 관리",
                        "SEO 최적화",
                        "사용자 경험 개선"
                    ],
                    solutions: [
                        "Notion API를 활용하여 별도의 데이터베이스 없이 콘텐츠 관리",
                        "Next.js의 SSG를 활용하여 SEO 최적화",
                        "무한 스크롤과 검색 기능 구현"
                    ]
                }
            },
            {
                id: "0102",
                title: "무슨 노래 부르지?",
                period: "2022.10",
                description: "노래방을 즐기는 사람이 자주 부르는 노래를 간편하게 관리하는 웹사이트",
                image: "/images/projects/what-to-sing.png",
                features: [
                    "노래방을 갈 때마다 무슨 노래를 부를지 고민하지 않기 위해 개발",
                    "OAuth 2.0 기반의 Firebase Auth를 활용하여 소셜 로그인 구현",
                    "NoSQL 기반의 Firebase Realtime Database를 활용하여 쿼리 작성",
                    "Tailwind CSS를 활용하여 별도의 CSS 파일 없이 스타일링"
                ],
                tech: ["TypeScript", "Next.js", "Recoil", "Sass", "Tailwind CSS", "Firebase", "Vercel"],
                link: "https://what-to-sing.kr",
                github: "https://github.com/yourusername/what-to-sing",
                detail: {
                    background: "노래방을 자주 가는 사람들을 위한 노래 관리 앱을 개발했습니다.",
                    challenges: [
                        "실시간 데이터 동기화",
                        "사용자 인증",
                        "반응형 디자인"
                    ],
                    solutions: [
                        "Firebase Realtime Database 활용",
                        "Firebase Auth를 통한 소셜 로그인 구현",
                        "Tailwind CSS를 활용한 반응형 디자인"
                    ]
                }
            }
        ],
        team: [
            {
                id: "0201",
                title: "FOSSLight Hub Lite",
                period: "2023.09 - 2023.12",
                description: "LG 전자의 FOSSLight Hub 웹사이트를 사용자 기능 중심으로 리모델링한 웹사이트",
                image: "/images/projects/fosslight-hub.png",
                features: [
                    "LG 전자에서 관리자가 아닌 사용자를 위한 간소화 버전의 웹사이트 개발을 요청",
                    "기존 FOSSLight Hub 프로젝트의 환경에 통합시켜 기존 사용자들의 접근성 확보",
                    "URL 쿼리 파라미터에 연동되는 정렬/필터 기능 및 모달 열기/닫기 기능 구현",
                    "전반적인 UI/UX를 새롭게 설계하여 종합적인 사용성 개선"
                ],
                tech: ["TypeScript", "Next.js", "Recoil", "React-Query", "React-Hook-Form", "Tailwind CSS"],
                github: "https://github.com/yourusername/fosslight-hub-lite",
                detail: {
                    background: "LG 전자의 FOSSLight Hub 웹사이트를 사용자 친화적으로 리모델링한 프로젝트입니다.",
                    challenges: [
                        "기존 시스템과의 통합",
                        "사용자 경험 개선",
                        "성능 최적화"
                    ],
                    solutions: [
                        "기존 API와의 호환성 유지",
                        "사용자 중심의 UI/UX 설계",
                        "React-Query를 활용한 데이터 캐싱"
                    ]
                }
            },
            {
                id: "0202",
                title: "메이플 경매장 알리미",
                period: "2023.08 - 2023.09",
                description: "메이플스토리의 아이템이 원하는 조건으로 경매장에 올라왔을 때 알림을 받아보기 위한 웹사이트",
                image: "/images/projects/maple-alimi.png",
                features: [
                    "메이플스토리를 좋아하는 한 친구의 아이디어에 착안하여 개발",
                    "최신 기술인 React 18 기반의 Next.js 13 학습 및 적용",
                    "React-Query, React-Hook-Form을 활용하여 API 요청 및 입력 폼 처리",
                    "Next.js 서버를 리버스 프록시로 활용하여 IP 노출 및 CORS 문제 해결"
                ],
                tech: ["TypeScript", "Next.js", "Recoil", "React-Query", "React-Hook-Form", "Sass", "Tailwind CSS", "Vercel"],
                link: "https://maplealimi.com",
                github: "https://github.com/yourusername/maple-alimi",
                detail: {
                    background: "메이플스토리 게임의 경매장 알림 서비스를 개발한 프로젝트입니다.",
                    challenges: [
                        "실시간 데이터 처리",
                        "보안 문제 해결",
                        "사용자 경험 개선"
                    ],
                    solutions: [
                        "Next.js 서버를 리버스 프록시로 활용",
                        "React-Query를 활용한 데이터 관리",
                        "사용자 친화적인 UI/UX 설계"
                    ]
                }
            }
        ]
    }
};

