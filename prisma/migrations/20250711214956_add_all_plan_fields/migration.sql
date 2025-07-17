/*
  Warnings:

  - Added the required column `allowDownloads` to the `Plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hasAds` to the `Plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxProfiles` to the `Plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxScreens` to the `Plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxVideoQuality` to the `Plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Plan` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PlanType" AS ENUM ('BASIC', 'STANDARD', 'PREMIUM', 'FAMILY');

-- CreateEnum
CREATE TYPE "VideoQuality" AS ENUM ('SD', 'HD', 'FHD', 'UHD');

-- AlterTable
ALTER TABLE "Plan" ADD COLUMN     "allowDownloads" BOOLEAN NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "freeTrialDays" INTEGER DEFAULT 0,
ADD COLUMN     "hasAds" BOOLEAN NOT NULL,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "maxProfiles" INTEGER NOT NULL,
ADD COLUMN     "maxScreens" INTEGER NOT NULL,
ADD COLUMN     "maxVideoQuality" "VideoQuality" NOT NULL,
ADD COLUMN     "type" "PlanType" NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
