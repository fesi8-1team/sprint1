"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DateTimePickerForm } from "@/components/common/DateTimePickerForm";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  groupName: z.string().min(1, "모임 이름을 입력해주세요"),
  groupLocation: z.string().min(1, "장소를 선택해주세요"),
  groupHeadcount: z.string().min(1, "모집 정원을 입력해주세요"),
  meetingTime: z.date({
    required_error: "모임 시작 시간을 선택해주세요",
  }),
});

export default function Recruit() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      groupName: "",
      groupLocation: "",
      groupHeadcount: "",
      meetingTime: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    alert(JSON.stringify(values, null, 2));
    console.log(values);
  }

  return (
    <div className="mx-auto bg-white py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">모임 만들기</h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="groupName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>모임 이름</FormLabel>
                <FormControl>
                  <Input placeholder="모임 이름을 작성해주세요" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="groupLocation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>장소</FormLabel>
                <FormControl>
                  <Input placeholder="장소를 입력해주세요." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="groupHeadcount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>모집 정원</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="최소 5인 이상 입력해주세요"
                    {...field}
                    className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          // Update the FormField for meeting time
          <FormField
            control={form.control}
            name="meetingTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>모임 시작일</FormLabel>
                <FormControl>
                  <DateTimePickerForm
                    date={field.value}
                    onDateChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="mt-6 flex justify-end">
            <Button type="submit">저장하기</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
