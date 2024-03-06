import { FastifyInstance } from "fastify/types/instance";
import { prisma } from "../library/prisma";
import { z } from "zod";

export async function employeeRoutes(app: FastifyInstance) {
	app.get('/employees', async () => {
		const employees = await prisma.employee.findMany();
		return employees;
	});

	app.get('/employees/:id', async (req) => {
		const params = z.object({
			id: z.string()
		});

		const { id } = params.parse(req.params);

		const employee = await prisma.employee.findUnique({
			where: {
				id: id
			}
		});

		return employee;
	});

	app.post('/employees', async (req) => {
		const body = z.object({
			biNumber: z.string(),
			companyId: z.string().uuid(),
			departmentId: z.number(),
			role: z.string(),
			fullName: z.string(),
			dateOfBirth: z.string(),
			gender: z.boolean(),
			email: z.string().email(),
			password: z.string(),
			active: z.boolean()
		});

		const { biNumber, companyId, departmentId, role, fullName, dateOfBirth, gender, email, password, active } = body.parse(req.body);

		await prisma.employee.create({
			data: {
				biNumber: biNumber,
				companyId: companyId,
				departmentId: departmentId,
				role: role,
				fullName: fullName,
				dateOfBirth: new Date(dateOfBirth),
				gender: gender,
				email: email,
				password: password,
				active: active
			}
		});
	});

	app.patch('/employees', async (req) => {
		const body = z.object({
			id: z.string().uuid(),
			role: z.string(),
			fullName: z.string(),
			dateOfBirth: z.string(),
			gender: z.boolean(),
			email: z.string().email(),
			password: z.string(),
			active: z.boolean()

		});

		const { id, role, fullName, dateOfBirth, gender, email, password, active } = body.parse(req.body);

		await prisma.employee.update({
			data: {
				role: role,
				fullName: fullName,
				dateOfBirth: new Date(dateOfBirth),
				gender: gender,
				email: email,
				password: password,
				active: active
			},
			where: {
				id: id
			}
		});
	});

	app.delete('/employees/:id', async (req) => {
		const params = z.object({
			id: z.string().uuid()
		});

		const { id } = params.parse(req.params);

		await prisma.employee.delete({
			where: {
				id: id
			}
		});
	});
}