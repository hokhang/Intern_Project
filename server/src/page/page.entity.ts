import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class page {
    @PrimaryGeneratedColumn()
    page_id: number;

    @Column()
    page_child: string;

    @Column()
    page_name: string;
}