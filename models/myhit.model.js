export default function (sequelize, DataTypes) {
  return sequelize.define('myhit', {

  }, {
    classMethods: {
      associate(models) {
      }
    }
  })
}