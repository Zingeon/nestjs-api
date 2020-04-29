import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { ProfilesModel } from './profiles.model'

@Injectable()
export class UsersService {
    async create(user: CreateUserDto){

       const inserted = ProfilesModel.create({
        nickname: user.nickname,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
    });

        return inserted
    }
}
