// Import the Express module
const express = require('express');
const cors = require('cors');
const shortid = require('shortid');
const { PrismaClient } = require('@prisma/client')
const prismaDB = new PrismaClient()
const bodyParser = require('body-parser');





async function getUrl(id){
  return await prismaDB.url.findFirst({ 
    where: { 
      shortid: "example.dev/s/" + id 
      }
    })
}



async function createUrl(shortUrl,originalUrl) {
  //console.log("shortUrl: ", shortUrl)
  //console.log("originalUrl: ", originalUrl)
  const newUrl = await prismaDB.url.create({
    data: {
      shortid: shortUrl,
      orgUrl: originalUrl,
    },
  })

  return newUrl;
}

// Create an instance of the Express app
const app = express();

// Enable all CORS requests
app.use(cors());
// bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// shorten url code

app.get('/s/:id', async (req, res) => {
  const id = req.params.id;
  // Retrieve the originalUrl associated with the given id from the database or file
  return getUrl(id)
  .then(entry => {

    res.redirect(entry.orgUrl);
  })
  .catch(err => {
    res.redirect("/");
  })
  
});

app.post('/shorten', (req, res) => {
  let originalURL = req.body.url;
  let genId = shortid.generate();
  let shortUrl = "baseem.dev" + "/" + genId;
  createUrl(shortUrl, originalURL)
  .then(result => {
    res.json(shortUrl)
  })
  .catch(err => {
    res.json("fail")
  })
});





// Start the server on port 3000
app.listen(8080, () => {
  console.log('Server started on port 8080');
});
