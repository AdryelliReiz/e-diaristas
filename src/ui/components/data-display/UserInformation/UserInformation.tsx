import { Container } from '@material-ui/core';
import React from 'react';
import {
  UserInformationContainer,
  UserName,
  UserDescription,
  AvatarStyled,
  RatingStyled
} from './UserInformation.style';

interface UserInformationProps {
  picture: string;
  name: string;
  rating: number;
  description: string;
}

const UserInformation: React.FC<UserInformationProps> = ({
  picture, name, rating, description
}) => {
  return (
    <Container>
      <UserInformationContainer >
        <AvatarStyled src={picture}> {name[0]} </AvatarStyled>
        <UserName>{name}</UserName>
        <RatingStyled readOnly value={rating} />
        <UserDescription>{description}</UserDescription>
      </UserInformationContainer>
    </Container>
    
    
  );
}

export default UserInformation;