import {Column, CreateDateColumn, Entity, ManyToOne, JoinTable, PrimaryColumn} from 'typeorm'
import {v4 as uuid} from 'uuid';

import { CourseUnit } from './CourseUnit';

@Entity("activies")
class Activy {

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
    // Chave Primária
    @PrimaryColumn()
    readonly id: string;

    // Colunas
    @Column()
    name: string;
    @Column()
    activy_date: Date;
    @Column()
    courseUnitId: string;
    @Column()
    grade: number;
    @CreateDateColumn()
    created_at: Date;

    // Relacionamento entre as tabelas
    @ManyToOne(() => CourseUnit, course_unit => course_unit.activies)
    @JoinTable()
    course_unit: CourseUnit
}

export {Activy};