import fs from "fs";
import path from "path";

const assetDirectory = path.join(process.cwd(), "src", "asset");

const readWriteFile = (req, res) => {
  try {
    const dateTime = new Date().toISOString();
    const fileName = `${dateTime.replace(/:/g, "-").replace(/\./g, "-")}.txt`; // Replace special characters in the filename
    const filePath = path.join(assetDirectory, fileName);

    if (!fs.existsSync(assetDirectory)) {
      fs.mkdirSync(assetDirectory, { recursive: true });
    }

    fs.writeFileSync(filePath, dateTime, "utf-8");

    res.status(200).send({
      status: 200,
      message: "Success",
      fileName: fileName,
      dateTime: dateTime,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({
      error,
    });
  }
};

export default {
  readWriteFile,
};
