import { FastifyInstance } from "fastify/types/instance";
import { prisma } from "../library/prisma";
import { z } from "zod";

export async function companyRoutes(app: FastifyInstance) {
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

	app.patch('/companies', async (req) => {
		const body = z.object({
			id: z.string(),
			name: z.string(),
			nif: z.string(),
			logotipo: z.string()
		});

		const { id, name, nif, logotipo } = body.parse(req.body);

		await prisma.company.update({
			data: {
				name: name,
				nif: nif,
				logotipo: logotipo
			},
			where: {
				id: id
			}
		});
	});

	app.patch('/companies/:id/toggle', async (req) => {
		const params = z.object({
			id: z.string().uuid()
		});

		const { id } = params.parse(req.params);

		const company = await prisma.company.findUnique({
			where: {
				id: id
			}
		});

		await prisma.company.update({
			where: {
				id: company?.id
			},
			data: {
				active: !company?.active
			}
		});
	});
}