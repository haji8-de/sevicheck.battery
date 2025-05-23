import { Field, ObjectType } from "@nestjs/graphql";
import {isNotEmpty, IsString } from 'class-validator'
import { User } from "src/user/entities/user.entity";

@ObjectType()
export class SignResponse {
    @Field()
    accessToken: string;
    
    @Field()
    refreshToken: string;
    
    @Field(() => User)
    user: User;
    
}