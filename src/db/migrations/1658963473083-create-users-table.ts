import { MigrationInterface, QueryRunner } from "typeorm"

export class createUsersTable1658963473083 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE users (
                id VARCHAR(36) DEFAULT (uuid()),
                first_name VARCHAR(32),
                last_name VARCHAR(32)
            );`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DROP TABLE users;`
        )
    }

}
