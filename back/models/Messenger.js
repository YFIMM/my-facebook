const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class Messenger extends Model {
  static init(sequelize) {
    return super.init(
      {
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      {
        modelName: "Messenger",
        tableName: "messengers",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
        sequelize,
      }
    );
  }
  static associate(db) {
    db.Messenger.belongsTo(db.User, { as: "Sender" });
    db.Messenger.belongsTo(db.User, { as: "Receiver" });
  }
};
