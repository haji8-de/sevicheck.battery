import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "src/user/user.entity";
import {isNotEmpty, IsString } from 'class-validator'

@ObjectType()
export class SignResponse {
    @Field()
    accessToken: string;
    
    @Field()
    refreshToken: string;
    
    @Field(() => User)
    user: User;
    
}