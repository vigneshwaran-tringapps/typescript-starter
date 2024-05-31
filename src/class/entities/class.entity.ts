import { Student } from "src/student/entities/student.entity";
import { Teacher } from "src/teacher/entities/teacher.entity";
import { PrimaryGeneratedColumn, Column, OneToMany, Entity } from "typeorm";

@Entity({ name: 'class_room'})
export class ClassRoom {
    
    @PrimaryGeneratedColumn('uuid', { name: 'c_id'})
    id: string;

    @Column({ name: 'c_name'})
    name: string;

    @OneToMany(() => Student, (student) => student.classRoom )
    student: Student[];

    @OneToMany(() => Teacher, (teacher) => teacher.classRoom )
    teacher: Teacher[];
}
