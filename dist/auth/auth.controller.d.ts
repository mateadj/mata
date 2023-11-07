import { UserService } from "../user/user.service";
import { RegisterDto } from "./models/register.dto";
export declare class AuthController {
    private userService;
    constructor(userService: UserService);
    register(body: RegisterDto): Promise<import("../user/models/user.entity").User>;
    login(email: string, password: string): Promise<import("../user/models/user.entity").User>;
}
