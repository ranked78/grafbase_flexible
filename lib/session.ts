import {  getServerSession  } from 'next-auth/next';
import {NextAuthOptions,User} from 'next-auth';
import { AdapterUser } from "../node_modules/next-auth/src/adapters";
import GoogleProvider from 'next-auth/providers/google';
import jsonwebtoken from 'jsonwebtoken';
import {JWT} from 'next-auth/jwt';


export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
      ],
      jwt:{
        encode: ({secret, token})=>{

        },
        decode: async ()=>{
            
        }
      },
      theme: {
        colorScheme: 'light',
        logo: '/logo.png'
      },
      callbacks:{
        async session({session}){

        },
        async signIn({user}){
            
        }
      }
}