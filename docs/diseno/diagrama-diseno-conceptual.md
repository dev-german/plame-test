# Diseño Conceptual

```mermaid
graph TD;
  Cliente -->|Inicia sesión| Autenticacion;
  Autenticacion -->|Verifica credenciales| BaseDeDatos;
  Cliente -->|Solicita transferencia| Transferencias;
  Transferencias -->|Procesa operación| BaseDeDatos;
  BaseDeDatos -->|Actualiza saldo| Cuentas;
  Cliente -->|Consulta saldo| Cuentas;
```
