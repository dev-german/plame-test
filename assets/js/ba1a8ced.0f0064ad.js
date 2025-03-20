"use strict";(self.webpackChunkdocu_test=self.webpackChunkdocu_test||[]).push([[9762],{6091:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>t});const s=JSON.parse('{"id":"analisis/casos-uso/Atencion_Cliente_Soporte/Reclamaciones_y_disputas_de_transacciones","title":"Reclamaciones y disputas de transacciones","description":"Descripci\xf3n","source":"@site/docs/analisis/casos-uso/Atencion_Cliente_Soporte/03_Reclamaciones_y_disputas_de_transacciones.md","sourceDirName":"analisis/casos-uso/Atencion_Cliente_Soporte","slug":"/analisis/casos-uso/Atencion_Cliente_Soporte/Reclamaciones_y_disputas_de_transacciones","permalink":"/docs/analisis/casos-uso/Atencion_Cliente_Soporte/Reclamaciones_y_disputas_de_transacciones","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/analisis/casos-uso/Atencion_Cliente_Soporte/03_Reclamaciones_y_disputas_de_transacciones.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Solicitud de asistencia telef\xf3nica","permalink":"/docs/analisis/casos-uso/Atencion_Cliente_Soporte/Solicitud_de_asistencia_telef\xf3nica"},"next":{"title":"Seguimiento de solicitudes","permalink":"/docs/analisis/casos-uso/Atencion_Cliente_Soporte/Seguimiento_de_solicitudes"}}');var a=i(4848),c=i(8453);const o={},l="Reclamaciones y disputas de transacciones",r={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Actores",id:"actores",level:2},{value:"Precondiciones",id:"precondiciones",level:2},{value:"Flujo Principal",id:"flujo-principal",level:2},{value:"Excepciones",id:"excepciones",level:2},{value:"Postcondiciones",id:"postcondiciones",level:2},{value:"Requerimientos Relacionados",id:"requerimientos-relacionados",level:2},{value:"Diagrama",id:"diagrama",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"reclamaciones-y-disputas-de-transacciones",children:"Reclamaciones y disputas de transacciones"})}),"\n",(0,a.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsx)(n.p,{children:"Este caso de uso describe el proceso de reclamaciones y disputas de transacciones dentro del sistema bancario."}),"\n",(0,a.jsx)(n.h2,{id:"actores",children:"Actores"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Usuario"}),"\n",(0,a.jsx)(n.li,{children:"Sistema Bancario"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"precondiciones",children:"Precondiciones"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"El usuario debe estar registrado en el sistema."}),"\n",(0,a.jsx)(n.li,{children:"La conexi\xf3n a Internet debe estar disponible."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"flujo-principal",children:"Flujo Principal"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"El usuario accede a la aplicaci\xf3n."}),"\n",(0,a.jsx)(n.li,{children:"Selecciona la opci\xf3n correspondiente a reclamaciones y disputas de transacciones."}),"\n",(0,a.jsx)(n.li,{children:"Ingresa la informaci\xf3n requerida."}),"\n",(0,a.jsx)(n.li,{children:"El sistema valida la informaci\xf3n y procesa la solicitud."}),"\n",(0,a.jsx)(n.li,{children:"Se muestra la confirmaci\xf3n de la operaci\xf3n al usuario."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"excepciones",children:"Excepciones"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"El usuario ingresa datos incorrectos."}),"\n",(0,a.jsx)(n.li,{children:"El sistema no puede procesar la solicitud debido a una falla t\xe9cnica."}),"\n",(0,a.jsx)(n.li,{children:"La cuenta del usuario est\xe1 bloqueada."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"postcondiciones",children:"Postcondiciones"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Se guarda un registro de la operaci\xf3n en el historial del usuario."}),"\n",(0,a.jsx)(n.li,{children:"Se notifica al usuario en caso de \xe9xito o error."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"requerimientos-relacionados",children:"Requerimientos Relacionados"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"RF-33"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"diagrama",children:"Diagrama"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plantuml",children:"@startuml\nclass Cliente {\n  - nombre: string\n  + abrirCuenta(): CuentaBancaria\n}\n\nclass CuentaBancaria {\n  - saldo: double\n  + depositar(monto: double): void\n  + retirar(monto: double): boolean\n}\n\nCliente --\x3e CuentaBancaria\n@enduml\n"})})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var s=i(6540);const a={},c=s.createContext(a);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);