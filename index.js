import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();

import { REST } from "@discordjs/rest";
import { Routes } from "discord.js";
import { Client, GatewayIntentBits } from "discord.js";
import { getImage } from 'random-reddit'

const BOT_TOKEN = process.env.BOT_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;

import { Player } from "discord-music-player";

const rest = new REST({ version: "10" }).setToken(BOT_TOKEN);

import commands from "./src/commands.js";
import { Play as play_music } from "./src/play.js";
import { Stop as stop_music } from "./src/stop.js";
import { Skip as skip_music } from "./src/skip.js";


(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: ["CHANNEL"],
});
const settings = {
  prefix: "!",
  token: BOT_TOKEN,
};

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const player = new Player(client, {
  leaveOnEmpty: true, // This options are optional.
});
// You can define the Player as *client.player* to easily access it.
client.player = player;

client.on("ready", () => {
  console.log("I am ready to Play.");
});

client.login(settings.token);

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  let guildQueue = client.player.getQueue(interaction.guild.id);

  if (interaction.commandName === "ping") {
    await interaction.reply('Pong');
  }

  if (interaction.commandName === "shit") {
    const image = await getImage('okbuddyretard')
    return await interaction.reply(image);
  }

  if (interaction.commandName === "play") {
    play_music(interaction, client, guildQueue);
  }

  if (interaction.commandName === "stop") {
    stop_music(interaction, guildQueue);
  }

  if (interaction.commandName === "skip") {
    skip_music(interaction, guildQueue)
  }
});

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000,'0.0.0.0', () => {
  console.log(`Example app listening on port 3000`);
});
