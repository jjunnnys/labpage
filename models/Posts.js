const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(100),
    },
    description: {
      type: DataTypes.TEXT,
    },
    tag: {
      type: DataTypes.STRING,
    },
  });

  Posts.prototype.dateFormat = (date) => {
    return moment(date).format('YYYY년 MM월 DD일');
  };

  return Posts;
};
