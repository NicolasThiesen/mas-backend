import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { CourseUnit } from "./CourseUnit";

@Entity("activities")
class Activy {
    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
    @PrimaryColumn()
    readonly id: string;

    @ManyToMany(() => CourseUnit, course_unit=> course_unit.activies)
    course_unit: CourseUnit;

    @Column()
    name: string;
    @CreateDateColumn()
    activy_date: Date;
    @Column()
    description: string;
    @CreateDateColumn()
    create_at: Date;
}

export {Activy};