import React, { useState, useEffect } from "react";
import "devextreme/dist/css/dx.light.css";
import { DataGrid, Column, HeaderFilter } from "devextreme-react/data-grid";
import moment from "moment";

const UserTable = ({ data }) => {
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    const updatedData = data.map((d) => {
      d.eventDate = moment(d.eventDate, "YYYY-MM-DD").format("MMM. D, YYYY");
      return d;
    });
    setDataSource(updatedData);
  }, [data]);
  return (
    <DataGrid dataSource={dataSource}>
      <HeaderFilter visible={true} />
      <Column
        caption="First Name"
        dataField="firstName"
        allowHeaderFiltering={false}
      />
      <Column
        caption="Last Name"
        dataField="lastName"
        allowHeaderFiltering={false}
      />
      <Column
        caption="Carrier"
        dataField="carrier"
        allowHeaderFiltering={false}
      />
      <Column caption="Status" dataField="status" />
      <Column
        caption="Date"
        dataField="eventDate"
        allowHeaderFiltering={false}
      />
    </DataGrid>
  );
};

export default UserTable;
