import { Sequelize, Model, DataTypes } from 'sequelize';
import IAuth from '../../interfaces/db/models/auth.interface';

class AuthModel extends Model implements IAuth {
  id!: string;
  refreshToken!: string;
  googleAccessToken!: string;
  googleRefreshToken!: string;
  deviceName!: string;
  userID!: string;
  createdAt!: string;
  updatedAt!: string;

  public static initialize(sequelize: Sequelize) {
    this.init({
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      deviceName: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      refreshToken: {
        type: DataTypes.STRING(1024),
        allowNull: false,
      },
      googleAccessToken: {
        type: DataTypes.STRING(1024),
      },
      googleRefreshToken: {
        type: DataTypes.STRING(1024),
      },
    }, {
      tableName: 'AuthData',
      sequelize,
    });
  }
}

export default AuthModel;
