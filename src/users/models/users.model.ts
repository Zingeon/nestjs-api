import { Model } from 'objection'
import knex from '../../knex.conn'
import { UserDto, CreateUserDto } from '../user.dto';
import { UsersCommentsModel } from '../models/users-comments.model'
Model.knex(knex);

export class UsersModel extends Model {
  id: number;
  profileId: number;
  email: string;
  active: boolean;
  ban: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;

  static get tableName() {
    return 'users';
  }

  static relationMappings = {
    comments: {
      relation: Model.HasManyRelation,
      modelClass: UsersCommentsModel,
      join: {
        from: 'users.id',
        to: 'users_comments.parentId'
      }
    },
  };

  /**
   * Add a new row
   * @param user CreateUserDto
   * @returns Promise<UserDto>
   */
  static async create(user: CreateUserDto):  Promise<UserDto>{
    return await this.query()
        .insert(user)
        .returning(['id', 'createdAt']);
  }

  /**
   * Get user by id
   * @param id number
   * @returns Promise<UserDto>
   */
  static async getById(id: number): Promise<UserDto>{
      return await this.query()
      .findById(id)
  }
}