import styled from 'styled-components';

export const Card = styled.div`
  background-color: white;

  border: 1px solid #e0e0e0;

  padding: 20px;

  border-radius: 5px;
`;

export const Title = styled.h1`
  font-size: 1.2em;
  font-weight: 400;
  color: #363f5f;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: 8px;
`;

export const Infos = styled.h3`
  font-size: 1em;
  font-weight: normal;
  color: #969cb3;

  margin-left: 10px;
`;
