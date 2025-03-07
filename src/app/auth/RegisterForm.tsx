"use client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/schema/RegisterSchema";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

export default function RegisterForm() {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    console.log("Submitted values:", values);
  };
  return (
    <div className="mx-auto max-w-md rounded-md bg-white p-6 shadow-md">
      <h2 className="mb-3 text-2xl font-bold">회원가입</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* 이름 */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <div className={"flex justify-between"}>
                  <FormLabel>이름</FormLabel> <FormMessage />
                </div>
                <FormControl>
                  <Input placeholder="이름을 입력해 주세요" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          {/* 아이디 */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className={"flex justify-between"}>
                  <FormLabel>아이디</FormLabel> <FormMessage />
                </div>
                <FormControl>
                  <Input placeholder="example@dummy.com" {...field} />
                </FormControl>
                <FormDescription>유효한 이메일을 입력해 주세요</FormDescription>
              </FormItem>
            )}
          />

          {/* 회사명 */}
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <div className={"flex justify-between"}>
                  <FormLabel>회사명</FormLabel> <FormMessage />
                </div>
                <FormControl>
                  <Input placeholder="회사명을 입력해 주세요" {...field} />
                </FormControl>
                <FormDescription>소속 회사명을 입력하세요.</FormDescription>
              </FormItem>
            )}
          />

          {/* 비밀번호 */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className={"flex justify-between"}>
                  <FormLabel>비밀번호</FormLabel> <FormMessage />
                </div>
                <div className="relative">
                  <FormControl>
                    <Input
                      placeholder="비밀번호 입력"
                      type={showPassword ? "text" : "password"}
                      {...field}
                    />
                  </FormControl>
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    {showPassword ? <EyeClosed /> : <Eye />}
                  </button>
                </div>
                <FormDescription>
                  비밀번호는 6자 이상이어야 합니다.
                </FormDescription>
              </FormItem>
            )}
          />

          {/* 비밀번호 확인 */}
          <FormField
            control={form.control}
            name="passwordConfirm"
            render={({ field }) => (
              <FormItem>
                <div className={"flex justify-between"}>
                  <FormLabel>비밀번호 확인</FormLabel> <FormMessage />
                </div>
                <div className="relative">
                  <FormControl>
                    <Input
                      placeholder="비밀번호 확인 입력"
                      type={showConfirmPassword ? "text" : "password"}
                      {...field}
                    />
                  </FormControl>
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    {showConfirmPassword ? <EyeClosed /> : <Eye />}
                  </button>
                </div>
                <FormDescription>동일한 비밀번호를 입력하세요.</FormDescription>
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
