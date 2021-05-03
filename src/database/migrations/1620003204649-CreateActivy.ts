import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateActivy1620003204649 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "activies",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "actiby_date",
                        type: "timestamp"
                    },
                    {
                        name: "description",
                        type: "varchar"
                    },
                    {
                        name:"created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("activies");
    }

}
