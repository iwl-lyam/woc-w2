const express = require("express")
const app = express()
const {InteractionResponseType, InteractionType, verifyKeyMiddleware} = require("discord-interactions")
const public = "3564017966f9fe5bd68ad4465b82853ce8879c891ffb0a559152e146cdce3ba3"

app.post('/interactions', verifyKeyMiddleware('3564017966f9fe5bd68ad4465b82853ce8879c891ffb0a559152e146cdce3ba3'), (req, res) => {
    const message = req.body;
    if (message.type === InteractionType.APPLICATION_COMMAND) {
      res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: 'Hello world',
        },
      });
    }
});

app.post('/', verifyKeyMiddleware('3564017966f9fe5bd68ad4465b82853ce8879c891ffb0a559152e146cdce3ba3'), (req, res) => {
    const message = req.body
    if (message.type === 1) {
        res.send({type:1})
    }
})

app.get('/', (req,res) => res.send("Hello, world!"))

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
})