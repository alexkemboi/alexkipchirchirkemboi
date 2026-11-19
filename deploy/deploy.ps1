# Builds and redeploys the site on the server. Run from anywhere: .\deploy\deploy.ps1
$ErrorActionPreference = 'Stop'

$Server = 'root@203.161.50.249'
$Key = "$HOME\.ssh\ikonet_vps"
$RemoteDir = '/opt/alexkemboi-dev'
$ProjectRoot = Split-Path -Parent $PSScriptRoot
$Archive = Join-Path $env:TEMP 'alexkemboi-dev.tgz'

# PowerShell 5.1 corrupts binary data in pipes, so archive to a file and scp it.
Write-Host 'Packaging...'
tar.exe --exclude=./node_modules --exclude=./.next --exclude=./.git -czf $Archive -C $ProjectRoot .
if ($LASTEXITCODE -ne 0) { throw 'tar failed' }

Write-Host 'Uploading...'
scp.exe -i $Key -o IdentitiesOnly=yes $Archive "${Server}:/tmp/alexkemboi-dev.tgz"
if ($LASTEXITCODE -ne 0) { throw 'scp failed' }

Write-Host 'Building and restarting...'
ssh.exe -i $Key -o IdentitiesOnly=yes $Server "cd $RemoteDir && tar xzf /tmp/alexkemboi-dev.tgz && rm /tmp/alexkemboi-dev.tgz && docker compose up -d --build && docker image prune -f"
if ($LASTEXITCODE -ne 0) { throw 'remote build failed' }

Remove-Item $Archive -ErrorAction SilentlyContinue
Write-Host 'Deployed: https://alexkemboi.dev'
