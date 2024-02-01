"use client";
import { RecoilRoot } from "recoil";
export function CustomLayout({ children }: any) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
