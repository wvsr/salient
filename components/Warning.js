import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import * as BS from "react-bootstrap";

const Warning = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: 5,
      }}
    >
      <Box sx={{ pt: 10, pb: 0, display: "flex", justifyContent: "center" }}>
        <Container sx={{ mt: 5, mb: 10, justifyContent: "center" }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <BS.Row>
              <BS.Col lg={{ span: 6, offset: 3 }} md={12} sm={12} xs={12}>
                <Typography align="right">
                  <h5 className="font">
                    <h1 className="fontbold" data-aos="fade-left">
                      Welcome to Salient
                    </h1>
                    <div data-aos="fade-left" data-aos-duration="1000">
                      Our goal is to create an AI Assisted research tool to
                      search SEC documents for a stock
                    </div>
                    <br />
                    <div
                      data-aos="fade-r"
                      data-aos-duration="1000"
                      className="fontbold"
                    >
                      While we build the search model, we would love for you to use the
                      search tool and give feedback.
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1000">
                      Use the search bar to look up chronologically ordered SEC
                      documents
                    </div>
                  </h5>
                </Typography>
              </BS.Col>
            </BS.Row>
            <br />
            <br />
            <br />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Warning;
