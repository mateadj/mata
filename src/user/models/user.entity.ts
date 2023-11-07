import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: '' })
    first_name: string;

    @Column({ default: '' })
    last_name: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column({ default: '' })
    gender: string;
}
