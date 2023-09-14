import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {BsWhatsapp} from "react-icons/bs";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalB() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}><BsWhatsapp color="green" fontSize={36} /></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Cantato via WhatsApp
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            caso deseje algum produto da lista em amostra favor entrar em contato via WhatsApp
            tocando no botão abaixo ou ligando para (81) 95555-5555
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '1em' }}>
            <Button sx={{ color: 'green' }}>Contato via WhatsApp</Button>
            <BsWhatsapp color="green" fontSize={36} />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}