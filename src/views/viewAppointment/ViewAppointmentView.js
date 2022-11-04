import React from "react";

const ViewAppointmentView = ({ data, fields }) => {

  const tableRows = data.map(row=>(
    <tr key={row.id}>
    <td><p>{row.id}</p></td>
    <td><p>{row.firstName + " " + row.lastName}</p></td>
    <td><p>{row.mobile}</p></td>
    <td><p>{row.email}</p></td>
    <td><p>{row.age}</p></td>
    <td><p>{row.streetName +", " + row.city +", "+ row.state +", "+row.country+", "+row.pinCode}</p></td>
    <td><p>{row.trainerPreference}</p></td>
    <td><p>{row.physioRequired}</p></td>
    <td><p>{row.package}</p></td>
    <td><p>{row.totalAmount}</p></td>
    </tr> 
  ));

  return (
    <div>Hello
      <table>
                <tbody>
                    <tr>
                        <td><p>S. No.</p></td>
                        <td><p>Name</p></td>
                        <td><p>Phone</p></td>
                        <td><p>Email</p></td>
                        <td><p>Age</p></td>
                        <td><p>Complete Address</p></td>
                        <td><p>Trainer Preference</p></td>
                        <td><p>Physio Required</p></td>
                        <td><p>Package</p></td>
                        <td><p>Total Amount</p></td>
                    </tr>
                    {tableRows}
                </tbody>
            </table>
    </div>
  );
};

export default ViewAppointmentView;