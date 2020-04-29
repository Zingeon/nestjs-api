import { Controller, Post, Body, Request } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { userValidationSchema } from './validate-create-user'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post()
    create(@Body() body: CreateUserDto){
        const { error, value } = userValidationSchema.validate(body);
        if(error) {
            return {
                error: error.details[0].message
            }
        }
        return this.usersService.create(value)
    }
}
