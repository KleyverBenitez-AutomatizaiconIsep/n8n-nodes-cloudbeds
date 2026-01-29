# n8n-nodes-cloudbeds

![n8n.io - Workflow Automation](https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.png)

Este paquete contiene un nodo de n8n para integrarse con la **API de Cloudbeds** - el sistema de gestión hotelera (PMS) líder en la industria.

[Cloudbeds](https://www.cloudbeds.com/) es una plataforma de gestión hotelera todo-en-uno que ayuda a hoteles, hostels y propiedades de alquiler a gestionar reservas, huéspedes, habitaciones y más.

## Instalación

### En n8n (Community Nodes)

1. Ve a **Settings** → **Community Nodes**
2. Selecciona **Install**
3. Ingresa `n8n-nodes-cloudbeds`
4. Acepta los riesgos y haz clic en **Install**

### Manual

```bash
cd ~/.n8n/nodes
npm install n8n-nodes-cloudbeds
```

Reinicia n8n después de la instalación.

## Credenciales

Este nodo soporta dos métodos de autenticación:

### API Key
1. Inicia sesión en tu cuenta de Cloudbeds
2. Ve a **Settings** → **API** → **API Credentials**
3. Genera una nueva API Key
4. Copia la API Key y pégala en las credenciales de n8n

### OAuth2
1. Registra tu aplicación en el portal de desarrolladores de Cloudbeds
2. Obtén el Client ID y Client Secret
3. Configura las credenciales OAuth2 en n8n

## Recursos y Operaciones

### 📅 Reservation (Reservas)
| Operación | Descripción |
|-----------|-------------|
| Get | Obtener una reserva por ID |
| Get Many | Listar reservas con filtros |
| Create | Crear nueva reserva |
| Update | Actualizar reserva |
| Cancel | Cancelar reserva |

### 👤 Guest (Huéspedes)
| Operación | Descripción |
|-----------|-------------|
| Get | Obtener huésped por ID |
| Get Many | Listar huéspedes |
| Create | Crear nuevo huésped |
| Update | Actualizar huésped |

### 🛏️ Room (Habitaciones)
| Operación | Descripción |
|-----------|-------------|
| Get Many | Listar habitaciones |
| Get Availability | Ver disponibilidad |
| Update Status | Cambiar estado |
| Assign to Reservation | Asignar a reserva |
| Unassign from Reservation | Desasignar de reserva |

### 🏨 Property (Propiedad)
| Operación | Descripción |
|-----------|-------------|
| Get | Obtener info de propiedad |
| Get Many | Listar propiedades |

### 🧹 Housekeeping (Limpieza)
| Operación | Descripción |
|-----------|-------------|
| Get Status | Ver estado de limpieza |
| Update Status | Actualizar estado |
| Get Assignments | Ver asignaciones |

### ➕ Addon (Extras)
| Operación | Descripción |
|-----------|-------------|
| Get Many | Listar addons |
| Add to Reservation | Agregar a reserva |

### 📦 Item (Inventario)
| Operación | Descripción |
|-----------|-------------|
| Get Many | Listar artículos |
| Adjust | Ajustar cantidad |

### 📅 Event (Eventos)
| Operación | Descripción |
|-----------|-------------|
| Create | Crear evento |

### 🔐 Door Lock (Cerraduras)
| Operación | Descripción |
|-----------|-------------|
| Create Key | Crear llave digital |
| Get Keys | Listar llaves |
| Update Key | Actualizar llave |
| Delete Key | Eliminar llave |
| Delete Multiple Keys | Eliminar múltiples llaves |
| Get Settings | Obtener configuración |
| Upsert Settings | Crear/actualizar config |
| Delete Settings | Eliminar configuración |

### 📊 Market Segmentation
| Operación | Descripción |
|-----------|-------------|
| Get Many | Listar segmentos |

### 🔗 Integration Event
| Operación | Descripción |
|-----------|-------------|
| Create | Crear evento de integración |

## Ejemplo de Uso

### Obtener reservas del día

1. Agrega el nodo **Cloudbeds**
2. Selecciona recurso: **Reservation**
3. Selecciona operación: **Get Many**
4. Configura filtros de fecha

### Automatizar check-in

```
Webhook → Cloudbeds (Get Reservation) → Cloudbeds (Assign Room) → Email
```

## Compatibilidad

- **n8n versión**: 1.0.0 o superior
- **API de Cloudbeds**: v1.3

## Documentación

- [Documentación de la API de Cloudbeds](https://hotels.cloudbeds.com/api/docs/)
- [Documentación de n8n](https://docs.n8n.io/)

## Autor

**Kleyver Benitez**
- Email: kaleb9821@gmail.com
- GitHub: [@KleyverBenitez-AutomatizaiconIsep](https://github.com/KleyverBenitez-AutomatizaiconIsep)

## Licencia

[MIT](LICENSE.md)

## Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request en el repositorio de GitHub.

---

**¿Problemas o sugerencias?** Abre un [issue en GitHub](https://github.com/KleyverBenitez-AutomatizaiconIsep/n8n-nodes-cloudbeds/issues)
