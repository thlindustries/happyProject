import { MigrationInterface, QueryRunner, Table } from 'typeorm';

class createImages1602635735295 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'images',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'path',
            type: 'varchar',
          },
          {
            name: 'orphanage_id',
            type: 'uuid',
          },
        ],
        foreignKeys: [
          {
            name: 'ImageOrphanage',
            referencedTableName: 'orphanages',
            referencedColumnNames: ['id'],
            columnNames: ['orphanage_id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('images');
  }
}

export default createImages1602635735295;
