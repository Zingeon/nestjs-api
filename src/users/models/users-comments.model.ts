import { Model } from 'objection'
import knex from '../../knex.conn'
import { UserCommentDto, CreateUserCommentDto } from '../user.dto';
Model.knex(knex);

export class UsersCommentsModel extends Model {
  id: number;
  usersId: number;
  profileId: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;

  static get tableName() {
    return 'users_comments';
  }

  /**
   * Add a new row 
   * @param user CreateUserCommentDto
   * @returns Promise<UserCommentDto>
   */
  static async create(user: CreateUserCommentDto): Promise<UserCommentDto>{
    return await this.query()
        .insert({
            profileId: user.profileId,
            comment: user.comment
        })
        .returning(['createdAt', 'id']);
  }
}