// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId:
        "827096498155-g7uoigrgid0j976a3oa6ua6h66aupntp.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  secret: "ZTeDUFz8bv7c2GSkG9L5iQ4SoIerL9Qt0flffETbF2M=",
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
