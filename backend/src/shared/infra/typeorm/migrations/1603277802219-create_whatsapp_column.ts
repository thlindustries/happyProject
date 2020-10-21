import { TableColumn, MigrationInterface, QueryRunner } from 'typeorm';

class createWhatsappColumn1603277802219 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'orphanages',
      new TableColumn({
        name: 'whatsapp',
        type: 'varchar',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('orphanages', 'whatsapp');
  }
}

export default createWhatsappColumn1603277802219;
