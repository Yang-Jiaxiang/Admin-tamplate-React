import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import axios from "axios";

const apiURL = `http://localhost:3090/periodical`;

function CreatePost() {
  const [newpostsperiodNumber, setNewpostsperiodNumber] = useState([]); //取的最新期別
  //存取最新期別+2-2
  const nowpostsperiodNumber = [
    newpostsperiodNumber - 2,
    newpostsperiodNumber - 1,
    Number(newpostsperiodNumber),
    Number(newpostsperiodNumber) + 1,
    Number(newpostsperiodNumber) + 2,
  ];

  const [totalcategory, setTotalCategory] = useState([]);
  const [postime, setPostime] = React.useState(null);
  const [quillcontent, setQuillcontent] = useState("");

  useEffect(() => {
    axios
      .all([
        axios.get(`${apiURL}/api/post`),
        axios.get(`${apiURL}/api/category`),
      ])
      .then(
        //關聯post.categoryID
        axios.spread((data1, data2) => {
          const postResult = data1.data.results[0].periodNumber;
          const categoryResult = data2.data.results;
          categoryResult.forEach((item) => {
            totalcategory.push(item.name);
          });
          setNewpostsperiodNumber(postResult);
        })
      )
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="headerTitle">新增期刊</div>
      <div className="pagecontent">
        <div style={{ paddingTop: "10px" }}>
          <h3>輸入標題</h3>
          <TextField
            sx={{ top: 10 }}
            required
            id="subject"
            label="標題"
            defaultValue=""
            fullWidth={true}
          />
        </div>

        <div style={{ paddingTop: "20px" }}>
          <h3>選取分類</h3>
          <FormControl required variant="standard" sx={{ minWidth: 200 }}>
            <InputLabel id="postsperiodNumber">期别</InputLabel>
            <Select
              labelId="postsperiodNumber"
              id="postsperiodNumber"
              label="postsperiodNumber"
            >
              {nowpostsperiodNumber.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl
            required
            variant="standard"
            sx={{ left: 20, minWidth: 200 }}
          >
            <InputLabel id="postsperiodNumber">分類</InputLabel>
            <Select labelId="category" id="category" label="category">
              {totalcategory.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div style={{ paddingTop: "20px" }}>
          <h3 style={{ paddingBottom: "10px" }}>選擇日期</h3>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Basic example"
              value={postime}
              onChange={(newValue) => {
                setPostime(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>

        <div style={{ paddingTop: "20px" }}>
          <h3 style={{ paddingBottom: "10px" }}>輸入內容</h3>
          <EditorToolbar />
          <ReactQuill
            theme="snow"
            value={quillcontent}
            onChange={setQuillcontent}
            modules={modules}
          />
        </div>
      </div>
    </>
  );
}
export default CreatePost;
