import React from "react";
import { styled } from "@mui/material/styles";
import { useVideo } from "../../context";
import { Chip, Paper, Button } from "@mui/material";
import { constants } from "../../constants/constants";

export const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  const {
    videoState: { categories },
    videoDispatch,
  } = useVideo();

  const { filter } = constants;

  const ListItem = styled("li")(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));

  const ChipItem = styled(Chip)(({ label }) => ({
    "&:hover": {
      backgroundColor: "#396ff9",
    },
    "&:focus": {
      backgroundColor: "#1a5bff",
    },

    padding: "8px",
    fontWeight: 400,
    fontSize: "14px",
    color: "#fff",
    border: `1px solid ${label === selectedCategory ? "#1a5bff" : "#fff"}`,
    backgroundColor: label === selectedCategory ? "#1a5bff" : "#1b1f27",
  }));

  const handleCategory = (category) => {
    videoDispatch({ type: filter, payload: category });
    setSelectedCategory(category);
  };

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        listStyle: "none",
        p: 1.5,
        my: 3,
        bgcolor: "#373c43",
      }}
      component="ul"
    >
      {/* Separately render "All" btn */}
      <ListItem>
        <ChipItem
          label="All"
          variant={selectedCategory === "All" ? "filled" : "outlined"}
          sx={{ backgroundColor: selectedCategory === "All" && "#1a5bff" }}
          onClick={() => handleCategory("All")}
        />
      </ListItem>

      {categories.map((category) => (
        <ListItem key={category.id}>
          <ChipItem
            label={category.categoryName}
            variant={
              selectedCategory === category.categoryName ? "filled" : "outlined"
            }
            onClick={() => handleCategory(category.categoryName)}
          />
        </ListItem>
      ))}

      {/* Reset Category btn */}
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
        size="small"
        onClick={() => handleCategory("All")}
      >
        Reset
      </Button>
    </Paper>
  );
};
