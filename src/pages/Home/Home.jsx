import React, { useEffect, useState } from "react";
import { Paper, Typography, IconButton, Box } from "@mui/material";
import { Close } from "@mui/icons-material";

const Home = () => {
  const [mydata, setMydata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/mydata")
      .then((response) => response.json())
      .then((data) => setMydata(data));
  }, []);

  const handelfunc = (item) => {
    fetch(`http://localhost:3000/mydata/${item.id}`, { method: "DELETE" });

    const newArr = mydata.filter((myObject) => {
      return myObject.id !== item.id;
    });
    setMydata(newArr);
  };

  let totalprice = 0;
  return (
    <Box>
      {mydata.map((item) => {
        totalprice += item.price;
        return (
          <Paper
            key={item.id}
            sx={{
              position: "relative",
              width: "360px",
              display: "flex",
              justifyContent: "space-between",
              mt: "22px",
              pt: "27px",
              pb: "7px",
            }}
          >
            <Typography sx={{ fontSize: "1.3rem", ml: "16px" }} variant="h6">
              {item.title}
            </Typography>
            <Typography
              sx={{
                fontSize: "1.4rem",
                mr: "33px",
                fontWeight: 500,
                opacity: "0.8",
              }}
              variant="h6"
            >
              {item.price}
            </Typography>
            <IconButton
              onClick={() => {
                handelfunc(item);
              }}
              sx={{ position: "absolute", top: "0", right: "0" }}
            >
              <Close sx={{ fontsize: "20px" }} />
            </IconButton>
          </Paper>
        );
      })}
      <Typography
        variant="h6"
        sx={{ fontSize: "1.3rem", mt: "16px", textAlign: "center" }}
      >
        👉 You Spend ${totalprice}
      </Typography>
    </Box>
  );
};

export default Home;
