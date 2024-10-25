import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, MenuItem, MenuList, Paper } from "@mui/material";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Popper from "@mui/material/Popper";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useTheme } from "@emotion/react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
}));

export const Posts = () => {
  const myCards = [
    {
      letter: "A",
      color: "#a020f0",
      userName: "Ali Hassan",
      imgLink:
        "https://images.pexels.com/photos/40465/pexels-photo-40465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      letter: "B",
      color: "#008080",
      userName: "Alaa Hassan",
      imgLink:
        "https://images.pexels.com/photos/36478/amazing-beautiful-beauty-blue.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      letter: "C",
      color: "#4169e1",
      userName: "Walaa Hassan",
      imgLink:
        "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [expanded, setExpanded] = React.useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);

  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const theme = useTheme();

  return (
    <div style={{ marginTop: "34px" }}>
      {myCards.map((item) => (
        <Card key={item.userName} sx={{ maxWidth: 444, mb: "30px" }}>
          <CardHeader
            avatar={
              <Avatar
                sx={{
                  color: theme.palette.getContrastText(item.color),
                  bgcolor: item.color,
                }}
                aria-label="recipe"
              >
                {item.letter}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings" onClick={handleToggle}>
                <Stack direction="row" spacing={2}>
                  <div>
                    <Button
                      ref={anchorRef}
                      id="composition-button"
                      aria-controls={open ? "composition-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                    >
                      <MoreVertIcon />
                    </Button>
                    <Popper
                      open={open}
                      anchorEl={anchorRef.current}
                      role={undefined}
                      placement="bottom-start"
                      transition
                      disablePortal
                    >
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          style={{
                            transformOrigin:
                              placement === "bottom-start"
                                ? "left top"
                                : "left bottom",
                          }}
                        >
                          <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                              <MenuList
                                autoFocusItem={open}
                                id="composition-menu"
                                aria-labelledby="composition-button"
                                onKeyDown={handleListKeyDown}
                              >
                                <MenuItem onClick={handleClose}>
                                  Profile
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                  My account
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                  Logout
                                </MenuItem>
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
                  </div>
                </Stack>
              </IconButton>
            }
            title={item.userName}
            subheader="September 14, 2016"
          />

          <CardMedia
            component="img"
            height="194"
            image={item.imgLink}
            alt="Post image"
          />
          <CardContent>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>

          <CardActions disableSpacing>
            <Checkbox
              {...label}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <Box flexGrow={1} />
            <Checkbox
              {...label}
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon />}
            />
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ArrowDropDownIcon />
            </ExpandMore>
          </CardActions>

          {expanded && (
            <CardContent>
              <Typography paragraph>Additional Content...</Typography>
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  );
};
