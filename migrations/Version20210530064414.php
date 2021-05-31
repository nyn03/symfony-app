<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210530064414 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Database structure.';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('CREATE TABLE hard_disk_drive (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(50) NOT NULL, storage SMALLINT NOT NULL, type ENUM(\'SAS\', \'SATA\', \'SSD\'), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE location (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(50) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ram (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(50) NOT NULL, memory SMALLINT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE servers (id INT AUTO_INCREMENT NOT NULL, ram_id INT DEFAULT NULL, hard_disk_drive_id INT DEFAULT NULL, location_id INT DEFAULT NULL, name VARCHAR(50) NOT NULL, price NUMERIC(10, 2) DEFAULT \'0\' NOT NULL, currency ENUM(\'USD\', \'EUR\'), INDEX IDX_4F8AF5F73366068 (ram_id), INDEX IDX_4F8AF5F7F98360E3 (hard_disk_drive_id), INDEX IDX_4F8AF5F764D218E (location_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE servers ADD CONSTRAINT FK_4F8AF5F73366068 FOREIGN KEY (ram_id) REFERENCES ram (id)');
        $this->addSql('ALTER TABLE servers ADD CONSTRAINT FK_4F8AF5F7F98360E3 FOREIGN KEY (hard_disk_drive_id) REFERENCES hard_disk_drive (id)');
        $this->addSql('ALTER TABLE servers ADD CONSTRAINT FK_4F8AF5F764D218E FOREIGN KEY (location_id) REFERENCES location (id)');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE servers DROP FOREIGN KEY FK_4F8AF5F7F98360E3');
        $this->addSql('ALTER TABLE servers DROP FOREIGN KEY FK_4F8AF5F764D218E');
        $this->addSql('ALTER TABLE servers DROP FOREIGN KEY FK_4F8AF5F73366068');
        $this->addSql('DROP TABLE hard_disk_drive');
        $this->addSql('DROP TABLE location');
        $this->addSql('DROP TABLE ram');
        $this->addSql('DROP TABLE servers');
    }
}
