import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import { css } from "styled-components/macro";
import logo from "images/logo.png";

import InputMask from "react-input-mask";
import Swal from "sweetalert2";

import api from "../services/api";

const Container = tw(
  ContainerBase
)`min-h-screen text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-800 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-8`;
const MainContent = tw.div`flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-4`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-red-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
// const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
// const IllustrationImage = styled.div`
//   ${(props) => `background-image: url("${props.imageSrc}");`}
//   ${tw`m-12 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat`}
// `;

const HeadingTitle = styled.h2`
  ${tw`text-3xl text-center lg:text-left sm:text-2xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
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
const LogoImage = tw.img`h-8 mx-auto`;

const SignupPage = ({
  // illustrationImageSrc = illustration,
  headingText = "Informe seu Nome e seu Whatsapp abaixo.",
  submitButtonText = "Entre para nosso time",
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  // Coloca FALSE na propriedade que indica a origem do cadastro (SITE, PAGE CADASTRO)
  const site = false;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name && phone !== "") {
      try {
        const response = await api.post("user", { name, phone, site });
        alertSuccess(response.status);
        setName("");
        setPhone("");
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.error,
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Nome e whatsapp são obrigatórios!",
      });
    }
  };

  const alertSuccess = (result) => {
    if (result === 201) {
      Swal.fire({
        icon: "success",
        title: "Sucesso!",
        text: "Agora é só aguardar entrarmos em contato!",
      });
    }
  };

  return (
    <div>
      <AnimationRevealPage>
        <Container>
          <Content>
            <MainContainer>
              <LogoImage src={logo} />
              <MainContent>
                <HeadingTitle>
                  <SlantedBackground>
                    Conquiste sua independência financeira!
                  </SlantedBackground>
                </HeadingTitle>
                <img
                  src="https://i.pinimg.com/originals/39/d6/38/39d6386ab870a7eb4f3dc8c15216c3e0.png"
                  alt=""
                  srcset=""
                />
                <Heading>
                  <div className="flex flex-wrap justify-center">
                    <p tw="mt-2 text-lg text-red-500 text-center">
                      {headingText}
                    </p>
                  </div>
                </Heading>
                <FormContainer>
                  <Form>
                    <Input
                      type="name"
                      placeholder="Nome"
                      value={name}
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                    />
                    <InputMask
                      mask="(99) 99999-9999"
                      maskChar=" "
                      onChange={(event) => {
                        setPhone(event.target.value);
                      }}
                      value={phone}
                    >
                      <Input type="tel" placeholder="WhatsApp com *DDD" />
                    </InputMask>
                    <SubmitButton type="button" onClick={handleSubmit}>
                      {/* <SubmitButtonIcon className="icon" /> */}
                      <span className="text">{submitButtonText}</span>
                    </SubmitButton>
                    <p tw="mt-8 text-sm text-gray-600 text-center">
                      Em breve nossa equipe entrará em contato com você.{" "}
                    </p>
                  </Form>
                </FormContainer>
              </MainContent>
            </MainContainer>
          </Content>
        </Container>
      </AnimationRevealPage>
    </div>
  );
};

export default SignupPage;
