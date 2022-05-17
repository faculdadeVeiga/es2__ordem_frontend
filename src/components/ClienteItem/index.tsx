import { ButtonBase, CardActionArea, Divider, Typography } from '@mui/material';
import { Card, InfoContainer, Header, Infos, Title } from './styles';

import Email from '@mui/icons-material/Email';
import Smartphone from '@mui/icons-material/Smartphone';
import AssignmentInd from '@mui/icons-material/AssignmentInd';
import AccountCircle from '@mui/icons-material/AccountCircle';

interface Props {
  nome: string;
  email: string;
  telefone: string;
  documento: string;
}

export function ClientItem({ nome, email, documento, telefone }: Props) {
  return (
    <CardActionArea>
      <Card>
        <Header>
          <Title>{nome}</Title>
          <AccountCircle fontSize="large" color="action" />
        </Header>
        <Divider
          style={{
            marginBottom: '10px',
          }}
        />
        <InfoContainer>
          <AssignmentInd fontSize="small" color="action" />
          <Infos>{documento}</Infos>
        </InfoContainer>
        <InfoContainer>
          <Smartphone fontSize="small" color="action" />
          <Infos>{telefone}</Infos>
        </InfoContainer>
        <InfoContainer>
          <Email fontSize="small" color="action" />
          <Infos>{email}</Infos>
        </InfoContainer>
      </Card>
    </CardActionArea>
  );
}
