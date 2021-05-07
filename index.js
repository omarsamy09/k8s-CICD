const express = require('express');
const app = express();
const axios = require('axios');

const PORT = process.env.PORT;

const PostsServiceURL = process.env.PostsServiceURL;
const VotesServiceURL = process.env.VotesServiceURL;

app.get('/health', (req, res) => {
    console.log(PostsServiceURL );
    res.json({
        PORT,
        PostsServiceURL,
        VotesServiceURL
    });
});

app.get('/deep-health', async (req, res) => {
    try {
        
        const {data: res1} = await axios.get(`${PostsServiceURL}/health`);
        const {data: res2} = await axios.get(`${VotesServiceURL}/health`);
        res.send({
            res1,
            res2
        })
    } catch(err) {
        console.log(err);
        res.send({
            err
        })
    }
})

app.listen(PORT, function() {
    console.log(`Listening to requests on ${PORT}`);
});
