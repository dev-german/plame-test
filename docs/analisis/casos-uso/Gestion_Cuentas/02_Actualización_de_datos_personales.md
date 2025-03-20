# Actualización de datos personales

## Descripción

Este caso de uso describe el proceso de actualización de datos personales dentro del sistema bancario.

## Actores

- Usuario
- Sistema Bancario

## Precondiciones

- El usuario debe estar registrado en el sistema.
- La conexión a Internet debe estar disponible.

## Flujo Principal

1. El usuario accede a la aplicación.
2. Selecciona la opción correspondiente a actualización de datos personales.
3. Ingresa la información requerida.
4. El sistema valida la información y procesa la solicitud.
5. Se muestra la confirmación de la operación al usuario.

## Excepciones

- El usuario ingresa datos incorrectos.
- El sistema no puede procesar la solicitud debido a una falla técnica.
- La cuenta del usuario está bloqueada.

## Postcondiciones

- Se guarda un registro de la operación en el historial del usuario.
- Se notifica al usuario en caso de éxito o error.

## Requerimientos Relacionados

- RF-22
