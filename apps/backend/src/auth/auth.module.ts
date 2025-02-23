import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: '',
      signOptions: {
        expiresIn: "1h",
        
      }
    }),
  ],
  providers: [AuthResolver, AuthService, PrismaService, JwtService],
})
export class AuthModule {}
