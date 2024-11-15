import { AuthService } from "./auth/auth.service";
import { AuthServiceTest } from "./tests/auth-service.test";

const authService = new AuthService(
  "67331a18c310e35db746fac7",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9qZWN0SWQiOiI2NzMzMWExOGMzMTBlMzVkYjc0NmZhYzciLCJvd25lciI6IjY3MWE2YmM5MTMwNTVjNTQwMTkyOTdjYSIsImlhdCI6MTczMTQwMjI2NH0.CxTr4PBwpyYTGRgItB3ggKV5AD6iHApxHeCnreXiix8"
);
const authServiceTest = new AuthServiceTest(authService);

(async () => {
  const response = await authServiceTest.testCreateAccount({
    username: "testuser",
    password: "Test123456@",
    email: "test@test.com",
  });
  console.log(response);
})();

export { AuthService };
