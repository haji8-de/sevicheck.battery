import { Field, ObjectType } from "@nestjs/graphql";
import {IsNotEmpty, IsString } from 'class-validator'

@ObjectType()
export class SignUpInput {
    @IsNotEmpty()
    @IsString()
    @Field()
    username: string;
    
    @IsNotEmpty()
    @IsString()
    @Field()
    email: string;
    
    @IsNotEmpty()
    @IsString()
    @Field()
    password: string;
    
}