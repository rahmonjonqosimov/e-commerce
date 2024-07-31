import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";

const Loading:React.FC<{ count:number }> = ({ count }) => {
  return (
    <Box sx={{ maxWidth: "1152px", padding: "0 24px", margin: "0 auto" }}>
      <Grid container spacing={2} p={0}>
        {new Array(count).fill("").map((_, index) => (
          <Grid key={index} item lg={3} sx={{ justifySelf: "center" }}>
            <Skeleton variant="rectangular" width={250} height={300} />
            <Skeleton width="90%" />
            <Skeleton width="60%" />
            <Skeleton width="90%" />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Loading;