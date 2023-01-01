abstract class IUserService {
  abstract isInRole(role: string): boolean;
}

export default IUserService;
