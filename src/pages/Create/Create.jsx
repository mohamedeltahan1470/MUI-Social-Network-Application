import React from "react";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import styled from "@emotion/styled";
import { ChevronRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette,
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    scale: "0.99",
  },
}));
const Create = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ price, title }) => {
    price = Number(price);
    fetch("http://localhost:3000/mydata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price, title }),
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <Box
      component="form"
      sx={{ width: "400px", p: "10px" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        onChange={(eo) => {}}
        sx={{ mt: "20px" }}
        fullWidth={true}
        label="Transaction Title"
        InputProps={{
          startAdornment: <InputAdornment position="start">👉</InputAdornment>,
        }}
        variant="filled"
        {...register("title", {
          required: { value: true, message: "Required field" },
          minLength: { value: 4, message: "minumum length is 4" },
        })}
        error={Boolean(errors.title)}
        type="text"
        helperText={
          Boolean(errors.title) ? errors.title?.message.toString() : null
        }
      />

      <TextField
        autoComplete="off"
        onChange={(eo) => {}}
        sx={{ mt: "20px" }}
        fullWidth={true}
        label="Amount"
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
        type="number"
        error={Boolean(errors.price)}
        helperText={
          Boolean(errors.price) ? errors.price?.message.toString() : null
        }
        {...register("price", {
          required: { value: true, message: "Required field" },
        })}
      />

      <ColorButton
        type="submit"
        onClick={() => {}}
        variant="contained"
        sx={{ mt: "20px" }}
      >
        Submit <ChevronRight />
      </ColorButton>
    </Box>
  );
};

export default Create;
