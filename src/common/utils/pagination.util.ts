import { Prisma } from "@prisma/client";
import { SuccessResponse } from "../dto/response.dto";

export async function paginate<T>(
  model: {
    findMany: (args: Prisma.Enumerable<any>) => Promise<T[]>;
    count: (args?: Prisma.Enumerable<any>) => Promise<number>;
  },
  args: {
    where?: any;
    orderBy?: any;
    include?: any;
    select?: any;
  },
  limit = 10,
  offset = 0
): Promise<SuccessResponse<T[]>> {
  const [data, total] = await Promise.all([
    model.findMany({ ...args, skip: offset, take: limit }),
    model.count({ where: args.where }),
  ]);

  const meta = {
    total,
    limit,
    offset,
    hasNextPage: offset + limit < total,
  };

  return new SuccessResponse(data, "Listagem realizada com sucesso", meta);
}
