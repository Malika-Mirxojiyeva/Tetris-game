function start_html_server() {
    const http = require('http');
    const fs = require('fs');

    const hostname = '0.0.0.0';
    const port = 8080;

    const server = http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        html = fs.readFileSync('./index.html', 'utf8');
        response.write(html);
        response.end();
    }).listen(port, hostname, () => {


        console.log("Server running at http://web-y77f3705e-1bc6.docode.fi.qwasar.io/");

        console.log("Replace y77f3705e-1bc6 by your current workspace ID");
        console.log("(look at the URL of this page and https://y77f3705e-1bc6.docode.fi.qwasar.io/, y77f3705e-1bc6 is your workspace ID and docodev2 is your zone)");
    });
}

start_html_server();

//  https://y77f3705e-1bc6.docode.fi.qwasar.io/#/home/docode/project bu meni do code web linkim 

// console.log("Server running at http://web-a7fac319d-c32b.docodev2.qwasar.io"); Bu esa ko'chirtirgan odamni do code linki 