import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    // ...add more providers here
  ],
  callbacks: {
  	async signIn(user, account, profile) {
  		console.log("sign in")
  		console.log(account)
    const isAllowedToSignIn = true
    return true
  },
  	async jwt(token, user, account, profile, isNewUser) {
	    // Add access_token to the token right after signin
	    if (account?.accessToken) {
	      token.accessToken = account.accessToken
	    }
	    return token
	  },
  	async session(session, token) {
	    // Add property to session, like an access_token from a provider.
	    session.accessToken = token.accessToken
	    console.log("session callback")
	    console.log(session)
	    return session
  	}
  }
})