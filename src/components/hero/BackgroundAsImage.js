import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import logo from "images/logo.png";

// import Header, {
//   NavLink,
//   NavLinks,
//   PrimaryLink,
//   LogoLink,
//   NavToggle,
//   DesktopNavLinks,
// } from "../headers/light.js";
// import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

import SignUp from "../../pages/Signup";

// const StyledHeader = styled(Header)`
//   ${tw`pt-8 max-w-none`}
//   ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
//     ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300 m-4`}
//   }
//   ${NavToggle}.closed {
//     ${tw`text-gray-100 hover:text-primary-500`}
//   }
// `;

const Container = styled.div`
  ${tw`relative -mx-12 -mt-2 bg-center bg-cover`}
  // background-image: url("https://images.unsplash.com/photo-1522071901873-411886a10004?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80");
  background-image: url("https://images.unsplash.com/photo-1618189068049-3eb882d68779?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 opacity-50`;

const HeroContainer = tw.div`z-50 relative px-2 sm:px-2 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-4 px-2 flex justify-between items-center flex-col lg:flex-row`;
const LogoImage = tw.img`h-8 mx-auto`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-2 lg:mt-0 lg:pl-8`;

const Heading = styled.h2`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-red-500 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-6 -z-10`}
  }
`;

export default () => {
  return (
    <div>
      <Container style={{ overflow: "hidden" }}>
        <OpacityOverlay />
        <HeroContainer>
          {/* <StyledHeader /> */}
          <TwoColumn>
            <LeftColumn>
              <LogoImage src={logo} />
              <Heading>
                <div style={{ marginLeft: "4rem", marginRight: "4rem" }}>
                  <SlantedBackground>
                    Conquiste sua independência financeira!
                  </SlantedBackground>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </Heading>
              {/* <PrimaryAction>Read Customer Stories</PrimaryAction> */}
            </LeftColumn>
            <RightColumn>
              <div
                style={{
                  marginTop: 2,
                  marginLeft: 16,
                  marginRight: 16,
                  paddingTop: 2,
                }}
              >
                {/* <StyledResponsiveVideoEmbed
                  url="https://www.youtube.com/embed/tG2BUSxnsw8"
                  background="transparent"
                />
                <Notification>
                  Conheça a história de Luana e veja como ela melhorou de vida
                  através da revenda de roupas
                </Notification> */}
              </div>
            </RightColumn>
          </TwoColumn>
        </HeroContainer>
      </Container>
      <SignUp />
    </div>
  );
};
