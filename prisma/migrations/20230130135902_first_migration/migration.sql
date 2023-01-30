-- CreateTable
CREATE TABLE "chores" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "description" TEXT,
    "inCharge" VARCHAR NOT NULL,
    "startDate" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deadline" TIMESTAMP(6) NOT NULL,
    "isDone" BOOLEAN NOT NULL DEFAULT false,
    "doneBy" VARCHAR,
    "doneOn" TIMESTAMP(6),

    CONSTRAINT "chores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roomies" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "token" TEXT NOT NULL,

    CONSTRAINT "roomies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "roomies_name_key" ON "roomies"("name");

-- AddForeignKey
ALTER TABLE "chores" ADD CONSTRAINT "chores_doneBy_fkey" FOREIGN KEY ("doneBy") REFERENCES "roomies"("name") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "chores" ADD CONSTRAINT "chores_inCharge_fkey" FOREIGN KEY ("inCharge") REFERENCES "roomies"("name") ON DELETE NO ACTION ON UPDATE NO ACTION;
