import { IsString, MinLength,IsOptional } from "class-validator"

export class UpdateUserDto {
    @IsString()
    @IsOptional()
    name:string;

    @IsString()
    @IsOptional()
    email:string;
    
    @IsString()
    @IsOptional()
    password: string;
    
    @IsOptional()
    @IsString()
    role:string
}
