export const Skip = (interaction, guildQueue) => {
    try {
        guildQueue.skip();
        return interaction.reply({ content: "Song Skipped", ephemeral: true });
      } catch (err) {
        console.log(err);
        return interaction.reply({
          content: "No song is playing",
          ephemeral: true,
        });
      }
}