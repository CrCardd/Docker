FROM mcr.microsoft.com/dotnet/sdk:7.0
WORKDIR /app

ENV HTTP_PROXY="host.docker.internal:3128"
ENV HTTPS_PROXY="host.docker.internal:3128"

ENV ASPNETCORE_ENVIRONMENT=Development

COPY ./Pointer ./
RUN dotnet restore

EXPOSE 5000
