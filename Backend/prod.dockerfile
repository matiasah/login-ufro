FROM maven:3.6.3-amazoncorretto-11

# Ubicarse en la carpeta del backend
WORKDIR /usr/src/backend

# Copiar todos los archivos del backend al contenedor
COPY pom.xml /usr/src/backend/pom.xml

#HEALTHCHECK --interval=30s --retries=6 --start-period=1m --timeout=30s CMD curl --silent --fail --request GET http://localhost:8080/actuator/health || exit 1

# Cargar las dependencias del backend
RUN mvn dependency:resolve 