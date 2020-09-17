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
    gender: string;

    @Column()
    student_id: number;

    @Column()
    personal_id: number;

    @Column()
    email_address: string;

    @Column()
    phone_number: number;
}