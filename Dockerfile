# bluecolorsite — static landing page (Vite+ / Rive)
# Served at https://clients.welocalhost.com/bluecolorsite
#
# Pure static bundle: no build step, no node_modules, no runtime deps.
# Single-stage nginx image keeps it small and fast to deploy on Dokploy.

FROM nginx:1.27-alpine

LABEL org.opencontainers.image.title="bluecolorsite" \
      org.opencontainers.image.description="Static landing page served under /bluecolorsite"

# our server config replaces nginx's stock default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# the static bundle (index.html + assets/) becomes the web root
COPY site/ /usr/share/nginx/html/

# 80 is correct for nginx; 3000 is Dokploy's default Container Port, and the
# server block listens on both so either setting in the domain dialog works.
EXPOSE 80 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget -q --spider http://127.0.0.1/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]
