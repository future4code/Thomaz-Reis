import React from "react";
import styled from "styled-components";
import { UserPhoto } from "./Post/styles";
import IconHome from "../img/iconmonstr-home-6.svg";
import IconLupa from "../img/iconmonstr-magnifier-4.svg";
import IconMail from "../img/iconmonstr-email-1.svg";
import IconHearth from "../img/iconmonstr-favorite-7.svg";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
  align-items: center;
  width: 100%;
  height: 7vh;
  font-weight: bold;
  font-style: italic;
  font-size: 1.6em;
  text-decoration: underline dotted;
  background-color: #f7f7f7;
`;
const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
`;
const Label = styled.div`
  background-color: white;
  padding: 10px;  
  border-radius: 40%;
`;
const IconeHome = styled.img`
padding: 10px`;
const IconeLupa = styled.img`
padding: 10px`;
const IconeMail = styled.img`
padding: 10px`;
const IconeHearth = styled.img`
padding: 10px`;

const Header = (props) => {
  return (
    <HeaderContainer>
      <Label>Insta-L@b</Label>
      <IconContainer>
        <IconeHome img src={IconHome} />
        <IconeLupa img src={IconLupa} />
        <IconeMail img src={IconMail} />
        <IconeHearth img src={IconHearth} />
      </IconContainer>
      {/* <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/> */}
    </HeaderContainer>
  );
};

export default Header;
