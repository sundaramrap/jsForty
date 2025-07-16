//6. Write a function readFile(filePath) that simulates reading a file. If the file does not exist (simulate with a condition), throw a "File not found" error. Handle the error with try...catch. Make sure you have code to handle releasing the IO resources
// Please note, you do not have to implement the actual IO operation here. Just use the console.log to simulate them.

function readFile(filePath) {
  let fileOpen = false;

  try {
    console.log("Trying opening file .....");

    if (filePath !== "data.txt") throw new Error("The file does-not exist.");

    fileOpen = true;

    console.log("Reading file Contents....");

    console.log("File Content : HEllo World !!");
  } catch (error) {
    console.error("Error: ", error.message);
  } finally {
    if (fileOpen) {
      console.log("Closing the File");
    } else {
      console.log("File was never found and Opened");
    }
  }
}

readFile("dffata.txt");
