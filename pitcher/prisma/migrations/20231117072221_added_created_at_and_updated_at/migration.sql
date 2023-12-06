/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Todo` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Todo" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "Todo_title_key" ON "Todo"("title");
