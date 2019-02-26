import React from "react";
import styled from "styled-components";
import { rgba } from "polished";

import { colors } from "../assets/globalStyles";

import { SectionTitle } from "./basics/SectionTitle";
import { TextFromString } from "./helpers/Content";

export default class Hello extends React.PureComponent {
  render() {
    return (
      <StyledMainSection className="homepage-section" id="about-me-section">
        <SectionTitle title={`${this.props.sectionTitle},`} />
        <StyledFigure />
        <TextFromString
          text={this.props.sectionText}
          style={{ marginBottom: "350px" }}
        />
      </StyledMainSection>
    );
  }
}

const StyledMainSection = styled.section`
  position: relative;
  padding: 10vh 0 5vh;
`;

const StyledFigure = styled.div`
  width: 360px;
  height: 380px;
  background: ${rgba(colors.secondary, 0.1)};
  margin-top: -60px;
  margin-left: -50px;
  position: absolute;
  z-index: -1;
`;