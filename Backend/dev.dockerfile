# Debian 10.5
FROM debian:10.5

# Maven 3.6.3 + Corretto 11
COPY --from=maven:3.6.3-amazoncorretto-11 / /

# Healthcheck
HEALTHCHECK --interval=30s --retries=6 --start-period=1m --timeout=30s CMD curl --silent --fail --request GET http://localhost:8080/actuator/health || exit 1

# Ejecutar aplicación
CMD /bin/sh -c "mvn spring-boot:run -Dspring-boot.run.profiles=dev && exit 1"
