type ProjectBody = {
  purpose: string[];
  exp: string[];
  review: string[];
};

const mkProjectBody = (purpose: string[], exp: string[], review: string[]) => {
  return {
    purpose,
    exp,
    review,
  };
};

const mkProjectData = (
  name: string,
  period: string,
  member: string,
  link: string[],
  projectBody: ProjectBody,
  stack: string[][]
) => {
  return {
    name,
    period,
    member,
    link,
    projectBody,
    stack,
  };
};

type BadgeColor = {
  [key: string]: {
    logoName: string;
    color: string;
    logoColor: string;
  };
};

const badgeColor: BadgeColor = {
  vercel: {
    logoName: "vercel",
    color: "000000",
    logoColor: "white",
  },
  NextJS: {
    logoName: "Next.js",
    color: "000000",
    logoColor: "white",
  },
  NestJS: {
    logoName: "NestJS",
    color: "E0234E",
    logoColor: "white",
  },
  React: {
    logoName: "React",
    color: "61DAFB",
    logoColor: "white",
  },
  HTML5: {
    logoName: "HTML5",
    color: "E34F26",
    logoColor: "white",
  },
  CSS3: {
    logoName: "CSS3",
    color: "1572B6",
    logoColor: "white",
  },
  TypeScript: {
    logoName: "TypeScript",
    color: "3178C6",
    logoColor: "white",
  },
  JavaScript: {
    logoName: "JavaScript",
    color: "F7DF1E",
    logoColor: "white",
  },
  styledComponents: {
    logoName: "styled-components",
    color: "DB7093",
    logoColor: "white",
  },
  axios: {
    logoName: "axios",
    color: "5A29E4",
    logoColor: "white",
  },
  ReactQuery: {
    logoName: "React Query",
    color: "FF4154",
    logoColor: "white",
  },
  ReduxToolkit: {
    logoName: "Redux",
    color: "764ABC",
    logoColor: "white",
  },
  postgreSQL: {
    logoName: "PostgreSQL",
    color: "4169E1",
    logoColor: "white",
  },
  TypeCloud: {
    logoName: "icloud",
    color: "000000",
    logoColor: "white",
  },
  GoogleCloud: {
    logoName: "google",
    color: "4285F4",
    logoColor: "white",
  },
  Spring: {
    logoName: "Spring",
    color: "6DB33F",
    logoColor: "white",
  },
  MySQL: {
    logoName: "MySQL",
    color: "4479A1",
    logoColor: "white",
  },
  Amazon: {
    logoName: "amazonaws",
    color: "232F3E",
    logoColor: "white",
  },
};

const badgeMaker = (stackName: string) => {
  const { logoName, color, logoColor } = badgeColor[stackName];
  return `https://img.shields.io/badge/${stackName}-${color}?style=flat&logo=${logoName}&logoColor=${logoColor}`;
};

