import { FastifyInstance } from "fastify/types/instance";
import { prisma } from "../library/prisma";
import { z } from "zod";

export async function coordinatRoutes(app: FastifyInstance) {
	app.get('/coordinates', async () => {
		const coordinates = await prisma.coordinat.findMany();
		return coordinates;
	});

	app.get('/coordinates/:id', async (req) => {
		const params = z.object({
			id: z.string().uuid()
		});

		const { id } = params.parse(req.params);

		const coordinat = await prisma.coordinat.findUnique({
			where: {
				id: id
			}
		});

		return coordinat;
	});

	app.post('/coordinates', async (req) => {
		const body = z.object({
			latitude: z.number(),
			longitude: z.number(),
		});

		const { latitude, longitude } = body.parse(req.body);

		await prisma.coordinat.create({
			data: {
				latitude: latitude,
				longitude: longitude
			}
		});
	});

	app.patch('/coordinates', async (req) => {
		const body = z.object({
			id: z.string().cuid(),
			latitude: z.number(),
			longitude: z.number(),
		});

		const { id, latitude, longitude } = body.parse(req.body);

		await prisma.coordinat.update({
			data: {
				latitude: latitude,
				longitude: longitude
			},
			where: {
				id: id
			},
		});
	});

	app.delete('/coordinates/:id', async (req) => {
		const params = z.object({
			id: z.string().uuid()
		});

		const { id } = params.parse(req.params);

		await prisma.coordinat.delete({
			where: {
				id: id
			}
		});

	});
}