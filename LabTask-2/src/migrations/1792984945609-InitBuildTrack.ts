import { MigrationInterface, QueryRunner } from "typeorm";

export class InitBuildTrack1792984945609 implements MigrationInterface {
    name = 'InitBuildTrack1792984945609'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "progress_updates" ("id" SERIAL NOT NULL, "title" character varying(150) NOT NULL, "description" text NOT NULL, "completionPercent" integer NOT NULL, "updateDate" date NOT NULL, "photoUrl" character varying, "projectId" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_180f6781848cb83b31c3deb131b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "installments" ("id" SERIAL NOT NULL, "buyerName" character varying(100) NOT NULL, "flatNumber" character varying(20) NOT NULL, "installmentNo" integer NOT NULL, "amount" numeric(12,2) NOT NULL, "dueDate" date NOT NULL, "paidDate" date, "status" character varying(20) NOT NULL DEFAULT 'PENDING', "projectId" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_c74e44aa06bdebef2af0a93da1b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "projects" ("id" SERIAL NOT NULL, "name" character varying(150) NOT NULL, "location" character varying(255) NOT NULL, "totalUnits" integer NOT NULL, "status" character varying(30) NOT NULL DEFAULT 'ONGOING', "startDate" date NOT NULL, "expectedHandoverDate" date NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_6271df0a7aed1d6c0691ce6ac50" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "progress_updates" ADD CONSTRAINT "FK_96aa6ce805b7bf8a73e6c221622" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "installments" ADD CONSTRAINT "FK_d51620f4b6ddb49447d344f3361" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "installments" DROP CONSTRAINT "FK_d51620f4b6ddb49447d344f3361"`);
        await queryRunner.query(`ALTER TABLE "progress_updates" DROP CONSTRAINT "FK_96aa6ce805b7bf8a73e6c221622"`);
        await queryRunner.query(`DROP TABLE "projects"`);
        await queryRunner.query(`DROP TABLE "installments"`);
        await queryRunner.query(`DROP TABLE "progress_updates"`);
    }

}
