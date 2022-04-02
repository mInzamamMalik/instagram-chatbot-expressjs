import express from "express";
const app = express();

app.use(express.json())

const PORT = process.env.PORT || 3000;
// EAAHmLjuGqE8BAOkeXmIqOZCDy3Mcpv9H0ecFGTJncjGmSvIMCrZCqZBAwM2DymUHZCP842FYAxkowMSAZCzVpaY4rZBZC61u1BIJnlLhqL334THU4tut2Q1V4DtpXS6RPp04f0TQRYnRIwwY6TQgMIIypM2vPEcGROxQJPfNRVEyptBr7G7Hf5CnBMxfOAZAQjztgUZAZCZCU7FngZDZD

// https://f551-111-88-34-161.ngrok.io/instawebhook
app.post("/instawebhook", (req, res) => {

    console.log("req.body: ", req.body);
    console.log("req.url: ", req.url);

    res.send("I am insta webhook");
})
app.get("/instawebhook", (req, res) => {

    console.log("req.body: ", req.body);
    console.log("req.url: ", req.url);

    // Your verify token. Should be a random string.
    let VERIFY_TOKEN = "abc"

    // Parse the query params
    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];

    // Checks if a token and mode is in the query string of the request
    if (mode && token) {

        // Checks the mode and token sent is correct
        if (mode === 'subscribe' && token === VERIFY_TOKEN) {

            // Responds with the challenge token from the request
            console.log('WEBHOOK_VERIFIED');
            res.status(200).send(challenge);

        } else {
            // Responds with '403 Forbidden' if verify tokens do not match
            res.sendStatus(403);
        }
    }
})

// app.post("/instawebhook", async (req, res) => {

//     const projectId = "saylani-class-delete-this"
//     const sessionId = req.body.sessionId || "session123"
//     const query = req.body.text;
//     const languageCode = "en-US"

//     console.log("query: ", query, req.body);

//     // The path to identify the agent that owns the created intent.
//     const sessionPath = sessionClient.projectAgentSessionPath(
//         projectId,
//         sessionId
//     );

//     // The text query request.
//     const request = {
//         session: sessionPath,
//         queryInput: {
//             text: {
//                 text: query,
//                 languageCode: languageCode,
//             },
//         },
//     };
//     try {
//         const responses = await sessionClient.detectIntent(request);
//         // console.log("responses: ", responses);
//         // console.log("resp: ", responses[0].queryResult.fulfillmentText);    
//         res.send({
//             text: responses[0].queryResult.fulfillmentText
//         });

//     } catch (e) {
//         console.log("error while detecting intent: ", e)
//     }
// })


app.post("/profile", (req, res) => {
    res.send("here is your profile");
})
app.get("/about", (req, res) => {
    res.send("some information about me");
})
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});