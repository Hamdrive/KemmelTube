import React from "react";
import styles from "./Home.module.css";
import { PreviewCard } from "../../components";
import { Grid } from "@mui/material";
import { useVideo } from "../../context";
import { constants } from "../../constants/constants";

export const Categories = () => {
  const {
    videoState: { categories },
    videoDispatch,
  } = useVideo();

  const { filter } = constants;

  return (
    <div className={styles.categories}>
      <div className={styles.categories__title}>Browse Categories</div>
      <Grid columns={{ xs: 1, sm: 2, md: 4 }} sx={{ gap: 2 }} container>
        {categories.map((item) => (
          <PreviewCard
            key={item.id}
            title={item.categoryName}
            coverImg={item.coverImg}
            description={item.description}
            onClick={() =>
              videoDispatch({ type: filter, payload: item.categoryName })
            }
          />
        ))}
      </Grid>
    </div>
  );
};
