import { AuthService } from "./auth/auth.service";

// --------------------------- ONLY FOR TESTING (Remove these later in production)
import { AuthServiceTest } from "./tests/auth-service.test";

const authService = new AuthService(
  "67331a18c310e35db746fac7",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9qZWN0SWQiOiI2NzMzMWExOGMzMTBlMzVkYjc0NmZhYzciLCJvd25lciI6IjY3MWE2YmM5MTMwNTVjNTQwMTkyOTdjYSIsImlhdCI6MTczMTQwMjI2NH0.CxTr4PBwpyYTGRgItB3ggKV5AD6iHApxHeCnreXiix8"
);
const authServiceTest = new AuthServiceTest(authService);

(async () => {
  // const response = await authServiceTest.testPasswordLogin({
  //   username: "test",
  //   email: "test@test.com",
  //   password: "NewTest123456@",
  // });
  // const response = await authServiceTest.testMagicURLLogin.init("test@test.com");
  const response = await authServiceTest.testMagicURLLogin.complete(
    "test@test.com",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9qZWN0SWQiOiI2NzMzMWExOGMzMTBlMzVkYjc0NmZhYzciLCJ1c2VySWQiOiI2NzM4Y2JjY2RmOWUxNTMyNDY3YWM4NzAiLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpYXQiOjE3MzE3NzU0MzYsImV4cCI6MTczMTc3NjMzNn0.5BybJj294hy21aYcLZRU2R6glbYHNVNI4f-9IUstqqE"
  );
  console.log(response);
})();

// --------------------------- ONLY FOR TESTING (Remove these later in production)

export { AuthService };
