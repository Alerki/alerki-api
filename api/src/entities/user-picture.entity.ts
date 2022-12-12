import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('UserPictures')
export class UserPicture {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column({
    type: 'bytea',
  }) picture: Buffer;

  @CreateDateColumn() createdAt: Date;

  @UpdateDateColumn() updatedAt: Date;
}
