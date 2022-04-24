import { Column, JoinTable, ManyToMany } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';
import { Permission } from './permission.entity';

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(() => Permission)
    @JoinTable({
        name: "role_permission", // table name for the junction table of this relation
        joinColumn: {
            name: "role_id",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "permission_id",
            referencedColumnName: "id"
        }
    })
    permissions: Permission[]
}