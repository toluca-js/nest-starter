import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    name: 'first_name'
  })
  firstName: string;

  @Column({
    name: 'last_name'
  })
  lastName: string;
}
