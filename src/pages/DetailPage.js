import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import jobData from "../jobData.json";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
function DetailPage({ handleCloseJob, openJob }) {
  const param = useParams();
  const style = {
    bgcolor: "white",
  };
  const data = jobData.filter((e) => e.id === param.jobId);
  return (
    <Modal
      open={openJob}
      onClose={handleCloseJob}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box sx={{ style, color: "white" }}>
        <Card sx={{ m: 2, maxWidth: 500 }}>
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ textAlign: "center" }} variant="h4">
              {" "}
              {data[0].title}
            </Typography>
            <Typography sx={{ textAlign: "center" }} variant="h6">
              {" "}
              {data[0].description}
            </Typography>
            <Box sx={{ display: "flex" }}>
              {data[0].skills.map((e) => (
                <Button
                  sx={{ height: 50, m: 1 }}
                  variant="outlined"
                  color="error"
                >
                  {e}
                </Button>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Modal>
  );
}

export default DetailPage;
