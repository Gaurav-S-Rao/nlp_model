const axios = require("axios");
const express = require("express");
const cors = require("cors");
const app = express();

const port = 3000;

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", async (req, res) => {
  const abstract = req.body.text;

  const formData = new FormData();
  formData.append("text", abstract);

  try {

    const response = await axios.post(
      "https://tall-cycles-change.loca.lt",
      formData,
      {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
          "Access-Control-Allow-Origin": "*",
          Accept: "*/*",
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "keep-alive",
        },
      }
    );

    console.log(response.data);
    res.send(response.data);
  } catch (error) {
    console.log(error.message);
  } finally {
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
