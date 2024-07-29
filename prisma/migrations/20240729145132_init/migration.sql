-- CreateEnum
CREATE TYPE "USER_ROLES" AS ENUM ('ADMIN', 'USER');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "USER_ROLES" NOT NULL DEFAULT 'USER',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Celestial_Bodies" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "distance_from_earth" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Celestial_Bodies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Observations" (
    "id" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,
    "celestial_body_id" TEXT NOT NULL,

    CONSTRAINT "Observations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Celestial_Bodies_name_key" ON "Celestial_Bodies"("name");

-- AddForeignKey
ALTER TABLE "Observations" ADD CONSTRAINT "Observations_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Observations" ADD CONSTRAINT "Observations_celestial_body_id_fkey" FOREIGN KEY ("celestial_body_id") REFERENCES "Celestial_Bodies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
