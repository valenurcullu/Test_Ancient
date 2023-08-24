import { IsString, MinLength,IsOptional } from "class-validator"

export class UpdateTareaDto {
    @IsString()
    @MinLength(3) 
    @IsOptional()
    title:string;

    @IsString()
    @IsOptional()
    description:string;
    
    @IsString()
    @IsOptional()
    status: string;
}

