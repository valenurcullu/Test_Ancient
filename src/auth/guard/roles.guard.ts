import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { Role } from '../../common/enums/rol.enum';


@Injectable()
export class RolesGuard implements CanActivate {

  constructor(private readonly reflector: Reflector){

  }

  canActivate( context: ExecutionContext, ): boolean {
    const role = this.reflector.getAllAndOverride<Role>(ROLES_KEY,[
      context.getHandler(),
      context.getClass()
    ]);
    if(!role){
      return true
    }

    
    const {user} = context.switchToHttp().getRequest()
// si fuese un array en el controller porque pueden acceder varios(user,admin,superadmin,etc) se pondria:
// return requiredRoles.some((role)=> user.roles?.includes(role))
    if(user.role === Role.ADMIN){
      return true
    }
    return role === user.role;
  }
}
