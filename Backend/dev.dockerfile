# Debian 10
FROM debian:10

# Corretto 11
COPY --from=amazoncorretto:11 / /

# Maven
COPY --from=maven:3.6.3 / /