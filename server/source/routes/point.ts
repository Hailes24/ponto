import { FastifyInstance } from "fastify/types/instance";
import { prisma } from "../library/prisma";
import { z } from "zod";

export async function pointRoutes(app: FastifyInstance) {
	app.get('/points', async () => {
		const points = await prisma.point.findMany();
		return points;
	});

	app.get('/points/company/:id', async (req) => {
		const params = z.object({
			id: z.string().uuid()
		});

		const { id } = params.parse(req.params);

		const points = await prisma.point.findMany({
			where: {
				companyId: id
			}
		});

		return points;
	});

	app.get('/points/employee', async (req) => {
		const body = z.object({
			companyId: z.string().uuid(),
			employeeId: z.string().uuid()
		});

		const { companyId, employeeId } = body.parse(req.body);

		const points = await prisma.point.findMany({
			where: {
				companyId: companyId,
				employeeId: employeeId
			},
			orderBy: {
				createdAt: 'desc'
			}
		});

		return points;
	});

	app.get('/points/:id', async (req) => {
		const params = z.object({
			id: z.string().uuid()
		});

		const { id } = params.parse(req.params);

		const point = await prisma.point.findUnique({
			where: {
				id: id
			}
		});

		return point;
	});

	app.post('/points', async (req) => {
		const body = z.object({
			companyId: z.string().uuid(),
			employeeId: z.string().uuid(),
			getIn: z.string(),
		});

		const { companyId, employeeId, getIn } = body.parse(req.body);

		await prisma.point.create({
			data: {
				companyId: companyId,
				employeeId: employeeId,
				getIn: new Date(getIn)
			}
		});
	});

	app.patch('/points', async (req) => {
		const body = z.object({
			id: z.string().uuid(),
			getOut: z.string().nullable(),
			getInToLunch: z.string().nullable(),
			getOutToLunch: z.string().nullable(),
			observation: z.string().nullable(),
			updatedAt: z.string()
		});

		const { id, getOut, getInToLunch, getOutToLunch, observation, updatedAt } = body.parse(req.body);

		await prisma.point.update({
			data: {
				getOut: getOut === null ? null : new Date(getOut),
				getInToLunch: getInToLunch === null ? null : new Date(getInToLunch),
				getOutToLunch: getOutToLunch === null ? null : new Date(getOutToLunch),
				observation: observation === null ? null : observation,
				updatedAt: updatedAt
			},
			where: {
				id: id
			}
		});
	});
}