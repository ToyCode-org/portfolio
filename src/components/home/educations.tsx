import styled from "styled-components";
import { InnerContainer, ContentBox } from "../common/styles";
import { useComponentViewCheck } from "../../hooks/useComponentViewCheck";

type EduList = {
  title: string;
  date: string;
  matter: string;
  list?: [];
};
const mkEdu = (
  title: string,
  date: string,
  matter?: string,
  links?: string[]
) => {
  return {
    title,
    date,
    matter,
    links,
  };
};

const eduList = [
  mkEdu("정보처리기사", "2023/06/14(필기합격)"),
  mkEdu(
    "원티드 프리온보딩 인턴십",
    "2022/12/19 - 2023/01/20",
    "동료학습을 통한 기업과제 수행",
    [
      "https://github.com/wanted-onboarding8-6/week1-project - TodoList",
      "https://github.com/wanted-onboarding8-6/pre-onboarding-8th-2week-6 - KanbanBoard",
      "https://github.com/wanted-onboarding8-6/pre-onboarding-8th-3week-6 - Search & Caching",
      "https://github.com/wanted-onboarding8-6/pre-onboarding-8th-4week-6 - Pagination",
    ]
  ),
  mkEdu("컴퓨터활용능력1급", "2022/10/14(취득)"),
  mkEdu(
    "팀스파르타 부트캠프(이노베이션 캠프)",
    "2022/08/01 - 2022.11.04",
    "팀 프로젝트를 통한 협업능력 강화(React ↔ Spring)",
    ["https://www.youtube.com/watch?v=DRviCVKXfDY - Ever-rent"]
  ),
];

export const Educations = () => {
  const { inView } = useComponentViewCheck("educationBox");

  return (
    <InnerContainer id="educationBox" view={`${inView}`}>
      <h2 id="educationBox">Educations & certificate 📚</h2>
      <ContentBox>
        {eduList.map((list, index) => {
          const { title, date, matter, links } = list;
          return (
            <Item key={index}>
              <ItemHeader>
                <span>{title}</span>
                <span>{date}</span>
              </ItemHeader>
              <p>{matter}</p>
              {!links
                ? null
                : links.map((link, i) => {
                    const [href, subject] = link.split(" - ");
                    return (
                      <li key={i}>
                        <a href={href} target="_blank" rel="noreferrer">
                          - {subject}
                        </a>
                      </li>
                    );
                  })}
            </Item>
          );
        })}
      </ContentBox>
    </InnerContainer>
  );
};

const Item = styled.div`
  margin-bottom: 30px;
  & p {
    margin-bottom: 15px;
    font-size: 14px;
  }
  & li {
    padding-left: 15px;
  }
  & a {
    font-weight: 500;
    transition: 0.2s;
    &:hover {
      color: ${(props) => props.theme.mainFontColor};
    }
  }
`;

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 22px;

  & span:last-child {
    font-size: 14px;
    color: ${(props) => props.theme.disableColor};
  }
`;
