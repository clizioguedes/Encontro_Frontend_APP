import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

// import Header, {
//   NavLink,
//   // NavLinks,
//   // PrimaryLink,
//   LogoLink,
//   NavToggle,
//   DesktopNavLinks,
// } from "../headers/light.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

import SignUp from "../../pages/Signup";

// const StyledHeader = styled(Header)`
//   ${tw`pt-8 max-w-none`}
//   ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
//     ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
//   }
//   ${NavToggle}.closed {
//     ${tw`text-gray-100 hover:text-primary-500`}
//   }
// `;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  // background-image: url("https://images.unsplash.com/photo-1522071901873-411886a10004?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80");
  background-image: url("https://lh3.googleusercontent.com/fife/ABSRlIrtRMPWbPprVn6h-Z-GHSWwNflcW6P-pX0_AyaT7-DDcCgikmLvFWjtwE1-AoVC-EvDGiwsg6WWnXQJwhq8-C9x8ahF9kf_Pjp0HLEumXbjsQ4r0eys3zPf0MAAshCfZxV_UYadM4l_XEHZWdRwG040xLAYvbXjGYBXeWp6FFFua0CJ89uh-qu2RTjjOol0ltYLg_zUa42P3dCLimjoWirFdn5jlnALtbwqkNrJ9oobfIrsQVH9FlN869PLR-IKgQHehdtmxWvsx7DMijP3mSeZdCPvGyDpmT6ZMWqIHSj0ujyUCE17L0xwExx-y2dBypunLZTMkxSDHFg_XdGn4uNQ8-ckzKpQbb8yagjwK4KJmr-G25dkUqWvZEnKfmRcOzIR_i5ylVcNY7fWmOyxaoE6GuWKr9sDAS2GQRCwUZR_0gh7p-7GORtUqryVQZVNEsTSNVNYJILFF_w14ugKMBMh74m6eRnk7ejVUomjfUh1z1ZeAywXIBE5CG-iESFgzibm4CIU82fNUQMxuqSLXo8M7kxlXT01zF5iwRuCB92NlYq2MG4wpTWTtG3KNf0X0zyywqAPNGLx_FX7hmjzoGNFyP59jMn75_TXOav34hFinuHYPX9npx9x-jR_ZzOpkq47bpqFAvn3MaiIcM3lP3e2URt6xt4DRRIz3ZbQFcS0gmpGRPHj5CpmbwBLHfau3XwImFgqm9qtTWnZBTm3rXEs4EQEMi6wnnw=w697-h522-p-k-nu-ft");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-red-500 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 text-2xl font-bold text-lg`;

// const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;

const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;

export default () => {
  // const navLinks = [
  //   <NavLinks key={1}>
  //     <NavLink href="#">About</NavLink>
  //     <NavLink href="#">Blog</NavLink>
  //     <NavLink href="#">Locations</NavLink>
  //     <NavLink href="#">Pricing</NavLink>
  //   </NavLinks>,
  //   <NavLinks key={2}>
  //     <PrimaryLink href="/#">Hire Us</PrimaryLink>
  //   </NavLinks>,
  // ];

  return (
    <div>
      <Container>
        <OpacityOverlay />
        <HeroContainer>
          <TwoColumn>
            <LeftColumn>
              <Heading>
                <SlantedBackground>
                  Quer conquistar sua indepência financeira?
                </SlantedBackground>
                <br />
                <span>A Encontro é o lugar certo para você!</span>
                <br />
              </Heading>
              {/* <PrimaryAction>Read Customer Stories</PrimaryAction> */}
            </LeftColumn>
            <RightColumn>
              <Notification>
                Conheça a história de Luana e veja como ela melhorou de vida
                através da revenda de roupas
              </Notification>
              <StyledResponsiveVideoEmbed
                url="https://www.youtube.com/embed/tG2BUSxnsw8"
                background="transparent"
              />
            </RightColumn>
          </TwoColumn>
        </HeroContainer>
      </Container>
      <SignUp />
    </div>
  );
};
