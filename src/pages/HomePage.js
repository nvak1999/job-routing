import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import jobData from "../jobData.json";
import JobCard from "../components/JobCard";
import Pagination from "@mui/material/Pagination";
function HomePage() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Container
        sx={{
          m: 1,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Grid container spacing={2} sx={{ mt: 1 }}>
          {jobData.slice(0, 5).map((job) => (
            <Grid item xs={4} md={4} sx={{ minWidth: 300 }}>
              <JobCard job={job} />
            </Grid>
          ))}
        </Grid>
        <Pagination
          sx={{ alignSelf: "center", m: 2 }}
          count={5}
          shape="rounded"
        />
      </Container>
    </div>
  );
}

export default HomePage;
