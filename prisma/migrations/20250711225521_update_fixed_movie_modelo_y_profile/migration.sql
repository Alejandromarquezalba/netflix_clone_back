/*
  Warnings:

  - You are about to drop the column `genre` on the `Movie` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "MovieGenre" AS ENUM ('ACTION', 'COMEDY', 'DOCUMENTARY');

-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "genre",
ADD COLUMN     "genres" "MovieGenre"[],
ADD COLUMN     "videoMetadata" JSONB NOT NULL DEFAULT '{}',
ALTER COLUMN "duration" DROP NOT NULL;
