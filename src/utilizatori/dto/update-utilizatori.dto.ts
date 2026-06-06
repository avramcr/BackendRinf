import { PartialType } from '@nestjs/mapped-types';
import { CreateUtilizatoriDto } from './create-utilizatori.dto';

export class UpdateUtilizatoriDto extends PartialType(CreateUtilizatoriDto) {}
