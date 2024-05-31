import { ClassRoom } from "src/class/entities/class.entity";
import { PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

export class Teacher {
    
    @PrimaryGeneratedColumn('uuid', { name: 't_id'})
    id: string;

    @Column({ name: 't_name'})
    name: string;

    @ManyToOne(() => ClassRoom)
    classRoom: string;

    @Column({ name: 'c_id'})
    classId: string;
}
