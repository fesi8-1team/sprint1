"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function AddGroupButtonModal() {
  let [groupName, setGroupName] = useState("");
  let [groupLocation, setGroupLocation] = useState("");
  let [groupImage, setGroupImage] = useState("");
  let [groupHeadcount, setGroupHeadcount] = useState("");

  const handleSubmit = function () {};

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="ml-auto">
          모임 만들기
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>모임 만들기</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="flex w-full flex-col gap-4">
            <div>
              <Label htmlFor="groupName" className="mb-2">
                모임 이름
              </Label>
              <Input
                id="name"
                value={groupName}
                onChange={(e) => {
                  setGroupName(e.currentTarget.value);
                }}
                className="w-full"
                placeholder="모임 이름을 작성해주세요."
              />
            </div>

            <div>
              <Label htmlFor="groupName" className="mb-2">
                장소
              </Label>
              <Input
                id="location"
                type="select"
                value={groupLocation}
                onChange={(e) => {
                  setGroupLocation(e.currentTarget.value);
                }}
                className="w-full"
                placeholder="장소를 선택해주세요."
              />
            </div>

            <div>
              <Label htmlFor="groupName" className="mb-2">
                이미지
              </Label>
              <div className="flex flex-row gap-4">
                <Input
                  id="fileName"
                  value={groupImage}
                  placeholder="이미지를 첨부해주세요."
                  className="w-3/4"
                  readOnly
                />
                <div className="relative w-1/4">
                  <Input
                    id="fileInput"
                    type="file"
                    onChange={(e) => {
                      setGroupImage(e.currentTarget.value);
                    }}
                    className="absolute inset-0 w-full cursor-pointer opacity-0"
                    accept="image/*"
                  />
                  <Button type="button" className="w-full">
                    파일 선택
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <Label htmlFor="headCount" className="mb-2">
                모집 정원
              </Label>
              <Input
                id="headCount"
                value={groupHeadcount}
                type="number"
                onChange={(e) => {
                  setGroupHeadcount(e.currentTarget.value);
                }}
                className="w-full [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                placeholder="최소 5인 이상 입력해주세요"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              onClick={() => {
                handleSubmit();
              }}
            >
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
