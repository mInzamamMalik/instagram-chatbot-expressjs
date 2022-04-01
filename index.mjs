import express from "express";
const app = express();

const PORT = process.env.PORT || 3000;

app.post("/instawebhook", (req, res) => {
    res.send("I am insta webhook");
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