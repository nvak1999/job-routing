import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function JobCard({ job, handleOpenJob, username, handleOpen }) {
  return (
    <Card
      sx={{
        maxWidth: 365,
        minWidth: 300,
        minHeight: 365,
        height: 300,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        alignSelf: "center",
        m: 1,
      }}
    >
      <CardContent sx={{}}>
        <Typography variant="h5" component="div">
          {job.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {job.skills.slice(0, 4).map((skill) => (
            <Button variant="outlined" sx={{ margin: 0.75, ml: 0 }}>
              {skill}
            </Button>
          ))}
        </Typography>
        <Typography variant="body2">{job.description}</Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
          alignSelf: "center",
          mb: 1.5,
        }}
      >
        <Link
          style={{ textDecoration: "none" }}
          to={!username ? "/login" : `/job/${job.id}`}
        >
          <Button
            variant="outlined"
            onClick={!username ? handleOpen : handleOpenJob(job.id)}
          >
            Learn more
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
