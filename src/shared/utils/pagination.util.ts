import { PaginationDto } from '../dto/pagination.dto';

export function paginate({ take, page }: PaginationDto) {
  return {
    take: take,
    skip: take * (page - 1),
  };
}
