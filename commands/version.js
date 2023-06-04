const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('version')
		.setDescription('Replies to let you know the bot is functioning!'),
	async execute(interaction) {
    let fs = require('fs');
    let obj = JSON.parse(fs.readFileSync('../package.json', 'utf8'));
		let version = obj.version || "0.0.1"

    let response = `I am currently running version ${version}`;
		await interaction.reply(response);
	},
};