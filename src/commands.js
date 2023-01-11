import { ApplicationCommandOptionType } from "discord.js";

export const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
  {
    name: "play",
    description: "Plays a song!",
    options: [
      {
        name: "song",
        type: ApplicationCommandOptionType.String,
        description: "The song you want to play",
        required: true,
      },
    ],
  },
  {
    name: "stop",
    description: "Stop this song!",
  },
  {
    name: "skip",
    description: "Skip this song!",
  },
  {
    name: "shit",
    description: "OHH LOUIS I'M COMING 🥵🥵🥵🥵",
  },
];

export default commands;
