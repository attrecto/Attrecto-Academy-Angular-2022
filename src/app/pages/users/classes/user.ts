import { UserBadge } from './user-badge';

export class User {
  id: number;
  name: string;
  image: string;
  createdAt: number;
  badges: UserBadge[]
}
