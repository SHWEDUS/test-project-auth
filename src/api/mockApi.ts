import { type AuthResponse, type LoginCredentials, type User, UserRole } from "../typings/Auth.typings";

const MOCK_USERS: Array<User & { password: string }> = [
  {
    id: 1,
    name: "Иван Петров",
    email: "admin@test.com",
    password: "admin123",
    role: UserRole.CompanyAdmin,
    organization: 'Компания "Недвижимость"',
  },
  {
    id: 2,
    name: "Мария Сидорова",
    email: "manager@test.com",
    password: "manager123",
    role: UserRole.Manager,
    organization: 'Компания "Недвижимость"',
  },
  {
    id: 3,
    name: "Алексей Иванов",
    email: "client@test.com",
    password: "client123",
    role: UserRole.Client,
    organization: "Клиент",
  },
  {
    id: 4,
    name: "Ольга Смирнова",
    email: "support@test.com",
    password: "support123",
    role: UserRole.Support,
    organization: "Служба поддержки",
  },
];

const generateMockToken = (user: User): string => {
  const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const payload = btoa(
    JSON.stringify({
      sub: user.id,
      email: user.email,
      role: user.role,
      exp: Math.floor(Date.now() / 1000) + 3600 * 24,
    }),
  );
  const signature = btoa("mock-signature");
  return `${header}.${payload}.${signature}`;
};

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const mockLogin = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  await delay(800);

  const user = MOCK_USERS.find(u => u.email === credentials.email && u.password === credentials.password);

  if (!user) {
    throw new Error("Неверный email или пароль");
  }

  const { password, ...userWithoutPassword } = user;
  const token = generateMockToken(userWithoutPassword);

  return {
    token,
    user: userWithoutPassword,
  };
};
