import React from "react";
import { Formik, Field as FormikField } from "formik";
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

const { Input, Field, Control, Label, Select, Textarea } = Form;
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
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phoneNumber: "",
              physicalAddress: "",
              pronoun: "",
              birthday: "",
              occupation: "",
              twitterHandle: "",
              instagramHandle: "",
              facebookHandle: "",
              linkedinHandle: "",
              publicFigures: "",
              mostAdmiredNGO: "",
              preferredSocialMedia: "",
              volunteerType: "",
              interestedVolunteerUnits: [],
              reasonForVolunteering: "",
            }}
            onSubmit={(values) => {
              const formattedData = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                phoneNumber: values.phoneNumber,
                additionalData: {
                  physicalAddress: values.physicalAddress,
                  pronoun: values.pronoun,
                  birthday: values.birthday,
                  occupation: values.occupation,
                },
                socialBackground: {
                  socialMediaHandles: {
                    twitterHandle: values.twitterHandle,
                    instagramHandle: values.instagramHandle,
                    facebookHandle: values.facebookHandle,
                    linkedinHandle: values.linkedinHandle,
                  },
                  publicFigures: values.publicFigures,
                  mostAdmiredNGO: values.mostAdmiredNGO,
                },
                interests: {
                  preferedSocialMedia: values.preferredSocialMedia,
                  volunteerType: values.volunteerType,
                  interestedVolunteerUnits: values.interestedVolunteerUnits,
                },
                reasonForVolunteering: values.reasonForVolunteering,
              };
              console.log(formattedData);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <FormMain onSubmit={handleSubmit}>
                <SectionHeader>Personal Identifying Information</SectionHeader>
                <Columns>
                  <Column>
                    <Field>
                      <Label>First Name</Label>
                      <Control>
                        <Input
                          type="text"
                          name="firstName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.firstName}
                        />
                      </Control>
                    </Field>
                  </Column>
                  <Column>
                    <Field>
                      <Label>Last Name</Label>
                      <Control>
                        <Input
                          type="text"
                          name="lastName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.lastName}
                        />
                      </Control>
                    </Field>
                  </Column>
                </Columns>
                <Columns>
                  <Column>
                    <Field>
                      <Label>Email</Label>
                      <Control className="has-icons-left">
                        <Input
                          type="email"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                        <span className="icon is-small is-left">
                          <FaEnvelope />
                        </span>
                      </Control>
                    </Field>
                  </Column>
                  <Column>
                    <Field>
                      <Label>Phone</Label>
                      <Control className="has-icons-left">
                        <Input
                          type="tel"
                          name="phoneNumber"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.phoneNumber}
                        />
                        <span className="icon is-small is-left">
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
                        <Input
                          type="text"
                          name="physicalAddress"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.physicalAddress}
                        />
                        <span className="icon is-small is-left">
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
                          <Select
                            name="pronoun"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.pronoun}
                          >
                            <option defaultValue disabled>
                              select your gender pronoun
                            </option>
                            <option value="he">he</option>
                            <option value="she">she</option>
                            <option value="they">they</option>
                            <option value="prefer not to say">
                              prefer not to say
                            </option>
                          </Select>
                        </div>
                      </Control>
                    </Field>
                  </Column>
                  <Column>
                    <Field>
                      <Label>Birthday</Label>
                      <Control>
                        <Input
                          type="date"
                          name="birthDay"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Control>
                    </Field>
                  </Column>
                  <Column>
                    <Field>
                      <Label>Occupation</Label>
                      <Control>
                        <Input
                          type="text"
                          name="occupation"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.occupation}
                        />
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
                      <Input
                        type="text"
                        name="twitterHandle"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.twitterHandle}
                      />
                      <span className="icon is-small is-left twitter">
                        <TiSocialTwitter />
                      </span>
                    </Control>
                  </Column>
                  <Column>
                    <Control className="has-icons-left">
                      <Input
                        type="text"
                        name="instagramHandle"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.instagramHandle}
                      />
                      <span className="icon is-small is-left instagram">
                        <TiSocialInstagram />
                      </span>
                    </Control>
                  </Column>
                </Columns>
                <Columns>
                  <Column>
                    <Control className="has-icons-left">
                      <Input
                        type="text"
                        name="facebookHandle"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.facebookHandle}
                      />
                      <span className="icon is-small is-left facebook">
                        <TiSocialFacebook />
                      </span>
                    </Control>
                  </Column>
                  <Column>
                    <Control className="has-icons-left">
                      <Input
                        type="text"
                        name="linkedinHandle"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.linkedinHandle}
                      />
                      <span className="icon is-small is-left linkedin">
                        <TiSocialLinkedin />
                      </span>
                    </Control>
                  </Column>
                </Columns>
                <Columns>
                  <Column>
                    <Field>
                      <Label>
                        Who are your favorite social media personalities or
                        public figures? Why do you like them?
                      </Label>
                      <Control>
                        <Textarea
                          name="publicFigures"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.publicFigures}
                        />
                      </Control>
                    </Field>
                  </Column>
                </Columns>
                <Columns>
                  <Column>
                    <Field>
                      <Label>
                        Which NGO’s work do you follow or most admire?
                      </Label>
                      <Control>
                        <Input
                          type="text"
                          name="mostAdmiredNGO"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.mostAdmiredNGO}
                        />
                      </Control>
                    </Field>
                  </Column>
                </Columns>
                <SectionHeader>Interest/Skills</SectionHeader>
                <legend>
                  Which social media network are you most familiar with?
                </legend>
                <Control className="radioButtons">
                  <label>
                    <FormikField
                      type="radio"
                      value="linkedin"
                      name="preferredSocialMedia"
                    ></FormikField>
                    &nbsp; LinkedIn
                  </label>
                  <label>
                    <FormikField
                      type="radio"
                      value="twitter"
                      name="preferredSocialMedia"
                    ></FormikField>
                    &nbsp; Twitter
                  </label>
                  <label>
                    <FormikField
                      type="radio"
                      value="facebook"
                      name="preferredSocialMedia"
                    />
                    &nbsp; Facebook
                  </label>
                  <label>
                    <FormikField
                      type="radio"
                      value="instagram"
                      name="preferredSocialMedia"
                    />
                    &nbsp; Instagram
                  </label>
                </Control>
                <legend>What type of volunteer do you wish to be?</legend>
                <Control className="volunteer-radios">
                  <label>
                    <FormikField
                      type="radio"
                      value="full-time"
                      name="volunteerType"
                    />
                    &nbsp; Full-time volunteer (Works on a team and participates
                    in ongoing program and organisation work.)
                  </label>
                  <label>
                    <FormikField
                      type="radio"
                      value="part-time"
                      name="volunteerType"
                    />
                    &nbsp; Part-time volunteer (Volunteers only on occasion to
                    assist with events.)
                  </label>
                </Control>
                <Field>
                  <legend>
                    What type of skills/experience would you like to contribute?
                  </legend>
                  <Columns>
                    <Column>
                      <Control>
                        <label>
                          <FormikField
                            type="checkbox"
                            name="interestedVolunteerUnits"
                            value="Photography/Videography"
                          />
                          &nbsp; Photography/Videography
                        </label>
                      </Control>
                      <Control>
                        <label>
                          <FormikField
                            type="checkbox"
                            name="interestedVolunteerUnits"
                            value="Social Media Management"
                          />
                          &nbsp; Social Media Management
                        </label>
                      </Control>
                      <Control>
                        <label>
                          <FormikField
                            type="checkbox"
                            name="interestedVolunteerUnits"
                            value="Fundraising/Grant Writing"
                          />
                          &nbsp; Fundraising/Grant Writing
                        </label>
                      </Control>
                      <Control>
                        <label>
                          <FormikField
                            type="checkbox"
                            name="interestedVolunteerUnits"
                            value="IT/Technology Management"
                          />
                          &nbsp; IT/Technology Management
                        </label>
                      </Control>
                      <Control>
                        <label>
                          <FormikField
                            type="checkbox"
                            name="interestedVolunteerUnits"
                            value="Driving"
                          />
                          &nbsp; Driving
                        </label>
                      </Control>
                    </Column>
                    <Column>
                      <Control>
                        <label>
                          <FormikField
                            type="checkbox"
                            name="interestedVolunteerUnits"
                            value="Event Planning and Hosting"
                          />
                          &nbsp; Event Planning and Hosting
                        </label>
                      </Control>
                      <Control>
                        <label>
                          <FormikField
                            type="checkbox"
                            name="interestedVolunteerUnits"
                            value="Youth engagement"
                          />
                          &nbsp; Youth engagement
                        </label>
                      </Control>
                      <Control>
                        <label>
                          <FormikField
                            type="checkbox"
                            name="interestedVolunteerUnits"
                            value="Health/Medical Care Delivery"
                          />
                          &nbsp; Health/Medical Care Delivery
                        </label>
                      </Control>
                      <Control>
                        <label>
                          <FormikField
                            type="checkbox"
                            name="interestedVolunteerUnits"
                            value="Document editing/Writing"
                          />
                          &nbsp; Document editing/Writing
                        </label>
                      </Control>
                      <Control>
                        <label>
                          <FormikField
                            type="checkbox"
                            name="interestedVolunteerUnits"
                            value="Logistics"
                          />
                          &nbsp; Logistics
                        </label>
                      </Control>
                    </Column>
                  </Columns>
                </Field>
                <Columns>
                  <Column>
                    <Field>
                      <Label>Why do you want to volunteer with NHF?</Label>
                      <Control>
                        <Textarea
                          name="reasonForVolunteering"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.reasonForVolunteering}
                        />
                      </Control>
                    </Field>
                  </Column>
                </Columns>
                <ButtonContainer>
                  <Button type="submit">
                    Submit &nbsp; <MdSend />
                  </Button>
                </ButtonContainer>
              </FormMain>
            )}
          </Formik>
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

const FormMain = styled.form`
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
