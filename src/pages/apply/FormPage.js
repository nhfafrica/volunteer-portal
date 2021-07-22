import React from "react";
import Copyright from "../../components/Copyright";
import styled from "styled-components";
import "bulma/css/bulma.min.css";
import { Form, Columns } from "react-bulma-components";
import "./FormPage.css";
import { FaEnvelope, FaUser, FaMapMarkerAlt } from "react-icons/fa";
import {
  TiSocialInstagram,
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialLinkedin,
} from "react-icons/ti";
import { MdSend } from "react-icons/md";

const { Input, Field, Control, Label, Select, Textarea, Radio, Checkbox } =
  Form;
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
            <Columns>
              <Column>
                <Field>
                  <Label>Email</Label>
                  <Control className="has-icons-left">
                    <Input type="email" name="email" />
                    <span class="icon is-small is-left">
                      <FaEnvelope />
                    </span>
                  </Control>
                </Field>
              </Column>
              <Column>
                <Field>
                  <Label>Phone</Label>
                  <Control className="has-icons-left">
                    <Input type="tel" name="phone" />
                    <span class="icon is-small is-left">
                      <FaUser />
                    </span>
                  </Control>
                </Field>
              </Column>
            </Columns>
            <Columns>
              <Column>
                <Field>
                  <Label>Address</Label>
                  <Control className="has-icons-left">
                    <Input type="text" name="address" />
                    <span class="icon is-small is-left">
                      <FaMapMarkerAlt />
                    </span>
                  </Control>
                </Field>
              </Column>
            </Columns>
            <Columns>
              <Column>
                <Field>
                  <Label>Preferred Gender Pronoun</Label>
                  <Control>
                    <div className="select">
                      <Select name="genderPronoun">
                        <option selected disabled>
                          select your gender pronoun
                        </option>
                        <option>he</option>
                        <option>she</option>
                        <option>they</option>
                        <option>prefer not to say</option>
                      </Select>
                    </div>
                  </Control>
                </Field>
              </Column>
              <Column>
                <Field>
                  <Label>Birthday</Label>
                  <Control>
                    <Input type="date" name="birthday" />
                  </Control>
                </Field>
              </Column>
              <Column>
                <Field>
                  <Label>Occupation</Label>
                  <Control>
                    <Input type="text" name="occupation" />
                  </Control>
                </Field>
              </Column>
            </Columns>
            <SectionHeader>Social Background</SectionHeader>
            <legend>
              Please list your social media handles where applicable
            </legend>
            <Columns>
              <Column>
                <Control className="has-icons-left">
                  <Input type="text" name="twitter" />
                  <span class="icon is-small is-left twitter">
                    <TiSocialTwitter />
                  </span>
                </Control>
              </Column>
              <Column>
                <Control className="has-icons-left">
                  <Input type="text" name="instagram" />
                  <span class="icon is-small is-left instagram">
                    <TiSocialInstagram />
                  </span>
                </Control>
              </Column>
            </Columns>
            <Columns>
              <Column>
                <Control className="has-icons-left">
                  <Input type="text" name="facebook" />
                  <span class="icon is-small is-left facebook">
                    <TiSocialFacebook />
                  </span>
                </Control>
              </Column>
              <Column>
                <Control className="has-icons-left">
                  <Input type="text" name="linkedin" />
                  <span class="icon is-small is-left linkedin">
                    <TiSocialLinkedin />
                  </span>
                </Control>
              </Column>
            </Columns>
            <Columns>
              <Column>
                <Field>
                  <Label>
                    Who are your favorite social media personalities or public
                    figures? Why do you like them?
                  </Label>
                  <Control>
                    <Textarea name="favoriteSocialMediaProfiles" />
                  </Control>
                </Field>
              </Column>
            </Columns>
            <Columns>
              <Column>
                <Field>
                  <Label>Which NGO’s work do you follow or most admire?</Label>
                  <Control>
                    <Input type="text" name="favoriteNGO" />
                  </Control>
                </Field>
              </Column>
            </Columns>
            <SectionHeader>Interest/Skills</SectionHeader>
            <legend>
              Which social media network are you most familiar with?
            </legend>
            <Control className="radioButtons">
              <Radio name="socialMedia" value="linkedin">
                LinkedIn
              </Radio>
              <Radio name="socialMedia" value="twitter">
                Twitter
              </Radio>
              <Radio name="socialMedia" value="facebook">
                Facebook
              </Radio>
              <Radio name="socialMedia" value="instagram">
                Instagram
              </Radio>
            </Control>
            <legend>What type of volunteer do you wish to be?</legend>
            <Control className="volunteer-radios">
              <Radio name="volunteerType" value="full-time">
                Full-time volunteer (Works on a team and participates in ongoing
                program and organisation work.)
              </Radio>
              <Radio name="volunteerType" value="part-time">
                Part-time volunteer (Volunteers only on occasion to assist with
                events.)
              </Radio>
            </Control>
            <Field>
              <legend>
                What type of skills/experience would you like to contribute?
              </legend>
              <Columns>
                <Column>
                  <Control>
                    <Checkbox
                      name="skills"
                      value="prograPhotography/Videography"
                    >
                      Photography/Videography
                    </Checkbox>
                  </Control>
                  <Control>
                    <Checkbox name="skills" value="Social Media Management">
                      Social Media Management
                    </Checkbox>
                  </Control>
                  <Control>
                    <Checkbox name="skills" value="Fundraising/Grant Writing">
                      Fundraising/Grant Writing
                    </Checkbox>
                  </Control>
                  <Control>
                    <Checkbox name="skills" value="IT/Technology Management">
                      IT/Technology Management
                    </Checkbox>
                  </Control>
                  <Control>
                    <Checkbox name="skills" value="Driving">
                      Driving
                    </Checkbox>
                  </Control>
                </Column>
                <Column>
                  <Control>
                    <Checkbox name="skills" value="Event Planning and Hosting">
                      Event Planning and Hosting
                    </Checkbox>
                  </Control>
                  <Control>
                    <Checkbox name="skills" value="Youth engagement">
                      Youth engagement
                    </Checkbox>
                  </Control>
                  <Control>
                    <Checkbox
                      name="skills"
                      value="Health/Medical Care Delivery"
                    >
                      Health/Medical Care Delivery
                    </Checkbox>
                  </Control>
                  <Control>
                    <Checkbox name="skills" value="Document editing/Writing">
                      Document editing/Writing
                    </Checkbox>
                  </Control>
                  <Control>
                    <Checkbox name="skills" value="Logistics">
                      Logistics
                    </Checkbox>
                  </Control>
                </Column>
              </Columns>
            </Field>
            <Columns>
              <Column>
                <Field>
                  <Label>Why do you want to volunteer with NHF?</Label>
                  <Control>
                    <Textarea name="reasonForVolunteering" />
                  </Control>
                </Field>
              </Column>
            </Columns>
            <ButtonContainer>
              <Button>
                Submit &nbsp; <MdSend />
              </Button>
            </ButtonContainer>
          </FormMain>
        </FormBody>
      </FormContainer>
      <Copyright formpage="true" className="copyright" />
    </MainContainer>
  );
};

// STYLES
const nhfBlue = "#4a90e2";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${nhfBlue};
  font-size: large;
  font-family: "Dosis";
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  box-sizing: content-box;
  padding: 0.02em 2rem;
  cursor: pointer;

  & svg {
    font-size: 1.5rem;
  }

  &:hover {
    background-color: red;
  }
`;

const MainContainer = styled.div`
  background-color: #e7e7e7;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.div`
  width: 50%;
  margin-top: 4rem;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
      width: 80%;
  }

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
    width: 12rem;
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

  @media (max-width: 768px) {
      margin-left: 2rem;
      margin-right: 2rem;
  }
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
