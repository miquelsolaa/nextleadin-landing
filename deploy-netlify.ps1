param(
    [Parameter(Mandatory=$true)]
    [string]$Domini
)

Write-Host "Desplegant projecte Next.js optimitzat a Netlify: $Domini" -ForegroundColor Green

# Verificar versió de Node (informatiu)
try {
    $nodeVersion = node -v
    Write-Host "Node version: $nodeVersion" -ForegroundColor Cyan
} catch {
    Write-Host "Node no detectat" -ForegroundColor Yellow
}

# Verificar que pnpm està instal·lat
if (-not (Get-Command "pnpm" -ErrorAction SilentlyContinue)) {
    Write-Host "Error: pnpm no està instal·lat. Instal·la pnpm primer." -ForegroundColor Red
    Write-Host "npm install -g pnpm" -ForegroundColor Yellow
    exit 1
}

# Verificar que netlify CLI està instal·lat
if (-not (Get-Command "netlify" -ErrorAction SilentlyContinue)) {
    Write-Host "Error: netlify CLI no està instal·lat. Instal·la'l primer." -ForegroundColor Red
    Write-Host "npm install -g netlify-cli" -ForegroundColor Yellow
    exit 1
}


# Netejar builds anteriors
Write-Host "Netejant builds anteriors..." -ForegroundColor Yellow
if (Test-Path ".next") { Remove-Item ".next" -Recurse -Force }
if (Test-Path "out") { Remove-Item "out" -Recurse -Force }
if (Test-Path ".netlify") { Remove-Item ".netlify" -Recurse -Force }

# Instal·lar dependències
Write-Host "Instal·lant dependències..." -ForegroundColor Yellow
pnpm install

if ($LASTEXITCODE -ne 0) {
    Write-Host "Error instal·lant dependències" -ForegroundColor Red
    exit 1
}

# Construir el projecte (export estàtic)
Write-Host "Construint projecte (export estàtic)..." -ForegroundColor Yellow
pnpm build
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error en la construcció del projecte" -ForegroundColor Red
    exit 1
}

# Inicialitzar projecte a Netlify si no existeix
if (-not (Test-Path ".netlify")) {
    Write-Host "Creant projecte nou a Netlify..." -ForegroundColor Yellow
    netlify init --manual
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Error al crear el projecte a Netlify" -ForegroundColor Red
        exit 1
    }
}

# Vincular amb el domini especificat
Write-Host "Vinculant amb domini: $Domini" -ForegroundColor Yellow
netlify link --name $Domini

if ($LASTEXITCODE -ne 0) {
    Write-Host "Error al vincular el domini" -ForegroundColor Red
    exit 1
}

# Desplegar a producció (fitxers estàtics)
Write-Host "Desplegant a producció (fitxers estàtics)..." -ForegroundColor Green
netlify deploy --prod --dir=out --message "Release" 

if ($LASTEXITCODE -eq 0) {
    Write-Host "Projecte desplegat amb èxit!" -ForegroundColor Green
    Write-Host "URL: https://$Domini.netlify.app" -ForegroundColor Cyan
} else {
    Write-Host "Error en el desplegament" -ForegroundColor Red
}
