import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class page {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    page_child: string;

    @Column()
    page_name: string;

    @Column()
    value: string;
}