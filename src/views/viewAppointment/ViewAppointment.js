import React, { useEffect, useState } from "react";
import axios from "axios";
import all from '../../../data-source'

const ViewAppointment = () => {
  const s=axios.get(`http://localhost:3500/allfriends`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  return s;
};

export default ViewAppointment;
