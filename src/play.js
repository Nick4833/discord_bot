import ytdl from "ytdl-core";

export const Play = async (interaction, client, guildQueue) => {
  await interaction.deferReply();
  if (!interaction.member.voice.channelId)
    return await interaction.editReply({
      content: "You are not in a voice channel!",
      ephemeral: true,
    });
  if (
    interaction.guild.members.me.voice.channelId &&
    interaction.member.voice.channelId !==
      interaction.guild.members.me.voice.channelId
  )
    return await interaction.reply({
      content: "You are not in my voice channel!",
      ephemeral: true,
    });
  let queue = client.player.createQueue(interaction.guild.id);
  await queue.join(interaction.member.voice.channel);
  const query = await interaction.options.getString("song");
  const info = ytdl.validateURL(query)
    ? await (
        await ytdl.getInfo(query)
      ).videoDetails.title
    : query;
  let song = await queue
    .play(info)
    .catch(async (err) => {
      console.log(err);
      if (!guildQueue) queue.stop();
      await interaction.editReply({
        content: "The song does not exist",
        ephemeral: true,
      });
    })
    .then(async (result) => {
      await interaction.editReply(
        `Song added to the Queue. Song Name | ${result}`
      );
    });
};
