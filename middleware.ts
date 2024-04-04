import { authMiddleware } from "@clerk/nextjs";
// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// const protectedRoutes = createRouteMatcher([
//   "./",
//   "/upcoming",
//   "/previous",
//   "recordings",
//   "personal-room",
//   "/meeting(.*)",
// ]);

export default authMiddleware();

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"],
};
