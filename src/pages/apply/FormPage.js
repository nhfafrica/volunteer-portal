import React from "react";
import {
  MainContainer,
  FormContainer,
  FormHeader,
  HeaderImageWrapper,
  FormTitle,
  FormBody,
  Copyright,
  FormMain,
  SectionHeader,
} from "./form-page-style";
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
      <Copyright>
        &copy; {new Date().getFullYear()} The Nyuma Harrison Foundation
      </Copyright>
    </MainContainer>
  );
};

export default FormPage;
