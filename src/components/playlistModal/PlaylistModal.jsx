import { Box, IconButton, Modal, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

export const PlaylistModal = ({ modal, setModal }) => {
  const handleClose = () => {
    setModal((s) => !s);
  };

  return (
    <Modal
      open={modal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "#373c43",
          boxShadow: 24,
          p: 4,
        }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Typography
            sx={{ color: "#fff" }}
            id="modal-modal-title"
            variant="h6"
            component="h2">
            Playlist
          </Typography>
          <IconButton onClick={handleClose} id="long-button">
            <CloseIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Box>
      </Box>
    </Modal>
  );
};
