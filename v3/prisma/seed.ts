import { PrismaClient, PlanCode } from "@prisma/client";
const db=new PrismaClient();
async function main(){
 const plans=[
  {code:PlanCode.DAY,name:"1 Day",priceUgx:1000,durationDays:1},
  {code:PlanCode.WEEK,name:"1 Week",priceUgx:5000,durationDays:7},
  {code:PlanCode.MONTH,name:"1 Month",priceUgx:20000,durationDays:30},
  {code:PlanCode.TRIAL,name:"5-Day Trial",priceUgx:0,durationDays:5}
 ];
 for(const p of plans) await db.plan.upsert({where:{code:p.code},update:p,create:p});
 console.log("Plans seeded. Create the first admin securely before production.");
}
main().finally(()=>db.$disconnect());
