/*
Name: Khris Bragas
E-mail: kbrag274@mtroyal.ca
Class: COMP 3612
Professor: Randy Conooly
*/



const artistData = require('./artistProvider.js');
const galleriesData = require('./galleriesProvider.js');
const paintingsData = require('./paintingsProvider.js');

const handleAllArtists =  app => {
    app.get('/api/artists', (req,resp)=> {resp.json(artistData)});

};

const hadleArtistCountry = app =>{

    app.get('/api/artists/:country', (req,resp)=> {
        const matches = artistData.filter(u =>u.Nationality == req.params.country);
        if(matches.length>0)
        resp.json(matches);
        else
        resp.json({"message": "No artists found with country provided"});

    });
};

const handleAllGalleries = app =>{
    app.get('/api/galleries', (req,resp)=>{resp.json(galleriesData)});
};

const handleGalleryCountry = app =>{
    app.get('/api/galleries/:country', (req,resp)=>{
        const matches = galleriesData.filter(u => u.GalleryCountry.toLowerCase() == req.params.country.toLowerCase());
        if(matches.length > 0)
            resp.json(matches);
        else
            resp.json({"message": "No galleries associated with that provided country"})
    });
};


const handleAllPaintings = app => {

    app.get('/api/paintings', (req,resp)=>{resp.json(paintingsData)});

};

const handlePaintingById = app => {

    app.get('/api/painting/:id', (req,resp)=> {

        const matches = paintingsData.filter(u => u.paintingID == req.params.id);
        if(matches.length > 0)
            resp.json(matches);
        else    
            resp.json({"message": "No paintings with provided ID"});


    });

};

const handlePaintingByGalleryId = app => {

    app.get('/api/painting/gallery/:id', (req,resp)=> {

        const matches = paintingsData.filter(u => u.gallery.galleryID == req.params.id);
        if(matches.length > 0)
            resp.json(matches);
        else    
            resp.json({"message": "No paintings with provided gallery ID"});


    });

};

const handlePaintingByArtistId = app => {

    app.get('/api/painting/artist/:id', (req,resp)=> {

        const matches = paintingsData.filter(u => u.artist.artistID == req.params.id);
        if(matches.length > 0)
            resp.json(matches);
        else    
            resp.json({"message": "No paintings with provided artist ID"});


    });

};

const handlePaintingByYearRange = app => {

    app.get('/api/painting/year/:min/:max', (req,resp)=> {

        const matches = paintingsData.filter(u => u.yearOfWork >= req.params.min && u.yearOfWork <= req.params.max);
        if(matches.length > 0)
        resp.json(matches);
        else    
        resp.json({"message": "No paintings within those years"});



    })

};

const handlePaintingsByText = app => {

    app.get('/api/painting/title/:text', (req,resp)=> {

        const matches = paintingsData.filter(u => u.title.includes(req.params.text));
        if(matches.length > 0)
        resp.json(matches);
        else    
        resp.json({"message": "No matches"});
    })

};




module.exports = {handleAllArtists, hadleArtistCountry, handleAllGalleries, handleGalleryCountry, handleAllPaintings,
 handlePaintingById, handlePaintingByGalleryId, handlePaintingByArtistId, handlePaintingByYearRange, handlePaintingsByText};
