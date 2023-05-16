import React from "react";
import EmailForm from "./FirstPage/EmailForm";
import Faq from "./FirstPage/Faq";
import Form from "./FirstPage/Form";
import Contact from "./FirstPage/Contact";
import Search from "./Search";
import Warning from "./Warning";
import { Divider } from "@mui/material";
import { inject } from "@vercel/analytics";
import * as BS from "react-bootstrap";

<Divider sx={{ m: 0, p: 0 }} />;

inject();

export const Main = () => (
  <div>
    <BS.Row>
      <BS.Col lg={6}>
        <Warning />
      </BS.Col>
      <BS.Col lg={6}>
        <Search />
      </BS.Col>
    </BS.Row>
    <EmailForm />
    {/* <div className="gray"> */}
      <Form />
    {/* </div> */}
    <div className="gray">
      <Faq />
    </div>
    <Contact />
  </div>
);
