FROM balenalib/raspberrypi3-64-dotnet:3.1-sdk as build
WORKDIR /app

COPY ./*.csproj .
RUN dotnet restore

COPY . ./
RUN dotnet publish -c Debug -o out

FROM balenalib/raspberrypi3-64-dotnet:3.1-aspnet-run
WORKDIR /app
COPY --from=build /app/out .
ENTRYPOINT  ["dotnet", "balenaLocatingDashboard.dll"]