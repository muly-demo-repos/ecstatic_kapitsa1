import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RouteServiceBase } from "./base/route.service.base";

@Injectable()
export class RouteService extends RouteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
