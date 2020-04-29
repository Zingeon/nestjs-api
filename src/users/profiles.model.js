import { Model } from 'objection'
import knex from '../knex.conn'
Model.knex(knex);
import { UsersModel } from './users.model'

export class ProfilesModel extends Model {

  static get tableName() {
    return 'profiles';
  }

  static relationMappings = {
    user: {
      relation: Model.HasOneRelation,
      modelClass: UsersModel,
      join: {
        from: 'profiles.id',
        to: 'users.profileId'
      }
    }
  };

  static async create(profile){
    const insertedProfile = await this.query()
        .insert({
            nickname: profile.nickname,
            firstName: profile.firstName,
            lastName: profile.lastName
        });

        const insertedUser = await UsersModel.create({
          profileId: insertedProfile.id,
          email: profile.email
        });

        return {...insertedProfile, ...insertedUser};
  }

}