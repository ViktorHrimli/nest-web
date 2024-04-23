import { ArgumentMetadata, PipeTransform, Injectable } from '@nestjs/common';
import { UserMessageDto } from '../dto/UserDtos';

@Injectable()
class ValidatorMessages implements PipeTransform {
  transform(value: UserMessageDto, metadata: ArgumentMetadata) {
    return value;
  }
}

export { ValidatorMessages };
