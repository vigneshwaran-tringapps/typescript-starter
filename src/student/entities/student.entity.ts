import { ClassRoom } from "src/class/entities/class.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'student'})
export class Student {

    @PrimaryGeneratedColumn('uuid', { name: 's_id'})
    id: string;

    @Column({ name: 's_name'})
    name: string;

    @Column({ name: 's_parent_name'})
    parentName: string;

    @ManyToOne(() => ClassRoom)
    classRoom: ClassRoom;

    @Column({ name: 'c_id'})
    classId: string;
}
