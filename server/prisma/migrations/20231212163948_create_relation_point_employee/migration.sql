/*
  Warnings:

  - Added the required column `employeeId` to the `points` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_points" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyId" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "getIn" DATETIME NOT NULL,
    "getOut" DATETIME,
    "getInToLunch" DATETIME,
    "getOutToLunch" DATETIME,
    "observation" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    CONSTRAINT "points_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "points_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employees" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_points" ("companyId", "createdAt", "getIn", "getInToLunch", "getOut", "getOutToLunch", "id", "observation", "updatedAt") SELECT "companyId", "createdAt", "getIn", "getInToLunch", "getOut", "getOutToLunch", "id", "observation", "updatedAt" FROM "points";
DROP TABLE "points";
ALTER TABLE "new_points" RENAME TO "points";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
