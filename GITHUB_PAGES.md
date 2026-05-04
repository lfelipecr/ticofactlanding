# Despliegue en GitHub Pages

Esta landing page está configurada para desplegarse automáticamente en GitHub Pages.

## Configuración Requerida

### 1. Crear el repositorio en GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/factura-electronica-cr.git
git push -u origin main
```

### 2. Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Dirígete a **Settings** → **Pages**
3. En "Build and deployment":
   - **Source**: Selecciona "GitHub Actions"
   - El workflow se ejecutará automáticamente en cada push a `main`

### 3. Configurar el dominio personalizado (Opcional)

Si deseas usar un dominio personalizado como `factico.net`:

1. En **Settings** → **Pages**, ingresa tu dominio en "Custom domain"
2. Configura los registros DNS de tu dominio:
   - **CNAME** → `tu-usuario.github.io`
   - O usa **A records** si lo prefieres

### 4. Desplegar

El workflow `.github/workflows/deploy.yml` se ejecuta automáticamente cuando hagas push a la rama `main`.

```bash
git add .
git commit -m "Update landing page"
git push origin main
```

## Estructura de Compilación

- **Entrada**: `client/src/main.tsx`
- **Salida**: `dist/public/`
- **Base URL**: Configurable con `VITE_BASE_URL` (por defecto `/`)

## Notas Importantes

- El archivo `.nojekyll` está incluido para evitar que Jekyll procese los archivos
- El routing está configurado para funcionar con SPA (Single Page Application)
- Los assets estáticos se sirven desde `/manus-storage/` durante desarrollo

## Troubleshooting

Si la página no se despliega correctamente:

1. Verifica que el workflow en `.github/workflows/deploy.yml` se ejecutó sin errores
2. Comprueba que el branch `main` está protegido y tiene los permisos correctos
3. Asegúrate de que `dist/public/` contiene el archivo `index.html`

## URLs Útiles

- GitHub Pages: `https://tu-usuario.github.io/factura-electronica-cr/`
- Dominio personalizado: `https://factico.net/`
