import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Brightness4,
  Brightness7,
  Create,
  Home,
  Logout,
  Person,
  Settings,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import AddPost from "./AddPost";
import PostAddIcon from '@mui/icons-material/PostAdd';
const Drawerr = ({
  drawerWidth,
  setmymode,
  drawertype,
  hideDrawer,
  showlist,
}) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const currentLocation = useLocation();
  const myList = [
    { text: "Home", icon: <Home />, path: "/" },
    { text: "Create", icon: <Create />, path: "/create" },
    { text: "posts", icon: <PostAddIcon />, path: "/posts" },
    { text: "Profile", icon: <Person />, path: "/profile" },
    { text: "Settings", icon: <Settings />, path: "/settings" },
  ];
  return (
    <Box>
      <Drawer
        className="Drawerstyle"
        sx={{
          display: { xs: showlist, md: "block" },
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: `${drawerWidth}px`,
            boxSizing: "border-box",
            position: "fixed",
            minWidth: "200px",
            top: "64px",
          },
        }}
        variant={drawertype}
        anchor="left"
        open={true}
        onClose={hideDrawer}
      >
        <List>
          <ListItem
            sx={{ display: "flex", justifyContent: "center", mb: "15px" }}
            disablePadding
          >
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "currentTheme",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                setmymode(theme.palette.mode === "light" ? "dark" : "light");
              }}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7 sx={{ color: "orange" }} />
              ) : (
                <Brightness4 />
              )}
            </IconButton>
          </ListItem>
          <Divider />
          {myList.map((item) => {
            return (
              <ListItem
                key={item.text}
                disablePadding
                sx={{
                  bgcolor:
                    currentLocation.pathname === item.path
                      ? theme.palette.favColor.main
                      : null,
                }}
              >
                <ListItemButton
                  onClick={() => {
                    navigate(item.path);
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            );
          })}
          <ListItem
            disablePadding
            sx={{
              bgcolor:
                currentLocation.pathname === "/logout"
                  ? theme.palette.favColor.main
                  : null,
            }}
          >
            <ListItemButton
              onClick={() => {
                navigate("/logout");
              }}
            >
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
          <Divider />
        </List>
        <AddPost />
      </Drawer>
    </Box>
  );
};
export default Drawerr;
