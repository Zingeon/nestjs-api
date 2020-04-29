import { Injectable } from '@nestjs/common';
import { CreateFullUserDto, CreateUserCommentDto, UserDto, UserCommentDto } from './user.dto';
import { ProfilesModel } from './models/profiles.model'
import { UsersModel } from './models/users.model'
import { UsersCommentsModel } from './models/users-comments.model'

@Injectable()
export class UsersService {
    async create(user: CreateFullUserDto):  Promise<UserDto>{
        return ProfilesModel.createFullProfile({
            email: user.email,
            nickname: user.nickname,
            firstName: user.firstName,
            lastName: user.lastName
        });
    }

    async getUserById(id: number): Promise<UserDto>{
        return await UsersModel.getById(id)
    }

    async createComment(user: CreateUserCommentDto): Promise<UserCommentDto>{
        return UsersCommentsModel.create({
            profileId: user.profileId,
            comment: user.comment
        });
    }
}
