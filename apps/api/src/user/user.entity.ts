import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
// import { Picture } from '../../picture/picture.entity';

// export abstract class EntityBoilerplate extends BaseEntity {
//   @PrimaryGeneratedColumn('uuid')
//   id: string;
//
//   @CreateDateColumn()
//   createdAt: Date;
//
//   @UpdateDateColumn()
//   updatedAt: Date;
// }

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  // @OneToMany((type) => Picture, (picture) => picture.user)
  // pictures: Picture[];

  /*
   *
   * relations
   *
   * */
  // @ManyToOne((type) => Category, (category) => category.children)
  // parent: Category
  //
  // @OneToMany((type) => Category, (category) => category.parent)
  // children: Category[]
}
