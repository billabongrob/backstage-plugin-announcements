import { Reactions } from '@procore-oss/backstage-plugin-announcements-common';
import { Knex } from 'knex';

const reactionsTable = 'reactions';

export class ReactionsDatabase {
  constructor(private readonly db: Knex) {}

  async categories(): Promise<Reactions[]> {
    const queryBuilder = this.db<Reactions>(reactionsTable).orderBy(
      'created_at',
      'asc',
    );

    return queryBuilder.select();
  }

  async delete(user: string, id: number): Promise<void> {
    await this.db<Reactions>(reactionsTable)
      .where('user', user)
      .where('id', id)
      .delete();
  }

  async insert(reaction: Reactions): Promise<void> {
    await this.db<Reactions>(reactionsTable).insert(reaction);
  }
}
