import type React from "react";
import { useState } from "react";
import { Button } from "../../../components/Buttons/Button.styled.ts";
import { Input } from "../../../components/Inputs/Input.styled.ts";
import { Label, Subtitle, TestTitle, Title } from "../../../components/Title/Title.styled.ts";
import { useAuth } from "../../../contexts/AuthContext.tsx";
import {
  Alert,
  ErrorMessage,
  Form,
  FormContainer,
  FormGroup,
  TestCredentials,
  TestItem,
  TestList,
} from "./LoginForm.styled.ts";

interface FormErrors {
  email?: string;
  password?: string;
  general?: string;
}

export function LoginForm() {
  const { login, isLoading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!email) {
      newErrors.email = "Email обязателен";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Введите корректный email";
    }

    if (!password) {
      newErrors.password = "Пароль обязателен";
    } else if (password.length < 6) {
      newErrors.password = "Пароль должен содержать минимум 6 символов";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (!validateForm()) {
      return;
    }

    try {
      await login({ email, password });
    } catch (error) {
      setErrors({
        general: error instanceof Error ? error.message : "Произошла ошибка при входе",
      });
    }
  };

  const fillTestCredentials = (testEmail: string, testPassword: string) => {
    setEmail(testEmail);
    setPassword(testPassword);
    setErrors({});
  };

  return (
    <FormContainer>
      <Title>Вход в систему</Title>
      <Subtitle>Введите ваши учетные данные для доступа</Subtitle>

      {errors.general && <Alert>{errors.general}</Alert>}

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="example@company.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            $hasError={!!errors.email}
            disabled={isLoading}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">Пароль</Label>
          <Input
            id="password"
            type="password"
            placeholder="Введите пароль"
            value={password}
            onChange={e => setPassword(e.target.value)}
            $hasError={!!errors.password}
            disabled={isLoading}
          />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </FormGroup>

        <Button type="submit" $isLoading={isLoading} disabled={isLoading}>
          {isLoading ? "Вход..." : "Войти"}
        </Button>
      </Form>

      <TestCredentials>
        <TestTitle>Тестовые учетные данные:</TestTitle>
        <TestList>
          <TestItem onClick={() => fillTestCredentials("admin@test.com", "admin123")}>
            <strong>Администратор:</strong> admin@test.com / admin123
          </TestItem>
          <TestItem onClick={() => fillTestCredentials("manager@test.com", "manager123")}>
            <strong>Менеджер:</strong> manager@test.com / manager123
          </TestItem>
          <TestItem onClick={() => fillTestCredentials("client@test.com", "client123")}>
            <strong>Клиент:</strong> client@test.com / client123
          </TestItem>
          <TestItem onClick={() => fillTestCredentials("support@test.com", "support123")}>
            <strong>Поддержка:</strong> support@test.com / support123
          </TestItem>
        </TestList>
      </TestCredentials>
    </FormContainer>
  );
}
