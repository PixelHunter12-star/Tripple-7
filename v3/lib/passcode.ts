import crypto from "crypto";
import bcrypt from "bcryptjs";
export function makePasscode(){const a="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let s="";for(let i=0;i<8;i++)s+=a[crypto.randomInt(a.length)];return s}
export const hashPasscode=(s:string)=>bcrypt.hash(s,12);
export const verifyPasscode=(s:string,h:string)=>bcrypt.compare(s,h);
export const randomToken=()=>crypto.randomBytes(32).toString("hex");
export const hashToken=(s:string)=>crypto.createHash("sha256").update(s).digest("hex");
