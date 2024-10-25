import {
  Avatar,
  Box,
  Fab,
  IconButton,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import { EmojiEmotions, PersonAdd, VideoCameraBack } from "@mui/icons-material";
import ImageIcon from "@mui/icons-material/Image";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const AddPost = () => {
  const theme = useTheme();
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <Box>
      <Box borderRadius={"2px solid white"}>
        <Tooltip
          title="Add Item"
          sx={{ position: "fixed", bottom: "20px", left: "5px" }}
        >
          <IconButton>
            <Fab
              onClick={() => {
                setIsOpen(true);
              }}
              color="primary"
              aria-label="add"
            >
              <AddIcon />
            </Fab>
          </IconButton>
        </Tooltip>

        <Modal
          sx={{}}
          open={IsOpen}
          onClose={() => {
            setIsOpen(false);
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              padding: "22px",
              borderRadius: "6px",
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50% , -50%)",
              bgcolor: theme.palette.background.default,
              width: {xs:"97%" , sm:"399px"},
            }}
          >
            <Typography
              sx={{ textAlign: "center" }}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Create Post
            </Typography>
            <Stack alignItems="center" direction="row">
              <Avatar
                sx={{ mr: "10px" }}
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg"
              />
              <Typography id="modal-modal-description">Ramy Sharp</Typography>
            </Stack>
            <TextField
              sx={{ width: "100%", mt: "22px" }}
              multiline
              rows={3}
              placeholder="What is in your mind ..."
              variant="standard"
            />

            <Stack direction="row" my={3} spacing={1}>
              <EmojiEmotions color="primary" />
              <ImageIcon color="secondary" />
              <VideoCameraBack color="success" />
              <PersonAdd color="error" />
            </Stack>

            <ButtonGroup
              variant="contained"
              aria-label="Basic button group"
              sx={{ width: "100%" }}
            >
              <Button sx={{ flexGrow: "1" }}>Post</Button>
              <Button>
                <CalendarMonthIcon />
              </Button>
            </ButtonGroup>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default AddPost;
