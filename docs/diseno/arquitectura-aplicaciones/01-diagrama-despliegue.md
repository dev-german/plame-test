# Diagrama de Despliegue

```mermaid
graph TD;
  Cliente -->|HTTPS| ServidorWeb;
  ServidorWeb -->|API| MicroservicioAutenticacion;
  ServidorWeb -->|API| MicroservicioTransferencias;
  MicroservicioAutenticacion -->|Query| BaseDeDatos;
  MicroservicioTransferencias -->|Query| BaseDeDatos;
```
