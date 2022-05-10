import { Button, Paper, Typography } from "@mui/material";
import React from "react";

export const PageHeader = ({
  showBtn = false,
  title = "",
  btnText = "Clear",
  handleClear,
}) => {
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        listStyle: "none",
        p: 1.5,
        my: 3,
        bgcolor: "#373c43",
      }}
      component="ul">
      <Typography
        sx={{
          color: "#fff",
          fontSize: {
            xs: "1.5rem",
            md: "2rem",
          },
          fontWeight: 500,
          borderBottom: "3px solid hsl(var(--blue-500))",
        }}
        variant="h5"
        component="h5">
        {title}
      </Typography>
      {showBtn && (
        <Button
          sx={{
            ml: 2,
            p: 0.75,
            backgroundColor: "#ed6c0299",
            "&&:hover": {
              backgroundColor: "#ed6c02d9",
            },
          }}
          variant="contained"
          size="medium"
          onClick={handleClear}>
          {btnText}
        </Button>
      )}
    </Paper>
  );
};
