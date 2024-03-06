/*
  Warnings:

  - You are about to alter the column `accuracy` on the `coordinates` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `altitude` on the `coordinates` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `altitudeAccuracy` on the `coordinates` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `heading` on the `coordinates` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `latitude` on the `coordinates` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `longitude` on the `coordinates` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `speed` on the `coordinates` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_coordinates" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "latitude" INTEGER NOT NULL,
    "longitude" INTEGER NOT NULL,
    "altitude" INTEGER,
    "accuracy" INTEGER,
    "altitudeAccuracy" INTEGER,
    "heading" INTEGER,
    "speed" INTEGER
);
INSERT INTO "new_coordinates" ("accuracy", "altitude", "altitudeAccuracy", "heading", "id", "latitude", "longitude", "speed") SELECT "accuracy", "altitude", "altitudeAccuracy", "heading", "id", "latitude", "longitude", "speed" FROM "coordinates";
DROP TABLE "coordinates";
ALTER TABLE "new_coordinates" RENAME TO "coordinates";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
