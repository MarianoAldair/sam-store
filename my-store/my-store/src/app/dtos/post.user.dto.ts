import { User } from '../models/user.model'

export interface UserDto extends Omit<User, 'id'> { }