interface Token {
    accessToken: string;
    expiresIn: string;
    userId: string;
    state: string | null;
}

export default Token;