"use strict";(()=>{var e={};e.id=7419,e.ids=[7419],e.modules={72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},6005:e=>{e.exports=require("node:crypto")},72399:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>f,patchFetch:()=>h,requestAsyncStorage:()=>c,routeModule:()=>d,serverHooks:()=>_,staticGenerationAsyncStorage:()=>g});var o={};r.r(o),r.d(o,{POST:()=>p});var n=r(7849),s=r(94966),i=r(79169),a=r(1237),l=r(99549),u=r(18195);async function p(e,{params:t}){let{orgId:r,tourId:o}=await t,n=await (0,l.y)(r,"editor");if(n instanceof a.NextResponse)return n;let{supabase:s}=n,{data:i,error:p}=await s.from("tours").update({status:"published"}).eq("id",o).eq("org_id",r).select().single();if(p||!i)return a.NextResponse.json({error:"Tour not found"},{status:404});let{data:{user:d}}=await s.auth.getUser();return d?.email&&(0,u.J2)({to:d.email,tourTitle:i.title,tourSlug:i.slug}).catch(()=>{}),a.NextResponse.json(i)}let d=new n.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/orgs/[orgId]/tours/[tourId]/publish/route",pathname:"/api/orgs/[orgId]/tours/[tourId]/publish",filename:"route",bundlePath:"app/api/orgs/[orgId]/tours/[tourId]/publish/route"},resolvedPagePath:"D:\\Coding-Files\\GitHub\\cloudtour-monorepo\\apps\\web\\src\\app\\api\\orgs\\[orgId]\\tours\\[tourId]\\publish\\route.ts",nextConfigOutput:"",userland:o}),{requestAsyncStorage:c,staticGenerationAsyncStorage:g,serverHooks:_}=d,f="/api/orgs/[orgId]/tours/[tourId]/publish/route";function h(){return(0,i.patchFetch)({serverHooks:_,staticGenerationAsyncStorage:g})}},99549:(e,t,r)=>{r.d(t,{l:()=>a,y:()=>i});var o=r(1237),n=r(72691);let s={viewer:0,editor:1,admin:2,owner:3};async function i(e,t){let r=await (0,n.lx)(),{data:{user:i},error:a}=await r.auth.getUser();if(a||!i)return o.NextResponse.json({error:"Unauthorized"},{status:401});let{data:l,error:u}=await r.from("org_members").select("role, org_id").eq("org_id",e).eq("user_id",i.id).single();if(u||!l)return o.NextResponse.json({error:"Forbidden"},{status:403});let p=l.role;if(s[p]<s[t])return o.NextResponse.json({error:"Forbidden"},{status:403});let{data:d,error:c}=await r.from("organizations").select("plan").eq("id",e).single();return c||!d?o.NextResponse.json({error:"Organization not found"},{status:404}):{supabase:r,userId:i.id,orgId:e,role:p,plan:d.plan}}function a(e){let t=e.trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/-{2,}/g,"-").replace(/^-|-$/g,"");return t||(t="tour"),t}},18195:(e,t,r)=>{r.d(t,{J2:()=>p,sI:()=>d});var o=r(74046);let n=null;function s(){return n||(n=new o.R(process.env.RESEND_API_KEY)),n}let i=process.env.NEXT_PUBLIC_APP_URL??"http://localhost:3000",a="CloudTour <noreply@cloudtour.app>";function l(e){return`
    <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 20px; background-color: #f8f6f3;">
      ${e}
      <hr style="border: none; border-top: 1px solid #e5e0db; margin: 32px 0;" />
      <p style="color: #8a8580; font-size: 12px;">
        CloudTour &mdash; Spatial tours for the places worth remembering.
      </p>
    </div>
  `}function u(e,t){return`
    <div style="margin: 32px 0; text-align: center;">
      <a href="${t}"
         style="display: inline-block; padding: 12px 32px; background-color: #2b2d7a; color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 16px; font-weight: 500;">
        ${e}
      </a>
    </div>
  `}async function p({to:e,tourTitle:t,tourSlug:r}){let o=`${i}/tours/${r}`;await s().emails.send({from:a,to:e,subject:`Your tour "${t}" is now live!`,html:l(`
      <h1 style="color: #3a3530; font-size: 24px; margin-bottom: 16px;">
        Your tour is live!
      </h1>
      <p style="color: #5a5550; font-size: 16px; line-height: 1.6;">
        <strong>${t}</strong> has been published and is now available for everyone to explore.
      </p>
      <p style="color: #5a5550; font-size: 16px; line-height: 1.6;">
        Share the link with your audience or embed it on your website.
      </p>
      ${u("View Your Tour",o)}
      <p style="color: #8a8580; font-size: 14px; line-height: 1.5;">
        You can manage your tour from the <a href="${i}/dashboard" style="color: #2b2d7a;">dashboard</a>.
      </p>
    `)})}async function d({to:e,orgName:t,inviteToken:r,role:o}){let n=`${i}/invite/${r}`;await s().emails.send({from:a,to:e,subject:`You've been invited to join ${t} on CloudTour`,html:l(`
      <h1 style="color: #3a3530; font-size: 24px; margin-bottom: 16px;">
        Join ${t} on CloudTour
      </h1>
      <p style="color: #5a5550; font-size: 16px; line-height: 1.6;">
        You've been invited to join <strong>${t}</strong> as a <strong>${o}</strong>.
      </p>
      <p style="color: #5a5550; font-size: 16px; line-height: 1.6;">
        CloudTour is a platform for creating immersive 3D virtual tours using Gaussian splatting technology.
      </p>
      ${u("Accept Invitation",n)}
      <p style="color: #8a8580; font-size: 14px; line-height: 1.5;">
        If you didn't expect this invitation, you can safely ignore this email.
      </p>
    `)})}},72691:(e,t,r)=>{r.d(t,{lx:()=>l,mq:()=>p});var o=r(1544),n=r(2559);let s=n.Ryn({NEXT_PUBLIC_SUPABASE_URL:n.Z_8().url(),NEXT_PUBLIC_SUPABASE_ANON_KEY:n.Z_8().min(1)}),i=s.extend({SUPABASE_SERVICE_ROLE_KEY:n.Z_8().min(1)});var a=r(23865);async function l(){let e=function(){let e=s.safeParse({NEXT_PUBLIC_SUPABASE_URL:process.env.NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_ANON_KEY:process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY});if(!e.success)throw Error(`Missing or invalid Supabase environment variables:
