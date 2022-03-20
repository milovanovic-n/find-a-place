import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import CredentialsProvider from "next-auth/providers/credentials"
//import EmailProvider from "next-auth/providers/email"
import { verifyPassword } from "../../../utils/verifyPassword"
import dbConnect from "../../../utils/dbConnect"

export default NextAuth({
  NEXTAUTH_SECRET: process.env.SECRET,
  session: {
    strategy: "jwt"
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),
    CredentialsProvider({
      async authorize(credentials) {
        const {db} = await dbConnect();

        const usersCollection = await db.collection("users");
        const user = await usersCollection.findOne({
          email: credentials.email
        })

        if(!user) {
          db.close();
          throw new Error("User not found!");
        }

        const isValid = await verifyPassword(credentials.password, user.password);

        if(!isValid) {
          db.close();
          throw new Error("Could not log you in!")
        }

        db.close();
        return {email: user.email}
      }
    })
    // Sign in with passwordless email link
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: "<no-reply@example.com>",
    // }),
  ],
  pages: {
    signIn: "/login"
  },
  secret: "next auth secret",
  database: process.env.MONGO_URI
})