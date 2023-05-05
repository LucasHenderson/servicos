# Define a imagem base do Docker
FROM openjdk:17-jdk-slim

# Define o diretório de trabalho do Docker
WORKDIR /app

# Copia os arquivos do projeto Spring Boot para o diretório de trabalho
COPY . .

# Define a porta que o aplicativo irá ouvir
EXPOSE 8080

# Define o comando para iniciar o aplicativo Spring Boot
CMD ["java", "-jar", "./target/produto-0.0.1-SNAPSHOT.jar"]
