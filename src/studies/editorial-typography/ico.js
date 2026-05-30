// ICO-WIREFRAME renderer — shared between editorial studies.
// Renders animated wireframe icosahedron with Electric Orange gradient edges.
function rotX(v,a){const c=Math.cos(a),s=Math.sin(a);return[v[0],v[1]*c-v[2]*s,v[1]*s+v[2]*c]}
function rotY(v,a){const c=Math.cos(a),s=Math.sin(a);return[v[0]*c+v[2]*s,v[1],-v[0]*s+v[2]*c]}
function rotZ(v,a){const c=Math.cos(a),s=Math.sin(a);return[v[0]*c-v[1]*s,v[0]*s+v[1]*c,v[2]]}
function proj(v,fov,sz){const z=v[2]+fov;const sc=fov/z;return[v[0]*sc*sz/2+sz/2,v[1]*sc*sz/2+sz/2]}
function renderWireframe(id,geo,c1,c2,speeds,fov){
  const cv=document.getElementById(id);if(!cv)return;
  const ctx=cv.getContext('2d');const sz=cv.width;fov=fov||3.5;let t0=null;
  function draw(ts){
    if(!t0)t0=ts;const el=(ts-t0)/1000;ctx.clearRect(0,0,sz,sz);
    const ax=el*speeds[0],ay=el*speeds[1],az=el*speeds[2];
    const pr=geo.vertices.map(v=>{let r=rotX(v,ax);r=rotY(r,ay);r=rotZ(r,az);return proj(r,fov,sz)});
    const dp=geo.vertices.map(v=>{let r=rotX(v,ax);r=rotY(r,ay);r=rotZ(r,az);return r[2]});
    geo.edges.forEach(([a,b])=>{
      const[x1,y1]=pr[a],[x2,y2]=pr[b];const avg=(dp[a]+dp[b])/2;
      const al=Math.min(1,Math.max(0.2,(0.3+0.7*((avg+2)/4))*0.9));
      ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);
      const g=ctx.createLinearGradient(x1,y1,x2,y2);
      g.addColorStop(0,c1);g.addColorStop(1,c2);
      ctx.strokeStyle=g;ctx.globalAlpha=al;ctx.lineWidth=1.5;ctx.stroke();
    });
    pr.forEach((p,i)=>{
      const df=0.3+0.7*((dp[i]+2)/4);
      ctx.beginPath();ctx.arc(p[0],p[1],2,0,Math.PI*2);
      ctx.fillStyle=c1;ctx.globalAlpha=Math.min(1,Math.max(0.25,df))*0.7;ctx.fill();
    });
    ctx.globalAlpha=1;requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
}
const phi=(1+Math.sqrt(5))/2,iR=1/phi/1.05;
const icoGeo={
  vertices:[[-1,phi,0],[1,phi,0],[-1,-phi,0],[1,-phi,0],[0,-1,phi],[0,1,phi],[0,-1,-phi],[0,1,-phi],[phi,0,-1],[phi,0,1],[-phi,0,-1],[-phi,0,1]].map(v=>v.map(c=>c*iR)),
  edges:[[0,11],[0,5],[0,1],[0,7],[0,10],[1,5],[5,11],[11,10],[10,7],[7,1],[3,9],[3,4],[3,2],[3,6],[3,8],[9,4],[4,2],[2,6],[6,8],[8,9],[1,9],[5,4],[11,2],[10,6],[7,8],[5,9],[4,11],[2,10],[6,7],[8,1]]
};
function initPoly(id){ renderWireframe(id, icoGeo, '#A85A30', '#A85A30', [0.06,0.1,0.07], 3.5); }
const MS_SIG_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.2 51.75"><path fill="currentColor" d="M8.15,17.67c-.11,4.77.03,9.53.42,14.28.25,3.17,1.04,6.3,1.75,9.48C12.18,49.84-.29,51.03.01,42.28.37,31.52,2.03,21.21,5.01,11.36c.43-1.42,1.65-3.48,3.25-2.21.54.42.93,1,1.17,1.72l5.79,16.92c.24.69.41.67.52-.04C16.76,21.39,18.48,15.18,20.9,9.1c2.42-6.09,7.58-4.14,9.4.92,2.78,7.72,3.72,15.26,4.54,24.1.02.19.12.21.29.06,5.16-4.21,10.49-8.2,15.97-11.98.25-.17.22-.26-.08-.27-3.62-.09-7.24-.18-10.87-.26-7.4-.16-4.36-6.16-1.1-9.15C42.34,9.67,45.46,6.8,48.59,3.94c1.41-1.29,2.61-3.41,5.09-3.82,5.9-.98,7.9,6.3,3.23,9.69-3.84,2.79-7.81,5.4-11.9,7.82-.15.09-.14.15.04.17,3.88.43,7.73.34,11.55-.27,2.22-.36,3.71-2.04,5.77-2.3,3.65-.46,6.04,3.15,4.51,6.38-.4.85-1.14,1.76-2.2,2.73-9.11,8.27-20.2,14.6-28.33,22.57-1.09,1.06-2.3,3.43-3.58,4.09-4.62,2.4-8.53-.91-8.76-5.63-.18-3.76-1.49-26.94-1.87-26.89-.1.02-.21.15-.27.33-1.47,4.3-2.51,8.71-3.14,13.22-.12.91-.44,1.73-.93,2.46-1.56,2.3-3.55-.8-4.07-2.08C9.65,26.08,7.93,21.22,6.55,16.6c-.03-.09-.07-.15-.13-.16l-.06-.01c-.03-.01-.05.01-.06.05v.01s0,0,0,0Z"/></svg>`;
