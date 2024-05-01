import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";
// const multer = require("multer");
export default clerkMiddleware();
export function middleware(request: NextRequest) {}
export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
