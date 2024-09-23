import { DataTypes, Model } from "sequelize";
import { sequelizeConnection } from "../clients/db/database";

export class Beer extends Model {
  id: number;
  name: string;
  username: string;
  type: string;
  rating: number;
  ratingCount: number;
  createdAt: string;
  updatedAt: string;
}

Beer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.DECIMAL(3, 2),
      allowNull: false,
    },
    ratingCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // createdAt: {
    //   type: DataTypes.DATE,
    //   defaultValue: DataTypes.NOW,
    //   allowNull: false,
    // },
    // updatedAt: {
    //   type: DataTypes.DATE,
    //   defaultValue: DataTypes.NOW,
    //   allowNull: true,
    // },
  },
  {
    sequelize: sequelizeConnection,
    // timestamps: true,
    modelName: "Beers",
    tableName: "beers",
  }
);
