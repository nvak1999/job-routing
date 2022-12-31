import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import jobData from "../jobData.json";
import JobCard from "../components/JobCard";
import Pagination from "@mui/material/Pagination";

function HomePage() {
  return (
    <Container>
      <Container
        maxWidth="sl"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Grid container sx={{ m: 1 }}>
          {jobData.slice(0, 5).map((job) => (
            <JobCard job={job} />
          ))}
        </Grid>
        <Pagination
          sx={{ alignSelf: "center", m: 2 }}
          count={5}
          shape="rounded"
        />
      </Container>
    </Container>
  );
}

export default HomePage;
