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
    Button,
    Stack,
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import SendIcon from "@mui/icons-material/Send";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import axios from "axios";
const config = require("../config/default.json");

const apiURL = config.apiURL;

const SendOnClick = (
    periodNumber,
    noYear,
    noMonth,
    categoryID,
    subject,
    writer,
    content
) => {
    axios.defaults.withCredentials = true;
    axios
        .post(`${apiURL}/api/post`, {
            periodNumber: periodNumber,
            noYear: noYear,
            noMonth: noMonth,
            categoryID: categoryID,
            writer: writer,
            content: content,
            subject: subject,
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error.request));
};

function CreatePost() {
    var date = new Date();

    const [newpostsperiodNumber, setNewpostsperiodNumber] = useState(); //取的最新期別
    //存取最新期別+2-2
    const nowpostsperiodNumber = [
        newpostsperiodNumber - 2,
        newpostsperiodNumber - 1,
        Number(newpostsperiodNumber),
        Number(newpostsperiodNumber) + 1,
        Number(newpostsperiodNumber) + 2,
    ];
    const [totalcategory, setTotalCategory] = useState([{ name: "", id: "" }]);
    const [postime, setPostime] = React.useState(
        `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    ); //預設時間

    //存取表單輸入值
    const [subject, setSubject] = useState("");
    const [writer, setWriter] = useState("");
    const [periodNumber, setPeriodNumber] = useState("");
    const [categoryID, setCategoryID] = useState("");
    const [noYear, setNoYear] = useState("");
    const [noMonth, setNoMonth] = useState("");
    const [content, setContent] = useState("");

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
                        totalcategory.push(item);
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
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>

                <div style={{ paddingTop: "20px" }}>
                    <h3>輸入發文單位</h3>
                    <TextField
                        sx={{ top: 10 }}
                        required
                        id="writer"
                        label="單位"
                        defaultValue=""
                        value={writer}
                        onChange={(e) => setWriter(e.target.value)}
                    />
                </div>

                <div style={{ paddingTop: "20px" }}>
                    <h3>選取分類</h3>
                    <FormControl
                        required
                        variant="standard"
                        sx={{ minWidth: 200 }}
                    >
                        <InputLabel id="postsperiodNumber">期别</InputLabel>
                        <Select
                            labelId="postsperiodNumber"
                            id="postsperiodNumber"
                            label="postsperiodNumber"
                            onChange={(e) => setPeriodNumber(e.target.value)}
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
                        <Select
                            labelId="category"
                            id="category"
                            label="category"
                            onChange={(e) => setCategoryID(e.target.value)}
                        >
                            {totalcategory.map((name) => (
                                <MenuItem key={name.id} value={name.id}>
                                    {name.name}
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
                                setNoYear(newValue.getFullYear());
                                setNoMonth(newValue.getMonth() + 1);
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
                        value={content}
                        onChange={setContent}
                        modules={modules}
                    />
                </div>

                <Stack
                    direction="row"
                    spacing={2}
                    style={{ paddingTop: "20px" }}
                >
                    <Button variant="outlined" endIcon={<RemoveRedEyeIcon />}>
                        檢視
                    </Button>
                    <Button
                        variant="contained"
                        endIcon={<SendIcon />}
                        onClick={() => {
                            SendOnClick(
                                periodNumber,
                                noYear,
                                noMonth,
                                categoryID,
                                subject,
                                writer,
                                content
                            );
                        }}
                    >
                        Send
                    </Button>
                </Stack>
            </div>
        </>
    );
}
export default CreatePost;
