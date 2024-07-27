function download(url) {
    /**
     * Downloads content from the given url and passed the
     * downloaded content to the given callback cb
     */
    console.log("Starting to download data from", url);
    return new Promise((res, rej)=>{
        setTimeout(function down() {
            console.log("Downloading completed");
            const content = "ABCDEF"; // assume dummy download content
            res(content)
        }, 10000);
    })
}


function writeFile(data) {
    /**
     * writes the given data into a new file
     */
    console.log("Started writing a file with", data);
    return new Promise((res, rej)=>{
        setTimeout(function wrtie() {
            console.log("Completed writing the data in a file");
            const filename = "file.txt";
            res(filename);
        }, 5000);
    })
}


function upload(url, file) {
    /**
     * uploads the data from a file to a given url
     */
    console.log("Started uploading", file, "on", url);
    return new Promise((res, rej)=>{
        setTimeout(function up() {
            console.log("upload completed");
            const response = "SUCCESS";
            res(response);
        }, 2000);
    })
}

// console.log(download('url/global.org'))
// console.log(writeFile('data'))
// console.log(upload('url/global.org', 'file'))

async function main(){
    const rs1 = await download('www.xyz.com')
    console.log("We are now going to process the downloaded data");
    // console.log(rs1)
    const rs2 = await writeFile(rs1)
    console.log("We have downloaded and written the file, now will upload");
    // console.log(rs2)
    const rs3 = await upload("www.upload.com", rs2)
    console.log("we have uploaded with", rs3)
}

main()