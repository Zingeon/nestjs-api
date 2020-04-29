import { Model } from 'objection'
import knex from '../knex.conn'
Model.knex(knex);

export class UsersModel extends Model {
  static get tableName() {
    return 'users';
  }

  static async create(user){
    const inserted = await this.query()
        .insert({
            profileId: user.profileId,
            email: user.email
        });
        return inserted;
  }
}