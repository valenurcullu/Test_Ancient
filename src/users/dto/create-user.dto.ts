// import { IsOptional, IsString } from "class-validator";

// export class CreateUserDto {
    
//     @IsString()
//     name:string;

//     @IsString()
//     email:string;
    
//     @IsString()
//     password: string;
    
//     @IsOptional()
//     role:string
// }
export class CreateUserDto {
    email: string;
    password: string;
    name?: string;
  }
