/*
Name: Khris Bragas
E-mail: kbrag274@mtroyal.ca
Class: COMP 3612
Professor: Randy Conooly
*/


const express = require('express');
const app = express();


const router = require('./scripts/router.js');
router.handleAllArtists(app);
router.hadleArtistCountry(app);
router.handleAllGalleries(app);
router.handleGalleryCountry(app);
router.handleAllPaintings(app);
router.handlePaintingById(app);
router.handlePaintingByGalleryId(app);
router.handlePaintingByArtistId(app);
router.handlePaintingByYearRange(app);
router.handlePaintingsByText(app);

const port = process.env.PORT || 8080;

app.listen(port, ()=> {
    console.log("Server running at port=" + port);
});

