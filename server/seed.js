import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seed() {
  const celestialBodies = [
    { name: 'Sun', type: 'Star', distance_from_earth: 149600000 },
    { name: 'Moon', type: 'Satellite', distance_from_earth: 384400 },
    { name: 'Mars', type: 'Planet', distance_from_earth: 225000000 },
    { name: 'Jupiter', type: 'Planet', distance_from_earth: 778500000 },
    { name: 'Saturn', type: 'Planet', distance_from_earth: 1433000000 },
    { name: 'Venus', type: 'Planet', distance_from_earth: 108200000 },
    { name: 'Mercury', type: 'Planet', distance_from_earth: 57900000 },
    { name: 'Uranus', type: 'Planet', distance_from_earth: 2871000000 },
    { name: 'Neptune', type: 'Planet', distance_from_earth: 4495000000 },
    { name: 'Pluto', type: 'Dwarf Planet', distance_from_earth: 5900000000 }
  ]

  for (const body of celestialBodies) {
    await prisma.celestial_Bodies.create({
      data: body
    })
  }

  console.log('Celestial bodies seeded successfully')
}

seed()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
