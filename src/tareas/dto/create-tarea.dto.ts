import { IsOptional, IsString } from "class-validator"

export class CreateTareaDto {
    @IsString()
    title:string;

    @IsString()
    description:string;
    
    @IsString()
    status: string;
   
}
