export const Stop = async(interaction, guildQueue) => {
    try {
        guildQueue.stop();
        return interaction.reply({ content: "Song stopped", ephemeral: true });
      } catch (err) {
        console.log(err);
        return interaction.reply({
          content: "No song is playing",
          ephemeral: true,
        });
      }
}