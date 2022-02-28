import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const apiURL = `http://localhost:3090/periodical`;

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .all([
        axios.get(`${apiURL}/api/post`),
        axios.get(`${apiURL}/api/category`),
      ])
      .then(
        axios.spread((data1, data2) => {
          const postResult = data1.data.results;
          const categoryResult = data2.data.result;
          postResult.forEach((item) => {
            item.categoryID = categoryResult.find(
              (category) => item.categoryID === category.id
            ).name;
          });
          setPosts(postResult);
          setCategory(categoryResult);
        })
      )
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const columns = [
    { field: "periodNumber", headerName: "期別", width: 90 },
    {
      field: "subject",
      headerName: "標題",
      width: 400,
    },
    {
      field: "categoryID",
      headerName: "類別",
      width: 150,
    },
    {
      field: "updateTime",
      headerName: "更新日期",
      type: "datatime",
      width: 200,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  return (
    <>
      期刊管理
      <div style={{ height: 600, width: 1200 }}>
        <DataGrid
          rows={posts}
          columns={columns}
          pageSize={9}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </>
  );
};

export default PostList;
