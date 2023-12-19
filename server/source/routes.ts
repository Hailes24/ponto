import { FastifyInstance } from "fastify/types/instance";
import { prisma } from "./library/prisma";
import { z } from "zod";


export async function appRoutes(app: FastifyInstance) {
	app.get('/companies', async () => {
		const companies = await prisma.company.findMany();
		return companies;
	});

	app.get('/companies/:id', async (req) => {
		const params = z.object({
			id: z.string().uuid()
		});

		const { id } = params.parse(req.params);

		const company = await prisma.company.findUnique({
			where: {
				id: id
			}
		});

		return company;
	});
}