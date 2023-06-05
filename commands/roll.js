const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('replies with a dice roll')
		.addStringOption(option =>
            option.setName('dice')
                .setDescription('The dice you want to roll')
                .setRequired(true)),
	async execute(interaction) {
		let dice = interaction.options.getString('dice');
		let numbers = dice.split("d");
		if numbers = 0
		then numbers
		var random = getRandomInt(numbers[1])

    	let response = `You rolled a ${random}`;
		await interaction.reply(response);
	},
};
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}