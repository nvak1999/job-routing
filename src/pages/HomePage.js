import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import jobData from "../jobData.json";
import JobCard from "../components/JobCard";
import Pagination from "@mui/material/Pagination";
function HomePage() {
  return (
    <div>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Grid container spacing={2} sx={{ mt: 1 }}>
          {jobData.slice(0, 5).map((job) => (
            <Grid item xs={12} md={4} sx={{ minWidth: 300 }}>
              <JobCard job={job} />
            </Grid>
          ))}
        </Grid>
        <Pagination
          sx={{ alignSelf: "center", m: 2 }}
          count={5}
          variant="outlined"
          shape="rounded"
        />
      </Container>
    </div>
  );
}

export default HomePage;
