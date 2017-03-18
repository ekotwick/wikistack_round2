const Sequelize = require('sequelize');
const db = new Sequelize('postgress://localhost:5432/expressPrep');

const Page = db.define('page', {
	title: {
		type: sequelize.STRING,
		allowNull: false
	},
	urlTitle: {
		type: sequelize.STRING,
		allowNull: false
	},
	content: {
		type: sequelize.TEXT,
		allowNull: false
	},
	status: {
		type: sequelize.ENUM('open', 'closed'),
		allowNull: false
	}
});

const User = db.define('user', {
	name: {
		type: sequelize.STRING,
		allowNull: false
	},
	email: {
		type: sequelize.STRING,
		allowNull: false

	}
});

module.exports = {
	Page: Page,
	User: User
}