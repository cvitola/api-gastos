/*
  Warnings:

  - You are about to drop the column `description` on the `spend` table. All the data in the column will be lost.
  - Added the required column `date` to the `Spend` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `spend` DROP COLUMN `description`,
    ADD COLUMN `date` DATETIME(3) NOT NULL;
