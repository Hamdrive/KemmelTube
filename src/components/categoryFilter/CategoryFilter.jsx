import React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import { useVideo } from "../../context";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const ChipItem = styled(Chip)(() => ({
  padding: "8px",
  fontWeight: 400,
  fontSize: "14px",
}));

export const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  const {
    videoState: { categories },
  } = useVideo();

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        listStyle: "none",
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {/* Separately render "All" btn */}
      <ListItem>
        <ChipItem
          label="All"
          variant={selectedCategory === "All" ? "filled" : "outlined"}
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
    </Paper>
  );
};
