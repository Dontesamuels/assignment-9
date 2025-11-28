// in database/setup.js (or where User is defined)
const User = sequelize.define('User', {
  name: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false, unique: true },
  password: { type: Sequelize.STRING, allowNull: false },
  role: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'employee',
    validate: {
      isIn: [['employee', 'manager', 'admin']]
    }
  }
});
