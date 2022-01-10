module.exports = (sequelize, DataTypes) => {
    const ServiceModel = sequelize.define(
        'ServiceModel',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING(64),
            },
        },
        {
            tableName: 'Services',
        }
    )

    return ServiceModel
}