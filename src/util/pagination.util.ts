import { PaginationQuery } from 'src/shared/dto/pagination.dto';

export function pagination(pagination: PaginationQuery) {
  return {
    take: pagination?.limit || 100,
    skip: pagination?.limit
      ? pagination?.limit * ((pagination?.page || 1) - 1)
      : 0,
  };
}
