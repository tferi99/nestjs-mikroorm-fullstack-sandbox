import { Decision, DecisionContext } from './decision-types';
import { Role } from '../../model/auth.model';

export class RoleDecision implements Decision {
  role: Role;

  constructor(role: Role) {
    this.role = role;
  }

  evaluate(ctx: DecisionContext): boolean {
    if (!ctx.currentUser) {
      return false;
    }
    return ctx.currentUser.roles.includes(this.role);
  }
}
