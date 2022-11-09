import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'category'})
export class Category {
   @PrimaryGeneratedColumn()
    public id : number;

    @Column({type: 'varchar'})
    public name : string;
}
