
API REST desarrollada con **Node.js** y **Express.js** con Typescript que permite consultar el clima actual de cualquier ciudad del mundo en tiempo real.

---

## 📌 Descripción

Esta API recibe el nombre de una ciudad y devuelve información climática detallada como temperatura, viento, estado del clima y más.

Está pensada para integrarse fácilmente en aplicaciones web, móviles o dashboards.

---

## 🚀 Tecnologías utilizadas

- **Node.js**
- **Express.js**
- **API externa de clima**
- **JavaScript (ES6+)**

---

## 🔎 Endpoint

### Obtener clima por ciudad

**GET** `/api/weather?city=NombreDeLaCiudad`

#### 📥 Ejemplo de request

```bash
http://localhost:3000/api/weather?city=Buenos Aires
