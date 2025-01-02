import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";
import { Sequelize } from "sequelize-typescript";
// import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
	const PORT = process.env.PORT || 5001;
	const app = await NestFactory.create(AppModule);

	const sequelize = app.get(Sequelize);

	await sequelize.sync({ alter: true, force: true });

	app.enableCors({
		origin: "*",
		methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
		preflightContinue: false,
		optionsSuccessStatus: 204,
	});

	// app.useGlobalPipes(new ValidationPipe({ transform: true }));

	// app.setGlobalPrefix("/api");

	await app.listen(PORT, () => console.log(`SERVER STARTED: PORT=${PORT}`));
}

bootstrap();
