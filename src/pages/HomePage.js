import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import jobData from "../jobData.json";
import JobCard from "../components/JobCard";
import Pagination from "@mui/material/Pagination";
import { useState, useEffect } from "react";
function HomePage({ handleOpenJob, username, handleOpen }) {
  const [page, setPage] = useState(1);
  useEffect(() => {}, [page]);
  const handleChange = (event, value) => {
    setPage(value);
  };
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
        {jobData
          .slice(
            page === 1 ? 0 : page === 2 ? 5 : 10,
            page === 1 ? 5 : page === 2 ? 10 : 15
          )
          .map((job) => (
            <Grid container justifyContent="center" lg={4} md={6} xs={12}>
              <JobCard
                handleOpen={handleOpen}
                username={username}
                handleOpenJob={handleOpenJob}
                job={job}
              />
            </Grid>
          ))}
      </Grid>
      <Pagination
        sx={{ alignSelf: "center", m: 2 }}
        count={3}
        shape="rounded"
        page={page}
        onChange={handleChange}
      />
    </Container>
  );
}

export default HomePage;
