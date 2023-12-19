import { Company, Contact, Coordinat, Department, Employee, PrismaClient, Point } from '@prisma/client'
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
	const seedsLength = 4;

	//* Delete all the seeds 
	await prisma.employee.deleteMany();
	await prisma.department.deleteMany();
	await prisma.company.deleteMany();
	await prisma.coordinat.deleteMany();
	await prisma.contact.deleteMany();

	//* Create seeds for contacts
	const contacts: Contact[] = [];

	for (let i = 0; i < seedsLength; i++) {
		const contact: Contact = {
			id: faker.number.int({ min: 1, max: 50 }),
			email: faker.internet.email(),
			phone: faker.phone.number(),
			address: faker.location.streetAddress({ useFullAddress: true }),
			site: faker.internet.url()
		};

		contacts.push(contact);
	}

	contacts.forEach(async (c) => {
		console.info(`Creating contact => ${c.id}...`);
		await prisma.contact.create({ data: c });
	});

	//* Create seeds for coordinates 
	const coordinates: Coordinat[] = [];

	for (let i = 0; i < seedsLength; i++) {
		const coordinat: Coordinat = {
			id: faker.string.uuid(),
			latitude: faker.location.latitude(),
			longitude: faker.location.longitude(),
			altitude: null,
			accuracy: null,
			altitudeAccuracy: null,
			heading: null,
			speed: null,
		};

		coordinates.push(coordinat);
	}

	coordinates.forEach(async (c) => {
		console.info(`Creating coordinat => ${c.id}...`);
		await prisma.coordinat.create({ data: c });
	});

	//* Create seeds for companies 
	const companies: Company[] = [];

	for (let i = 0; i < seedsLength; i++) {
		const company: Company = {
			id: faker.string.uuid(),
			contactId: contacts[i].id,
			coordinatId: coordinates[i].id,
			name: faker.company.name(),
			nif: faker.number.int({ min: 1000000 }).toString(),
			logotipo: faker.image.urlLoremFlickr({ category: 'business' }),
			active: faker.datatype.boolean({ probability: 0.75 }),
			createdAt: new Date(),
			updatedAt: null
		};

		companies.push(company);
	}

	companies.forEach(async (c) => {
		console.info(`Creating company => ${c.id}...`);
		await prisma.company.create({ data: c });
	});

	//* Create seeds for departments 
	const departments: Department[] = [];

	for (let i = 0; i < seedsLength; i++) {
		const department: Department = {
			id: faker.number.int({ min: 1, max: 25 }),
			companyId: companies[i].id,
			name: faker.commerce.department(),
		};

		departments.push(department);
	}

	departments.forEach(async (d) => {
		console.info(`Creating department => ${d.id}...`);
		await prisma.department.create({ data: d });
	});

	//* Create seeds for employees 
	const employees: Employee[] = [];

	for (let i = 0; i < companies.length; i++) {
		for (let j = 0; j < seedsLength; j++) {
			let name = faker.person.fullName();
			const employee: Employee = {
				id: faker.string.uuid(),
				companyId: companies[i].id,
				departmentId: departments[j].id,
				biNumber: faker.number.int({ min: 10000000 }).toString(),
				role: faker.person.jobTitle(),
				fullName: name,
				dateOfBirth: faker.date.birthdate(),
				gender: faker.person.gender().includes('Man') ? true : false,
				email: faker.internet.email({ firstName: name.split(' ')[0], lastName: name.split(' ')[1], provider: companies[i].name }),
				password: faker.internet.password(),
				active: faker.datatype.boolean()
			};

			employees.push(employee);
		}
	}

	employees.forEach(async (e) => {
		console.info(`Creating employee => ${e.id}...`);
		await prisma.employee.create({ data: e });
	});
}

main()
	.then(async () => {
		await prisma.$disconnect();
		console.log('✔ create all seeds without error');
	})
	.catch(async (e) => {
		await prisma.$disconnect()
		console.error(`🐛 Erro trying create seeds ==> ${e.message}`);
		process.exit(1)
	});
