import styled from "styled-components";

const ContainerProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;
const CardPhoto = styled.div`
  img {
    width: 20vw;
    height: 20vh;
    border-radius: 50%;
    object-fit: cover;
    object-position: 50% 0;
    padding: 5px;
  }
`;
const CardName = styled.h3``;
const CardAge = styled.div``;
const CardBio = styled.div`
  padding-left: 25%;
  padding-right: 25%;
`;

export default function ProfileCard(props) {
  return (
    <ContainerProfileCard key={props.profile.id}>
      <CardPhoto alt="photo"><img src={props.profile.photo}/></CardPhoto>
      <CardName id="name">{props.profile.name}</CardName>
      <CardAge id="age">{props.profile.age} anos</CardAge>
      <CardBio id="bio">{props.profile.bio}</CardBio>
    </ContainerProfileCard>
  );
}