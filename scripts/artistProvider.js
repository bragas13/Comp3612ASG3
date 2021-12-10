/*
Name: Khris Bragas
E-mail: kbrag274@mtroyal.ca
Class: COMP 3612
Professor: Randy Conooly
*/

const path = require('path');
const fs = require('fs');

const jsonPath = path.join(__dirname, '../data','artists.json');
const jsonData = fs.readFileSync(jsonPath, 'utf8');

const artistData = JSON.parse(jsonData);

module.exports = artistData;