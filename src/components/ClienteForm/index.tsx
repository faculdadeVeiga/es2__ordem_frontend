import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from '@mui/material';

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

export function ClienteForm({ isOpen, handleClose }: Props) {
  return (
    <Dialog open={isOpen} onClose={handleClose} fullWidth>
      <DialogTitle fontSize="1.3rem">Novo Cliente</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={6}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Nome"
              type="email"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Sobrenome"
              type="email"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <TextField
              autoFocus
              id="name"
              label="Documento"
              type="email"
              fullWidth
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} md={12} lg={6}>
            <TextField
              autoFocus
              id="name"
              label="Telefone"
              type="email"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoFocus
              id="name"
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button>Salvar</Button>
      </DialogActions>
    </Dialog>
  );
}
