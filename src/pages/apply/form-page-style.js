import styled from "styled-components";
const nhfBlue = "#4a90e2";

export const MainContainer = styled.div`
  background-color: #e7e7e7;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormContainer = styled.div`
  width: 60%;
  margin-top: 4rem;
`;

export const HeaderImageWrapper = styled.div`
  border-radius: 50%;
  background-color: white;
  margin-top: 4rem;
  & > img {
    border-radius: 50%;
    width: 15rem;
  }
`;

export const FormHeader = styled.div`
  background-color: ${nhfBlue};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormTitle = styled.h1`
  font-family: "Fjalla One";
  font-size: 3rem;
  text-transform: uppercase;
  margin-top: 1rem;
  color: #fff;
  font-weight: 300;
  margin-bottom: 2rem;
`;

export const FormBody = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Copyright = styled.p``;

export const Form = styled.div`
  width: 100%;
`;

export const SectionHeader = styled.h4`
  font-family: "Roboto Condensed";
  font-size: 1.125rem;
  color: #00418c;
  text-transform: uppercase;
  margin-left: 3rem;
  margin-top: 3rem;
`;
