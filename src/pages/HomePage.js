import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import jobData from "../jobData.json";
import JobCard from "../components/JobCard";
import Pagination from "@mui/material/Pagination";
function HomePage() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid container wrap="wrap">
        {jobData.slice(0, 5).map((job) => (
          <Grid container justifyContent="center" lg={4} md={6} xs={12}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        sx={{ alignSelf: "center", m: 2 }}
        count={4}
        shape="rounded"
      />
    </Container>
  );
}

export default HomePage;
