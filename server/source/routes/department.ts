import { FastifyInstance } from "fastify/types/instance";
import { prisma } from "../library/prisma";
import { z } from "zod";

export async function departmentRoutes(app: FastifyInstance) {
	app.get('/departments', async () => {
		const departments = await prisma.department.findMany();
		return departments;
	});

	app.get('/departments/:id', async (req) => {
		const params = z.object({
			id: z.string()
		});

		const { id } = params.parse(req.params);

		const department = await prisma.department.findUnique({
			where: {
				id: Number(id)
			}
		});

		return department;
	});

	app.patch('/departments', async (req) => {
		const body = z.object({
			id: z.number(),
			name: z.string(),

		});

		const { id, name } = body.parse(req.body);

		await prisma.department.update({
			data: {
				name: name
			},
			where: {
				id: id
			}
		});
	});
}