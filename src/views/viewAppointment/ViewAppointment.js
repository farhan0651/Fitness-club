import React, { useEffect, useState } from "react";
import axios from "axios";
import TheContent from "src/containers";
import TheHeader from "src/containers";
import TheLayout from "src/containers";
import TheSidebar from "src/containers";
import TheFooter from "src/containers";

const ViewAppointment = () => {
  const s=axios.get(`http://localhost:3035/allfriends`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  return(
      <div>
      <TheContent></TheContent>
      <TheHeader />
      <TheLayout></TheLayout>
      <TheSidebar></TheSidebar>
      <TheFooter></TheFooter>
      </div>
  );
};

export default ViewAppointment;
