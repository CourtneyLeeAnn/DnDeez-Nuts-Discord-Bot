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
		let numberOfDie = numbers[0];
		let numberOfSides = numbers[1];

		if(numberOfDie === "") {
			let random = rollDie(numberOfSides);

			let response = `You rolled ${dice} and got ${random}`;
			await interaction.reply(response);
		} else {
			let rolls = [];
			for(let i=0; i<parseInt(numberOfDie); i++) {
				rolls.push(rollDie(numberOfSides));
			}

			let random = rolls.join(",");
			let response = `You rolled ${dice} and got ${random}`;
			await interaction.reply(response);
		}
	},
};

function rollDie(max) {
	return Math.floor(Math.random() * max);
}