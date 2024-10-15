import jwt from 'jsonwebtoken'

type DecodeToken = (token:string) => jwt.JwtPayload | null
export const decodeToken: DecodeToken = (token) => jwt.decode(token, { json: true })

type SignToken = (payload: string) => string
export const signToken: SignToken = (payload) => jwt.sign(JSON.stringify(payload), import.meta.env.SECRET_JWT)