export class User {
	constructor(
		public username: string,
		public email: string,
		public alternateEmails: string[],
		public password: string,
		public confirmPassword: string,
		public address: {
			city: string,
			state: string,
			country: string
		},
		public subscribe: boolean
	){}
}
