import { User } from 'src/users/entities/user.entity';
import {Column, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
@Entity()
export class Tarea {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status:string;

    @DeleteDateColumn()
    deletedAt: Date;

//ESTO DE ABAJO ES LO QUE NO FUNCIONA EL JOINCOLUMN ROMPE TODO!
//   @ManyToOne(() => User)
// //   @JoinColumn({ name: 'userEmail', referencedColumnName: 'email',  })
//    user: User;

   @Column()
   userEmail: string;
   
}
