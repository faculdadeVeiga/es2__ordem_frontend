import { Box, Button, Container, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { ClienteForm } from '../../components/ClienteForm';
import { ClientItem } from '../../components/ClienteItem';
import api from '../../services/api';

interface ClienteDTO {
  id: string;
  nome: string;
  email: string;
  documento: string;
  telefone: string;
}

export function Clientes() {
  const [clientes, setClientes] = useState<ClienteDTO[]>([]);
  const [isOpenForm, setIsOpenForm] = useState(false);

  useEffect(() => {
    async function getClientes() {
      const response = await api.get('/cliente');

      const clientesAPI: any[] = response.data ?? [];

      setClientes(
        clientesAPI.map((x) => ({
          id: x.idCliente,
          nome: x.nomeCliente,
          documento: x.cpfCliente,
          email: x.emailCliente[0].emailEmail,
          telefone: x.telefoneCliente[0].numTelefone,
        }))
      );
    }

    getClientes();
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3,
      }}
    >
      <Container maxWidth={false}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={() => setIsOpenForm(true)}
          >
            Novo Cliente
          </Button>
        </Box>
        <Box sx={{ pt: 3 }}>
          <Grid container spacing={3}>
            {clientes.map((cliente) => (
              <Grid key={`${cliente.id}`} item lg={4} md={6} xs={12}>
                <ClientItem
                  nome={cliente.nome}
                  email={cliente.email}
                  documento={cliente.documento}
                  telefone={cliente.telefone}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <ClienteForm
        isOpen={isOpenForm}
        handleClose={() => setIsOpenForm(false)}
      />
    </Box>
  );
}
