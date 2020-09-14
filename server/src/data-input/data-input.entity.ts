import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class datainput {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    mail: string;
}