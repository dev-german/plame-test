# Diagrama de Secuencias

```mermaid
sequenceDiagram
  participant Usuario
  participant Web
  participant API
  participant BD
  Usuario->>Web: Ingresar credenciales
  Web->>API: Validar credenciales
  API->>BD: Consultar usuario
  BD-->>API: Usuario válido
  API-->>Web: Autenticación exitosa
  Web-->>Usuario: Inicio de sesión exitoso
```