export const projectData = [
  mkProjectData(
    "Johns-Profile",
    "2023/06/12 ~ Now",
    "개인 프로젝트",
    [
      "https://portfolio-sigma-wheat-63.vercel.app",
      "https://github.com/ToyCode-org/portfolio",
    ],
    mkProjectBody(
      [
        " - 지금까지 제작해온 작업들을 통해 성장과정을 한눈에 볼 수 있도록 만들기 위해 개발 (현재 사이트)",
      ],
      [" - 채널톡 연동", " - 통일성 있는 UI 제작"],
      [
        " - 포트폴리오 사이트를 제작하면서 아직 가야할 길이 멀다고 생각되지만, 이전의 자신보다 계속 성장하고 있다는 느낌을 받게 해준 사이트",
      ]
    ),
    [
      [
        badgeMaker("React"),
        badgeMaker("HTML5"),
        badgeMaker("CSS3"),
        badgeMaker("styledComponents"),
        badgeMaker("TypeScript"),
      ],
      [],
    ]
  ),
  mkProjectData(
    "Shop-UI",
    "2023/05/23 - 2023/05/30 (1week)",
    "개인 프로젝트",
    [
      "https://shop-ui-sage.vercel.app",
      "https://github.com/ToyCode-org/shop-UI",
    ],
    mkProjectBody(
      [" - 쇼핑몰 사이트를 제작하면서 간단한 디자인을 구현해보기 위해 제작"],
      [
        " - 미리캔버스를 통한 디자인, React-icons를 통한 적절한 아이콘 요소 적용",
        " - 간단한 기능과 반응형 UI 구축 경험",
      ],
      [
        " - 상용되는 사이트와 같이 UI의 디테일을 잘 살리지 못했음. 특히 원본 이미지를 너무 크게 사용해서 메인 슬라이드의 사진이 PC, 모바일에서 의도하지 않은 이미지 핏(object-fit)이 나온 점이 아쉬움.",
      ]
    ),
    [
      [
        badgeMaker("React"),
        badgeMaker("HTML5"),
        badgeMaker("CSS3"),
        badgeMaker("TypeScript"),
        badgeMaker("styledComponents"),
      ],
      [],
    ]
  ),
  mkProjectData(
    "Na-hon-bob",
    "2023/04/11 - 2023/04/28 (3week)",
    "개인 프로젝트",
    [
      // "https://www.na-hon-bob.shop",
      "구글 SQL서버 만료로 점검중(배포환경 시연 연상은 Github에서 확인가능)",
      "https://github.com/ToyCode-org/na-hon-bob-fe",
    ],
    mkProjectBody(
      [
        " - 자취인들의 집밥 레시피 공유 사이트",
        " - 백엔드의 동작 방식을 보다 깊게 이해하기 위해 NestJS 프레임워크를 이용해 FE/BE의 전반적인 사이클을 익히기 위해 제작",
      ],
      [
        " - 풀스택 프로젝트 구축 경험",
        " - 반응형 UI 제작",
        " - 검색 기능 구현",
        " - 클라우드를 통한 데이터베이스 구축 및 연동(Google cloud(postgreSQL) && typeCloud)",
        " - 쿠키와 JWT 토큰을 활용한 로그인 기능 구현",
        " - Bcript와 mailer module을 활용한 이메일 인증 구현",
      ],
      [
        " - 비용 절감을 위해 무료 이미지 저장소를 이용한 것 자체는 나쁘지 않았으나, 캐시된 이미지가 아닌 경우 이미지를 불러오는데 시간이 심각하게 오래 걸림(추후 이미지 압축/설정 등을 통해 최적화 시도 예정)",
        " - 아쉬운 디자인의 UI",
        " - 새로운 개발 경험을 느낀 것은 긍정적으로 생각함.",
      ]
    ),
    [
      [
        badgeMaker("vercel"),
        badgeMaker("NextJS"),
        badgeMaker("HTML5"),
        badgeMaker("CSS3"),
        badgeMaker("TypeScript"),
        badgeMaker("ReduxToolkit"),
        badgeMaker("styledComponents"),
        badgeMaker("axios"),
      ],
      [
        badgeMaker("NestJS"),
        badgeMaker("TypeScript"),
        badgeMaker("GoogleCloud"),
        badgeMaker("TypeCloud"),
        badgeMaker("postgreSQL"),
      ],
    ]
  ),
  mkProjectData(
    "GithubBlog",
    "2023/02/28 ~ NOW",
    "개인 프로젝트",
    [
      "https://lee-yo-han.github.io",
      "https://github.com/LEE-YO-HAN/LEE-YO-HAN.github.io",
    ],
    mkProjectBody(
      [
        " - 내손으로 만드는 나만의 블로그",
        " - Nextjs의 정적 배포를 통해 나만의 블로그를 만들어보고 검색 엔진에 등록해보기 위해 제작",
      ],
      [
        " - Naver Search advisor / Google Search console을 통한 검색 엔진 등록",
        " - Google 기준 최근 3개월 (2023/03/16 - 2023/06/20) 평균 CRT(클릭으로 이어진 노출 수의 비율) 20.9% 달성 (총 클릭수 : 163 / 총 노출수 : 779)",
        " - utterances, 이슈 등록 등 Github의 API나 자원을 적극적으로 적용",
      ],
      [" - 아직 더 나은 UI와 포스팅을 위한 노력중"]
    ),
    [
      [
        badgeMaker("NextJS"),
        badgeMaker("HTML5"),
        badgeMaker("CSS3"),
        badgeMaker("TypeScript"),
      ],
      [],
    ]
  ),
  mkProjectData(
    "Ever-Rent",
    "2022/09/02 - 2022/10/28 (8week)",
    "Team Spart - React(3) & Spring(2)",
    [
      "https://www.youtube.com/watch?v=DRviCVKXfDY",
      "https://github.com/ever-rent/ever-rent-FE",
    ],
    mkProjectBody(
      [
        " - 개인 간 중고 물품 렌탈 거래 플랫폼 (현재는 서버가 닫혀 있음)",
        " - 팀스파르타 부트캠프의 최종 프로젝트",
      ],
      [
        " - Kakao map API를 이용한 위치 정보 조회",
        " - Redux/toolkit을 이용한 게시글 CRUD와 무한 스크롤",
        " - 카테로기, 지역별 제품 조회, 검색 기능 연동과 페이지네이션",
        " - LoadingSpinner, SkeletonUI 제작",
        " - React-datepicker를 이용한 달력 제작 경험",
      ],
      [
        " - 백엔드와의 협업이 어떻게 이뤄질 수 있는지 직접적으로 느낄 수 있는 계기가 되었음",
        " - 충분히 간소화할 수 있는 중복되는 코드를 처리하지 못했음",
        " - 기능 구현에 급급해 디자인을 제대로 하지 못했던 것이 아쉬웠음",
      ]
    ),
    [
      [
        badgeMaker("React"),
        badgeMaker("ReactQuery"),
        badgeMaker("ReduxToolkit"),
        badgeMaker("styledComponents"),
      ],
      [badgeMaker("Spring"), badgeMaker("MySQL"), badgeMaker("Amazon")],
    ]
  ),
];
