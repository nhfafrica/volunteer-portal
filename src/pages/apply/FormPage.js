import React from "react";
import {
  MainContainer,
  FormContainer,
  FormHeader,
  HeaderImageWrapper,
  FormTitle,
  FormBody,
  Copyright,
  Form,
  SectionHeader,
} from "./form-page-style";

const FormPage = () => {
  return (
    <MainContainer>
      <FormContainer>
        <FormHeader>
          <HeaderImageWrapper>
            <img
              src="/images/collaboration.svg"
              alt="Team members collaborating"
            />
          </HeaderImageWrapper>
          <FormTitle>NHF Volunteer Application</FormTitle>
        </FormHeader>
        <FormBody>
          <Form>
            <SectionHeader>Personal Identifying Information</SectionHeader>
          </Form>
        </FormBody>
      </FormContainer>
      <Copyright>
        &copy; {new Date().getFullYear()} The Nyuma Harrison Foundation
      </Copyright>
    </MainContainer>
  );
};

export default FormPage;
