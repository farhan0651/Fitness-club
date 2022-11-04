import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewAppointment = () => {
  const s=axios.get(`http://localhost:8081/allfriends`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  return s;
};

export default ViewAppointment;
