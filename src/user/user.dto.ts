import { ApiProperty } from '@nestjs/swagger';

export class UserDTO {
  @ApiProperty({
    description: 'Name of the user',
    minimum: 1,
    maximum: 256,
    required: true,
  })
  readonly name: string;
  @ApiProperty({
    description: 'Lastname of the user',
    maximum: 256,
    required: false,
  })
  readonly lastname: string;
  @ApiProperty({
    description: 'Email address of the user',
    minimum: 1,
    maximum: 256,
    required: true,
  })
  readonly email: string;
  @ApiProperty({
    description: 'Phone number of the user',
    minimum: 10,
    maximum: 10,
    required: false,
  })
  readonly phone_number: string;
}
