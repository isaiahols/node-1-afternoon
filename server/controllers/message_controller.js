let messages = [];
let messageId = 0;

module.exports = {
    create: (req, res) => {
        let { text, time } = req.body;
        messages.push({
            id: messageId,
            text,
            time
        });
        messageId++;
        res.status(200).send(messages);
    },

    read: (req, res) => {
        res.status(200).send(messages)
    },

    update: (req, res) => {
        let { id } = req.params;
        let { text, time } = req.body;
        let index = messages.findIndex((message) => message.id == id);

        messages[index] = {
            id,
            text: text || messages[index].text,
            time: time || messages[index].time
        }
        res.status(200).send(messages);
    },

    delete: (req, res) => {
        let { id } = req.params;
        let index = messages.findIndex((message) => message.id == id);

        messages.splice(index, 1);
        res.status(200).send(messages)
    }
}