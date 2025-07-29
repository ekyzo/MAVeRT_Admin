import "./datatable.scss"
import { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";


const Datatable = () => {

    const [paginationModel, setPaginationModel] = useState({
      page: 0,
      pageSize: 10,
    });

    const actionColumn = [
        {field: "action", headerName: "Action", width:200, renderCell:()=>{
            return (
              <div className="cellAction">
                <Link to="/users/test" style={{ textDecoration: "none" }}>
                  <div className="viewButton">View</div>
                </Link>
                <div className="deleteButton">Delete</div>
              </div>
            );
        }}
    ]
  return (
    <div className="datatable">
    <div className="dataTableTitle">
      Add New User
      <Link to="/users/new" className="link">
        Add New
      </Link>
    </div>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        checkboxSelection
        pagination
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[10, 50, 100]}
      />
    </div>
  );
}

export default Datatable
