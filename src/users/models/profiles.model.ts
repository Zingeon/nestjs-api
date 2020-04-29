import { Model } from 'objection'
import knex from '../../knex.conn'
import { UsersModel } from './users.model'
import { CreateProfileDto, CreateFullUserDto, ProfileDto, UserDto } from '../user.dto';
Model.knex(knex);

/**
 * Model for profiles table
 */
export class ProfilesModel extends Model {
  id: number
  nickname: string
  firstName: string
  lastName: string

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

  /**
   * Add a new row
   * @param profile CreateProfileDto
   * @returns Promise<ProfileDto>
   */
  static async create(profile: CreateProfileDto): Promise<ProfileDto>{
    return await this.query()
        .insert({
            nickname: profile.nickname,
            firstName: profile.firstName,
            lastName: profile.lastName
        })
  }

  /**
   * Create full user entity: new row in profiles table and users table
   * @param profile CreateFullUserDto
   * @returns Promise<UserDto>
   */
  static async createFullProfile(profile: CreateFullUserDto):  Promise<UserDto>{
    const insertedProfile = await this.create({
      nickname: profile.nickname,
      firstName: profile.firstName,
      lastName: profile.lastName
    })

    const insertedUser = await UsersModel.create({
      profileId: insertedProfile.id,
      email: profile.email
    });

    return {...insertedUser};
  }

}