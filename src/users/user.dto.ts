export interface CreateFullUserDto {
    email: string
    nickname: string
    firstName: string
    lastName: string
}

export interface CreateUserDto {
  email: string
  profileId: number
}

export interface CreateProfileDto {
  nickname: string
  firstName: string
  lastName: string
}


export interface CreateUserCommentDto {
  profileId: number;
  comment: string
}

export interface PostUserCommentDto {
  comment: string
}

export interface ProfileDto {
  id: number
  nickname: string
  firstName: string
  lastName: string
}

export interface UserDto{
  id: number
  profileId: number
  email: string
  active: boolean
  ban: boolean
  createdAt: string
  updatedAt: string
  deletedAt: string
}
export interface UserCommentDto{
  id: number;
  usersId: number;
  profileId: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}