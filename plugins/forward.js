const { cmd, commands } = require('../command');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson } = require('../lib/functions');

const forwardCommand = {
    pattern: "forward",
    desc: "Forward messages",
    alias: ['fo'],
    category: "owner",
    use: ".forward <Jid address>",
    filename: __filename
};

cmd(forwardCommand, async (
    conn, // Represents the connection
    mek, // Message object
    store, // Store for additional information
    {
        from, // Origin of the message
        quoted, // Quoted message object
        q, // Query parameter (target JID)
        isOwner, // If the sender is the bot owner
        reply // Function to reply to the sender
    }
) => {
    // Ensure the command is executed by the owner
    if (!isOwner) {
        return reply("Owner Only ❌");
    }

    // Validate the input
    if (!q) {
        return reply("Please provide a target JID address ❌");
    }

    if (!quoted) {
        return reply("Please reply to a message you want to forward ❌");
    }

    // Extract the quoted message object
    const forwardMessage = quoted.fakeObj ? quoted.fakeObj : quoted;

    try {
        // Forward the message to the target JID
        await conn.sendMessage(q, { forward: forwardMessage }, { quoted: mek });

        // Send a confirmation to the owner
        return reply(`*Message forwarded successfully to:*\n\n${q}`);
    } catch (error) {
        // Handle errors
        console.error("Error forwarding message:", error);
        return reply("Failed to forward the message ❌");
    }
});