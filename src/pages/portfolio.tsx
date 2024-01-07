import React from "react";
import styled from "styled-components";
import {
  MainContainer,
  InnerContainer,
  ContentBox,
} from "../components/common/styles";
import { publicImage } from "../util/publicimage";
import { projectData } from "../components/portfolio/portfolioData";

export const Portfolio = () => {
  return (
    <MainContainer>
      <InnerContainer view="true">
        {projectData.map((projectData, index) => {
          const { name, period, member, link, projectBody, stack } =
            projectData;
          return (
            <ContentBox
              key={index}
              style={{ marginBottom: "120px" }}
              id={name.toLowerCase()}
            >
              <ProjectBox>
                <ProjectHead>
                  <ImageWrap href={link[0]} target="_blank" rel="noreferrer">
                    <img src={publicImage(name)} alt={name} />
                  </ImageWrap>
                  <ProjectInfo>
                    <ProjectName>
                      Project name <br />
                      <span style={{ color: "orange" }}>{name}</span>
                    </ProjectName>
                    <Period>{period}</Period>
                    <ProjectMember>
                      Member <br />
                      <span>{member}</span>
                    </ProjectMember>
                    <LinksWrap>
                      {link.map((link, i) => {
                        return (
                          <LinkList key={i}>
                            {i === 0 ? "Link" : "Github"} :{" "}
                            <a href={link} target="_blank" rel="noreferrer">
                              {link}
                            </a>
                          </LinkList>
                        );
                      })}
                    </LinksWrap>
                    <StackList>
                      <h3>Stack</h3>
                      {stack.map((item, j) => {
                        return (
                          <StackPosition key={j}>
                            <p>{j === 0 ? "FE" : "BE"}</p>
                            {item.length === 0 ? (
                              <span>none</span>
                            ) : (
                              item.map((stackList, k) => {
                                return (
                                  <img
                                    src={stackList}
                                    alt="stack-label"
                                    key={k}
                                  />
                                );
                              })
                            )}
                          </StackPosition>
                        );
                      })}
                    </StackList>
                  </ProjectInfo>
                </ProjectHead>
                <ProjectBody>
                  {Object.values(projectBody).map((bodyList, bodyIndex) => {
                    return (
                      <React.Fragment key={bodyIndex}>
                        <p>
                          {bodyIndex === 0
                            ? "프로젝트 목적"
                            : bodyIndex === 1
                            ? "핵심경험"
                            : "회고"}
                        </p>
                        {bodyList.map((projectBodyListData, bodyListIndex) => {
                          return (
                            <React.Fragment key={bodyListIndex}>
                              <li>{projectBodyListData}</li>
                            </React.Fragment>
                          );
                        })}
                      </React.Fragment>
                    );
                  })}
                </ProjectBody>
              </ProjectBox>
            </ContentBox>
          );
        })}
      </InnerContainer>
    </MainContainer>
  );
};

const ProjectBox = styled.div``;

const ProjectHead = styled.div`
  display: flex;
  align-items: center;
`;

const ImageWrap = styled.a`
  margin: 0 30px 30px 0;
  width: 350px;
  height: 350px;
  border-radius: 10px;
  overflow: hidden;
  & img {
    width: 350px;
    height: 350px;
    border-radius: 10px;
    object-fit: cover;
    cursor: pointer;
    transform: scale(1);
    transition: 0.3s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const ProjectInfo = styled.div`
  padding: 7px;
`;

const ProjectName = styled.h3`
  font-size: 24px;

  & span {
    font-size: 20px;
    font-weight: 400;
  }
`;

const Period = styled.div`
  margin-bottom: 20px;
  color: ${(props) => props.theme.disableColor};
`;

const ProjectMember = styled.p`
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 20px;
  & span {
    font-size: 14px;
    font-weight: 400;
  }
`;

const LinksWrap = styled.div`
  margin-bottom: 20px;
`;
const LinkList = styled.li`
  margin-bottom: 10px;
  font-weight: 500;

  & a {
    transition: 0.2s;
    &:hover {
      color: ${(props) => props.theme.mainFontColor};
    }
  }
`;
const StackList = styled.div`
  & h3 {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;
  }
`;
const StackPosition = styled.div`
  margin-bottom: 10px;
  & p {
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 5px;
  }
  & img {
    margin-right: 5px;
  }
`;

const ProjectBody = styled.div`
  padding: 20px;

  & p {
    margin-top: 40px;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 18px;
  }
  & li {
    margin-bottom: 20px;
  }
`;
