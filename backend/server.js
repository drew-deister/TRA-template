// const { signup, login, isAuth } = require('../controllers/auth.js');

const axios = require("axios");
// const cors = require("cors")
const express = require("express")
const PORT = 5002;
const BASE_URL = 'http://api.musixmatch.com/ws/1.1/';
const API_KEY = 'b2ac0fd6d9f658afe0bf2c4489e36def';

const app = express()

// Configure acceptable origins here, (we actually may not need this at all for React Native)
// https://www.stackhawk.com/blog/react-cors-guide-what-it-is-and-how-to-enable-it/
// app.use(cors({
//     origin: 'https://www.section.io'
// }));

// Search for Taylor Swift's artist ID
function getTaylorSwiftID() {
    return new Promise((resolve, reject) => {
        axios.get(BASE_URL + `artist.search?apikey=${API_KEY}&q_artist=Taylor%20Swift&page_size=1`).then((response) => {
            var id = response.data.message.body.artist_list[0].artist.artist_id;
            resolve(id);
        });
    });
}

// Search for Taylor Swift's artist ID
function getTaylorSwiftID() {
    return new Promise((resolve, reject) => {
        axios.get(BASE_URL + `artist.search?apikey=${API_KEY}&q_artist=Taylor%20Swift&page_size=1`).then((response) => {
            var id = response.data.message.body.artist_list[0].artist.artist_id;
            resolve(id);
        });
    });
}

// Get the precise Taylor Swift album ID based on album the user selected
function getAlbumID(id, albumName) {
    return new Promise((resolve, reject) => {
        axios.get(BASE_URL + `artist.albums.get?apikey=${API_KEY}&artist_id=${id}`).then((response) => {
            for (var i = 0; i < response.data.message.body.album_list.length; i++) {
                if (response.data.message.body.album_list[i].album.album_name === `${albumName}`) {
                    var album_id = response.data.message.body.album_list[i].album.album_id;
                    resolve(album_id);
                }
            }
        })
    });
}

// Takes the album ID and return random track ID from the selected album
var getTrackTry = 0;
function getTrackID(album_id) {
    return new Promise((resolve, reject) => {
        axios.get(BASE_URL + `album.tracks.get?apikey=${API_KEY}&album_id=${album_id}&f_has_lyrics=true`).then((response) => {
                var album_length = response.data.message.body.track_list.length;
                var random_track = Math.floor(Math.random() * album_length);
                var track_id = response.data.message.body.track_list[random_track].track.track_id;
                resolve(track_id)
            })
    });
}

// Takes the track ID and gets the song name
function getTrackFromID(track_id) {
    return new Promise((resolve, reject) => {
        axios.get(BASE_URL + `track.get?apikey=${API_KEY}&track_id=${track_id}`).then((response) => {
            var trackName = response.data.message.body.track.track_name;
            resolve(trackName);
        });
    });
}

// Gets snippet from previously randomly chosen track
var count = 0;
var lastSnippet;
function getSnippet(track_id, album_id, albumName) {
    return new Promise((resolve, reject) => {
        axios.get(BASE_URL + `track.snippet.get?apikey=${API_KEY}&track_id=${track_id}`).then((response) => {
            if (response.data.message.body.snippet === null || response.data.message.body.snippet === undefined) {
                count++;
                if (count < 5) {
                    getSnippet(track_id);
                }
                else {
                    var id = getTaylorSwiftID();
                    var album_id = getAlbumID(id, albumName)
                    var newTrack = getTrackID(album_id);
                    getSnippet(newTrack);
                    count = 0;
                }
            }
            else if (response.data.message.body.snippet.snippet_body !== lastSnippet) {
                var snippet = response.data.message.body.snippet.snippet_body;
                lastSnippet = snippet
                resolve(snippet);
            }
        });
    });
}


// MARK: Express Routing
app.get('/', (req, res, next) => {
    res.send('This is the root route.');
}); 

app.get('/hello', (req, res, next) => {
    res.send('Hello Express!');
}); 

// 1989
app.get('/lyrics/2', async (req, res) => {
    var albumName = '1989';
    var id = await getTaylorSwiftID();
    var album_id = await getAlbumID(id, albumName);
    var track_id = await getTrackID(album_id);
    var trackName = await getTrackFromID(track_id);
    var snippet = await getSnippet(track_id, album_id, albumName);
    var trackAndLyric = [trackName, snippet];
    var JSONTrackAndLyric = JSON.stringify(trackAndLyric);
    res.send(JSONTrackAndLyric)
});

app.listen(PORT);

// export default router;