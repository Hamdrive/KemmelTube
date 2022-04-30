import React from "react";
import { styled } from "@mui/material/styles";
import { useVideo } from "../../context";
import { Chip, Paper, Button } from "@mui/material";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const ChipItem = styled(Chip)(() => ({
  "&&:hover": {
    backgroundColor: "#396ff9",
  },
  "&&:focus": {
    backgroundColor: "#1a5bff",
  },

  padding: "8px",
  fontWeight: 400,
  fontSize: "14px",
  color: "#fff",
  border: "none",
  backgroundColor: "#1b1f27",
}));

export const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  const {
    videoState: { categories },
  } = useVideo();
  console.log(selectedCategory);

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
          onClick={() => setSelectedCategory("All")}
        />
      </ListItem>

      {categories.map((category) => (
        <ListItem key={category.id}>
          <ChipItem
            label={category.categoryName}
            variant={
              selectedCategory === category.categoryName ? "filled" : "outlined"
            }
            onClick={() => setSelectedCategory(category.categoryName)}
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
        onClick={() => setSelectedCategory("All")}
      >
        Reset
      </Button>

    </Paper>
  );
};
