import { Role } from "src/common/enums/rol.enum";
import { Tarea } from "src/tareas/entities/tarea.entity";
import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number ;

    @Column()
    name:string;

    @Column({unique:true,nullable:false})
    email:string;

    @Column({nullable:false,select:false})
    password:string;

    @Column({type:'enum',default:Role.USER,enum:Role})
    role:Role;

    @DeleteDateColumn()
    deletedAt: Date;
  
}
