import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import jobData from "../jobData.json";
import JobCard from "../components/JobCard";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
function HomePage() {
  return (
    // <Container
    // sx={{
    //   display: "flex",
    //   justifyContent: "space-between",
    //   flexDirection: "column",
    //   alignItems: "center",
    // }}
    // >
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        {jobData.slice(0, 5).map((job) => (
          <Grid item xs={4}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
    </Box>
    // {/* <Pagination
    //   sx={{ alignSelf: "center", m: 2 }}
    //   count={4}
    //   shape="rounded"
    // /> */}
    // </Container>
  );
}

export default HomePage;
