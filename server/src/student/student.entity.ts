import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    class: string;
    
}