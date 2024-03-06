import Fastify from "fastify";
import cors from "@fastify/cors";
import { companyRoutes } from "./routes/company";
import { contactRoutes } from "./routes/contact";
import { coordinatRoutes } from "./routes/coordinat";
import { departmentRoutes } from "./routes/department";
import { employeeRoutes } from "./routes/employee";
import { pointRoutes } from "./routes/point";

const app = Fastify();
app.register(cors);
[companyRoutes, contactRoutes, coordinatRoutes, departmentRoutes, employeeRoutes, pointRoutes].map((r) => {
	app.register(r);
});

app.listen({
	port: 3333
}).then(() => {
	console.log('Http Server running 🚀 in 🚪 3333...');
});