/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const bcrypt = require("bcrypt");
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("users").del();

	// Inserts new entries
	await knex("users").insert([
		{
			id: 1,
			username: "admin",
			email: "admin@gmail.com",
			password: await bcrypt.hash("12345", 10),
		},
	]);
};
