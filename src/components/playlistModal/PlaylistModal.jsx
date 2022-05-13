import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";
import { RegularTextInput } from "../Inputs/RegularTextInput";
import { useVideo } from "../../context";
import { useLocation } from "react-router-dom";

const CustomFormControl = styled(FormControl)({
  required: true,
  variant: "outlined",
  width: "100%",
  marginTop: "1rem",
  marginBottom: "0.5rem",
  "& label.Mui-focused": {
    color: "#fff",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#fff",
  },

  "& .MuiInputLabel-root": {
    color: "#fff",
  },
  "& .MuiOutlinedInput-root": {
    color: "#fff",
    "& fieldset": {
      borderColor: "#fff",
    },
    "&:hover fieldset": {
      borderColor: "white",
      borderWidth: "2px",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#fff",
    },
  },
});

const ButtonOutlineWrapper = styled(Button)(() => ({
  "&:hover": {
    backgroundColor: "#396ff9",
    borderColor: "#396ff9",
  },
  color: "#fff",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "#fff",
  height: "3rem",
  width: "100%",
  fontSize: "1rem",
  marginTop: "1rem",
}));

const ButtonWrapper = styled(Button)(() => ({
  "&:hover": {
    color: "#396ff9",
  },
  borderColor: "#396ff9",
  backgroundColor: "#396ff9",
  color: "#fff",
  borderWidth: "1px",
  borderStyle: "solid",
  height: "3rem",
  width: "100%",
  fontSize: "1rem",
  marginTop: "1rem",
}));

export const PlaylistModal = ({
  token,
  modal,
  setModal,
  playlistVideo = null,
}) => {
  const {
    videoState: { playlists },
    videoDispatch,
    setPlaylists,
    setPlaylistNewVideo,
    deleteVideoFromPlaylist,
    isInPlaylist,
  } = useVideo();
  const [newPlaylist, setNewPlaylist] = useState(false);
  const [playlistTitle, setPlaylistTitle] = useState("");

  const location = useLocation();

  const handleNewPlaylist = (e) => {
    e.preventDefault(e);
    setPlaylists(token, playlistTitle, videoDispatch);
    setPlaylistTitle("");
  };

  const handleVideoInPlaylist = (e, playlistId) => {
    e.preventDefault();
    isInPlaylist(playlistId, playlistVideo._id)
      ? deleteVideoFromPlaylist(
          token,
          playlistVideo._id,
          playlists,
          playlistId,
          videoDispatch
        )
      : setPlaylistNewVideo(
          token,
          playlistVideo,
          playlists,
          playlistId,
          videoDispatch
        );
  };

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
        component="div"
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
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Typography
            sx={{ color: "#fff" }}
            id="modal-modal-title"
            variant="h5"
            component="h5">
            Playlist
          </Typography>
          <IconButton onClick={handleClose} id="long-button">
            <CloseIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Box>
        {location.pathname !== "/playlists" && (
          <Box
            component="div"
            sx={{ display: "flex", flexDirection: "column" }}>
            <FormGroup>
              {playlists.map((playlist) => (
                <FormControlLabel
                  key={playlist._id}
                  control={
                    <Checkbox
                      checked={isInPlaylist(playlist._id, playlistVideo._id)}
                      onChange={(e) => handleVideoInPlaylist(e, playlist._id)}
                    />
                  }
                  label={playlist.title}
                  sx={{ color: "#fff" }}
                />
              ))}
            </FormGroup>
          </Box>
        )}
        {newPlaylist ? (
          <Box onSubmit={(e) => handleNewPlaylist(e)} component="form">
            <CustomFormControl>
              <RegularTextInput
                required={false}
                text={"Playlist Name"}
                name={"playlist name"}
                value={playlistTitle}
                placeholder="Playlist name"
                handleChange={(e) => setPlaylistTitle(e.target.value)}
              />
            </CustomFormControl>
            <ButtonWrapper type="submit">
              <AddIcon />
              Create
            </ButtonWrapper>
          </Box>
        ) : (
          <ButtonOutlineWrapper onClick={() => setNewPlaylist((p) => !p)}>
            <AddIcon />
            Create new playlist
          </ButtonOutlineWrapper>
        )}
      </Box>
    </Modal>
  );
};
