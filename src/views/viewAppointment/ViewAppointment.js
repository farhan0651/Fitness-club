import React, { useEffect, useState } from "react";
import axios from "axios";
import ViewAppointmentView from "./ViewAppointmentView";

const ViewAppointment = ({children}) => {
  const [app, setApp] = useState();
  useEffect(()=>{
    axios.get("http://localhost:8081/allfriends")
    .then(resp=>setApp(resp.data))
    .catch(err=>console.log(err));
  }, [])
  //const fields = app && Object.keys(app[0]);
  //fields={Object.keys(app[0])}
  return (<>
  { app &&
  <ViewAppointmentView data={app} fields={Object.keys(app[0])}/>
  }
  </>);
};

export default ViewAppointment;