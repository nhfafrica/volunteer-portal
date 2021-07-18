import React from "react";
import Copyright from "../../components/Copyright";
import styled from "styled-components";
import "bulma/css/bulma.min.css";
import { Form, Columns } from "react-bulma-components";

const { Input, Field, Control, Label } = Form;
const { Column } = Columns;

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
          <FormMain>
            <SectionHeader>Personal Identifying Information</SectionHeader>
            <Columns>
              <Column>
                <Field>
                  <Label>First Name</Label>
                  <Control>
                    <Input type="text" name="firstName" />
                  </Control>
                </Field>
              </Column>
              <Column>
                <Field>
                  <Label>Last Name</Label>
                  <Control>
                    <Input type="text" name="lastName" />
                  </Control>
                </Field>
              </Column>
            </Columns>
          </FormMain>
        </FormBody>
      </FormContainer>
      <Copyright landingpage />
    </MainContainer>
  );
};

// STYLES
const nhfBlue = "#4a90e2";

const MainContainer = styled.div`
  background-color: #e7e7e7;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.div`
  width: 60%;
  margin-top: 4rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

const HeaderImageWrapper = styled.div`
  border-radius: 50%;
  background-color: white;
  margin-top: 4rem;
  & > img {
    border-radius: 50%;
    width: 15rem;
  }
`;

const FormHeader = styled.div`
  background-color: ${nhfBlue};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormTitle = styled.h1`
  font-family: "Fjalla One";
  font-size: 3rem;
  text-transform: uppercase;
  margin-top: 1rem;
  color: #fff;
  font-weight: 300;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    text-align: center;
  }
`;

const FormBody = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 3rem;
`;

const FormMain = styled.div`
  width: 100%;
  margin-left: 4rem;
  margin-right: 4rem;
`;

const SectionHeader = styled.h4`
  font-family: "Roboto Condensed";
  font-size: 1.125rem;
  color: #00418c;
  text-transform: uppercase;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

export default FormPage;
