import { PartialType } from '@nestjs/mapped-types';
import { CreateComenziDto } from './create-comenzi.dto';

export class UpdateComenziDto extends PartialType(CreateComenziDto) {}
