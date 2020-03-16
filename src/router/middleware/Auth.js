import { authService } from "../../service/auth";

export default function auth({ next, router }) {
  if (!authService.check()) {
    return router.push({ name: "login" });
  }
  return next();
}
