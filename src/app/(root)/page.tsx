"use client";
import { useSelector } from "react-redux";
import { selectCurrentToken, selectCurrentUser } from "@/features/auth/auth";
import { RequireAuth } from "../(auth)/_components/requireAuth";

const Home = () => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);

  return (
    <section>
      <p>user</p>
      <p>{token}</p>
    </section>
  );
};

export default RequireAuth(Home);
