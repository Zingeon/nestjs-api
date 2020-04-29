import { Controller, Post, Body, Param } from '@nestjs/common';
import { CreateFullUserDto, CreateUserCommentDto, PostUserCommentDto } from './user.dto';
import { addUserValidation, addUserCommentValidation } from './users-validation'
import { UsersService } from './users.service'
import { ParseIntPipe } from '@nestjs/common'
import STATUS_CODES from '../status-codes'
/**
 * Controller for users endpoint 
 */
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    /**
     * Add new user enpoint
     * @param body CreateFullUserDto
     */
    @Post()
    async create(@Body() body: CreateFullUserDto){
        const { error, value } = addUserValidation.validate(body);
        if(error) {
            return {
                statusCode: STATUS_CODES.BAD_REQUEST,
                message: error.details[0].message,
                error: "Bad Request"
            }
        }
        const newUser = await this.usersService.create(value)
        return {
            statusCode: STATUS_CODES.CREATED,
            id: newUser.id,
            createdAt: newUser.createdAt
        }
    }

    /**
     * Add new comment for user
     * @param id number
     * @param body PostUserCommentDto
     */
    @Post(':id/comments')
    async createComment(@Param('id', ParseIntPipe) id: number, @Body() body: PostUserCommentDto){
    
        const user = await this.usersService.getUserById(id);
        
        const { error, value } = addUserCommentValidation.validate(body);

        const errorMessage = !user ? 'User Not Found' 
        : (error ? error.details[0].message : false);
        
        if(errorMessage) {
            return {
                statusCode: STATUS_CODES.BAD_REQUEST,
                message: errorMessage,
                error: "Bad Request"
            }
        }
        const createCommentData: CreateUserCommentDto = {
            profileId: user.profileId,
            comment: value.comment
        }

        const newUserComment = await this.usersService.createComment(createCommentData)
        return {
            statusCode: STATUS_CODES.CREATED,
            id: newUserComment.id,
            createdAt: newUserComment.createdAt
        }
    }
}