${e.error.issues.map(e=>`  - ${e.path.join(".")}: ${e.message}`).join("\n")}`);return e.data}(),t=await (0,a.cookies)();return(0,o.createServerClient)(e.NEXT_PUBLIC_SUPABASE_URL,e.NEXT_PUBLIC_SUPABASE_ANON_KEY,{cookies:{getAll:()=>t.getAll(),setAll(e){try{for(let{name:r,value:o,options:n}of e)t.set(r,o,n)}catch{}}}})}var u=r(26385);function p(){let e=function(){let e=i.safeParse({NEXT_PUBLIC_SUPABASE_URL:process.env.NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_ANON_KEY:process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,SUPABASE_SERVICE_ROLE_KEY:process.env.SUPABASE_SERVICE_ROLE_KEY});if(!e.success)throw Error(`Missing or invalid Supabase server environment variables:
${e.error.issues.map(e=>`  - ${e.path.join(".")}: ${e.message}`).join("\n")}`);return e.data}();return(0,u.eI)(e.NEXT_PUBLIC_SUPABASE_URL,e.SUPABASE_SERVICE_ROLE_KEY,{auth:{autoRefreshToken:!1,persistSession:!1}})}}};var t=require("../../../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[3867,5833,5444,4046],()=>r(72399));module.exports=o})();