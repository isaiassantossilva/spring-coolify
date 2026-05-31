# Deploy da imagem em um registry

## Login no registry
```bash
docker login registry.lunalive.net
```

## Taguear a imagem
```bash
docker tag <nome-da-imagem>:<tag> registry.lunalive.net/<nome-da-imagem>:<tag>
```

## Fazer o push
```bash
docker push registry.example.net/<nome-da-imagem>:<tag>
```

## Listar imagens
```bash
curl -u usuario:senha https://registry.example.net/v2/_catalog
```