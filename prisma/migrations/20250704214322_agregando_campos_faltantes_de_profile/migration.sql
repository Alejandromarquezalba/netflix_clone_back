/*
  Warnings:

  - You are about to drop the column `avatar` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `isChild` on the `Profile` table. All the data in the column will be lost.
  - Added the required column `ageRestriction` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ProfileTypeEnum" AS ENUM ('ADULT', 'CHILD');

-- CreateEnum
CREATE TYPE "AgeRatingEnum" AS ENUM ('ALL', 'KIDS', 'TEEN', 'MATURE');

-- AlterEnum
ALTER TYPE "UserRole" ADD VALUE 'MODERATOR';

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "avatar",
DROP COLUMN "isChild",
ADD COLUMN     "ageRestriction" "AgeRatingEnum" NOT NULL,
ADD COLUMN     "autoPlay" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "avatarUrl" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "hasPin" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "preferredLanguage" TEXT,
ADD COLUMN     "type" "ProfileTypeEnum" NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
