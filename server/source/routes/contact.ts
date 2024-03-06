import { FastifyInstance } from "fastify/types/instance";
import { prisma } from "../library/prisma";
import { z } from "zod";

export async function contactRoutes(app: FastifyInstance) {
	app.get('/contacts', async () => {
		const contacts = await prisma.contact.findMany();
		return contacts;
	});

	app.get('/contacts/:id', async (req) => {
		const params = z.object({
			id: z.string()
		});

		const { id } = params.parse(req.params);

		const contact = await prisma.contact.findUnique({
			where: {
				id: Number(id)
			}
		});

		return contact;
	});

	app.patch('/contacts', async (req) => {
		const body = z.object({
			id: z.number(),
			email: z.string(),
			phone: z.string(),
			address: z.string(),
			site: z.string()
		});

		const { id, email, phone, address, site } = body.parse(req.body);

		await prisma.contact.update({
			data: {
				email: email,
				phone: phone,
				address: address,
				site: site
			},
			where: {
				id: id
			}
		});
	});
}