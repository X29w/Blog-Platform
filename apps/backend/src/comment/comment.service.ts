import { Inject, Injectable } from '@nestjs/common';
import { DEFAULT_PAGE_SIZE } from 'src/constant/config';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CommentService {
  @Inject()
  private prisma: PrismaService;

  async findOneByPost({
    postId,
    take,
    skip,
  }: {
    postId: number;
    take?: number;
    skip?: number;
  }) {
    return await this.prisma.comment.findMany({
      where: {
        postId,
      },
      include: {
        author: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      skip: skip ?? 0,
      take: take ?? DEFAULT_PAGE_SIZE,
    });
  }

  async count(postId: number) {
    return await this.prisma.comment.count({
      where: {
        postId,
      },
    });
  }



  
}
