import React from "react";
import styled from "styled-components";
import Parallax from "react-rellax";

import { breakpoints, colors } from "../assets/globalStyles";
import Circle from "../assets/img/geometric-shapes/circle.svg";
import BorderPlus from "../assets/img/geometric-shapes/border-plus.svg";

import withMainContainer from "../hocs/withMainContainer";
import { SectionTitle } from "./basics/SectionTitle";
import { TextFromString } from "./helpers/Content";
import { ProjectTile } from "./basics/ProjectTile";
import { Button } from "./basics/Button";

export default class Projects extends React.PureComponent {
  state = {
    showMore: false
  };

  showMoreFunc = () => {
    this.setState({ showMore: !this.state.showMore });
  };

  ProjectsContent = () => (
    <React.Fragment>
      <React.Fragment>
        <Parallax speed={1}>
          <StyledCircle />
        </Parallax>
        <Parallax speed={2}>
          <StyledBorderPlus />
        </Parallax>
      </React.Fragment>

      <SectionTitle title={this.props.sectionTitle} />
      <StyledTextFromString text={this.props.sectionText} />
      <StyledProjectTilesOuter>
        <StyledProjectTilesHolder
          className={this.state.showMore ? "expanded" : "collapsed"}
        >
          {this.props.projects.map(({ node: project }) => {
            const info = project.frontmatter;
            return (
              <ProjectTile
                key={info.title}
                projectTitle={info.title}
                projectBriefDesc={info.brief_description}
                projectURL={project.fields.slug}
                projectTechs={info.technologies}
              />
            );
          })}
        </StyledProjectTilesHolder>
        <StyledButtonHolder>
          <Button
            white
            clickBehavior={this.showMoreFunc}
            text={
              this.state.showMore ? "Show less projects" : "Show more projects"
            }
          />
        </StyledButtonHolder>
      </StyledProjectTilesOuter>
    </React.Fragment>
  );

  render() {
    let ProjectsWithMainContainer = withMainContainer(this.ProjectsContent);

    return (
      <StyledMainSection className="homepage-section" id="projects-section">
        <ProjectsWithMainContainer />
      </StyledMainSection>
    );
  }
}

const StyledCircle = styled(Circle)`
  width: 115px;
  position: absolute;
  top: 150px;
  left: -62px;
  fill: ${colors.greyLight};
  @media ${breakpoints.mobile} {
    transform: scale(0.7);
  }
`;

const StyledBorderPlus = styled(BorderPlus)`
  width: 25px;
  position: absolute;
  top: 1050px;
  right: -160px;
  path {
    stroke: ${colors.secondary};
  }
  @media ${breakpoints.tablet} {
    right: -20px;
  }
`;

const StyledMainSection = styled.section`
  position: relative;
  padding: 10vh 0 5vh;
`;

const StyledProjectTilesOuter = styled.div`
  margin-bottom: 250px;
  @media ${breakpoints.mobile} {
    margin-bottom: 160px;
  }
`;

const StyledProjectTilesHolder = styled.div`
  padding-top: 30px;
  &.expanded {
    max-height: auto;
    overflow: initial;
  }
  &.collapsed {
    max-height: 965px;
    overflow: hidden;
    @media ${breakpoints.mobileSmall} {
      max-height: 1100px;
    }
  }
`;

const StyledTextFromString = styled(TextFromString)`
  margin-bottom: 150px;
  @media ${breakpoints.mobile} {
    margin-bottom: 100px;
  }
`;

const StyledButtonHolder = styled.div`
  position: absolute;
  bottom: -70px;
  left: 0;
  width: 100%;
  text-align: center;
  z-index: 9999;
  button {
    border-bottom: 1px solid;
    border-radius: 0;
  }
`;
