import { Prisma } from "../../../prisma/generated";
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
  currentPage = 1,
): Promise<SuccessResponse<T[]>> {
  const skip = (currentPage - 1) * limit;
  const [data, total] = await Promise.all([
    model.findMany({ ...args, skip: skip, take: limit }),
    model.count({ where: args.where }),
  ]);

  const meta = {
    total,
    limit,
    currentPage,
    hasNextPage: skip + limit < total,
  };

  return new SuccessResponse(data, "Listagem realizada com sucesso", meta);
}
