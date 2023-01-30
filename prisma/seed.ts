import prisma from "../src/db.js";

async function main() {
    await prisma.roomies.createMany({
        data: [
            {
                "name": "João",
                "token": "758e5bcb-0b31-4d94-9394-1f799c1fd9a3"
            },
            {
                "name": "Maria",
                "token": "d728813a-4dd2-436e-bf29-17043a11ef44"
            },
            {
                "name": "José",
                "token": "3ed8db52-bc07-4624-949e-12d055323128"
            }
        ]
    })
}
main()
    .then(()=>{console.log("Registro feito com sucesso")})
    .catch(e=>{console.log(e); process.exit(1)})
    .finally(async ()=>{await prisma.$disconnect()})