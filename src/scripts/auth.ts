import { decodeToken } from "../services/jsonwebtoken";

type Session = {
  id: string;
};
type GetSession = (req: Request) => Session | null;
export const getSession: GetSession = (req) => {
  const cookie = req.headers.get("cookie");

  if (!cookie) return null;

  const decodedToken = decodeToken(cookie);

  if (!decodedToken) return null;

  return decodedToken as { id: string };
};
